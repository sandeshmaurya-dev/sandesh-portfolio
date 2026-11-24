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
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uNear;
uniform sampler2D uFar;
uniform vec4 uFrame;
uniform vec4 uThroat;
uniform vec4 uPlates;
uniform vec4 uField;
uniform vec4 uInk;
uniform vec4 uDetail;
uniform vec4 uNearRect;
uniform vec4 uFarRect;
uniform vec4 uStyle;
uniform vec4 uScales;
uniform vec4 uSeeds;
const float PI = 3.14159265;
const float GRAZE = 0.26;
float carlsonRF(vec3 p) {
for (int iteration = 0; iteration < PASSAGE_RF_STEPS; iteration++) {
vec3 root = sqrt(p);
float lambda = root.x * root.y + root.y * root.z + root.z * root.x;
p = (p + lambda) * 0.25;
}
float mean = (p.x + p.y + p.z) / 3.0;
float dx = 1.0 - p.x / mean;
float dy = 1.0 - p.y / mean;
float dz = -(dx + dy);
float e2 = dx * dy - dz * dz;
float e3 = dx * dy * dz;
return (1.0 - e2 / 10.0 + e3 / 14.0 + e2 * e2 / 24.0 - 3.0 * e2 * e3 / 44.0) / sqrt(mean);
}
vec2 escapeAt(float theta, float x) {
bool before = x >= 0.0;
float distance = abs(x);
float fromOutward = before ? PI - theta : theta;
float beta = sqrt(distance * distance + 1.0) * sin(fromOutward);
bool inward = fromOutward > PI * 0.5;
bool crossing = beta < 1.0;
float c2 = max(1.0 - beta * beta, PASSAGE_RIM * 2.0);
float k2 = 1.0 / max(beta * beta, 1.0 + PASSAGE_RIM * 2.0);
float cos2 = min(max(beta * beta - 1.0, 0.0) / max(distance * distance, 1e-12), 1.0);
float sin2 = 1.0 - cos2;
float whole = carlsonRF(crossing ? vec3(0.0, 1.0, c2) : vec3(0.0, 1.0 - k2, 1.0));
float part = carlsonRF(
crossing
? vec3(c2, c2 * (1.0 + distance * distance), c2 + distance * distance)
: vec3(cos2, 1.0 - k2 * sin2, 1.0)
) * (crossing ? distance : sqrt(sin2));
float angle = (crossing ? beta : 1.0) * (whole + (inward ? part : -part));
bool crossed = crossing && inward;
bool beyond = before ? crossed : !crossed;
return vec2(beyond ? angle : PI - angle, beyond ? 1.0 : 0.0);
}
vec3 onPicture(vec2 at, vec4 rect, float mirrored) {
vec2 local = (at - rect.xy) / rect.zw;
bool inside = all(greaterThanEqual(local, vec2(0.0))) && all(lessThanEqual(local, vec2(1.0)));
return vec3(mix(local.x, 1.0 - local.x, mirrored), local.y, inside ? 1.0 : 0.0);
}
vec4 nearAt(vec2 at, vec2 gradX, vec2 gradY) {
vec3 on = onPicture(at, uNearRect, uPlates.x);
return mix(textureLod(uNear, vec2(0.0), 0.0), textureGrad(uNear, on.xy, gradX / uNearRect.zw, gradY / uNearRect.zw), on.z);
}
vec4 farAt(vec2 at, vec2 gradX, vec2 gradY) {
vec3 on = onPicture(at, uFarRect, uPlates.y);
return mix(textureLod(uFar, vec2(0.0), 0.0), textureGrad(uFar, on.xy, gradX / uFarRect.zw, gradY / uFarRect.zw), on.z);
}
vec4 nearAtLevel(vec2 at, float level) {
vec3 on = onPicture(at, uNearRect, uPlates.x);
return mix(textureLod(uNear, vec2(0.0), 0.0), textureLod(uNear, on.xy, level), on.z);
}
vec4 farAtLevel(vec2 at, float level) {
vec3 on = onPicture(at, uFarRect, uPlates.y);
return mix(textureLod(uFar, vec2(0.0), 0.0), textureLod(uFar, on.xy, level), on.z);
}
vec2 turn(vec2 v, float angle) {
float c = cos(angle);
float s = sin(angle);
return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}
vec4 seedHash(vec2 cell) {
uint x = (uint(cell.x + 8192.0) * 0x9e3779b1u) ^ (uint(cell.y + 8192.0) * 0x85ebca77u);
vec4 values;
x ^= x >> 16u; x *= 0x21f0aaadu; x ^= x >> 15u; x *= 0xd35a2d97u; x ^= x >> 15u;
values.x = float(x >> 8u) / 16777216.0;
x ^= x >> 16u; x *= 0x21f0aaadu; x ^= x >> 15u; x *= 0xd35a2d97u; x ^= x >> 15u;
values.y = float(x >> 8u) / 16777216.0;
x ^= x >> 16u; x *= 0x21f0aaadu; x ^= x >> 15u; x *= 0xd35a2d97u; x ^= x >> 15u;
values.z = float(x >> 8u) / 16777216.0;
x ^= x >> 16u; x *= 0x21f0aaadu; x ^= x >> 15u; x *= 0xd35a2d97u; x ^= x >> 15u;
values.w = float(x >> 8u) / 16777216.0;
return values;
}
vec2 seedsAt(vec2 at, float footprint, float density, float time, float reading) {
float cellSize = 52.0;
vec2 carried = at - vec2(reading * time * 46.0, -time * 9.0);
vec2 cell = floor(carried / cellSize);
float cover = 0.0;
float light = 0.0;
for (int j = -1; j <= 1; j++) {
for (int i = -1; i <= 1; i++) {
vec2 lattice = cell + vec2(float(i), float(j));
vec4 h = seedHash(lattice);
if (h.w > density) continue;
vec2 bob = vec2(sin(time * (0.9 + h.x) + h.y * 6.28), cos(time * (0.7 + h.y) + h.x * 6.28)) * 6.0;
vec2 place = (lattice + 0.15 + h.xy * 0.7) * cellSize + bob;
float distance = length(carried - place);
float size = 0.9 + 0.9 * h.z;
float spread = max(footprint, 0.75);
float share = min(size * size / (spread * spread), 1.0);
float core = (1.0 - smoothstep(size - spread * 0.5, size + spread * 0.5, distance)) * share;
float hairs = exp(-pow((distance - size * 2.3) / max(spread, size * 0.5), 2.0)) * 0.12 * share;
cover = max(cover, core + hairs);
float flicker = 0.55 + 0.45 * sin(time * (2.0 + 2.5 * h.z) + h.x * 40.0);
light = max(light, (core + exp(-distance * distance / (size * size * 9.0)) * 0.5 * share) * flicker);
}
}
return vec2(min(cover, 1.0), light);
}
float driftingAt(vec2 point, float time, float reading) {
float cover = 0.0;
for (int i = 0; i < 7; i++) {
vec4 h = seedHash(vec2(float(i), 401.0));
float radius = (0.035 + 0.05 * h.z) * uFrame.y;
float across = fract(h.x + time * (0.16 + 0.1 * h.y));
float x = mix(-radius, uFrame.x + radius, reading > 0.0 ? across : 1.0 - across);
float y = uFrame.y * (0.12 + 0.76 * h.y) + sin(time * (0.6 + 0.4 * h.w) + h.w * 6.28) * 0.035 * uFrame.y;
float d = length(point - vec2(x, y)) / radius;
float disk = 1.0 - smoothstep(0.86, 1.0, d);
float rim = exp(-pow((d - 0.9) / 0.08, 2.0));
cover += (disk * 0.55 + rim * 0.45) * (0.6 + 0.4 * h.w);
}
return min(cover, 1.0);
}
vec4 withSeeds(vec4 color, vec2 seeds) {
float ink = seeds.x * (1.0 - uInk.w) * 0.6;
float glow = seeds.y * uInk.w;
return vec4(color.rgb * (1.0 - ink) + uInk.rgb * (ink + glow), min(color.a * (1.0 - ink) + ink + glow, 1.0));
}
void main() {
vec2 point = vUv * uFrame.xy;
vec2 offset = turn((point - uFrame.zw) / uThroat.z, -uStyle.y * step(1.5, uStyle.x));
float radius = length(offset);
vec2 axis = radius > 1e-5 ? offset / radius : vec2(1.0, 0.0);
float style = uStyle.x;
vec2 center = uFrame.zw;
vec4 color = vec4(0.0);
vec2 sheet = vec2(0.0);
float honest = 0.0;
if (style < 0.5 || style > 1.5) {
float theta = atan(radius * uThroat.y);
vec2 escaped = escapeAt(theta, uThroat.x);
if (uThroat.w < 0.5) escaped = vec2(theta, 0.0);
if (uThroat.w > 1.5) escaped = vec2(theta, 1.0);
float sky = escaped.x;
float beyond = escaped.y;
float facing = cos(sky);
float reach = sin(sky) / max(facing, 1e-3) / uThroat.y;
vec2 uv = (center + axis * reach * uThroat.z) / uFrame.xy;
float ahead = smoothstep(0.02, 0.08, facing);
vec2 gradX = dFdx(uv) * ahead;
vec2 gradY = dFdy(uv) * ahead;
vec2 nearUv = (center + (uv * uFrame.xy - center) / uScales.x) / uFrame.xy;
vec4 nearColor = mix(textureLod(uNear, vec2(0.0), 0.0), nearAt(nearUv, gradX / uScales.x, gradY / uScales.x), ahead);
vec4 farColor = mix(textureLod(uFar, vec2(0.0), 0.0), farAt(uv, gradX, gradY), ahead) * uPlates.z;
if (uSeeds.x > 0.0 || uSeeds.y > 0.0) {
vec2 pixels = uv * uFrame.xy;
float footprint = max(length(gradX * uFrame.xy), length(gradY * uFrame.xy)) + (1.0 - ahead) * 1e3;
nearColor = withSeeds(nearColor, seedsAt(nearUv * uFrame.xy, footprint / uScales.x, uSeeds.x, uStyle.w, uScales.z) * ahead);
farColor = withSeeds(farColor, seedsAt(pixels + 911.0, footprint, uSeeds.y, uStyle.w, uScales.z) * ahead * uPlates.z);
}
color = mix(nearColor, farColor, beyond);
sheet = axis * (sin(sky) / max(facing, GRAZE) / uThroat.y) * uThroat.z;
honest = mix(smoothstep(0.12, 0.42, facing), 1.0, step(1.5, style) * beyond);
} else if (style < 1.5) {
float core2 = PASSAGE_WINDING_CORE * PASSAGE_WINDING_CORE;
float rate = sqrt(1.0 + core2) / sqrt(radius * radius + core2);
float turned = uStyle.y * rate;
float shear = uStyle.y * sqrt(1.0 + core2) * radius / pow(radius * radius + core2, 1.5);
float arc = min(shear * fwidth(radius), 6.2831853);
float ringPixels = arc * radius * uThroat.z * uDetail.x;
int taps = clamp(int(ceil(ringPixels / 1.5)), 1, 10);
vec4 nearSum = vec4(0.0);
vec4 farSum = vec4(0.0);
for (int k = 0; k < 10; k++) {
if (k >= taps) break;
float along = (float(k) + 0.5) / float(taps) - 0.5;
vec2 back = turn(offset, -(turned + arc * along));
nearSum += nearAtLevel((center + back / uScales.x * uThroat.z) / uFrame.xy, 0.0);
farSum += farAtLevel((center + back / uScales.y * uThroat.z) / uFrame.xy, 0.0);
}
color = mix(nearSum / float(taps), farSum / float(taps) * uPlates.z, uStyle.z);
sheet = turn(offset, -turned) / mix(uScales.x, uScales.y, uStyle.z) * uThroat.z;
honest = 1.0;
}
vec2 cell = sheet / uField.z;
vec2 width = max(fwidth(cell) * uDetail.x, vec2(1e-4));
vec2 grid = abs(fract(cell + 0.5) - 0.5) / width;
float line = 1.0 - min(min(grid.x, grid.y), 1.0);
vec2 share = min(width, vec2(1.0));
float mean = 1.0 - (1.0 - share.x) * (1.0 - share.y);
float ruled = mix(line, mean, smoothstep(0.35, 0.9, max(width.x, width.y)));
float travel = radius * 0.5;
float reveal = 1.0 - smoothstep(uField.x - 0.24, uField.x, travel);
float edge = exp(-pow((travel - uField.x) * 34.0, 2.0)) * uField.y;
float seen = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
float sheetShows = mix(seen + (1.0 - color.a), 1.0 - seen, uInk.w);
float density = clamp((ruled * reveal * honest * sheetShows + edge * 0.35) * uField.w, 0.0, 1.0);
vec4 drawn = vec4(color.rgb * (1.0 - density) + uInk.rgb * density, color.a * (1.0 - density) + density);
if (uSeeds.z > 0.0) {
float near = driftingAt(point, uStyle.w, uScales.z) * uSeeds.z;
drawn = withSeeds(drawn, vec2(near * 0.1, near * 0.16));
}
fragColor = drawn;
}`;export{e as default};