var e=`#version 300 es
precision highp float;
#ifndef DEFLECTION_GLSL
#define DEFLECTION_GLSL
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
float fieldDeflection(float b) {
float x = min(B_CRIT / max(b, B_CRIT), FIELD_DEFLECTION_REACH);
float at = (1.0 - sqrt(1.0 - x)) / (1.0 - sqrt(1.0 - FIELD_DEFLECTION_REACH)) *
float(FIELD_DEFLECTION_SAMPLES - 1);
int index = min(int(at), FIELD_DEFLECTION_SAMPLES - 2);
float residual = mix(FIELD_DEFLECTION[index], FIELD_DEFLECTION[index + 1], at - float(index));
return residual - log(1.0 - x);
}
#endif
#ifndef DISK_GLSL
#define DISK_GLSL
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
#define BODIES 40
#define BIN_BITS 10
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uPage;
uniform sampler2D uSentence;
uniform sampler2D uBins;
uniform vec4 uTiles;
uniform vec4 uFrame;
uniform vec4 uHole;
uniform vec4 uInk;
uniform vec4 uEmber;
uniform vec4 uLens;
uniform vec4 uPlace;
uniform vec4 uPose;
uniform vec4 uAtlas;
#define FIELDS 5
uniform vec4 uBodies[BODIES * FIELDS];
const float GRAZE = 0.26;
float onSheet(float turned) {
return uFrame.z * sin(turned) / max(abs(cos(turned)), GRAZE);
}
void main() {
vec2 point = vUv * uFrame.xy;
vec2 theta = point - uHole.xy;
float rho = length(theta);
vec2 axis = rho > 1e-4 ? theta / rho : vec2(1.0, 0.0);
float view = atan(rho / uFrame.z);
float impact = uFrame.w * sin(view);
float bend = fieldDeflection(impact);
float pixelImpact = uFrame.w * cos(view) / uFrame.z * uEmber.w;
float captured = 1.0 - smoothstep(B_CRIT - pixelImpact, B_CRIT + pixelImpact, impact);
float depth = uLens.x;
vec2 lensed = axis * onSheet(view - depth * bend);
float footprint = max(length(dFdx(lensed)), length(dFdy(lensed)));
vec2 near = uHole.xy + axis * onSheet(view);
vec2 span = uHole.xy + lensed - near;
float spanSquared = max(dot(span, span), 1e-6);
bool bounded = view - depth * bend > -1.5;
ivec2 bin = ivec2(clamp(floor(point / uTiles.x), vec2(0.0), uTiles.yz - 1.0));
uvec4 held = uvec4(texelFetch(uBins, bin, 0) + 0.5);
float transmit = 1.0;
vec3 color = vec3(0.0);
if (all(equal(held, uvec4(0u)))) {
fragColor = vec4(0.0);
return;
}
if (uLens.y > 0.5) {
vec2 disk = diskOfPage(point, uPlace, uPose);
float radius = length(disk);
for (int channel = 0; channel < 4; channel++) {
uint word = held[channel];
if (word == 0u) continue;
for (int bit = 0; bit < BIN_BITS; bit++) {
if ((word & (1u << uint(bit))) == 0u) continue;
int i = channel * BIN_BITS + bit;
vec4 rest = uBodies[i * FIELDS];
vec4 now = uBodies[i * FIELDS + 1];
vec4 shape = uBodies[i * FIELDS + 2];
vec4 light = uBodies[i * FIELDS + 3];
vec4 cell = uBodies[i * FIELDS + 4];
if (radius < shape.z || radius > shape.w) continue;
float turned = now.z + now.w * (turnedAt(radius, shape.y) - now.z);
vec2 home = pageOfDisk(turnedBack(disk, turned) / shape.x, uPlace, uPose);
vec2 q = home - rest.xy;
if (abs(q.x) > rest.z || abs(q.y) > rest.w) continue;
vec2 atlas = light.w < 0.5 ? uAtlas.xy : uAtlas.zw;
vec2 uv = (rest.xy + q + cell.xy) / atlas;
float sheared = now.w * shearAt(radius, shape.y) * radius;
float texels = uEmber.w * sqrt(1.0 + sheared * sheared) / shape.x * uHole.w;
float level = log2(max(texels, 1.0));
float ink = light.w < 0.5 ? textureLod(uPage, uv, level).a : textureLod(uSentence, uv, level).a;
ink *= light.x;
color += transmit * ink * uInk.rgb;
transmit *= 1.0 - ink;
}
}
fragColor = vec4(color, 1.0 - transmit);
return;
}
for (int channel = 0; channel < 4; channel++) {
uint word = held[channel];
if (word == 0u) continue;
for (int bit = 0; bit < BIN_BITS; bit++) {
if ((word & (1u << uint(bit))) == 0u) continue;
int i = channel * BIN_BITS + bit;
vec4 rest = uBodies[i * FIELDS];
vec4 now = uBodies[i * FIELDS + 1];
vec4 shape = uBodies[i * FIELDS + 2];
vec4 light = uBodies[i * FIELDS + 3];
vec4 cell = uBodies[i * FIELDS + 4];
if (bounded) {
vec2 toBody = now.xy - near;
vec2 gap = toBody - span * clamp(dot(toBody, span) / spanSquared, 0.0, 1.0);
if (dot(gap, gap) > light.z * light.z) continue;
}
vec2 beta = uHole.xy + axis * onSheet(view - shape.w * depth * bend);
vec2 v = beta - now.xy;
if (dot(v, v) > light.z * light.z) continue;
v = vec2(now.z * v.x + now.w * v.y, -now.w * v.x + now.z * v.y);
vec2 q = vec2(shape.x * v.x + shape.y * v.y, shape.y * v.x + shape.z * v.y);
if (abs(q.x) > rest.z || abs(q.y) > rest.w) continue;
vec2 atlas = light.w < 0.5 ? uAtlas.xy : uAtlas.zw;
vec2 uv = (rest.xy + q + cell.xy) / atlas;
float stretch = max(abs(shape.x) + abs(shape.y), abs(shape.y) + abs(shape.z));
float texels = mix(uEmber.w, footprint, shape.w) * stretch * uHole.w;
float level = log2(max(texels, 1.0));
float ink = light.w < 0.5 ? textureLod(uPage, uv, level).a : textureLod(uSentence, uv, level).a;
ink *= light.x * (1.0 - captured * shape.w);
vec3 tint = mix(uInk.rgb, uEmber.rgb, light.y);
color += transmit * ink * tint;
transmit *= 1.0 - ink;
}
}
fragColor = vec4(color, 1.0 - transmit);
}`;export{e as default};