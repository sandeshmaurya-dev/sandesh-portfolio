var e=`#version 300 es
precision highp float;
#ifndef GLASS_OPTICS_GLSL
#define GLASS_OPTICS_GLSL
float indexAt(vec2 cauchy, float nanometers) {
float micrometers = nanometers * 0.001;
return cauchy.x + cauchy.y / (micrometers * micrometers);
}
float reflectance(float cosine, float eta) {
float c = clamp(cosine, 0.0, 1.0);
float sine = sqrt(max(1.0 - c * c, 0.0)) * eta;
if (sine >= 1.0) return 1.0;
float t = sqrt(1.0 - sine * sine);
float s = (eta * c - t) / (eta * c + t);
float p = (c - eta * t) / (c + eta * t);
return 0.5 * (s * s + p * p);
}
struct Path {
bool through;
vec2 at;
float carried;
float span;
vec3 normal;
float facing;
};
Path traceSphere(vec3 origin, vec3 direction, float radius, float height, float index) {
Path path;
path.through = false;
path.at = origin.xy - direction.xy * (origin.z / direction.z);
path.carried = 1.0;
path.span = 0.0;
path.normal = vec3(0.0, 0.0, 1.0);
path.facing = 1.0;
vec3 o = origin - vec3(0.0, 0.0, height);
float b = dot(o, direction);
float c = dot(o, o) - radius * radius;
float discriminant = b * b - c;
if (discriminant <= 0.0) return path;
vec3 entry = o + direction * (-b - sqrt(discriminant));
if (entry.z + height < 0.0) return path;
vec3 normal = entry / radius;
float facing = -dot(normal, direction);
vec3 inside = refract(direction, normal, 1.0 / index);
path.normal = normal;
path.facing = facing;
path.through = true;
path.carried = 1.0 - reflectance(facing, 1.0 / index);
float across = -2.0 * dot(entry, inside);
float toSheet = inside.z < 0.0 ? -(entry.z + height) / inside.z : 1e9;
if (toSheet <= across) {
path.at = entry.xy + inside.xy * toSheet;
path.span = toSheet;
return path;
}
vec3 exit = entry + inside * across;
vec3 outward = exit / radius;
vec3 leaving = refract(inside, -outward, index);
path.carried *= 1.0 - reflectance(dot(outward, inside), index);
path.span = across;
if (leaving.z >= -1e-4) {
path.through = false;
path.carried = 0.0;
path.at = exit.xy;
return path;
}
path.at = exit.xy + leaving.xy * (-(exit.z + height) / leaving.z);
return path;
}
float outline(float phi, vec4 amplitudes, vec4 phases) {
return 1.0 + dot(amplitudes, cos(vec4(2.0, 3.0, 4.0, 5.0) * phi - phases));
}
vec3 toLinear(vec3 c) {
return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}
vec3 toDisplay(vec3 c) {
return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}
#endif
uniform vec4 uDrop;
uniform vec4 uModes;
uniform vec4 uPhases;
uniform vec4 uSun;
uniform vec4 uRegion;
uniform vec4 uMedium;
uniform vec4 uBands;
uniform vec4 uLattice;
layout(location = 0) in float aVertex;
out vec2 vLattice;
out float vCarried;
out float vThrough;
flat out int vBand;
const ivec2 CORNERS[6] = ivec2[6](
ivec2(0, 0), ivec2(1, 0), ivec2(0, 1),
ivec2(1, 0), ivec2(1, 1), ivec2(0, 1)
);
void main() {
int vertex = int(aVertex);
int cell = vertex / 6;
ivec2 corner = ivec2(cell % CELLS, cell / CELLS) + CORNERS[vertex % 6];
vec2 square = vec2(corner) / float(CELLS) * 2.0 - 1.0;
vLattice = square;
vBand = gl_InstanceID;
vec3 sun = uSun.xyz;
vec3 across = normalize(cross(vec3(0.0, 0.0, 1.0), sun) + vec3(1e-6, 0.0, 0.0));
vec3 up = cross(sun, across);
float radius = uDrop.x;
float height = uDrop.y;
vec2 beam = mix(uLattice.xz, uLattice.yw, square * 0.5 + 0.5);
vec3 origin = vec3(0.0, 0.0, height) + across * beam.x + up * beam.y + sun * (2.0 * radius);
float index = 1.0 + (indexAt(uMedium.xy, uBands[gl_InstanceID]) - 1.0) * uDrop.w;
Path path = traceSphere(origin, -sun, radius, height, index);
vCarried = path.through ? path.carried * exp(-uDrop.z * path.span) : 0.0;
vec2 at = path.at * outline(atan(path.at.y, path.at.x), uModes, uPhases);
vec2 uv = (at - uRegion.xy) / (2.0 * uRegion.z) + 0.5;
bool near = all(greaterThan(uv, vec2(-0.25))) && all(lessThan(uv, vec2(1.25)));
vThrough = path.through && near ? 1.0 : 0.0;
gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}`;export{e as default};