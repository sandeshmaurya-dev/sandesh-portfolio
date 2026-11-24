var e=`#version 300 es
precision highp float;
precision highp int;
#ifndef CORE_GLSL
#define CORE_GLSL
const float PI = 3.14159265359;
const float TAU = 6.28318530718;
uint hashUint(uint x) {
x ^= x >> 16;
x *= 0x21f0aaadu;
x ^= x >> 15;
x *= 0xd35a2d97u;
x ^= x >> 15;
return x;
}
float hash11(uvec3 key) {
return float(hashUint(key.x ^ hashUint(key.y ^ hashUint(key.z)))) / 4294967296.0;
}
float interleavedGradientNoise(vec2 position) {
return fract(52.9829189 * fract(dot(position, vec2(0.06711056, 0.00583715))));
}
mat2 rot2(float a) {
float s = sin(a);
float c = cos(a);
return mat2(c, -s, s, c);
}
float luminance(vec3 color) {
return dot(color, vec3(0.2126, 0.7152, 0.0722));
}
float toneMap(float energy, float exposure) {
return 1.0 - exp(-max(energy, 0.0) * exposure);
}
vec3 toneMapColor(vec3 radiance, float exposure) {
vec3 exposed = max(radiance, vec3(0.0));
float peak = max(exposed.r, max(exposed.g, exposed.b));
if (peak < 1e-6) return vec3(0.0);
float mapped = toneMap(peak, exposure);
float squared = mapped * mapped;
float bleach = squared * squared * squared * squared;
return mix(exposed / peak, vec3(1.0), bleach) * mapped;
}
vec3 linearToSrgb(vec3 linear) {
vec3 clamped = clamp(linear, 0.0, 1.0);
return mix(
clamped * 12.92,
1.055 * pow(clamped, vec3(1.0 / 2.4)) - 0.055,
step(vec3(0.0031308), clamped)
);
}
#endif
#ifndef DISK_GLSL
#define DISK_GLSL
#ifndef CONSTANTS_GLSL
#define CONSTANTS_GLSL
#define SPECTRUM_TAPS 16
const float RS = 1.0;
const float MASS = 0.5;
const float PHOTON_SPHERE = 1.5;
const float B_CRIT = 2.598076;
const float R_ISCO = 3.0;
const float R_TEMPERATURE_PEAK = 4.0833335;
const float TEMPERATURE_SHAPE_PEAK = 0.48787135;
const float RING_LYAPUNOV = 3.1415927;
const float RING_SPACING = 1.45;
const float SPIRAL_PITCH = 2.25;
const float WEAK_FIELD_B = 26.0;
const float ATLAS_EDGE_NEAR = 0.000001;
const float ATLAS_EDGE_DECADES = 16.013557;
const float ATLAS_CAPTURED_DECADES = 13.815511;
const float DISK_OUTER_RADIUS = 16.0;
const float TAPER_REACH = 1.25;
const float RAMP_MIN_K = 700.;
const float RAMP_DECADES = 4.045554;
const float EXCITED_DYE_CEILING = 0.9;
const float EXCITED_KEY_GAIN = 1.1;
const float EXCITED_EXPOSURE = 0.7;
const float EXCITED_CONTRAST = 2.2;
const float EXCITED_BROAD = 0.65;
const float EXCITED_FILAMENT_RADIUS = 6.0;
const float EXCITED_CORE = 3.0;
const vec3 GALAXY_NUCLEUS = vec3(1.1467261, 0.97804004, 0.785482);
const vec3 GALAXY_BAR = vec3(1.302215, 0.9413963, 0.690616);
const vec3 GALAXY_INNER = vec3(1.3294382, 0.9232194, 0.79051155);
const vec3 GALAXY_ARM = vec3(1.071447, 0.9300504, 1.4825257);
const vec3 GALAXY_OUTER = vec3(0.8467218, 0.9801459, 1.6480141);
const vec3 GALAXY_YOUNG = vec3(0.783326, 1.0281817, 1.3588555);
const vec3 GALAXY_NEBULA = vec3(2.851653, 0.4101745, 1.3903292);
const vec3 GALAXY_HALO = vec3(0.7698258, 1.0021421, 1.656551);
const vec3 GALAXY_DUST_REDDENING = vec3(0.78, 1.0, 1.32);
const float FIELD_TAN_HALF_FOV = 0.3125;
const float FIELD_DEFLECTION_REACH = 0.999;
#define FIELD_DEFLECTION_SAMPLES 32
const float FIELD_DEFLECTION[FIELD_DEFLECTION_SAMPLES] = float[FIELD_DEFLECTION_SAMPLES](
0.0, -0.014405162, -0.028853972, -0.043341845,
-0.057863623, -0.07241352, -0.08698502, -0.101570815,
-0.11616267, -0.13075136, -0.14532645, -0.15987624,
-0.1743875, -0.18884532, -0.20323278, -0.21753076,
-0.23171745, -0.2457681, -0.25965434, -0.27334365,
-0.28679857, -0.29997566, -0.31282446, -0.3252857,
-0.3372893, -0.34875154, -0.35957116, -0.36962345,
-0.37875152, -0.38675123, -0.39334333, -0.3981081
);
#define PASSAGE_RF_STEPS 7
const float PASSAGE_RIM = 0.0001;
const float PASSAGE_WINDING_CORE = 0.1;
const float DISK_PERSPECTIVE = 1.6;
const float DISK_PERSPECTIVE_FLOOR = 0.8;
const float ROTATION_CORE = 1.2;
const float ROTATION_REFERENCE = 10.;
#define GROOVE_TAPS 6
const vec4 GROOVE_COMB[GROOVE_TAPS] = vec4[GROOVE_TAPS](
vec4(0.037164804, 0.0, 0.49286357, 427.7251),
vec4(0.0, 0.0641237, 0.5071364, 477.7251),
vec4(0.0, 0.55756277, 0.0, 527.7251),
vec4(0.36916935, 0.3783135, 0.0, 577.7251),
vec4(0.53033364, 0.0, 0.0, 627.7251),
vec4(0.06333218, 0.0, 0.0, 677.7251)
);
#define CLOCK_SEEDS 168
#define CLOCK_BRISTLES 88
#define CLOCK_PER_SEED 90
#define CLOCK_BRACTS 16
#define CLOCK_STEM_PIECES 24
#define CLOCK_FIBERS 15161
const float CLOCK_RECEPTACLE = 0.0034;
const float CLOCK_ACHENE = 0.0038;
const float CLOCK_BEAK = 0.0098;
const float CLOCK_BEAK_VARIATION = 0.08;
const float CLOCK_PAPPUS = 0.0064;
const float CLOCK_SPAN = 2.42;
const float CLOCK_SCATTER = 0.06;
const float CLOCK_CONE = 0.42;
const float CLOCK_STEM_LENGTH = 0.3;
const float CLOCK_STEM_FOOT = 0.0034;
const float CLOCK_STEM_HEAD = 0.0027;
const float CLOCK_STEM_LEAN = 0.06;
const float CLOCK_BRACT_LENGTH = 0.012;
const float CLOCK_BRACT_TIP = 0.18;
const float CLOCK_WIDTH_BRISTLE = 0.000022;
const float CLOCK_WIDTH_BEAK = 0.0001;
const float CLOCK_WIDTH_ACHENE = 0.0009;
const float CLOCK_WIDTH_BRACT = 0.0011;
const float CUP_SCALE = 3.0595684;
const float CUP_BOWL = 3.9;
const float CUP_REACH_SINE = 0.9903268;
const float CUP_REACH_COSINE = -0.13875453;
const float CUP_WALL = 0.14;
const float CUP_CENTER = 0.09885731;
const float CUP_LIQUID = 3.7587001;
const float CUP_RIM = 4.0022745;
const float CUP_FOOT = -3.8011427;
const float CUP_FOOT_RADIUS = 1.8;
const float CUP_FOOT_TUBE = 0.19;
const float CUP_HANDLE_OUT = 4.21;
const float CUP_HANDLE_DOWN = 1.1;
const float CUP_HANDLE_WIDTH = 0.93;
const float CUP_HANDLE_HEIGHT = 1.22;
const float CUP_HANDLE_THICKNESS = 0.15;
const float CUP_HANDLE_BREADTH = 0.23;
const float CUP_FILLET = 0.26;
const float CUP_BOUND_CENTER = -1.6055714;
const float CUP_BOUND_RADIUS = 5.92604;
const float SAUCER_CURVATURE = 17.0;
const float SAUCER_SHELL = 0.11;
const float SAUCER_CENTER = 12.898857;
const float SAUCER_REACH_SINE = 0.37058824;
const float SAUCER_REACH_COSINE = 0.92879725;
const float SAUCER_RIM = 6.41;
const float SAUCER_BOUND_CENTER = -3.4959195;
const float SAUCER_BOUND_RADIUS = 6.4997787;
const float CUP_TABLE = -4.2111425;
const float CUP_TABLE_NIGHT = 0.009;
const float CUP_TABLE_DAY = 0.9;
const float CUP_TABLE_ROUGHNESS = 0.42;
const float CUP_CAMERA_DISTANCE = 2.0;
const float CUP_CAMERA_FOCAL = 3.2;
const float CUP_LAMP_SOFT = 6.0;
const float CUP_NIGHT_KEY = 0.9;
const float CUP_DAY_KEY = 0.35;
const float CUP_LAMP_REACH = 2.2;
const float CUP_LAMP_HEIGHT = 30.;
const float CUP_LAMP_LIFT = 2.0;
const float CUP_WINDOW_NIGHT = 1.1;
const float CUP_WINDOW_DAY = 1.15;
const float CUP_WINDOW_POOL = 7.0;
const float CUP_FILL = 0.1;
const float CUP_RIPPLE_SPEED = 3.4;
const float CUP_RIPPLE_LIFE = 1.5;
const float CUP_RIPPLE_LENGTH = 0.85;
const float CUP_RIPPLE_SLOPE = 0.32;
const vec3 CUP_SOFTBOX = vec3(-0.54947823, 0.54947823, 0.62940234);
const vec3 CUP_STRIP = vec3(0.6227461, -0.58256894, 0.5223032);
#endif
float diskSlope(float inclination) {
return 0.5 * sqrt(max(1.0 - inclination * inclination, 0.0)) / inclination;
}
vec2 diskOfSheet(vec2 sheet, vec4 pose, float depth) {
float c = cos(pose.x);
float s = sin(pose.x);
vec2 turned = vec2(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
float perspective = max(DISK_PERSPECTIVE - turned.y * diskSlope(pose.y), DISK_PERSPECTIVE_FLOOR);
return vec2(turned.x, turned.y / pose.y) * depth / perspective;
}
float diskPerspective(vec2 disk, vec4 pose, float depth) {
float slope = diskSlope(pose.y);
float tilted = disk.y * pose.y;
float y = DISK_PERSPECTIVE * tilted / (depth + slope * tilted);
return max(DISK_PERSPECTIVE - slope * y, DISK_PERSPECTIVE_FLOOR);
}
vec2 sheetOfDisk(vec2 disk, vec4 pose, float depth) {
float perspective = diskPerspective(disk, pose, depth);
float x = disk.x * perspective / depth;
float y = disk.y * pose.y * perspective / depth;
float c = cos(pose.x);
float s = sin(pose.x);
return vec2(c * x - s * y, s * x + c * y);
}
vec2 diskOfPage(vec2 page, vec4 place, vec4 pose) {
return diskOfSheet(vec2((page.x - place.x) * pose.z, place.y - page.y) / place.z, pose, place.w);
}
vec2 pageOfDisk(vec2 disk, vec4 place, vec4 pose) {
vec2 sheet = sheetOfDisk(disk, pose, place.w) * place.z;
return vec2(place.x + sheet.x * pose.z, place.y - sheet.y);
}
float turnedAt(float radius, float wind) {
return wind * ROTATION_REFERENCE / sqrt(radius * radius + ROTATION_CORE * ROTATION_CORE);
}
float shearAt(float radius, float wind) {
float soft = radius * radius + ROTATION_CORE * ROTATION_CORE;
return wind * ROTATION_REFERENCE * radius / (soft * sqrt(soft));
}
vec2 turnedBack(vec2 disk, float angle) {
float c = cos(angle);
float s = sin(angle);
return vec2(c * disk.x + s * disk.y, -s * disk.x + c * disk.y);
}
#endif
#ifndef GROOVES_GLSL
#define GROOVES_GLSL
const float GROOVE_ORDER = 6.0;
const float GROOVE_NM = 9000.0;
const float GROOVE_SHARPNESS = 3.0;
const float GROOVE_MEAN = 0.3125;
const float GROOVE_FRINGE = 0.45;
const float LAMP_SHINE = 220.0;
const float LAMP_HALO = 9.0;
const float LAMP_RELIEF = 0.42;
const float LAMP_BAND = 1.5;
const float LAMP_GLOW = 0.42;
const float LAMP_WASH = 0.34;
const float LAMP_SOFT = 8.0;
vec4 lamplight(vec2 disk, float phase, float wind, vec4 pose, float depth, vec4 lamp) {
float radius = max(length(disk), 1e-4);
vec2 gradient = vec2(-disk.y, disk.x) / (radius * radius) + disk / radius * shearAt(radius, wind);
float density = max(length(gradient), 1e-6);
vec3 normal = vec3(gradient / density, 0.0);
vec3 tangent = vec3(-normal.y, normal.x, 0.0);
float rise = sqrt(max(1.0 - pose.y * pose.y, 0.0));
vec3 eye = vec3(0.0, -depth * rise, depth * pose.y);
vec3 point = vec3(disk, 0.0);
vec3 toLamp = lamp.xyz - point;
float distanceSquared = max(dot(toLamp, toLamp), 1e-4);
vec3 toward = toLamp * inversesqrt(distanceSquared);
vec3 view = normalize(eye - point);
float soft = LAMP_SOFT * LAMP_SOFT;
float irradiance = (lamp.z * lamp.z + soft) / (distanceSquared + soft) * max(toward.z, 0.0);
float tl = dot(tangent, toward);
float tv = dot(tangent, view);
float cone = max(sqrt(max(1.0 - tl * tl, 0.0)) * sqrt(max(1.0 - tv * tv, 0.0)) - tl * tv, 0.0);
float band = pow(cone, LAMP_SHINE);
float glow = pow(cone, LAMP_HALO);
float footprint = length(fwidth(disk)) * 0.7071;
float perPixel = GROOVE_ORDER * density * footprint / TAU;
float resolved = 1.0 - smoothstep(0.25, 0.6, perPixel);
vec3 surface = normalize(vec3(0.0, 0.0, 1.0) + normal * (LAMP_RELIEF * cos(phase * GROOVE_ORDER) * resolved));
float raking = max(dot(surface, toward), 0.0) / max(toward.z, 0.05);
float pitch = TAU / (GROOVE_ORDER * density);
float path = pitch * GROOVE_NM * abs(dot(toward + view, normal));
float settled = smoothstep(0.35, 1.0, fwidth(path) / GROOVE_COMB[0].w);
vec3 spectrum = vec3(0.0);
for (int i = 0; i < GROOVE_TAPS; i++) {
vec4 tap = GROOVE_COMB[i];
float c = cos(PI * path / tap.w);
float order = pow(c * c, GROOVE_SHARPNESS) / GROOVE_MEAN;
spectrum += tap.rgb * mix(order, 1.0, settled);
}
spectrum = vec3(1.0) + (spectrum - vec3(1.0)) * GROOVE_FRINGE;
vec3 returned = spectrum * (band * LAMP_BAND) + vec3(glow * LAMP_GLOW + raking * LAMP_WASH);
return vec4(returned * irradiance, band * irradiance);
}
#endif
#ifndef CUP_GLSL
#define CUP_GLSL
#ifndef CUP_STEPS
#define CUP_STEPS 56
#endif
#ifndef CUP_SHADOW_STEPS
#define CUP_SHADOW_STEPS 20
#endif
struct CupRay {
vec3 origin;
vec3 direction;
float pixel;
};
struct CupHit {
float porcelain;
float liquid;
float nearest;
float nearestAt;
};
CupRay cupRay(vec2 sheet, vec4 pose, float depth, float rows) {
float c = cos(pose.x);
float s = sin(pose.x);
vec2 turned = vec2(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
float cosine = pose.y;
float sine = sqrt(max(1.0 - cosine * cosine, 0.0));
float away = CUP_CAMERA_DISTANCE * depth;
vec3 direction = vec3(
turned.x,
cosine * turned.y + sine * CUP_CAMERA_FOCAL,
sine * turned.y - cosine * CUP_CAMERA_FOCAL
);
CupRay ray;
ray.origin = vec3(0.0, -away * sine, away * cosine) / CUP_SCALE;
ray.direction = normalize(direction);
ray.pixel = 1.0 / (rows * CUP_CAMERA_FOCAL);
return ray;
}
float cupPlane(CupRay ray, float height) {
return abs(ray.direction.z) > 1e-6 ? (height - ray.origin.z) / ray.direction.z : -1.0;
}
float cupRipple(float radius, float age, float strength) {
if (age < 0.0) return 0.0;
float front = age * CUP_RIPPLE_SPEED;
float behind = radius - front;
float packet = exp(-behind * behind / (CUP_RIPPLE_LENGTH * CUP_RIPPLE_LENGTH * 2.2));
float fading = exp(-age / CUP_RIPPLE_LIFE) * strength;
return CUP_RIPPLE_SLOPE * fading * packet * cos(TAU * behind / CUP_RIPPLE_LENGTH);
}
float cupBlend(float a, float b, float reach) {
float h = clamp(0.5 + 0.5 * (b - a) / reach, 0.0, 1.0);
return mix(b, a, h) - reach * h * (1.0 - h);
}
float cupDistance(vec3 p, float bearing) {
float across = length(p.xy);
vec2 arc = vec2(across, CUP_CENTER - p.z);
vec2 rim = vec2(CUP_REACH_SINE, CUP_REACH_COSINE);
bool pastLip = rim.y * arc.x > rim.x * arc.y;
float bowl = (pastLip ? length(arc - rim * CUP_BOWL) : abs(length(arc) - CUP_BOWL)) - CUP_WALL;
float foot = length(vec2(across - CUP_FOOT_RADIUS, p.z - CUP_FOOT)) - CUP_FOOT_TUBE;
vec2 toward = vec2(cos(bearing), sin(bearing));
float outward = dot(p.xy, toward) - CUP_HANDLE_OUT;
float side = dot(p.xy, vec2(-toward.y, toward.x));
float up = p.z + CUP_HANDLE_DOWN;
vec2 radii = vec2(CUP_HANDLE_WIDTH, CUP_HANDLE_HEIGHT);
float k0 = length(vec2(outward, up) / radii);
float k1 = length(vec2(outward, up) / (radii * radii));
float ring = k0 * (k0 - 1.0) / max(k1, 1e-4);
float section = length(vec2(ring / CUP_HANDLE_THICKNESS, side / CUP_HANDLE_BREADTH));
float handle = (section - 1.0) * min(CUP_HANDLE_THICKNESS, CUP_HANDLE_BREADTH);
handle = max(handle, CUP_BOWL + CUP_WALL * 0.5 - length(p - vec3(0.0, 0.0, CUP_CENTER)));
return cupBlend(cupBlend(bowl, foot, CUP_FILLET), handle, CUP_FILLET * 0.6);
}
float saucerDistance(vec3 p) {
vec2 arc = vec2(length(p.xy), SAUCER_CENTER - p.z);
vec2 rim = vec2(SAUCER_REACH_SINE, SAUCER_REACH_COSINE);
bool pastRim = rim.y * arc.x > rim.x * arc.y;
return (pastRim ? length(arc - rim * SAUCER_CURVATURE) : abs(length(arc) - SAUCER_CURVATURE))
- SAUCER_SHELL;
}
float cupSceneDistance(vec3 p, vec3 thrown, float bearing) {
return min(cupDistance(p - thrown, bearing), saucerDistance(p));
}
vec3 cupNormal(vec3 p, float bearing, float reach) {
vec2 k = vec2(1.0, -1.0);
return normalize(
k.xyy * cupDistance(p + k.xyy * reach, bearing) +
k.yyx * cupDistance(p + k.yyx * reach, bearing) +
k.yxy * cupDistance(p + k.yxy * reach, bearing) +
k.xxx * cupDistance(p + k.xxx * reach, bearing)
);
}
vec3 saucerNormal(vec3 p, float reach) {
vec2 k = vec2(1.0, -1.0);
return normalize(
k.xyy * saucerDistance(p + k.xyy * reach) +
k.yyx * saucerDistance(p + k.yyx * reach) +
k.yxy * saucerDistance(p + k.yxy * reach) +
k.xxx * saucerDistance(p + k.xxx * reach)
);
}
CupHit cupTrace(CupRay ray, float bearing) {
CupHit hit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
float toLiquid = cupPlane(ray, 0.0);
vec2 onLiquid = ray.origin.xy + ray.direction.xy * toLiquid;
float liquid = toLiquid > 0.0 && length(onLiquid) < CUP_LIQUID ? toLiquid : -1.0;
vec3 offset = ray.origin - vec3(0.0, 0.0, CUP_BOUND_CENTER);
float b = dot(offset, ray.direction);
float c = dot(offset, offset) - CUP_BOUND_RADIUS * CUP_BOUND_RADIUS;
float h = b * b - c;
if (h <= 0.0) {
hit.liquid = liquid;
return hit;
}
float root = sqrt(h);
float t = max(-b - root, 0.0);
float end = liquid > 0.0 ? min(-b + root, liquid) : -b + root;
for (int i = 0; i < CUP_STEPS; i++) {
if (t > end) break;
float d = cupDistance(ray.origin + ray.direction * t, bearing);
float footprint = ray.pixel * t;
float near = d / footprint;
if (near < hit.nearest) {
hit.nearest = near;
hit.nearestAt = t;
}
if (d < footprint * 0.25) {
hit.porcelain = t;
hit.nearest = 0.0;
hit.nearestAt = t;
break;
}
t += max(d * 0.92, footprint * 0.3);
}
hit.liquid = hit.porcelain > 0.0 ? -1.0 : liquid;
return hit;
}
CupHit saucerTrace(CupRay ray) {
CupHit hit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
vec3 offset = ray.origin - vec3(0.0, 0.0, SAUCER_BOUND_CENTER);
float b = dot(offset, ray.direction);
float c = dot(offset, offset) - SAUCER_BOUND_RADIUS * SAUCER_BOUND_RADIUS;
float h = b * b - c;
if (h <= 0.0) return hit;
float root = sqrt(h);
float t = max(-b - root, 0.0);
float end = -b + root;
for (int i = 0; i < CUP_STEPS; i++) {
if (t > end) break;
float d = saucerDistance(ray.origin + ray.direction * t);
float footprint = ray.pixel * t;
float near = d / footprint;
if (near < hit.nearest) {
hit.nearest = near;
hit.nearestAt = t;
}
if (d < footprint * 0.25) {
hit.porcelain = t;
hit.nearest = 0.0;
hit.nearestAt = t;
break;
}
t += max(d * 0.92, footprint * 0.3);
}
return hit;
}
float cupShadow(vec3 p, vec3 direction, float far, float bearing, float sharpness) {
float lit = 1.0;
float t = 0.06;
for (int i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) break;
float d = cupDistance(p + direction * t, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) break;
t += clamp(d, 0.05, 0.6);
}
return smoothstep(0.0, 1.0, lit);
}
float cupSceneShadow(vec3 p, vec3 direction, float far, vec3 thrown, float bearing, float sharpness) {
float lit = 1.0;
float t = 0.04;
for (int i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) break;
float d = cupSceneDistance(p + direction * t, thrown, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) break;
t += clamp(d, 0.05, 0.8);
}
return smoothstep(0.0, 1.0, lit);
}
float cupOcclusion(vec3 p, vec3 n, vec3 thrown, float bearing) {
float shut = 0.0;
for (int i = 1; i <= 3; i++) {
float h = 0.12 * float(i * i);
shut += (h - cupSceneDistance(p + n * h, thrown, bearing)) / h * (0.6 / float(i));
}
return clamp(1.0 - shut * 0.55, 0.0, 1.0);
}
float cupLipHeight() {
return CUP_CENTER - CUP_BOWL * CUP_REACH_COSINE;
}
vec4 cupBowlExit(vec3 p, vec3 direction) {
vec3 offset = p - vec3(0.0, 0.0, CUP_CENTER);
float inner = CUP_BOWL - CUP_WALL;
float b = dot(offset, direction);
float c = dot(offset, offset) - inner * inner;
float t = -b + sqrt(max(b * b - c, 0.0));
vec3 at = p + direction * t;
return vec4(at, at.z - cupLipHeight());
}
float cupRimLight(vec3 p, vec3 direction, float softness) {
if (direction.z <= 0.0) return 0.0;
vec4 exit = cupBowlExit(p, direction);
return smoothstep(-softness, softness, exit.w);
}
vec2 coffeeBreath(vec2 p, float time) {
vec3 a = vec3(0.9, 1.7, 2.9);
vec2 k1 = vec2(1.7, 0.6);
vec2 k2 = vec2(-0.8, 2.3);
vec2 k3 = vec2(3.1, -1.9);
return 0.006 * (
a.x * k1 * cos(dot(k1, p) - time * 1.3) +
a.y * k2 * cos(dot(k2, p) - time * 1.7 + 1.1) * 0.5 +
a.z * k3 * cos(dot(k3, p) - time * 2.3 + 2.3) * 0.25
);
}
float coffeeDropRing(float radius, float age, float strength) {
float front = age * 1.8;
float spread = 0.3 + 0.5 * age;
float behind = radius - front;
float packet = exp(-behind * behind / (spread * spread));
float waveLength = 0.55 + 0.25 * age;
float fading = exp(-age / 1.2) / (1.0 + 1.1 * radius);
return 1.3 * strength * fading * packet * sin(6.2831853 * behind / waveLength) * smoothstep(0.0, 0.08, age);
}
vec3 cupLampOf(vec3 lamp) {
return vec3(lamp.xy * CUP_LAMP_REACH, CUP_LAMP_HEIGHT + lamp.z * CUP_LAMP_LIFT) / CUP_SCALE;
}
float cupIrradiance(vec3 p, vec3 lamp) {
float soft = CUP_LAMP_SOFT * CUP_LAMP_SOFT;
vec3 toward = lamp - p;
float over = lamp.z - CUP_TABLE;
return (over * over + soft) / (dot(toward, toward) + soft);
}
float cupWindowPool(vec3 p) {
float away = length(p.xy - CUP_SOFTBOX.xy * 2.0) / CUP_WINDOW_POOL;
return exp(-0.5 * away * away);
}
float cupSpecular(vec3 n, vec3 v, vec3 l, float alpha) {
vec3 m = normalize(v + l);
float nm = max(dot(n, m), 0.0);
float nv = max(dot(n, v), 1e-3);
float nl = max(dot(n, l), 0.0);
float a2 = alpha * alpha;
float spread = nm * nm * (a2 - 1.0) + 1.0;
float distribution = a2 / (PI * spread * spread);
float k = alpha * 0.5;
float visibility = 0.25 / ((nv * (1.0 - k) + k) * (nl * (1.0 - k) + k));
return distribution * visibility * nl;
}
float cupFresnel(float f0, float cosine) {
return f0 + (1.0 - f0) * pow(1.0 - clamp(cosine, 0.0, 1.0), 5.0);
}
float cupRoom(vec3 direction, float world) {
float strip = pow(max(dot(direction, CUP_STRIP), 0.0), 16.0);
float night = 0.003 + 0.008 * max(direction.z, 0.0) + 2.5 * strip;
float day = 0.62 + 0.3 * max(direction.z, 0.0) + 1.1 * strip;
return mix(day, night, world);
}
float cupAmbient(vec3 n, float night) {
float day = 0.22 + 0.22 * n.z;
float dark = 0.004 + 0.01 * max(n.z, 0.0);
return mix(day, dark, night);
}
vec3 cupShade(vec3 p, vec3 n, vec3 v, vec3 lamp, vec3 albedo, float alpha, float f0, vec2 lit, float open, float night) {
vec3 toLamp = normalize(lamp - p);
float key = mix(CUP_DAY_KEY, CUP_NIGHT_KEY, night) * cupIrradiance(p, lamp) * lit.x;
float window = mix(CUP_WINDOW_DAY, CUP_WINDOW_NIGHT, night) * cupWindowPool(p) * lit.y;
float wrap = max((dot(n, toLamp) + 0.2) / 1.2, 0.0);
float wrapWindow = max((dot(n, CUP_SOFTBOX) + 0.4) / 1.4, 0.0);
float facing = max(dot(n, v), 0.0);
float fresnel = cupFresnel(f0, facing);
float fill = CUP_FILL * night * max(dot(n, normalize(v + vec3(0.0, 0.0, 0.5))), 0.0);
vec3 diffuse = albedo * (key * wrap + window * wrapWindow + (cupAmbient(n, night) + fill) * open)
* (1.0 - fresnel);
float glint = key * cupSpecular(n, v, toLamp, alpha) * cupFresnel(f0, max(dot(v, normalize(v + toLamp)), 0.0));
float sheen = window * cupSpecular(n, v, CUP_SOFTBOX, max(alpha, 0.12))
* cupFresnel(f0, max(dot(v, normalize(v + CUP_SOFTBOX)), 0.0));
float room = cupRoom(reflect(-v, n), night) * fresnel * open;
return diffuse + vec3(glint + sheen + room);
}
float cupValue(vec2 p) {
vec2 cell = floor(p);
vec2 f = p - cell;
vec2 s = f * f * (3.0 - 2.0 * f);
uint x = uint(cell.x + 4096.0);
uint y = uint(cell.y + 4096.0);
float a = hash11(uvec3(x, y, 71u));
float b = hash11(uvec3(x + 1u, y, 71u));
float c = hash11(uvec3(x, y + 1u, 71u));
float d = hash11(uvec3(x + 1u, y + 1u, 71u));
return mix(mix(a, b, s.x), mix(c, d, s.x), s.y);
}
vec2 cupTableAlbedo(vec2 p) {
float cloud = cupValue(p * 0.35) * 0.55 + cupValue(p * 0.9 + 17.0) * 0.3 + cupValue(p * 2.4 + 41.0) * 0.15;
float grain = cupValue(p * 9.0 + 5.0) * 0.6 + cupValue(p * 23.0 + 9.0) * 0.4;
float night = CUP_TABLE_NIGHT * (0.72 + 0.5 * cloud + 0.16 * (grain - 0.5));
float day = CUP_TABLE_DAY * (0.985 + 0.015 * grain);
return vec2(night, day);
}
#endif
#ifndef ARC_TAPS
#define ARC_TAPS 12
#endif
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uPrint;
uniform vec4 uFrame;
uniform vec4 uPlace;
uniform vec4 uPose;
uniform vec4 uTurning;
uniform vec4 uLamp;
uniform vec4 uShape;
uniform vec4 uWave;
uniform vec4 uSpiral;
uniform vec4 uGround;
uniform vec4 uInk;
uniform vec4 uCup;
uniform vec4 uShake;
const float ARC_STEP = 1.5;
const float SHEEN_LIGHT = 0.9;
const float GAS_BLUR = 1.6;
vec3 hash3(ivec2 cell) {
uvec3 v = uvec3(uvec2(cell), 0x9e3779b9u);
v = v * 1664525u + 1013904223u;
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
v ^= v >> uvec3(16u);
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
return vec3(v & uvec3(0xffffffu)) / float(0xffffff);
}
float mottle(vec2 p) {
ivec2 cell = ivec2(floor(p));
vec2 f = fract(p);
vec2 w = f * f * (3.0 - 2.0 * f);
float a = hash3(cell).x;
float b = hash3(cell + ivec2(1, 0)).x;
float c = hash3(cell + ivec2(0, 1)).x;
float d = hash3(cell + ivec2(1, 1)).x;
return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}
void main() {
vec2 stage = uFrame.xy;
vec2 point = vUv * vec2(uFrame.x, uFrame.z);
vec2 center = uPlace.xy;
float zoom = uFrame.w;
vec2 seen = center + (point - center) / zoom;
vec2 disk = diskOfPage(seen, uPlace, uPose);
float radius = length(disk);
float wind = uTurning.x;
float angle = turnedAt(radius, wind) + uTurning.y;
float across = shearAt(radius, wind) * fwidth(radius);
float swept = uTurning.z * turnedAt(radius, 1.0) / turnedAt(ROTATION_REFERENCE, 1.0);
vec2 before = turnedBack(disk, angle);
vec4 lamp = lamplight(disk, atan(before.y, before.x), wind, uPose, uPlace.w, uLamp);
vec2 home = pageOfDisk(before, uPlace, uPose);
vec2 homeUv = home / stage;
float packed = max(length(dFdx(homeUv)), length(dFdy(homeUv))) * float(textureSize(uPrint, 0).x);
float matter = 1.0 - uShape.y;
float level = log2(max(min(packed, 64.0), 1.0)) + matter * GAS_BLUR;
vec2 restUv = point / stage;
float hand = 0.0;
float glow = 0.0;
if (wind > 0.0 || uTurning.y != 0.0) {
float arc = min(max(across, swept), TAU);
float ringPixels = arc * length(point - center) * uShape.w;
int taps = clamp(int(ceil(ringPixels / ARC_STEP)), 1, ARC_TAPS);
float spread = log2(max(ringPixels / float(taps), 1.0));
for (int k = 0; k < ARC_TAPS; k++) {
if (k >= taps) break;
float along = (float(k) + 0.5) / float(taps) - 0.5;
vec2 at = pageOfDisk(turnedBack(disk, angle + arc * along), uPlace, uPose) / stage;
hand += textureLod(uPrint, at, max(level, spread)).r;
glow += textureLod(uPrint, at, max(level, spread) + uShape.z).r;
}
hand /= float(taps);
glow /= float(taps);
} else {
hand = textureLod(uPrint, homeUv, level).r;
glow = textureLod(uPrint, homeUv, level + uShape.z).r;
}
float inCast = textureLod(uPrint, restUv, 0.0).g;
float gas = mottle(home / 7.0) * 0.6 + mottle(home / 2.6) * 0.4;
float strokes = hand * mix(1.0, 0.45 + 0.9 * gas, matter * 0.7);
float haze = smoothstep(0.0, 0.3, glow) * uSpiral.z * matter;
float handInk = clamp(strokes + haze * (1.0 - strokes), 0.0, 1.0) * uShape.x;
float ringed = shearAt(radius, wind) * radius;
float cut = ringed / sqrt(1.0 + ringed * ringed);
vec3 sheen = lamp.rgb * (uTurning.w * cut * SHEEN_LIGHT) * handInk;
float reference = min(stage.x, stage.y) * 0.24;
vec2 offset = point - center;
float away = max(length(offset), 1e-3);
float bearing = atan(offset.y, offset.x) * uPose.z;
float waveArms = cos(2.0 * (bearing - log(away / reference) / tan(uSpiral.y)));
float rippled = away * exp(uSpiral.x * waveArms);
float reach = uWave.y * rippled / max(uWave.x, 1.0);
float behind = 1.0 - smoothstep(uWave.x - reach * 2.0, uWave.x, rippled);
float grown = smoothstep(reference * 0.15, reference * 0.9, uWave.x);
float crest = exp(-pow((rippled - uWave.x) / max(reach * 0.35, 0.75), 2.0)) * uWave.z * grown;
ivec2 knotCell = ivec2(floor(point / 7.0));
vec3 knotRandom = hash3(knotCell + ivec2(911, 37));
vec2 knotAt = (vec2(knotCell) + 0.2 + knotRandom.xy * 0.6) * 7.0;
float seeded = textureLod(uPrint, knotAt / stage, 1.0).r;
float since = (uWave.x - rippled) / max(reach * 0.5, 0.75);
float flare = since < 0.0 ? exp(-since * since * 2.0) : exp(-since / uWave.w);
float kd2 = dot(point - knotAt, point - knotAt);
float knot = (exp(-kd2 / 2.2) + 0.2 * exp(-kd2 / 14.0))
* step(0.55, knotRandom.z) * smoothstep(0.25, 0.6, seeded) * flare * uWave.z * grown;
float ink = mix(handInk, inCast, behind);
float light = clamp(ink + crest * (0.18 + hand * 0.9) + knot, 0.0, 1.0);
float held = 1.0;
if (uCup.x > 0.0) {
vec2 sheet = vec2((point.x - center.x) * uPose.z, center.y - point.y) / uPlace.z;
CupRay ray = cupRay(sheet, uPose, uPlace.w * uCup.w, uPlace.z * uShape.w);
ray.origin -= vec3(uShake.xy / CUP_SCALE, 0.0);
CupHit hit = cupTrace(ray, uCup.z);
held = mix(1.0, hit.liquid > 0.0 ? 1.0 : 0.0, uCup.x);
}
light *= held;
sheen *= held;
float ground = uGround.a;
float alpha = clamp(light + ground * (1.0 - light), 0.0, 1.0);
vec3 color = uInk.rgb * light + sheen + uGround.rgb * ground * (1.0 - light);
float dither = (interleavedGradientNoise(gl_FragCoord.xy) - 0.5) / 255.0;
fragColor = vec4(min(color, vec3(alpha)) + dither * alpha, alpha);
}`;export{e as default};