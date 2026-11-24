var e=`#version 300 es
precision highp float;
#if !defined(READ_PAPER) && !defined(READ_VOID)
#define READ_PAPER
#endif
#if !defined(DRAW_MONOCHROME) && !defined(DRAW_STELLAR)
#define DRAW_MONOCHROME
#endif
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
#ifndef WINDOWS_GLSL
#define WINDOWS_GLSL
uniform float uWindowCell;
uniform vec4 uWindowOpen[6];
uniform vec4 uHeldWindow;
const float WINDOW_COLUMNS = 6.0;
const float WINDOW_ROWS = 4.0;
const float WINDOW_EDGE = 0.22;
float windowOpenness(int index) {
vec4 packed = uWindowOpen[index >> 2];
int lane = index & 3;
return lane == 0 ? packed.x : lane == 1 ? packed.y : lane == 2 ? packed.z : packed.w;
}
vec2 windowIris(vec2 local, float open, float unit) {
float edge = max(abs(local.x), abs(local.y));
float reach = 0.5 * open;
float aperture = 1.0 - smoothstep(reach - unit, reach, edge);
float contour = smoothstep(reach - unit * 2.2, reach - unit * 0.4, edge) * aperture;
return vec2(aperture, contour);
}
vec2 heldWindowAt(vec2 cover, float pixel) {
if (uHeldWindow.w <= 0.002) return vec2(0.0);
float cell = max(uWindowCell, 1e-4);
vec2 d = (cover - uHeldWindow.xy) / cell;
float c = cos(uHeldWindow.z);
float s = sin(uHeldWindow.z);
vec2 local = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
if (max(abs(local.x), abs(local.y)) > 0.75) return vec2(0.0);
return windowIris(local, uHeldWindow.w, pixel / cell);
}
vec2 fieldWindowAt(vec2 cover, float pixel) {
vec2 grid = cover / max(uWindowCell, 1e-4) + vec2(WINDOW_COLUMNS, WINDOW_ROWS) * 0.5;
if (grid.x < 0.0 || grid.x >= WINDOW_COLUMNS || grid.y < 0.0 || grid.y >= WINDOW_ROWS) {
return vec2(0.0);
}
int index = (int(WINDOW_ROWS) - 1 - int(grid.y)) * int(WINDOW_COLUMNS) + int(grid.x);
float open = windowOpenness(index);
if (open <= 0.002) return vec2(0.0);
return windowIris(fract(grid) - 0.5, open, pixel / max(uWindowCell, 1e-4));
}
vec2 windowAt(vec2 cover, float pixel) {
return max(fieldWindowAt(cover, pixel), heldWindowAt(cover, pixel));
}
vec2 windowBlur(vec2 resolution) {
return uWindowCell * 0.12 * resolution.y / (2.0 * resolution);
}
#endif
#ifndef FIELD_GLSL
#define FIELD_GLSL
#ifndef DEFLECTION_GLSL
#define DEFLECTION_GLSL
float fieldDeflection(float b) {
float x = min(B_CRIT / max(b, B_CRIT), FIELD_DEFLECTION_REACH);
float at = (1.0 - sqrt(1.0 - x)) / (1.0 - sqrt(1.0 - FIELD_DEFLECTION_REACH)) *
float(FIELD_DEFLECTION_SAMPLES - 1);
int index = min(int(at), FIELD_DEFLECTION_SAMPLES - 2);
float residual = mix(FIELD_DEFLECTION[index], FIELD_DEFLECTION[index + 1], at - float(index));
return residual - log(1.0 - x);
}
#endif
uniform float uField;
uniform float uPulse;
uniform float uGridPitch;
uniform float uLineWidth;
uniform float uFieldDistance;
const float FIELD_GRAZE = 0.26;
vec4 fieldLensAt(vec2 screen, float distance) {
float radius = length(screen);
float view = atan(radius * FIELD_TAN_HALF_FOV);
float impact = distance * sin(view);
float turned = view - fieldDeflection(impact);
float reach = sin(turned) / (max(abs(cos(turned)), FIELD_GRAZE) * FIELD_TAN_HALF_FOV);
vec2 sheet = screen * (reach / max(radius, 1e-6));
float bent = 1.0 - smoothstep(2.0, 12.5, impact);
float held = smoothstep(B_CRIT, B_CRIT * 1.02, impact);
return vec4(sheet, bent, held);
}
vec4 fieldLens(vec2 screen) {
return fieldLensAt(screen, uFieldDistance);
}
float fieldRuling(vec2 sheet) {
vec2 cell = sheet / max(uGridPitch, 0.02);
vec2 footprint = max(fwidth(cell) * uLineWidth, vec2(1e-4));
vec2 grid = abs(fract(cell + 0.5) - 0.5) / footprint;
float line = 1.0 - min(min(grid.x, grid.y), 1.0);
vec2 share = min(footprint, vec2(1.0));
float mean = 1.0 - (1.0 - share.x) * (1.0 - share.y);
return mix(line, mean, smoothstep(0.35, 0.9, max(footprint.x, footprint.y)));
}
vec2 fieldFront(vec2 screen) {
float radius = length(screen) * 0.5;
float front = uField * 1.15;
float reveal = 1.0 - smoothstep(front - 0.24, front, radius);
float edge = exp(-pow((radius - front) * 34.0, 2.0)) * uPulse;
return vec2(reveal, edge);
}
#endif
#ifndef BURN_GLSL
#define BURN_GLSL
const float BURN_SOFTNESS = 0.42;
const float BURN_WARP = 0.07;
float burnt(vec2 cover, float world, float origin, float farthest) {
float front = mix(origin, farthest + BURN_SOFTNESS, sqrt(world));
float angle = atan(cover.y, cover.x);
float reach = length(cover) *
(1.0 + BURN_WARP * sin(angle * 3.0 + 1.7) * sin(angle * 2.0 - world * 3.0));
reach += (interleavedGradientNoise(gl_FragCoord.xy) - 0.5) * BURN_SOFTNESS * 0.3;
return 1.0 - smoothstep(front - BURN_SOFTNESS, front, reach);
}
#endif
uniform sampler2D uBloomNear;
uniform sampler2D uBloomFar;
uniform vec2 uResolution;
uniform float uTime;
uniform float uExposure;
uniform vec2 uBloomWeights;
uniform vec2 uOpticalAxis;
uniform float uShadowUv;
uniform float uGrain;
uniform float uVignette;
uniform float uPresence;
uniform vec3 uInk;
uniform vec3 uInkKey;
uniform float uDensityScale;
uniform int uStrata;
uniform vec3 uStratumWeight[SPECTRUM_TAPS];
uniform float uStratumOffset[SPECTRUM_TAPS];
#ifdef READ_VOID
uniform vec3 uVoid;
uniform float uSwallow;
#endif
#if defined(READ_PAPER) && defined(READ_VOID)
uniform float uWorld;
#endif
#ifdef DRAW_MONOCHROME
uniform float uDispersion;
#endif
#if defined(DRAW_MONOCHROME) && defined(READ_PAPER)
uniform sampler2D uScene;
uniform sampler2D uSheetCover;
uniform float uInkWarmth;
uniform float uProcess;
uniform vec3 uInkSecondary;
uniform float uInkAxis;
uniform vec3 uPaperBleed;
#endif
#if defined(DRAW_MONOCHROME) && defined(READ_VOID)
uniform sampler2D uVoidScene;
uniform sampler2D uVoidCover;
#endif
#ifdef DRAW_STELLAR
uniform sampler2D uStellarScene;
uniform sampler2D uStellarCover;
uniform float uStellarDispersion;
uniform vec3 uHoldDye;
uniform vec3 uHoldKey;
uniform vec3 uHoldNeon;
uniform float uKindle;
#endif
#if defined(DRAW_MONOCHROME) && defined(DRAW_STELLAR)
uniform float uCondense;
#endif
in vec2 vUv;
layout(location = 0) out vec4 fragColor;
const float VOID_DENSITY = 4.2;
const float LIGHT_DENSITY_MAX = 2.5;
const float LIGHT_DENSITY_GAIN = 4.2;
const float PAPER_EXPOSURE = 0.45;
const float INK_TINT_FLOOR = 0.35;
const float INK_TINT_CEILING = 0.95;
const float PROCESS_GAIN = 3.2;
vec3 bloomAt(vec2 uv) {
return texture(uBloomNear, uv).rgb * uBloomWeights.x + texture(uBloomFar, uv).rgb * uBloomWeights.y;
}
vec2 dispersionAlong(float spread) {
vec2 radial = vUv - uOpticalAxis;
float reach = length(radial);
float t = reach / max(uShadowUv, 1e-3);
return radial / max(reach, 1e-5) * (spread * 2.0 * t / (1.0 + t * t));
}
vec3 dispersed(sampler2D scene, vec2 along) {
if (uStrata <= 1) return texture(scene, vUv).rgb;
float jitter = (interleavedGradientNoise(gl_FragCoord.xy) - 0.5) / float(uStrata);
vec3 radiance = vec3(0.0);
for (int k = 0; k < SPECTRUM_TAPS; k++) {
if (k >= uStrata) break;
radiance += uStratumWeight[k] * texture(scene, vUv + along * (uStratumOffset[k] + jitter)).rgb;
}
return radiance;
}
vec3 throughWindows(sampler2D scene, vec3 radiance, vec3 bloom, vec2 aperture) {
if (aperture.x > 0.0) {
vec2 spread = windowBlur(uResolution);
vec3 soft =
textureLod(scene, vUv + vec2(spread.x, 0.0), 0.0).rgb +
textureLod(scene, vUv - vec2(spread.x, 0.0), 0.0).rgb +
textureLod(scene, vUv + vec2(0.0, spread.y), 0.0).rgb +
textureLod(scene, vUv - vec2(0.0, spread.y), 0.0).rgb;
radiance = mix(radiance, soft * 0.25, aperture.x);
radiance += vec3(WINDOW_EDGE) * aperture.y;
}
return radiance;
}
#ifdef READ_VOID
vec3 rulingInLight(vec2 cover, float seen) {
if (uField <= 0.001 && uPulse <= 0.001) return vec3(0.0);
vec4 lens = fieldLens(cover);
vec2 front = fieldFront(cover);
float lines = fieldRuling(lens.xy) * lens.w * front.x * seen;
return vec3(0.10, 0.095, 0.15) * lines * 0.10 + vec3(0.62, 0.56, 0.78) * front.y * seen;
}
#endif
#if defined(DRAW_MONOCHROME) && defined(READ_PAPER)
vec3 pressPaper(vec3 bloom, vec2 cover, vec2 aperture, float vignette) {
vec3 radiance = dispersed(uScene, dispersionAlong(uDispersion));
radiance += bloom;
radiance = throughWindows(uScene, radiance, bloom, aperture);
float shadow = texture(uScene, vUv).a;
vec3 exposed = radiance * vignette * uPresence;
vec3 lit = linearToSrgb(toneMapColor(exposed * uDensityScale, uExposure * PAPER_EXPOSURE));
float energy = luminance(lit);
float warmth = clamp(uInkAxis * (lit.r - lit.b) / max(lit.r + lit.b, 1e-3), 0.0, 1.0);
float lightDensity =
LIGHT_DENSITY_MAX * (1.0 - exp(-energy * LIGHT_DENSITY_GAIN / LIGHT_DENSITY_MAX));
float tint = mix(INK_TINT_FLOOR, INK_TINT_CEILING, warmth) * uInkWarmth;
float heatDensity = lightDensity * tint;
float keyDensity = lightDensity * (1.0 - tint);
vec3 paper = vec3(1.0) - uPaperBleed * warmth * uInkWarmth * energy * uPresence;
vec3 duotone =
paper *
exp(
-(keyDensity + shadow * uPresence * VOID_DENSITY) * uInkKey -
heatDensity * uInkSecondary
);
vec3 hue = lit / max(max(lit.r, max(lit.g, lit.b)), 1e-4);
vec3 absorb = vec3(1.0) - hue;
vec3 plates = 1.0 + PROCESS_GAIN * absorb;
plates /= max((plates.r + plates.g + plates.b) / 3.0, 1e-4);
vec3 process = paper * exp(-(lightDensity * plates + shadow * uPresence * VOID_DENSITY * uInkKey));
vec3 color = mix(duotone, process, uProcess);
if (uField > 0.001 || uPulse > 0.001) {
vec4 lens = fieldLens(cover);
float spread = lens.z * 0.02;
vec3 ruling = vec3(
fieldRuling(lens.xy * (1.0 - spread)),
fieldRuling(lens.xy),
fieldRuling(lens.xy * (1.0 + spread))
) * (1.0 - lens.z * 0.30) * lens.w;
vec2 front = fieldFront(cover);
vec3 mark = (ruling * front.x * 0.14 + front.y * 0.5) * texture(uSheetCover, vUv).r;
color *= linearToSrgb(mix(vec3(1.0), uInk, mark));
}
return color;
}
#endif
#if defined(DRAW_MONOCHROME) && defined(READ_VOID)
vec3 telescope(vec3 bloom, vec2 cover, vec2 aperture, float vignette) {
vec3 radiance = dispersed(uVoidScene, dispersionAlong(uDispersion)) + bloom;
radiance = throughWindows(uVoidScene, radiance, bloom, aperture);
float shadow = texture(uVoidScene, vUv).a * uPresence;
vec3 exposed = radiance * vignette * uPresence * (1.0 - shadow * uSwallow);
vec3 seen = uVoid * (1.0 - shadow) + toneMapColor(exposed, uExposure);
seen += rulingInLight(cover, texture(uVoidCover, vUv).r) * (1.0 - uSwallow);
return linearToSrgb(seen);
}
#endif
#ifdef DRAW_STELLAR
float softCeiling(float x, float ceiling) {
return ceiling * (1.0 - exp(-x / ceiling));
}
vec3 stellarExposed(vec3 bloom, vec2 aperture, float vignette) {
vec3 radiance = dispersed(uStellarScene, dispersionAlong(uStellarDispersion)) + bloom;
radiance = throughWindows(uStellarScene, radiance, bloom, aperture);
return radiance * vignette * uPresence;
}
#ifdef READ_PAPER
float filament(vec3 sharp) {
vec2 reach = EXCITED_FILAMENT_RADIUS / vec2(textureSize(uStellarScene, 0));
float around =
luminance(textureLod(uStellarScene, vUv + reach * vec2(1.0, 0.0), 0.0).rgb) +
luminance(textureLod(uStellarScene, vUv + reach * vec2(0.5, 0.866), 0.0).rgb) +
luminance(textureLod(uStellarScene, vUv + reach * vec2(-0.5, 0.866), 0.0).rgb) +
luminance(textureLod(uStellarScene, vUv + reach * vec2(-1.0, 0.0), 0.0).rgb) +
luminance(textureLod(uStellarScene, vUv + reach * vec2(-0.5, -0.866), 0.0).rgb) +
luminance(textureLod(uStellarScene, vUv + reach * vec2(0.5, -0.866), 0.0).rgb);
return clamp(1.0 - around / (6.0 * max(luminance(sharp), 1e-5)), 0.0, 1.0);
}
void pressStellar(vec3 exposed, vec2 cover, out vec3 absorbance, out vec3 light) {
vec3 inked = exposed * uDensityScale;
float energy = luminance(linearToSrgb(toneMapColor(inked, uExposure * PAPER_EXPOSURE)));
float density =
LIGHT_DENSITY_MAX * (1.0 - exp(-energy * LIGHT_DENSITY_GAIN / LIGHT_DENSITY_MAX));
float dye = softCeiling(density, EXCITED_DYE_CEILING);
float key = max(density - dye, 0.0) * EXCITED_KEY_GAIN;
float silhouette = texture(uStellarScene, vUv).a * uPresence;
absorbance = dye * uHoldDye + key * uHoldKey + silhouette * VOID_DENSITY * uInkKey;
light = pow(
linearToSrgb(toneMapColor(inked, uExposure * EXCITED_EXPOSURE * uKindle)),
vec3(EXCITED_CONTRAST)
);
light *= mix(EXCITED_BROAD, 1.0, smoothstep(0.02, 0.25, filament(texture(uStellarScene, vUv).rgb)));
float strength = clamp(luminance(light), 0.0, 1.0);
light *= mix(uHoldNeon, vec3(1.0), pow(strength, EXCITED_CORE));
if (uField > 0.001 || uPulse > 0.001) {
float seen = texture(uStellarCover, vUv).r;
vec4 lens = fieldLens(cover);
vec2 front = fieldFront(cover);
float ruling = fieldRuling(lens.xy) * lens.w;
float mark = (ruling * (1.0 - lens.z * 0.30) * front.x * 0.14 + front.y * 0.5) * seen;
absorbance -= log(max(linearToSrgb(mix(vec3(1.0), uInk, mark)), vec3(1e-4)));
}
}
vec3 screenThrough(vec3 absorbance, vec3 light) {
return 1.0 - (1.0 - exp(-absorbance)) * (1.0 - light);
}
#endif
#ifdef READ_VOID
vec3 seeStellar(vec3 exposed, vec2 cover) {
float shadow = texture(uStellarScene, vUv).a * uPresence;
vec3 seen = uVoid * (1.0 - shadow) + toneMapColor(exposed * (1.0 - shadow * uSwallow), uExposure);
seen += rulingInLight(cover, texture(uStellarCover, vUv).r) * (1.0 - uSwallow);
return linearToSrgb(seen);
}
#endif
#endif
#if defined(READ_PAPER) && defined(READ_VOID)
float sheetBurnt(vec2 cover) {
float aspect = uResolution.x / uResolution.y;
vec2 axis = (uOpticalAxis - 0.5) * vec2(aspect, 1.0) * 2.0;
return burnt(cover, uWorld, uShadowUv * 2.0, length(vec2(aspect, 1.0) + abs(axis)));
}
#endif
void main() {
vec3 bloom = bloomAt(vUv);
vec2 cover = (vUv - uOpticalAxis) * vec2(uResolution.x / uResolution.y, 1.0) * 2.0;
vec2 aperture = windowAt(cover, 2.0 / uResolution.y) * uPresence;
vec2 centered = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
float vignette = 1.0 - uVignette * pow(clamp(length(centered) * 0.82, 0.0, 1.0), 2.2);
#ifdef DRAW_STELLAR
vec3 exposed = stellarExposed(bloom, aperture, vignette);
#endif
#ifdef READ_PAPER
#if defined(DRAW_MONOCHROME) && defined(DRAW_STELLAR)
vec3 graphite = pressPaper(bloom * (1.0 - uCondense), cover, aperture, vignette);
vec3 stellarAbsorbance;
vec3 light;
pressStellar(exposed, cover, stellarAbsorbance, light);
vec3 graphiteAbsorbance = -log(max(graphite, vec3(1e-4)));
vec3 sheet = screenThrough(mix(graphiteAbsorbance, stellarAbsorbance, uCondense), light);
#elif defined(DRAW_STELLAR)
vec3 stellarAbsorbance;
vec3 light;
pressStellar(exposed, cover, stellarAbsorbance, light);
vec3 sheet = screenThrough(stellarAbsorbance, light);
#else
vec3 sheet = pressPaper(bloom, cover, aperture, vignette);
#endif
#endif
#ifdef READ_VOID
#if defined(DRAW_MONOCHROME) && defined(DRAW_STELLAR)
vec3 space = mix(telescope(bloom, cover, aperture, vignette), seeStellar(exposed, cover), uCondense);
#elif defined(DRAW_STELLAR)
vec3 space = seeStellar(exposed, cover);
#else
vec3 space = telescope(bloom, cover, aperture, vignette);
#endif
#endif
#if defined(READ_PAPER) && defined(READ_VOID)
vec3 color = mix(sheet, space, sheetBurnt(cover));
#elif defined(READ_VOID)
vec3 color = space;
#else
vec3 color = sheet;
#endif
float noiseA = interleavedGradientNoise(gl_FragCoord.xy + vec2(uTime * 71.0, uTime * 43.0));
float noiseB = interleavedGradientNoise(
gl_FragCoord.xy + vec2(37.3, 19.7) + vec2(uTime * 31.0, uTime * 59.0)
);
color += (noiseA - noiseB) * uGrain;
fragColor = vec4(color, 1.0);
}`;export{e as default};