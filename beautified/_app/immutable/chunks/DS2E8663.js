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
layout(location = 0) in float aVertex;
uniform sampler2D uPrint;
uniform vec4 uFrame;
uniform vec4 uBounds;
uniform vec4 uLook;
uniform vec4 uMotion;
uniform vec4 uMotion2;
uniform vec4 uCamera;
uniform vec4 uLife;
uniform vec4 uCounts;
uniform vec4 uClock[4];
uniform vec4 uDepth;
uniform vec4 uShade;
uniform vec4 uSilver;
out vec2 vLocal;
flat out float vWeight;
flat out float vKind;
flat out vec2 vAxis;
flat out float vBlur;
flat out float vPixels;
flat out float vGlow;
flat out float vFiber;
out vec2 vSpan;
const uint TRIES = 24u;
vec4 hash4(uint a, uint b) {
uvec4 v = uvec4(a, b, a ^ 0x9e3779b9u, b + 0x7f4a7c15u);
v = v * 1664525u + 1013904223u;
v.x += v.y * v.w;
v.y += v.z * v.x;
v.z += v.x * v.y;
v.w += v.y * v.z;
v ^= v >> uvec4(16u);
v.x += v.y * v.w;
v.y += v.z * v.x;
v.z += v.x * v.y;
v.w += v.y * v.z;
return vec4(v & uvec4(0xffffffu)) / float(0xffffff);
}
vec2 curl(vec2 p, float t) {
vec3 a = vec3(1.0, 0.55, 0.3);
vec2 k1 = vec2(1.3, 0.7);
vec2 k2 = vec2(-0.6, 1.9);
vec2 k3 = vec2(2.7, -1.6);
float c1 = cos(dot(k1, p) + t * 0.7);
float c2 = cos(dot(k2, p) - t * 0.5 + 1.3);
float c3 = cos(dot(k3, p) + t * 1.1 + 2.1);
vec2 gradient = a.x * c1 * k1 + a.y * c2 * k2 + a.z * c3 * k3;
return vec2(gradient.y, -gradient.x);
}
const vec2 CORNERS[6] = vec2[6](
vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
vec2(-1.0, -1.0), vec2(1.0, 1.0), vec2(-1.0, 1.0)
);
vec3 clockWorld(vec3 p, vec2 center, float focal, float pivotDepth) {
vec4 h = uClock[0] * p.x + uClock[1] * p.y + uClock[2] * p.z + uClock[3];
vec2 screen = h.xy / h.w;
float z = pivotDepth + (h.w - uDepth.x) * uDepth.y * pivotDepth / focal;
return vec3((screen - center) * z / focal, z);
}
const float NEAR = 0.04;
vec3 walked(vec3 world, vec3 pivot) {
vec3 q = world - pivot;
float cy = cos(uCamera.x);
float sy = sin(uCamera.x);
q = vec3(cy * q.x + sy * q.z, q.y, -sy * q.x + cy * q.z);
float cp = cos(uCamera.y);
float sp = sin(uCamera.y);
q = vec3(q.x, cp * q.y - sp * q.z, sp * q.y + cp * q.z);
return q + pivot;
}
vec3 turnOnto(vec3 v, vec3 origin, vec3 goal) {
vec3 axis = cross(origin, goal);
float s = length(axis);
float c = dot(origin, goal);
if (s < 1e-5) return v;
vec3 k = axis / s;
return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
}
vec4 onTarget(vec2 pixel, vec2 stage) {
return vec4(pixel / vec2(stage.x, uFrame.w) * 2.0 - 1.0, 0.0, 1.0);
}
void main() {
uint index = uint(gl_InstanceID);
vec2 stage = uFrame.xy;
vec2 center = stage * 0.5;
float focal = uFrame.z;
float time = uLife.x;
float reading = uMotion2.w;
float pivotDepth = (uLook.x + uLook.y) * 0.5 * focal;
vec3 pivot = vec3(0.0, 0.0, pivotDepth);
vec2 local = CORNERS[int(aVertex)];
if (index < uint(CLOCK_FIBERS)) {
ClockFiber f = clockFiber(index);
vec3 a = clockWorld(f.a, center, focal, pivotDepth);
vec3 b = clockWorld(f.b, center, focal, pivotDepth);
float weight = uMotion.x;
vec3 head = clockWorld(vec3(0.0), center, focal, pivotDepth);
float reach = uDepth.y * (CLOCK_RECEPTACLE + CLOCK_ACHENE + CLOCK_BEAK + CLOCK_PAPPUS);
if (f.seed >= 0.0) {
uint seedIndex = uint(f.seed);
vec3 own = vec3(clockHash(seedIndex, 11u), clockHash(seedIndex, 12u), clockHash(seedIndex, 13u));
vec3 base = clockWorld(f.pivot, center, focal, pivotDepth);
vec4 seed = clockSeed(seedIndex);
vec3 tip = clockWorld(seed.xyz * (CLOCK_RECEPTACLE + CLOCK_ACHENE + seed.w), center, focal, pivotDepth);
float side = clamp((base.x - head.x) / max(reach, 1.0) * reading, -1.0, 1.0);
float flight = clamp((uMotion.y - (side * 0.5 + 0.5) * 0.42 - own.x * 0.28) / (0.3 + 0.2 * own.y), 0.0, 1.0);
if (flight > 0.0) {
vec3 rest = normalize(tip - base);
float wobble = sin(time * (2.1 + own.y * 1.4) + own.z * 20.0) * 0.22;
vec3 upright = normalize(vec3(reading * 0.3 + wobble, -1.0, (own.y - 0.5) * 0.5));
vec3 axis = normalize(mix(rest, upright, smoothstep(0.0, 0.45, flight)));
float scale = base.z / focal;
float carry = pow(flight, 1.5);
vec2 eddy = curl(base.xy / (stage.y * 0.3 * scale) + own.xy * 3.0, time * 0.5) * stage.y * 0.08 * scale;
float heading = -0.6 + 1.05 * own.y;
float speed = stage.x * (0.55 + 1.0 * own.x) * carry * scale;
vec3 away = vec3(
reading * cos(heading) * speed + eddy.x * flight,
sin(heading) * speed + eddy.y * flight,
(own.z * 1.05 - 0.15) * pivotDepth * carry
);
a = base + turnOnto(a - base, rest, axis) + away;
b = base + turnOnto(b - base, rest, axis) + away;
weight *= 1.0 - smoothstep(0.82, 1.0, flight);
float blurred = uCamera.z * uCounts.z * abs(a.z - pivotDepth) / max(a.z, 1.0);
weight *= 1.0 - smoothstep(3.0, 12.0, blurred);
}
} else {
vec3 down = vec3(0.0, stage.y * 1.15 * uCounts.w * (a.z / focal), 0.0);
a += down;
b += down;
weight *= 1.0 - smoothstep(0.75, 1.0, uCounts.w);
}
a = walked(a, pivot);
b = walked(b, pivot);
float near = focal * NEAR;
if (a.z < near && b.z < near) {
gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
vWeight = 0.0;
return;
}
if (a.z < near) a = mix(a, b, (near - a.z) / (b.z - a.z));
else if (b.z < near) b = mix(b, a, (near - b.z) / (a.z - b.z));
float za = max(a.z, near);
float zb = max(b.z, near);
vec2 sa = center + a.xy * focal / za;
vec2 sb = center + b.xy * focal / zb;
float end = local.x * 0.5 + 0.5;
float z = mix(za, zb, end);
float taper = abs(f.kind - FIBER_BRACT) < 0.5 ? mix(1.0, CLOCK_BRACT_TIP, end) : 1.0;
float pixels = f.width * taper * uDepth.y * pivotDepth / z;
float confusion = uCamera.z * uCounts.z * abs(z - pivotDepth) / z;
float drawn = max(max(pixels, confusion), 1.0);
vec2 run = sb - sa;
float runLength = length(run);
vec2 direction = runLength > 1e-4 ? run / runLength : vec2(1.0, 0.0);
vec2 across = vec2(-direction.y, direction.x);
float halfWidth = drawn * 0.5;
float cap = f.kind > 4.5 ? halfWidth + 1.0 : 0.0;
float travel = mix(-cap, runLength + cap, end);
float along = runLength > 1e-4 ? clamp(travel / runLength, 0.0, 1.0) : 0.5;
float offset = local.y * (halfWidth + 1.0);
gl_Position = onTarget(sa + direction * travel + across * offset, stage);
vLocal = vec2(along, offset);
vSpan = vec2(travel, runLength);
vWeight = weight;
vKind = 0.0;
vAxis = vec2(0.0, -1.0);
vBlur = pixels / drawn;
vPixels = halfWidth;
vGlow = uDepth.z;
vFiber = f.kind;
return;
}
uint mark = index - uint(CLOCK_FIBERS);
vec4 own = hash4(mark, 0x51ed27u);
vec4 more = hash4(mark, 0x2c1b3au);
uint crowd = uint(uCounts.x);
bool isAir = mark >= crowd;
vec2 place = vec2(0.0);
bool found = false;
for (uint attempt = 0u; attempt < TRIES; attempt++) {
vec4 draw = hash4(mark, attempt);
vec2 at = uBounds.xy + draw.xy * uBounds.zw;
float ink = textureLod(uPrint, at / stage, 0.0).r;
if (draw.z < ink) {
place = at;
found = true;
break;
}
}
float distance = mix(uLook.x, uLook.y, own.x) * focal;
vec2 toward = (place - center) / focal;
vec3 belongs = vec3(toward * distance, distance);
float scale = distance / focal;
vec3 landing = vec3((vec2(more.z, more.w) * vec2(1.2, 1.0) - vec2(0.1, 0.0)) * stage - center, 0.0) * scale;
vec3 upwind = landing - vec3(reading * stage.x * (0.9 + 0.6 * own.w), -stage.y * (0.08 + 0.2 * more.x), 0.0) * scale;
float since = clamp((uCamera.w - own.y * 0.45) / 0.55, 0.0, 1.0);
float arrived = 1.0 - pow(1.0 - since, 3.0);
vec3 carried = mix(upwind, landing, arrived) + vec3(0.0, 0.0, distance);
float flow = fract(time * uMotion.z * (0.012 + 0.02 * own.w) + own.x) - 0.5;
carried.x += reading * flow * stage.x * 2.4 * scale * arrived * (1.0 - uLife.w);
carried.y += sin(time * (0.7 + own.z * 0.6) + own.w * 17.0) * stage.y * 0.025 * scale * (1.0 - uLife.w);
carried += vec3(curl(carried.xy / (stage.y * 0.35 * scale) + own.xy * 2.0, time * 0.6) * stage.y * 0.12 * scale * arrived, 0.0);
float gathered = smoothstep(0.0, 1.0, clamp((uLife.w - own.y * 0.45) / 0.55, 0.0, 1.0));
vec3 world = mix(carried, belongs, gathered);
float breeze = uMotion.z * uMotion.w * stage.y * distance / focal * gathered;
vec2 drift = curl(belongs.xy / (stage.y * 0.3 * distance / focal) + own.zw * 3.0, time * 0.45);
world += vec3(drift * breeze, sin(time * (0.6 + own.w) + own.x * 31.0) * breeze * 1.6);
if (isAir) {
float depth = mix(0.07, 0.3, own.x) * focal;
vec2 at = vec2(own.y, more.z) * stage - center;
at += curl(at / (stage.y * 0.4) + own.zw * 5.0, time * 0.35) * stage.y * 0.08;
at.x -= reading * (1.0 - uCamera.w) * stage.x * 0.9;
at.y -= uLife.z * stage.y * (1.1 + own.w);
at.x += reading * uLife.z * stage.x * 0.4;
world = vec3(at / focal * depth, depth);
found = true;
}
bool stays = own.w < 0.1;
float settle = uMotion2.x;
if (!isAir) world = mix(world, vec3(toward * focal, focal), settle);
float alongLine = (reading > 0.0 ? place.x : stage.x - place.x) + place.y * uMotion2.z;
float taken = clamp((uMotion2.y - alongLine) / max(uBounds.z * 0.35, 1.0), 0.0, 1.0) * (stays ? 1.0 : 0.0);
float roll = taken * 3.6;
world += vec3(
reading * (taken * stage.x * 0.6 + sin(roll) * stage.y * 0.05),
-taken * stage.y * 0.5 - (1.0 - cos(roll)) * stage.y * 0.04,
0.0
);
vec3 q = walked(world, pivot);
if (q.z < focal * NEAR) {
gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
vWeight = 0.0;
return;
}
float depth = q.z;
vec2 screen = center + q.xy * focal / depth;
float size = uLook.z * (0.65 + own.y * 0.7) * (distance / depth);
float confusion = uCamera.z * uCounts.z * abs(depth - pivotDepth) / depth;
float reach = max(size, confusion);
vec2 pixel = screen + local * reach;
float sway = sin(time * (1.1 + own.z) + own.w * 12.0) * 0.35 * (1.0 - settle);
vec2 axis = vec2(sin(sway), -cos(sway));
float weight = stays ? 1.0 - taken * taken : 1.0 - settle;
weight *= (found ? 1.0 : 0.0) * smoothstep(0.0, 0.15, arrived + gathered);
weight *= 1.0 - smoothstep(0.44, 0.5, abs(flow)) * arrived * (1.0 - uLife.w);
if (isAir) weight = (1.0 - smoothstep(0.7, 1.0, uLife.z)) * smoothstep(0.1, 0.6, uCamera.w) * 0.6;
float spread = (size * size) / (reach * reach);
float sync = uLife.y;
float rate = 0.55 * (1.0 + (own.z - 0.5) * 0.6 * (1.0 - sync));
float blink = fract(time * rate + own.x * (1.0 - sync));
float pulse = smoothstep(0.0, 0.05, blink) * exp(-blink / 0.16);
gl_Position = onTarget(pixel, stage);
vLocal = local;
vWeight = weight * spread;
vKind = own.z;
vAxis = axis;
vBlur = 1.0 - size / reach;
vPixels = size;
vGlow = mix(0.2 + 0.8 * pulse, 1.0, settle);
vFiber = -1.0;
vSpan = vec2(0.0);
}`;export{e as default};