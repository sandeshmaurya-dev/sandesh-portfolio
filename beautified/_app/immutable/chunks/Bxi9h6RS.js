var e=`#version 300 es
precision highp float;
precision highp int;
#ifndef BAYER_GLSL
#define BAYER_GLSL
float bayerRank( ivec2 cell ) {
ivec2 c = cell & 7;
int d = c.x ^ c.y;
int index =
( ( ( d & 1 ) << 1 ) | ( c.y & 1 ) ) << 4 |
( ( ( d >> 1 & 1 ) << 1 ) | ( c.y >> 1 & 1 ) ) << 2 |
( ( ( d >> 2 & 1 ) << 1 ) | ( c.y >> 2 & 1 ) );
return ( float( index ) + 0.5 ) / 64.0;
}
#endif
#ifndef FIELD_GLSL
#define FIELD_GLSL
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
#define MAX_WINDOWS 6
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uMarks;
uniform sampler2D uCloth;
uniform vec4 uFrame;
uniform vec4 uGrid;
uniform vec4 uMass;
uniform vec4 uGround;
uniform vec4 uInk;
uniform vec4 uImpression;
uniform vec4 uAssembly;
uniform vec4 uSchedule;
uniform vec4 uWindows[MAX_WINDOWS];
uniform vec4 uWindowGrid[MAX_WINDOWS];
float arrival(vec2 id) {
float ring = max(abs(id.x - uAssembly.x), abs(id.y - uAssembly.y));
if (ring < 0.5) return 0.0;
return ((ring - 1.0 + bayerRank(ivec2(id))) / max(uAssembly.w, 1.0)) * uSchedule.x;
}
void main() {
vec2 css = vUv * uFrame.xy;
int found = -1;
for (int i = 0; i < MAX_WINDOWS; i++) {
if (float(i) >= uImpression.w) break;
vec4 w = uWindows[i];
if (css.x >= w.x && css.y >= w.y && css.x < w.x + w.z && css.y < w.y + w.w) {
found = i;
break;
}
}
if (found < 0) {
fragColor = vec4(0.0);
return;
}
vec4 window = uWindows[found];
vec4 grid = uWindowGrid[found];
float pitch = uGrid.y;
float square = uGrid.z;
vec2 origin = vec2(uGrid.x, grid.x);
vec2 p = css - origin;
vec2 id = floor(p / pitch);
vec2 local = p - id * pitch;
if (id.x < 0.0 || id.x >= uGrid.w || id.y < 0.0 || local.x >= square || local.y >= square) {
fragColor = vec4(0.0);
return;
}
if (grid.y > 0.5) {
float t = clamp((uAssembly.z - arrival(id)) / max(uSchedule.y, 1e-3), 0.0, 1.0);
float size = ceil(t * 4.0) * 0.25 * square;
vec2 fromCenter = abs(local - square * 0.5);
if (max(fromCenter.x, fromCenter.y) > size * 0.5) {
fragColor = vec4(0.0);
return;
}
}
float halfHeight = uFrame.y * 0.5;
vec2 screen = (css - uMass.xy) / halfHeight * vec2(1.0, -1.0);
vec4 lens = fieldLensAt(screen, uMass.z);
vec2 sheet = lens.xy * vec2(1.0, -1.0) * halfHeight + uMass.xy;
float bent = lens.z;
float captured = 1.0 - lens.w;
float gutter = pitch - square;
vec2 cell = (sheet - origin + gutter * 0.5) / pitch;
vec2 away = abs(fract(cell) - 0.5);
float toLine = (0.5 - max(away.x, away.y)) * pitch;
float reach = length(css - uMass.xy) / (uFrame.y * 0.3);
float near = exp(-reach * reach);
float line = (1.0 - smoothstep(0.3, 1.15, toLine)) * mix(0.42, 1.0, near);
float halo = exp(-toLine / uMass.w) * 0.5 * near;
float ruling = clamp(max(line, halo) + bent * 0.2, 0.0, 1.0);
vec2 clothAt = clamp(sheet / uFrame.xy, vec2(0.0), vec2(1.0));
vec2 cloth = textureLod(uCloth, clothAt, 0.0).rg;
float woven = clamp(max(cloth.r, cloth.g) * mix(0.62, 1.0, uInk.w) + bent * 0.15, 0.0, 1.0);
ivec2 printed = ivec2(floor(css / uFrame.w));
float framed = step(bayerRank(printed + ivec2(5, 3)), uGround.w);
float tone = mix(ruling, woven, framed);
float colored = framed * cloth.g;
float tile = grid.z;
if (tile > 0.5) {
float side = min(window.z, window.w) * uSchedule.w;
vec2 at = (sheet - (window.xy + window.zw * 0.5)) / side + 0.5;
if (all(greaterThanEqual(at, vec2(0.0))) && all(lessThan(at, vec2(1.0)))) {
vec2 mark = textureLod(uMarks, vec2((tile - 1.0 + at.x) / uSchedule.z, at.y), 0.0).rg;
tone = max(tone * (1.0 - mark.r * 0.85), max(mark.r, mark.g));
colored = max(colored, mark.g);
}
}
tone = max(tone, captured);
float bit = step(bayerRank(printed), tone);
float hue = max(clamp(bent * 1.6, 0.0, 1.0), colored) * (1.0 - captured) * (1.0 - grid.w);
vec3 ink = mix(uInk.rgb, uImpression.rgb, hue);
fragColor = vec4(mix(uGround.rgb, ink, bit), 1.0);
}`;export{e as default};