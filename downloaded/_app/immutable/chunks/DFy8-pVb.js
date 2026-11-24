var e=`#version 300 es
precision highp float;
precision highp int;
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
#ifndef HDR_GLSL
#define HDR_GLSL
const float HDR_RANGE = 24.0;
vec3 hdrDecode(vec4 texel) {
return texel.rgb * texel.rgb * HDR_RANGE;
}
vec4 hdrEncode(vec3 color, float alpha) {
return vec4(sqrt(clamp(color, 0.0, HDR_RANGE) / HDR_RANGE), alpha);
}
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uPointer;
uniform float uIgnite;
uniform float uDistance;
uniform vec2 uLensShift;
uniform highp sampler2D uClouds;
uniform float uExcite;
uniform int uStarLayers;
layout(location = 0) out vec4 fragColor;
const float DISK_RADIUS = 10.0;
const float PATTERN_RATE = 0.0065;
const float ORBIT_SHARE = 0.34;
const float BAR_ANGLE = 0.44;
const float BAR_LENGTH = 2.9;
const float BAR_WIDTH = 0.72;
const float ARM_ROOT = 2.7;
const float ARM_WIND = 3.0;
const float MINOR_WEIGHT = 0.36;
const float MINOR_ROOT = 3.9;
const float RING_RADIUS = 3.05;
const float RING_WIDTH = 0.62;
vec4 plate(vec2 p, float footprint) {
float size = float(textureSize(uClouds, 0).x);
return textureLod(uClouds, p, max(0.0, log2(max(footprint * size, 1.0))));
}
vec4 combTap(vec2 coordinate, mat2 gradient) {
return textureGrad(uClouds, coordinate, gradient[0], gradient[1]);
}
float crest(float phase, float width, float pixel) {
return exp((cos(phase) - 1.0) / (width + pixel * pixel));
}
float stars(vec2 p, float footprint, float threshold) {
vec2 cell = floor(p);
uvec2 key = uvec2(ivec2(cell) + 16384);
vec2 center = vec2(hash11(uvec3(key, 7u)), hash11(uvec3(key, 19u)));
float seed = hash11(uvec3(key, 31u));
vec2 d = fract(p) - 0.15 - center * 0.7;
float intrinsic = 0.03 + seed * seed * 0.05;
float radius2 = intrinsic * intrinsic + footprint * footprint * 0.32;
return exp(-dot(d, d) / radius2) * step(threshold, seed) * intrinsic * intrinsic / radius2;
}
void main() {
vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y * 0.5;
uv -= uLensShift * 0.5;
vec2 screen = rot2(0.34 - uPointer.x * 0.03) * uv;
float inclination = 0.94 + uPointer.y * 0.02;
float cotangent = sqrt(1.0 - inclination * inclination) / inclination;
float perspective = max(1.6 - screen.y * cotangent * 0.5, 0.8);
vec2 q = screen * uDistance / (perspective * max(uIgnite, 0.01));
q.y /= inclination;
float footprint = max(length(dFdx(q)), length(dFdy(q)));
float r = length(q);
if (r > DISK_RADIUS * 1.55) {
fragColor = hdrEncode(vec3(0.0), 1.0);
return;
}
vec2 orbit = rot2(-uTime * PATTERN_RATE) * vec2(-q.x, q.y);
float angle = atan(orbit.y, orbit.x);
float angularPixel = footprint * 6.5 / max(r, 1.0);
vec4 broad = plate(orbit * 0.043 + vec2(0.13, 0.47), footprint * 0.043);
vec4 cloud = plate(rot2(0.9) * orbit * 0.15 + (broad.rg - 0.5) * 0.09, footprint * 0.15);
vec4 weave = plate(rot2(-0.52) * orbit * 0.36 + (cloud.ra - 0.5) * 0.05, footprint * 0.36);
vec4 fine = plate(rot2(0.31) * orbit * 0.92 + vec2(0.61, 0.23), footprint * 0.92);
vec4 grain = plate(rot2(1.93) * orbit * 2.4 + vec2(0.27, 0.71), footprint * 2.4);
float edge = DISK_RADIUS + (broad.r - 0.5) * 1.2;
float envelope = 1.0 - smoothstep(edge - 5.0, edge + 1.6, r);
float disk = exp(-r / 3.4) * envelope;
float logRadius = log(max(r, 0.5) / ARM_ROOT);
float disturbance = (broad.r - 0.5) * 0.5 + (cloud.g - 0.5) * 0.22;
float psi = angle - BAR_ANGLE - ARM_WIND * logRadius + disturbance;
float armStart = smoothstep(ARM_ROOT * 0.85, ARM_ROOT * 1.25, r);
float minorStart = smoothstep(MINOR_ROOT, MINOR_ROOT + 1.6, r);
float width = 0.34 + cloud.b * 0.16;
float pixel = angularPixel * 2.0;
float major = crest(2.0 * psi, width, pixel) * armStart;
float minorPhase = 2.0 * psi + PI - 0.35 + (weave.r - 0.5) * 0.6;
float minor = crest(minorPhase, width * 0.65, pixel) * minorStart * MINOR_WEIGHT;
float swell = max(crest(2.0 * psi, 0.9, pixel), crest(minorPhase, 0.7, pixel) * 0.35) * armStart;
float combZone = smoothstep(1.3, 2.6, r);
vec2 orbitDx = dFdx(orbit);
vec2 orbitDy = dFdy(orbit);
float r2 = max(r * r, 0.25);
vec2 angleGrad = vec2(orbit.x * orbitDx.y - orbit.y * orbitDx.x, orbit.x * orbitDy.y - orbit.y * orbitDy.x) / r2;
vec2 logGrad = vec2(dot(orbit, orbitDx), dot(orbit, orbitDy)) / r2;
vec2 phaseGrad = angleGrad - ARM_WIND * logGrad;
vec4 strands = combTap(
vec2(psi / PI * 3.0, logRadius * 0.34 + 0.37),
mat2(phaseGrad.x / PI * 3.0, logGrad.x * 0.34, phaseGrad.y / PI * 3.0, logGrad.y * 0.34)
);
vec4 fibers = combTap(
vec2(psi / PI * 8.0 + 0.5, logRadius * 0.9 + 0.11),
mat2(phaseGrad.x / PI * 8.0, logGrad.x * 0.9, phaseGrad.y / PI * 8.0, logGrad.y * 0.9)
);
float combed = mix(0.5, strands.r * 0.55 + fibers.a * 0.45, combZone);
float clump = smoothstep(0.2, 0.85, cloud.r * 0.5 + combed * 0.3 + fine.r * 0.2);
float arms = (major + minor) * (0.5 + clump * 0.85);
float laneOffset = 0.44 + (cloud.a - 0.5) * 0.3;
float lanePhase = 2.0 * psi + laneOffset;
float lanes = crest(lanePhase, 0.2 + cloud.g * 0.12, pixel) * armStart
+ crest(minorPhase + laneOffset, 0.12, pixel) * minorStart * 0.55;
float fibrous = 0.35 + smoothstep(0.25, 0.8, strands.a * 0.5 + fibers.r * 0.5) * 1.15;
float broken = smoothstep(0.12, 0.62, cloud.g * 0.75 + broad.g * 0.25);
float spurs = pow(fibers.g, 2.5) * crest(lanePhase + 0.55, 0.55, pixel) * armStart * 0.5;
vec2 barFrame = rot2(-BAR_ANGLE) * orbit;
float barLanes = exp(-pow((abs(barFrame.y) - BAR_WIDTH * 0.5) / 0.2, 2.0))
* smoothstep(BAR_LENGTH * 1.3, BAR_LENGTH * 0.3, abs(barFrame.x))
* smoothstep(-0.4, 0.8, barFrame.x * sign(barFrame.y));
float innerSpiral = crest(
2.0 * (angle - BAR_ANGLE - ARM_WIND * 1.45 * log(max(r, 0.5) / 2.0)) + (cloud.g - 0.5) * 1.6,
0.3,
pixel
);
float ring = exp(-pow((r - RING_RADIUS) / (RING_WIDTH * 2.4), 2.0)) * smoothstep(0.9, 1.9, r);
float veil = smoothstep(0.45, 0.9, fibers.a) * combZone * envelope;
float dust = lanes * fibrous * broken * 3.4
+ spurs * 1.8
+ barLanes * 0.4 * (0.5 + cloud.g)
+ ring * (innerSpiral * 1.3 + 0.15) * (0.35 + strands.g * 0.9)
+ veil * (0.22 + swell * 0.4);
dust *= smoothstep(0.7, 1.6, r);
vec3 extinction = exp(-dust * 1.2 * GALAXY_DUST_REDDENING);
float barWarp = (cloud.r - 0.5) * 0.12;
float bar = exp(
-pow(abs(barFrame.x) / BAR_LENGTH, 2.2) - pow(abs(barFrame.y + barWarp) / BAR_WIDTH, 1.8)
);
float bulge = exp(-length(vec2(barFrame.x * 0.7, barFrame.y)) / 0.55);
float nucleus = exp(-r * r * 9.0);
float innerDisk = exp(-pow(r / 3.9, 2.2));
float warmth = 1.0 - smoothstep(2.2, 5.6, r);
float outskirts = smoothstep(5.5, 9.8, r);
vec3 armColor = mix(mix(GALAXY_ARM, GALAXY_OUTER, outskirts), GALAXY_INNER, warmth * 0.55);
vec3 crestColor = mix(armColor, GALAXY_YOUNG, smoothstep(0.35, 1.0, major + minor) * 0.55 * (1.0 - warmth));
vec3 diskColor = mix(mix(GALAXY_ARM, GALAXY_HALO, outskirts * 0.7), GALAXY_INNER, warmth);
float glow = (exp(-r / 2.8) * 0.7 + exp(-r / 5.0) * 0.08) * envelope;
float mottling = (0.78 + (cloud.r - 0.5) * 0.3) * (0.8 + combed * 0.4);
vec3 light = vec3(0.0);
light += diskColor * glow * (0.16 + swell * 1.2) * mottling;
light += crestColor * arms * envelope * exp(-r / 9.0) * 0.86 * (0.72 + combed * 0.56) * (0.9 + grain.r * 0.2);
light += GALAXY_INNER * innerDisk * 0.27 * (0.7 + cloud.r * 0.3 + combed * 0.3);
light += GALAXY_BAR * (bar * 1.3 + bulge * 0.26) * (0.8 + cloud.r * 0.25 + fine.r * 0.15);
light += GALAXY_NUCLEUS * (nucleus * (1.1 + uExcite * 1.0) + bulge * 0.36);
light *= extinction;
float birth = crest(lanePhase - 0.3, 0.1, pixel) * armStart
+ crest(minorPhase + laneOffset - 0.3, 0.09, pixel) * minorStart * 0.8
+ exp(-pow((abs(barFrame.x) - BAR_LENGTH * 1.05) / 0.5, 2.0)) * exp(-barFrame.y * barFrame.y * 2.0) * 0.6;
birth *= smoothstep(0.3, 0.7, broad.b * 0.5 + cloud.b * 0.5);
float knotsCoarse = plate(rot2(2.4) * orbit * 0.11 + vec2(0.05, 0.4), footprint * 0.11).b;
float knotsFine = plate(rot2(-0.8) * orbit * 0.27 + vec2(0.72, 0.15), footprint * 0.27).b;
float regions = pow(smoothstep(0.42, 0.92, knotsCoarse), 2.0) * 1.6
+ pow(smoothstep(0.5, 0.95, knotsFine), 2.4) * 1.2;
regions *= 0.55 + strands.b * 0.9;
float excitement = 1.0 + uExcite * 1.4;
vec3 nebulae = GALAXY_NEBULA * regions * birth * envelope * smoothstep(2.0, 3.4, r) * 1.5 * excitement;
light += nebulae * sqrt(extinction);
float material = uTime * ORBIT_SHARE / max(r, 0.55);
float sheared = footprint * sqrt(1.0 + material * material * 0.01);
vec2 stellar = rot2(-uTime * ORBIT_SHARE * 0.03 / max(r * 0.2, 0.5)) * q;
float density = envelope * (0.05 + arms * 0.9 + bar * 0.4 + disk * 0.6);
float points = stars(stellar * 7.4, sheared * 7.4, 0.55) * 1.3;
points += stars(rot2(0.73) * stellar * 16.7 + 19.7, sheared * 16.7, 0.5) * 1.3;
if (uStarLayers > 2) points += stars(rot2(-1.1) * stellar * 33.1 + 51.3, sheared * 33.1, 0.46) * 1.5;
vec3 starColor = mix(GALAXY_YOUNG, GALAXY_NUCLEUS, smoothstep(0.35, 0.75, fine.r) * (0.4 + warmth * 0.6));
light += starColor * points * density * extinction * 3.2;
float clusters = stars(rot2(0.4) * stellar * 4.1 + 7.3, sheared * 4.1, 0.9);
light += GALAXY_YOUNG * clusters * (major + minor) * envelope * extinction * (1.8 + uExcite * 1.6);
light += GALAXY_HALO * exp(-r / 5.5) * 0.03 * (0.7 + broad.r * 0.6) * (1.0 - smoothstep(DISK_RADIUS * 1.2, DISK_RADIUS * 1.5, r));
vec2 satellite = rot2(0.5) * (q - vec2(-7.6, 6.9));
light += GALAXY_NUCLEUS * exp(-dot(satellite * vec2(1.0, 1.9), satellite * vec2(1.0, 1.9)) * 3.2) * 0.42;
light += GALAXY_NUCLEUS * exp(-dot(satellite, satellite) * 0.9) * 0.025;
fragColor = hdrEncode(max(light, vec3(0.0)) * uIgnite, 1.0);
}`;export{e as default};