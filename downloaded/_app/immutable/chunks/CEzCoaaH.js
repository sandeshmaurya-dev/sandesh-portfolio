var e=`#version 300 es
precision highp float;
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
#ifndef TAPS
#define TAPS 8
#endif
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uPrint;
uniform sampler2D uCaustic;
uniform vec4 uFrame;
uniform vec4 uLens;
uniform vec4 uShade;
uniform vec4 uDisplay;
uniform vec4 uDrop;
uniform vec4 uModes;
uniform vec4 uPhases;
uniform vec4 uFront;
uniform vec4 uSun;
uniform vec4 uRegion;
uniform vec4 uMedium;
uniform vec4 uSky;
uniform vec4 uSunTint;
uniform vec4 uBands;
uniform vec4 uBandWeights[4];
uniform vec4 uGround;
uniform vec4 uInk;
uniform vec4 uNight;
uniform vec4 uBone;
uniform vec4 uShadeInk;
uniform vec4 uComb[SPECTRUM_TAPS];
uniform vec4 uCombBands[SPECTRUM_TAPS];
const float CONTACT = 0.32;
const float POOL = 0.045;
const float D_LINE = 587.56;
const float HORIZON = 0.24;
vec2 sourceOf(vec2 at) {
vec2 theta = at - uFrame.xy * 0.5;
vec2 gravity = uLens.x * uLens.x * theta / (dot(theta, theta) + uLens.w * uLens.w);
return at - gravity - uLens.yz;
}
vec3 sheet(vec2 at, float level) {
vec2 center = uFrame.xy * 0.5;
float pixel = uFrame.z;
vec2 source = sourceOf(at);
vec2 ink = textureLod(uPrint, source / uFrame.xy, level).rg;
float radius = length(at - center);
float behind = (1.0 - smoothstep(-pixel, pixel, radius - uFront.x)) * uFront.w;
float coverage = mix(ink.r, ink.g, behind);
float reach = length(source - center) / length(center);
coverage *= clamp((uShade.z - 0.35 * reach) / 0.65, 0.0, 1.0);
float core = 1.0 - smoothstep(uShade.y - pixel, uShade.y + pixel, radius);
float shade = (1.0 - smoothstep(uShade.x - pixel, uShade.x + pixel, radius)) *
(1.0 - core * smoothstep(0.9, 1.0, uDrop.w));
vec3 paper = mix(mix(uGround.rgb, uShadeInk.rgb, shade), mix(uInk.rgb, uGround.rgb, shade), coverage);
vec3 night = mix(uNight.rgb, uBone.rgb, coverage);
return mix(paper, night, uShade.w);
}
float radius() { return uDrop.x; }
float height() { return uDrop.y; }
float sunlit(vec2 p) {
vec3 center = vec3(-p, height());
float along = dot(center, uSun.xyz);
vec3 nearest = center - uSun.xyz * along;
float miss = length(nearest);
float penumbra = max(along, 0.0) * uSun.w + uFrame.z;
float chord = sqrt(max(radius() * radius() - miss * miss, 0.0));
float ahead = step(0.0, along + chord);
float blocked = (1.0 - smoothstep(radius() - penumbra, radius() + penumbra, miss)) * ahead;
return 1.0 - blocked * uDrop.w;
}
vec4 gathered(vec2 p, float extra) {
vec2 uv = (p - uRegion.xy) / (2.0 * uRegion.z) + 0.5;
float window = 1.0 - smoothstep(0.72, 0.98, length(uv - 0.5) * 2.0);
float present = window * uDrop.w;
if (present <= 0.0) return vec4(0.0);
return textureLod(uCaustic, uv, max(uRegion.w, 1.0) + extra) * present;
}
float skylit(vec2 p) {
float r = radius();
float h = height();
float foot = h < r ? sqrt(max(r * r - h * h, 0.0)) : 0.0;
float outside = length(p) - foot;
vec3 toward = vec3(-p, h);
float distance = length(toward);
float cosine = max(toward.z / distance, 0.0);
float ball = h > 0.0 ? (r * r) / (distance * distance) * cosine * cosine : 0.0;
float contact = foot > 0.0 ? exp(-max(outside, 0.0) / (0.09 * foot)) * step(0.0, outside) : 0.0;
return 1.0 - CONTACT * clamp(ball * 0.6 + contact, 0.0, 1.0) * uDrop.w;
}
const float RIDGE_REACH = 5.0;
vec3 ridge(vec2 p) {
float radius = length(p);
float width = max(uFront.y, 1.0);
float x = (radius - uFront.x) / width;
if (uFront.w <= 0.0 || abs(x) > RIDGE_REACH) return vec3(0.0);
float h = uFront.z * exp(-x * x) * uFront.w * smoothstep(0.0, width * 2.5, uFront.x);
float slope = -2.0 * x / width * h;
vec2 radial = radius > 1e-4 ? p / radius : vec2(1.0, 0.0);
return vec3(h, radial * slope);
}
float ridgeLight(vec2 p, float index) {
float radius = length(p);
float width = max(uFront.y, 1.0);
float x = (radius - uFront.x) / width;
if (uFront.w <= 0.0 || abs(x) > RIDGE_REACH) return 1.0;
float h = uFront.z * exp(-x * x) * uFront.w * smoothstep(0.0, width * 2.5, uFront.x);
float slope = -2.0 * x / width * h;
float curvature = (4.0 * x * x - 2.0) / (width * width) * h;
float spread = (1.0 - 1.0 / index) * (slope * slope + h * curvature);
return 1.0 / max(1.0 + spread, 0.25);
}
vec3 gatheredColor(vec4 bands) {
return uBandWeights[0].rgb * bands.x + uBandWeights[1].rgb * bands.y +
uBandWeights[2].rgb * bands.z + uBandWeights[3].rgb * bands.w;
}
vec3 irradiance(vec2 p, vec3 gathered, float index) {
float sun = uMedium.w;
vec3 sky = uSky.rgb * (1.0 - sun) * skylit(p);
return sky + uSunTint.rgb * sun * (sunlit(p) * ridgeLight(p, index) + gathered);
}
vec3 shaded(vec3 printed, vec2 p, vec3 gatheredLight, float index) {
vec3 albedo = toLinear(printed);
vec3 light = irradiance(p, gatheredLight, index);
vec3 paper = albedo * light;
vec3 pool = max(gatheredLight - 1.15, 0.0);
vec3 night = albedo * mix(vec3(1.0), light, 0.55) + uSunTint.rgb * pool * POOL;
return mix(paper, night, uShade.w);
}
const float OPEN_SKY = 1.0 / 512.0;
bool open(vec2 p, float over, float crest) {
if (over > 0.0 || crest > 1e-3) return false;
if (ridgeLight(p, 1.0) != 1.0) return false;
vec2 uv = (p - uRegion.xy) / (2.0 * uRegion.z) + 0.5;
if (uDrop.w > 0.0 && 1.0 - smoothstep(0.72, 0.98, length(uv - 0.5) * 2.0) > 0.0) return false;
return skylit(p) >= 1.0 - OPEN_SKY && sunlit(p) == 1.0;
}
float softbox(vec3 direction) {
vec3 axis = uSun.xyz;
vec3 across = normalize(cross(vec3(0.0, 0.0, 1.0), axis) + vec3(1e-6, 0.0, 0.0));
vec3 up = cross(axis, across);
float facing = dot(direction, axis);
if (facing <= 0.0) return 0.0;
vec2 at = abs(vec2(dot(direction, across), dot(direction, up)) / facing);
vec2 pane = smoothstep(vec2(0.44, 0.27), vec2(0.3, 0.15), at);
return pane.x * pane.y;
}
vec3 environment(vec3 direction) {
float world = uShade.w;
float z = direction.z;
float skyShare = 1.0 - uMedium.w;
vec3 skyLight = mix(vec3(skyShare), vec3(0.012), world) * uSky.rgb * mix(0.75, 1.15, clamp(z, 0.0, 1.0));
vec3 room = mix(vec3(0.07), vec3(0.035), world);
vec3 below = mix(vec3(0.9), vec3(0.002), world);
vec3 color = z > 0.0 ? mix(room, skyLight, smoothstep(0.0, HORIZON, z)) : mix(room, below, smoothstep(0.0, -0.5, z));
color += uSunTint.rgb * softbox(direction) * mix(0.22, 0.95, world);
float toward = dot(direction, uSun.xyz);
float disk = smoothstep(cos(uSun.w * 2.2), cos(uSun.w * 0.8), toward);
float glare = pow(max(toward, 0.0), 220.0) * 0.6 + pow(max(toward, 0.0), 24.0) * 0.08;
return color + uSunTint.rgb * (disk * 60.0 + glare) * uMedium.z;
}
void main() {
vec2 point = vUv * vec2(uFrame.x, uDisplay.y);
vec2 center = uFrame.xy * 0.5;
vec2 p = point - center;
float pixel = uFrame.z;
float world = uShade.w;
float presence = uDrop.w;
float r = radius();
float h = height();
float widest = (r + pixel) * (1.0 + dot(abs(uModes), vec4(1.0)));
bool near = dot(p, p) < widest * widest;
float scale = 1.0;
float over = 0.0;
vec3 eye = vec3(p, h + r * 2.0 + 1.0);
vec3 down = vec3(0.0, 0.0, -1.0);
if (near) {
scale = outline(atan(p.y, p.x), uModes, uPhases);
vec2 q = p / scale;
float silhouette = h >= 0.0 ? r : sqrt(max(r * r - h * h, 0.0));
over = (1.0 - smoothstep(silhouette - pixel, silhouette + pixel, length(q))) * presence;
eye = vec3(q, h + r * 2.0 + 1.0);
}
vec3 wave = ridge(p);
float crest = wave.x;
vec3 ridgeNormal = normalize(vec3(-wave.yz, 1.0));
float central = 1.0 + (indexAt(uMedium.xy, D_LINE) - 1.0) * presence;
Path middle;
middle.through = false;
middle.at = eye.xy;
middle.carried = 1.0;
middle.span = 0.0;
middle.normal = vec3(0.0, 0.0, 1.0);
middle.facing = 1.0;
if (near) middle = traceSphere(eye, down, r, h, central);
vec2 mapped = (middle.through ? middle.at * scale : p);
if (crest > 1e-3) {
vec3 bent = refract(down, ridgeNormal, 1.0 / central);
mapped += bent.xy * (crest / max(-bent.z, 1e-3));
}
vec2 footprint = vec2(length(dFdx(mapped)), length(dFdy(mapped)));
float supersample = max(uFrame.w * uFrame.z, 1.0);
float level = log2(max(max(footprint.x, footprint.y) * uFrame.w / supersample, 1.0));
vec3 printed = sheet(point, level);
if (open(p, over, crest)) {
fragColor = vec4(printed, 1.0);
return;
}
vec3 lit = shaded(printed, p, gatheredColor(gathered(p, 0.0)), central);
vec3 color = lit;
if (over > 0.0 || crest > 1e-3) {
vec3 through = vec3(0.0);
float absorbance = uDrop.z;
for (int k = 0; k < TAPS; k++) {
vec4 tap = uComb[k];
float index = 1.0 + (indexAt(uMedium.xy, 550.0 + tap.w * 300.0) - 1.0) * presence;
vec2 at = p;
float carried = 1.0;
if (over > 0.0) {
Path path = traceSphere(eye, down, r, h, index);
at = path.through ? path.at * scale : p;
carried = path.through ? path.carried * exp(-absorbance * path.span) : 1.0;
}
if (crest > 1e-3) {
vec3 bent = refract(down, ridgeNormal, 1.0 / index);
at += bent.xy * (crest / max(-bent.z, 1e-3));
carried *= 1.0 - reflectance(ridgeNormal.z, 1.0 / index);
}
vec3 band = vec3(dot(gathered(at, 0.0), uCombBands[k]));
through += tap.rgb * shaded(sheet(center + at, level), at, band, index) * carried;
}
bool onDrop = over > 0.0 && middle.through;
vec3 normal = onDrop ? middle.normal : ridgeNormal;
float facing = onDrop ? middle.facing : ridgeNormal.z;
float mirror = reflectance(facing, 1.0 / central) * (onDrop ? presence : uFront.w);
through += environment(reflect(down, normal)) * mirror;
color = mix(lit, through, max(over, step(1e-3, crest)));
}
vec4 glow = gathered(p, 1.5);
float excess = max(dot(glow, vec4(0.25)) - 1.0, 0.0);
float bloom = uDisplay.x > 1.0 ? 0.03 : 0.08;
color += uSunTint.rgb * uMedium.w * excess * bloom * (1.0 - world);
fragColor = vec4(toDisplay(clamp(color, 0.0, uDisplay.x)), 1.0);
}`;export{e as default};