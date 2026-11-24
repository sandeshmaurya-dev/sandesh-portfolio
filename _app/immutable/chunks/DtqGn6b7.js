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
#ifndef EMISSION_GLSL
#define EMISSION_GLSL
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
uniform highp sampler3D uNoise;
const float NOISE_PERIOD = 64.0;
float valueNoise(vec3 position) {
vec3 cell = floor(position);
vec3 local = position - cell;
vec3 weight = local * local * local * (local * (local * 6.0 - 15.0) + 10.0);
vec3 wrapped = mod(cell, NOISE_PERIOD);
return textureLod(uNoise, (wrapped + weight + 0.5) / NOISE_PERIOD, 0.0).r;
}
float fbmFiltered(vec3 position, int octaves, float footprint) {
const mat3 TUMBLE =
mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);
float sum = 0.0;
float amplitude = 0.5;
float total = 0.0;
float frequency = 1.0;
for (int octave = 0; octave < 5; octave++) {
if (octave >= octaves) break;
float fade = 1.0 - smoothstep(0.35, 0.9, footprint * frequency);
total += amplitude;
sum += amplitude * (fade > 0.004 ? mix(0.5, valueNoise(position), fade) : 0.5);
position = TUMBLE * position * 2.02;
amplitude *= 0.5;
frequency *= 2.02;
}
return sum / max(total, 1e-5);
}
vec3 blackbodyChroma(float kelvin) {
float temperature = clamp(kelvin, 1000.0, 40000.0);
float inverse = 1.0 / temperature;
float inverse2 = inverse * inverse;
float inverse3 = inverse2 * inverse;
float xCool =
-0.2661239e9 * inverse3 - 0.2343589e6 * inverse2 + 0.8776956e3 * inverse + 0.179910;
float xWarm =
-3.0258469e9 * inverse3 + 2.1070379e6 * inverse2 + 0.2226347e3 * inverse + 0.240390;
float x = temperature < 4000.0 ? xCool : xWarm;
float x2 = x * x;
float x3 = x2 * x;
float yEmber = -1.1063814 * x3 - 1.34811020 * x2 + 2.18555832 * x - 0.20219683;
float yFlame = -0.9549476 * x3 - 1.37418593 * x2 + 2.09137015 * x - 0.16748867;
float yStar = 3.0817580 * x3 - 5.87338670 * x2 + 3.75112997 * x - 0.37001483;
float y = temperature < 2222.0 ? yEmber : (temperature < 4000.0 ? yFlame : yStar);
float safeY = max(y, 1e-4);
vec3 tristimulus = vec3(x / safeY, 1.0, (1.0 - x - y) / safeY);
vec3 rgb = vec3(
dot(tristimulus, vec3(3.2404542, -1.5371385, -0.4985314)),
dot(tristimulus, vec3(-0.9692660, 1.8760108, 0.0415560)),
dot(tristimulus, vec3(0.0556434, -0.2040259, 1.0572252))
);
rgb -= min(min(rgb.r, min(rgb.g, rgb.b)), 0.0);
return rgb / max(luminance(rgb), 1e-4);
}
float visibleFraction(float kelvin) {
float x = 20554.0 / max(kelvin, 1.0);
return 0.15399 * exp(-x) * (x * (x * (x + 3.0) + 6.0) + 6.0);
}
#endif
#ifndef ATLAS_GLSL
#define ATLAS_GLSL
uniform highp sampler2DArray uTrajectory;
uniform highp sampler2DArray uApproach;
uniform float uObserverRow;
uniform vec2 uAngleAxis;
struct Path {
float total;
float start;
float column;
float layer;
bool captured;
};
float atlasColumn(float impact, bool captured) {
float offset = captured ? max(1.0 - impact / B_CRIT, ATLAS_EDGE_NEAR)
: max(impact / B_CRIT - 1.0, ATLAS_EDGE_NEAR);
float decades = captured ? ATLAS_CAPTURED_DECADES : ATLAS_EDGE_DECADES;
return log(offset / ATLAS_EDGE_NEAR) / decades;
}
Path atlasPath(float impact) {
bool captured = impact < B_CRIT;
float column = atlasColumn(impact, captured);
float layer = captured ? 1.0 : 0.0;
vec2 sample_ = texture(uApproach, vec3(column, uObserverRow, layer)).rg;
return Path(sample_.g, sample_.r * sample_.g, column, layer, captured);
}
float atlasRadius(Path path, float psi) {
float fraction = psi / path.total;
float folded = path.captured ? fraction : 1.0 - abs(1.0 - fraction);
if (folded <= 0.0 || folded > 1.0) return 0.0;
float row = folded * uAngleAxis.x + uAngleAxis.y;
return texture(uTrajectory, vec3(path.column, row, path.layer)).r;
}
float atlasEscape(Path path, bool inbound) {
return inbound ? 2.0 * path.total - path.start : path.start;
}
float atlasSlope(float u, float impact) {
float inverseB2 = 1.0 / (impact * impact);
return sqrt(max(inverseB2 - u * u + u * u * u, 0.0));
}
float weakDeflection(float impact) {
float w = 1.0 / impact;
return w * (2.0 + w * (2.945243 + w * (5.333333 + w * 10.63194)));
}
#endif
uniform vec2 uResolution;
uniform vec3 uCameraPosition;
uniform mat3 uCameraBasis;
uniform float uTanHalfFov;
uniform vec2 uLensShift;
uniform float uCameraRadius;
uniform float uPixelAngle;
const float SPIRAL_PATTERN_RATE = 0.0075;
const float SHEAR_REFERENCE_RATE = 0.121268;
const float SHEAR_SATURATION = 9.0;
const float WINDING_SHARPNESS = 1.0;
uniform float uShadowAngle;
uniform float uBlueshift;
uniform vec3 uDiskNormal;
uniform vec3 uDiskTangent;
uniform float uDiskOuterRadius;
uniform float uDiskPhase;
uniform float uDiskIntensity;
uniform float uRingIntensity;
uniform float uPeakTemperature;
uniform float uPeakVisible;
uniform float uChroma;
uniform float uColorScale;
uniform float uTurbulence;
uniform float uDiskOpacity;
#ifdef VARIANT_STELLAR
uniform float uStreamIntensity;
uniform float uStreamPhase;
uniform float uLineEmission;
uniform vec3 uLineWarm;
uniform vec3 uLineCool;
#endif
#if defined(READING_VOID) && defined(VARIANT_STELLAR)
uniform float uNebula;
#endif
uniform vec2 uPointer;
uniform float uPointerStrength;
uniform int uDiskSamples;
layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragSheetCover;
const int CROSSING_LIMIT = 4;
float beam(float value) {
float squared = value * value;
return squared * squared;
}
const float TURBULENCE_AZIMUTHAL = 1.6;
const float TURBULENCE_RADIAL = 8.0;
const float MAX_CHORD = 9.0;
const float FILTER_STRETCH_LIMIT = 110.0;
const float FLARE = 0.6;
const float DISK_SCALE_HEIGHT = 0.39894228;
const float GAUSS_HERMITE_NODE = 1.7320508;
const float GAUSS_HERMITE_CENTER = 0.6666667;
const float GAUSS_HERMITE_WING = 0.1666667;
const float TRAVERSE_LIMIT = 0.22;
const float BAND_RESPONSE = 0.5;
const float PLUNGE_GLOW = 0.34;
const float RIM_MIDPOINT = 0.86;
const float RIM_SHARPNESS = 7.0;
const float RIM_RELIEF = 0.062;
const float EDDY_RATE = 0.5;
const float EDDY_FLOOR = 0.12;
#ifdef VARIANT_STELLAR
const float STREAM_ANCHOR = 1.35;
const float DEBRIS_RADIUS = 11.0;
const float STREAM_WIND = 0.155;
const float STREAM_WIDTH = 0.036;
const float STREAM_CONTRAST = 3.4;
const float STREAM_HEAT = 0.62;
const float STREAM_REACH = 1.6;
const float STREAM_SHOCK_RADIUS = 0.74;
const float STREAM_SHOCK_WIDTH = 0.24;
const float DUST_ONSET = 0.44;
const float DUST_OPACITY = 3.4;
const float STREAM_LIT = 0.68;
const float STREAM_DARK = 0.95;
#endif
#if defined(READING_VOID) && defined(VARIANT_STELLAR)
const float NEBULA_SCALE = 2.6;
const float NEBULA_WARP = 1.35;
vec3 medium(vec3 direction) {
float gain = uBlueshift * uBlueshift;
gain *= gain;
float warp = fbmFiltered(direction * 1.7 + 3.1, 2, 0.0);
vec3 warped = direction * NEBULA_SCALE + vec3(warp, warp * 1.7, -warp * 1.3) * NEBULA_WARP;
float cloud = fbmFiltered(warped, 4, 0.0);
float veil = smoothstep(0.4, 0.86, cloud);
veil *= veil;
float dense = veil * veil;
return (vec3(0.26, 0.45, 1.0) * veil + vec3(1.0, 0.44, 0.26) * dense * 0.7) * uNebula * gain;
}
#endif
struct Launch {
vec3 direction;
float impact;
float bearing;
bool inbound;
};
Launch launchRay(float radius, vec3 radial, vec3 view) {
float lapse = sqrt(max(1.0 - RS / radius, 1e-6));
float outward = dot(view, radial);
vec3 across = view - outward * radial;
float sine = length(across);
Launch launch;
launch.direction = normalize(outward * lapse * radial + across);
launch.impact = radius * sine / lapse;
launch.bearing = acos(clamp(-outward, -1.0, 1.0));
launch.inbound = outward < 0.0;
return launch;
}
float diskWinding(float radius) {
float rigid = uDiskPhase * SHEAR_REFERENCE_RATE;
float free = uDiskPhase * inversesqrt(radius) / radius;
return rigid + SHEAR_SATURATION * tanh((free - rigid) / SHEAR_SATURATION);
}
float diskWinding(float radius, out float shear) {
float rigid = uDiskPhase * SHEAR_REFERENCE_RATE;
float free = uDiskPhase * inversesqrt(radius) / radius;
float differential = free - rigid;
float t = differential / SHEAR_SATURATION;
float bent = tanh(t);
shear = 1.5 * abs(free) / radius * (1.0 - bent * bent);
return rigid + SHEAR_SATURATION * bent;
}
float diskTaper(float radius, float azimuth) {
float drift = azimuth - uDiskPhase * inversesqrt(uDiskOuterRadius) / uDiskOuterRadius;
float relief =
sin(drift * 2.0 + 0.7) * 0.55 + sin(drift * 3.0 - 1.9) * 0.31 + sin(drift * 5.0 + 2.6) * 0.14;
float rim = uDiskOuterRadius * (RIM_MIDPOINT + RIM_RELIEF * relief);
float ratio = radius / rim;
float squared = ratio * ratio;
float fourth = squared * squared;
return exp(-0.6931472 * fourth * squared * ratio);
}
float diskShape(float radius) {
float ratio = R_ISCO / radius;
float root = sqrt(ratio);
float torque = sqrt(sqrt(max(1.0 - root, 0.0)));
float inside = clamp((R_ISCO - radius) / (R_ISCO - PHOTON_SPHERE), 0.0, 1.0);
float plunge = PLUNGE_GLOW * sqrt(inside) * smoothstep(RS, PHOTON_SPHERE, radius);
return root * sqrt(root) * (torque + plunge) / TEMPERATURE_SHAPE_PEAK;
}
#ifdef VARIANT_STELLAR
float streamStrand(float radius, float azimuth) {
float anchor = DEBRIS_RADIUS * STREAM_ANCHOR;
float turns = (log(radius / anchor) / STREAM_WIND + azimuth - uStreamPhase) / TAU;
float offset = abs(fract(turns + 0.5) - 0.5) * TAU * STREAM_WIND;
float across = offset / (STREAM_WIDTH * (0.55 + 0.45 * radius / DEBRIS_RADIUS));
float reach = radius / (DEBRIS_RADIUS * STREAM_REACH);
float reach2 = reach * reach;
float extent =
exp(-0.6931472 * reach2 * reach2 * reach) *
smoothstep(R_ISCO, R_TEMPERATURE_PEAK * 1.6, radius) *
(1.0 - smoothstep(0.6, 1.0, radius / (uDiskOuterRadius * TAPER_REACH)));
return exp(-across * across) * extent;
}
#endif
vec3 diskRadiance(vec3 position, float radius, vec3 travel, int detail, out float opticalDepth) {
opticalDepth = 0.0;
vec3 toObserver = -travel;
vec3 radial = position / radius;
float beta = min(sqrt(MASS / max(radius - RS, 1e-3)), 0.92);
float lorentz = inversesqrt(max(1.0 - beta * beta, 1e-4));
vec3 orbitDirection = normalize(cross(uDiskNormal, radial));
float approach = dot(orbitDirection, toObserver);
float doppler = 1.0 / (lorentz * (1.0 - beta * approach));
float redshift = sqrt(max(1.0 - RS / radius, 1e-3));
float shift = doppler * redshift * uBlueshift;
float beamed = beam(max(shift, 0.0));
float incidence = max(abs(dot(travel, uDiskNormal)), 1e-4);
float flare = pow(radius / R_TEMPERATURE_PEAK, FLARE);
float thickness = flare * DISK_SCALE_HEIGHT;
float path = MAX_CHORD * flare * tanh(1.0 / (incidence * MAX_CHORD));
float reach = min(GAUSS_HERMITE_NODE * thickness / incidence, TRAVERSE_LIMIT * radius);
vec3 alongPlane = travel - dot(travel, uDiskNormal) * uDiskNormal;
float alongLength = length(alongPlane);
vec3 flowDirection = alongLength > 1e-5 ? alongPlane / alongLength : uDiskTangent;
int nodes = (detail > 1 && uDiskSamples > 1 && reach > radius * 0.03) ? 3 : 1;
int octaves = detail > 1 ? 3 : 2;
float pixelWorld = distance(position, uCameraPosition) * uPixelAngle;
float radialShare = abs(dot(flowDirection, radial));
float crossingShear;
diskWinding(radius, crossingShear);
float wound = TURBULENCE_AZIMUTHAL * crossingShear * WINDING_SHARPNESS;
float latticeRadial = TURBULENCE_RADIAL / radius;
float radialRate = sqrt(latticeRadial * latticeRadial + wound * wound);
float rate = mix(TURBULENCE_AZIMUTHAL / radius, radialRate, radialShare);
float footprint = pixelWorld * min(1.0 / incidence, FILTER_STRETCH_LIMIT) * rate;
vec3 bitangent = cross(uDiskNormal, uDiskTangent);
vec3 drift = vec3(0.41, -0.63, 0.29);
float emissivity = 0.0;
float extinction = 0.0;
#ifdef VARIANT_STELLAR
float lineGlow = 0.0;
float shockHeat = 0.0;
#endif
for (int node = 0; node < 3; node++) {
if (node >= nodes) break;
float weight =
nodes == 1 ? 1.0 : (node == 0 ? GAUSS_HERMITE_CENTER : GAUSS_HERMITE_WING);
float offset = node == 0 ? 0.0 : (node == 1 ? reach : -reach);
vec3 point = position + flowDirection * offset;
float pointRadius = max(length(point), RS * 1.02);
float azimuth = atan(dot(point, bitangent), dot(point, uDiskTangent));
float orbits = diskWinding(pointRadius);
float pattern = azimuth - orbits;
float logRadius = log(pointRadius);
float churn = orbits * EDDY_RATE + uDiskPhase * EDDY_FLOOR;
vec3 flow =
vec3(
cos(pattern) * TURBULENCE_AZIMUTHAL,
sin(pattern) * TURBULENCE_AZIMUTHAL,
logRadius * TURBULENCE_RADIAL
) +
drift * churn;
float spiral =
sin(2.0 * (azimuth - uDiskPhase * SPIRAL_PATTERN_RATE + SPIRAL_PITCH * logRadius));
float grain = (fbmFiltered(flow, 3, footprint) * 2.0 - 1.0) * 0.62 + spiral * 0.28;
float density = exp(uTurbulence * grain * 1.5);
float taper = diskTaper(pointRadius, azimuth);
float shape = diskShape(pointRadius);
float material = taper;
float glowing = taper;
float shockGlow = 1.0;
#ifdef VARIANT_STELLAR
float strand = streamStrand(pointRadius, azimuth) * uStreamIntensity;
density *= 1.0 + STREAM_CONTRAST * strand;
material = max(taper, strand);
float arrived =
1.0 - smoothstep(STREAM_LIT, STREAM_DARK, pointRadius / DEBRIS_RADIUS);
glowing = max(taper, strand * arrived);
float shockOffset =
(pointRadius / DEBRIS_RADIUS - STREAM_SHOCK_RADIUS) / STREAM_SHOCK_WIDTH;
float shock = strand * exp(-shockOffset * shockOffset);
shockGlow *= beam(1.0 + STREAM_HEAT * shock);
shockHeat += weight * shock;
#endif
float band = sqrt(visibleFraction(uPeakTemperature * shape) / uPeakVisible);
emissivity += weight * beam(shape) * band * glowing * density * shockGlow;
float opacity = density * material * smoothstep(RS, RS * 1.9, pointRadius) *
mix(PLUNGE_GLOW, 1.0, smoothstep(PHOTON_SPHERE, R_ISCO, pointRadius));
#ifdef VARIANT_STELLAR
float dust = smoothstep(DUST_ONSET * DEBRIS_RADIUS, DEBRIS_RADIUS, pointRadius);
opacity *= mix(1.0, DUST_OPACITY, dust);
float reprocessed = smoothstep(0.3, 0.66, pointRadius / DEBRIS_RADIUS) *
(1.0 - smoothstep(0.8, 1.2, pointRadius / DEBRIS_RADIUS));
lineGlow +=
weight * density * density * glowing * reprocessed / (pointRadius * pointRadius);
#endif
extinction += weight * opacity;
}
float intensity = emissivity * path * beamed * uDiskIntensity;
opticalDepth = uDiskOpacity * extinction * path;
float observed = uPeakTemperature * diskShape(radius) * shift;
#ifdef VARIANT_STELLAR
observed *= uColorScale * (1.0 + STREAM_HEAT * shockHeat);
vec3 tint = mix(vec3(1.0), blackbodyChroma(observed), uChroma);
float hardness = 1.0 - smoothstep(DEBRIS_RADIUS * 0.34, DEBRIS_RADIUS * 0.72, radius);
vec3 lineTint = mix(vec3(1.0), mix(uLineWarm, uLineCool, hardness * 0.5), uChroma);
return tint * intensity + lineTint * (lineGlow * path * beamed * uLineEmission * uDiskIntensity);
#else
vec3 tint = mix(vec3(1.0), blackbodyChroma(observed * uColorScale), uChroma);
return tint * intensity;
#endif
}
void crossDiskStraight(vec3 origin, vec3 direction, inout vec3 radiance, inout float transmittance) {
float denominator = dot(direction, uDiskNormal);
if (abs(denominator) < 1e-5) return;
float distanceAlong = -dot(origin, uDiskNormal) / denominator;
if (distanceAlong <= 0.0) return;
vec3 hit = origin + direction * distanceAlong;
float radius = length(hit);
if (radius <= RS * 1.05 || radius >= uDiskOuterRadius * TAPER_REACH) return;
float opticalDepth;
radiance += diskRadiance(hit, radius, direction, 2, opticalDepth) * transmittance;
transmittance *= exp(-opticalDepth);
}
struct RayResult {
vec3 radiance;
float shadow;
vec3 skyDirection;
float skyWeight;
};
RayResult traceRay(vec3 origin, float originRadius, vec3 radialAxis, Launch launch) {
RayResult result = RayResult(vec3(0.0), 0.0, launch.direction, 0.0);
float transmittance = 1.0;
vec3 direction = launch.direction;
float impact = launch.impact;
vec3 tangentialPart = direction - dot(direction, radialAxis) * radialAxis;
float tangential = length(tangentialPart);
if (tangential < 1e-5) {
if (launch.inbound) {
result.shadow = 1.0;
} else {
result.skyWeight = 1.0;
}
return result;
}
if (!launch.inbound && (originRadius > PHOTON_SPHERE || impact < B_CRIT)) {
crossDiskStraight(origin, direction, result.radiance, transmittance);
result.skyWeight = transmittance;
return result;
}
if (impact > WEAK_FIELD_B) {
float deflection = weakDeflection(impact);
vec3 closestApproach = origin - dot(origin, direction) * direction;
vec3 towardRay = normalize(closestApproach);
result.skyDirection = normalize(direction - towardRay * deflection);
result.skyWeight = 1.0;
return result;
}
vec3 planeAxis = tangentialPart / tangential;
float axialRadial = dot(radialAxis, uDiskNormal);
float axialPlane = dot(planeAxis, uDiskNormal);
float firstCrossing = 1e9;
if (length(vec2(axialRadial, axialPlane)) > 1e-6) {
firstCrossing = atan(axialPlane, axialRadial) + PI * 0.5;
firstCrossing -= PI * floor(firstCrossing / PI);
if (firstCrossing < 1e-5) firstCrossing = PI;
}
Path path = atlasPath(impact);
float taperReach = uDiskOuterRadius * TAPER_REACH;
float travelSign = launch.inbound ? 1.0 : -1.0;
for (int image = 0; image < CROSSING_LIMIT; image++) {
float phi = firstCrossing + float(image) * PI;
float psi = path.start + travelSign * phi;
float crossingU = atlasRadius(path, psi);
if (crossingU <= 0.0) continue;
if (crossingU <= 1.0 / taperReach || crossingU >= 1.0 / (RS * 1.05)) continue;
float crossingRadius = 1.0 / crossingU;
float cosine = cos(phi);
float sine = sin(phi);
vec3 outward = cosine * radialAxis + sine * planeAxis;
vec3 forward = -sine * radialAxis + cosine * planeAxis;
float turning = (psi > path.total && !path.captured) ? -1.0 : 1.0;
float slope = travelSign * turning * atlasSlope(crossingU, impact);
vec3 crossingTravel = normalize(forward - slope * crossingRadius * outward);
float opticalDepth;
result.radiance +=
diskRadiance(
crossingRadius * outward,
crossingRadius,
crossingTravel,
image == 0 ? 2 : 1,
opticalDepth
) *
transmittance;
transmittance *= exp(-opticalDepth);
if (transmittance < 0.005) break;
}
if (path.captured && launch.inbound) {
result.shadow = 1.0;
} else {
float escape = atlasEscape(path, launch.inbound);
result.skyDirection = normalize(cos(escape) * radialAxis + sin(escape) * planeAxis);
result.skyWeight = transmittance;
}
return result;
}
float ringShift(vec3 toRing, vec3 rayDirection) {
vec3 inPlane = toRing - dot(toRing, uDiskNormal) * uDiskNormal;
float extent = length(inPlane);
if (extent < 1e-4) return 1.0;
vec3 orbitDirection = normalize(cross(uDiskNormal, inPlane / extent));
float approach = dot(orbitDirection, -rayDirection);
const float BETA = 0.5;
const float LORENTZ = 1.15470053838;
float doppler = 1.0 / (LORENTZ * (1.0 - BETA * approach));
return doppler * sqrt(1.0 - RS / R_ISCO);
}
void main() {
vec2 screen = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y;
screen -= uLensShift;
vec2 toPointer = screen - uPointer;
screen -= toPointer * uPointerStrength * exp(-dot(toPointer, toPointer) * 2.4);
vec3 view = normalize(uCameraBasis * vec3(screen * uTanHalfFov, 1.0));
vec3 radialAxis = uCameraPosition / uCameraRadius;
Launch launch = launchRay(uCameraRadius, radialAxis, view);
vec3 rayDirection = launch.direction;
RayResult ray = traceRay(uCameraPosition, uCameraRadius, radialAxis, launch);
vec3 radiance = ray.radiance;
#if defined(READING_VOID) && defined(VARIANT_STELLAR)
radiance += medium(ray.skyDirection) * ray.skyWeight;
#endif
float margin = launch.bearing - uShadowAngle;
float marginFootprint = max(fwidth(margin), 1e-5);
float outsideShadow = smoothstep(-marginFootprint, marginFootprint, margin);
float alongRay = dot(uCameraPosition, rayDirection);
vec3 closestApproach = uCameraPosition - alongRay * rayDirection;
float impact =
uCameraRadius > PHOTON_SPHERE && !launch.inbound ? 1e4 : launch.impact;
float impactFootprint = max(fwidth(impact), 1e-4);
float firstOffset = B_CRIT * RING_SPACING * exp(-RING_LYAPUNOV);
float stackOffset = B_CRIT * RING_SPACING * exp(-2.0 * RING_LYAPUNOV);
float firstWidth = max(impactFootprint * 1.1, firstOffset * 0.85);
float stackWidth = max(impactFootprint * 1.1, 0.022);
float firstFalloff = (impact - B_CRIT - firstOffset) / firstWidth;
float stackFalloff = (impact - B_CRIT - stackOffset) / stackWidth;
float ring = exp(-firstFalloff * firstFalloff) * 0.62 + exp(-stackFalloff * stackFalloff);
if (ring > 1e-4) {
float shift = ringShift(normalize(closestApproach), rayDirection);
float ringTemperature = uPeakTemperature * shift * uColorScale;
vec3 tint = mix(vec3(1.0), blackbodyChroma(ringTemperature), uChroma);
radiance += tint * (ring * pow(shift, 2.2) * uRingIntensity * outsideShadow);
}
float feather = exp(-max(margin, 0.0) / (uShadowAngle * 0.11));
float shadow = max(1.0 - outsideShadow, feather * 0.5);
fragColor = vec4(radiance, shadow);
fragSheetCover = vec4(ray.skyWeight, 0.0, 0.0, 1.0);
}`;export{e as default};