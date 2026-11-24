var e=`#version 300 es
precision highp float;
precision highp int;
#ifndef CLOCK_GLSL
#define CLOCK_GLSL
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
const float CLOCK_GOLDEN = 2.39996322973;
const float CLOCK_TAU = 6.28318530718;
const float FIBER_BRISTLE = 0.0;
const float FIBER_BEAK = 1.0;
const float FIBER_ACHENE = 2.0;
const float FIBER_BRACT = 3.0;
const float FIBER_STEM = 4.0;
const float FIBER_RECEPTACLE = 5.0;
float clockHash(uint index, uint salt) {
uint x = (index * 0x9e3779b1u) ^ (salt * 0x85ebca77u);
x = (x ^ (x >> 16u)) * 0x7feb352du;
x = (x ^ (x >> 15u)) * 0x846ca68bu;
x = x ^ (x >> 16u);
return float(x >> 8u) / 16777216.0;
}
vec4 clockSeed(uint index) {
float share = (float(index) + 0.5) / float(CLOCK_SEEDS);
float cosine = 1.0 - share * (1.0 - cos(CLOCK_SPAN));
float sine = sqrt(max(1.0 - cosine * cosine, 0.0));
float polar = acos(cosine) + (clockHash(index, 1u) - 0.5) * 2.0 * CLOCK_SCATTER;
float around = float(index) * CLOCK_GOLDEN + (clockHash(index, 2u) - 0.5) * 2.0 * CLOCK_SCATTER / max(sine, 0.2);
float s = sin(polar);
vec3 d = vec3(s * cos(around), cos(polar), s * sin(around));
float beak = CLOCK_BEAK * (1.0 + (clockHash(index, 3u) - 0.5) * 2.0 * CLOCK_BEAK_VARIATION);
return vec4(d, beak);
}
vec3 clockStem(float t) {
float bow = CLOCK_STEM_LENGTH * tan(CLOCK_STEM_LEAN) * 0.5;
return vec3(bow * (t * t - 1.0), (t - 1.0) * CLOCK_STEM_LENGTH, 0.0);
}
struct ClockFiber {
vec3 a;
vec3 b;
float width;
float kind;
float seed;
vec3 pivot;
};
ClockFiber clockFiber(uint fiber) {
ClockFiber f;
uint perSeed = uint(CLOCK_PER_SEED);
uint seeded = uint(CLOCK_SEEDS) * perSeed;
f.seed = -1.0;
f.pivot = vec3(0.0);
if (fiber < seeded) {
uint index = fiber / perSeed;
uint part = fiber - index * perSeed;
vec4 seed = clockSeed(index);
vec3 d = seed.xyz;
vec3 helper = abs(d.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
vec3 t1 = normalize(cross(helper, d));
vec3 t2 = cross(d, t1);
vec3 tip = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE + seed.w);
f.seed = float(index);
f.pivot = d * CLOCK_RECEPTACLE;
if (part < uint(CLOCK_BRISTLES)) {
uint key = index * uint(CLOCK_BRISTLES) + part;
float jitter = clockHash(key, 5u);
float other = clockHash(key, 6u);
float bearing = (float(part) + (jitter - 0.5) * 0.7) * CLOCK_TAU / float(CLOCK_BRISTLES)
+ clockHash(index, 4u) * CLOCK_TAU;
float lift = CLOCK_CONE + (jitter - 0.5) * 0.35;
vec3 spread = cos(lift) * (cos(bearing) * t1 + sin(bearing) * t2) + sin(lift) * d;
f.a = tip;
f.b = tip + normalize(spread) * CLOCK_PAPPUS * (0.72 + 0.4 * other);
f.width = CLOCK_WIDTH_BRISTLE;
f.kind = FIBER_BRISTLE;
} else if (part == uint(CLOCK_BRISTLES)) {
f.a = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE);
f.b = tip;
f.width = CLOCK_WIDTH_BEAK;
f.kind = FIBER_BEAK;
} else {
f.a = d * CLOCK_RECEPTACLE;
f.b = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE);
f.width = CLOCK_WIDTH_ACHENE;
f.kind = FIBER_ACHENE;
}
return f;
}
uint rest = fiber - seeded;
if (rest < uint(CLOCK_BRACTS)) {
float around = float(rest) / float(CLOCK_BRACTS) * CLOCK_TAU + clockHash(rest, 9u) * 0.4;
vec3 out1 = vec3(cos(around), 0.0, sin(around));
f.a = out1 * CLOCK_RECEPTACLE * 0.7 - vec3(0.0, CLOCK_RECEPTACLE * 0.75, 0.0);
f.b = f.a + normalize(out1 * (0.35 + 0.2 * clockHash(rest, 11u)) - vec3(0.0, 1.0, 0.0))
* CLOCK_BRACT_LENGTH * (0.8 + 0.4 * clockHash(rest, 10u));
f.width = CLOCK_WIDTH_BRACT;
f.kind = FIBER_BRACT;
return f;
}
rest -= uint(CLOCK_BRACTS);
if (rest < uint(CLOCK_STEM_PIECES)) {
float t0 = float(rest) / float(CLOCK_STEM_PIECES);
float t1 = float(rest + 1u) / float(CLOCK_STEM_PIECES);
f.a = clockStem(t0);
f.b = clockStem(t1);
float flare = smoothstep(0.75, 1.0, (t0 + t1) * 0.5);
f.width = mix(CLOCK_STEM_FOOT, CLOCK_STEM_HEAD, (t0 + t1) * 0.5) * (1.0 + 0.22 * flare);
f.kind = FIBER_STEM;
return f;
}
f.a = vec3(0.0, -CLOCK_RECEPTACLE * 0.15, 0.0);
f.b = f.a;
f.width = CLOCK_RECEPTACLE * 1.7;
f.kind = FIBER_RECEPTACLE;
return f;
}
vec3 clockHue(float kind) {
return kind < 0.5 ? vec3(1.0, 0.97, 0.9)
: kind < 1.5 ? vec3(0.95, 0.92, 0.82)
: kind < 2.5 ? vec3(0.5, 0.33, 0.17)
: kind < 3.5 ? vec3(0.27, 0.46, 0.14)
: kind < 4.5 ? vec3(0.4, 0.55, 0.2)
: vec3(0.6, 0.5, 0.28);
}
vec3 clockTinted(vec3 tone, vec3 hue, float amount) {
float weight = max(dot(hue, vec3(0.2126, 0.7152, 0.0722)), 1e-3);
return mix(tone, tone * hue / weight, amount);
}
vec4 clockShade(float kind, float cover, vec2 normal, float along, float glow, float night, vec3 ink, vec3 silver, float hue) {
float behind = clamp((glow - 0.55) / 1.6, 0.0, 1.0);
vec3 paper;
vec3 light;
float strength;
if (kind < 0.5) {
paper = ink * mix(9.0, 13.0, behind);
light = silver * glow;
strength = 0.5 * (1.0 - 0.7 * along) * (1.0 - 0.3 * behind);
} else if (kind < 1.5) {
paper = ink * 6.0;
light = silver * glow * 0.75;
strength = 0.55;
} else if (kind < 2.5) {
float taper = smoothstep(0.0, 0.25, along) * smoothstep(1.0, 0.6, along);
float rib = 0.8 + 0.2 * cos(normal.x * 9.42);
paper = ink * 1.6 * rib;
light = silver * 0.18 * rib;
strength = 0.92 * taper;
} else if (kind < 3.5) {
float rib = 1.0 - 0.35 * exp(-normal.x * normal.x * 18.0);
paper = ink * 3.4 * rib;
light = silver * 0.26 * rib;
strength = 0.85 * (1.0 - 0.7 * along * along);
} else if (kind < 4.5) {
float round = sqrt(max(1.0 - normal.x * normal.x, 0.0));
float side = 0.55 + 0.45 * clamp(-normal.x * 0.8 + 0.2, -1.0, 1.0);
float rim = pow(abs(normal.x), 4.0) * behind;
paper = ink * (mix(2.4, 7.5, round * side) + 6.0 * rim);
light = silver * (mix(0.12, 0.42, round * side) + 0.5 * rim);
strength = 1.0;
} else {
float r = min(dot(normal, normal), 1.0);
vec3 n = vec3(normal.x, -normal.y, sqrt(1.0 - r));
float lit = max(dot(n, normalize(vec3(-0.45, 0.55, 0.7))), 0.0);
paper = ink * mix(1.2, 2.8, lit);
light = silver * mix(0.06, 0.2, lit);
strength = 1.0;
}
vec3 own = clockHue(kind);
vec3 inked = mix(clockTinted(paper, own, hue), clockTinted(light, own, hue), night);
return vec4(inked, clamp(cover * strength, 0.0, 1.0));
}
#endif
in vec2 vLocal;
flat in float vWeight;
flat in float vKind;
flat in vec2 vAxis;
flat in float vBlur;
flat in float vPixels;
flat in float vGlow;
flat in float vFiber;
in vec2 vSpan;
out vec4 fragColor;
uniform vec4 uLook;
uniform vec4 uShade;
uniform vec4 uSilver;
const float TAU = 6.2831853;
float displayed(float x) {
return x <= 0.0031308 ? 12.92 * x : 1.055 * pow(max(x, 0.0), 1.0 / 2.4) - 0.055;
}
void main() {
float firefly = uLook.w;
if (vFiber >= 0.0) {
float over = vSpan.x < 0.0 ? vSpan.x : max(vSpan.x - vSpan.y, 0.0);
float edge = clamp(vPixels + 0.5 - length(vec2(over, vLocal.y)), 0.0, 1.0);
vec2 normal = vec2(vLocal.y, over) / max(vPixels, 1e-4);
vec4 inked = clockShade(vFiber, vBlur * edge, normal, vLocal.x, vGlow, firefly, uShade.rgb, uSilver.rgb, 0.0);
float tone = displayed(dot(inked.rgb, vec3(0.2126, 0.7152, 0.0722)));
float density = inked.a * mix(clamp(1.0 - tone / 0.97, 0.0, 1.0), clamp(tone / 0.9, 0.0, 1.5), firefly);
float cover = density * vWeight;
fragColor = vec4(cover, 0.0, (1.0 - firefly) * cover, 0.0);
return;
}
float r = length(vLocal);
if (r > 1.0) discard;
vec2 up = vAxis;
vec2 side = vec2(up.y, -up.x);
vec2 p = vec2(dot(vLocal, side), dot(vLocal, up));
vec2 fromCrown = p - vec2(0.0, 0.32);
float hairRadius = length(fromCrown);
float bearing = atan(fromCrown.x, fromCrown.y);
float hairs = 18.0;
float nearest = abs(fract(bearing / TAU * hairs + 0.5) - 0.5) * TAU / hairs * hairRadius;
float hairWidth = max(1.2 / max(vPixels, 1.0), 0.025);
float fan = smoothstep(hairWidth, 0.0, nearest) * smoothstep(0.66, 0.5, hairRadius)
* smoothstep(1.95, 1.6, abs(bearing)) * smoothstep(0.05, 0.12, hairRadius);
float tips = exp(-pow((hairRadius - 0.6) / 0.07, 2.0)) * 0.35 * smoothstep(1.95, 1.6, abs(bearing));
float beak = smoothstep(hairWidth, 0.0, abs(p.x)) * step(-0.5, p.y) * step(p.y, 0.32);
float achene = exp(-(p.x * p.x) / 0.004 - pow(p.y + 0.62, 2.0) / 0.018);
float detailed = clamp(max(max(fan * 0.7, tips), max(beak * 0.8, achene)), 0.0, 1.0);
float small = exp(-r * r / 0.12) * 0.9 + exp(-r * r / 0.5) * 0.25;
float seed = mix(small, detailed, smoothstep(5.0, 12.0, vPixels));
float disk = smoothstep(1.0, 0.86, r) * (0.75 + 0.25 * smoothstep(0.55, 0.95, r));
float core = exp(-r * r / 0.07);
float haloed = exp(-r * r / 0.45) * (0.35 + 0.65 * vKind);
float sharp = mix(seed, core, firefly);
float defocus = smoothstep(0.15, 0.6, vBlur);
float cover = mix(sharp, disk * 0.28, defocus) * vWeight;
float light = mix(haloed, disk * 0.6, defocus) * vGlow * vWeight * firefly;
fragColor = vec4(cover * mix(1.0, vGlow, firefly), light, (1.0 - firefly) * cover, 0.0);
}`;export{e as default};