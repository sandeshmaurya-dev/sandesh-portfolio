var e=`fn bayerRank(cell: vec2i) -> f32 {
let c = cell & vec2i(7);
let d = c.x ^ c.y;
let index = (((((d & 1) << 1u) | (c.y & 1)) << 4u) |
(((((d >> 1u) & 1) << 1u) | ((c.y >> 1u) & 1)) << 2u) |
((((d >> 2u) & 1) << 1u) | ((c.y >> 2u) & 1)));
return (f32(index) + 0.5) / 64.0;
}
const SPECTRUM_TAPS: u32 = 16u;
const RS: f32 = 1.0;
const MASS: f32 = 0.5;
const PHOTON_SPHERE: f32 = 1.5;
const B_CRIT: f32 = 2.598076;
const R_ISCO: f32 = 3.0;
const R_TEMPERATURE_PEAK: f32 = 4.0833335;
const TEMPERATURE_SHAPE_PEAK: f32 = 0.48787135;
const RING_LYAPUNOV: f32 = 3.1415927;
const RING_SPACING: f32 = 1.45;
const SPIRAL_PITCH: f32 = 2.25;
const WEAK_FIELD_B: f32 = 26.0;
const ATLAS_EDGE_NEAR: f32 = 0.000001;
const ATLAS_EDGE_DECADES: f32 = 16.013557;
const ATLAS_CAPTURED_DECADES: f32 = 13.815511;
const DISK_OUTER_RADIUS: f32 = 16.0;
const TAPER_REACH: f32 = 1.25;
const RAMP_MIN_K: f32 = 700.;
const RAMP_DECADES: f32 = 4.045554;
const EXCITED_DYE_CEILING: f32 = 0.9;
const EXCITED_KEY_GAIN: f32 = 1.1;
const EXCITED_EXPOSURE: f32 = 0.7;
const EXCITED_CONTRAST: f32 = 2.2;
const EXCITED_BROAD: f32 = 0.65;
const EXCITED_FILAMENT_RADIUS: f32 = 6.0;
const EXCITED_CORE: f32 = 3.0;
const GALAXY_NUCLEUS = vec3f(1.1467261, 0.97804004, 0.785482);
const GALAXY_BAR = vec3f(1.302215, 0.9413963, 0.690616);
const GALAXY_INNER = vec3f(1.3294382, 0.9232194, 0.79051155);
const GALAXY_ARM = vec3f(1.071447, 0.9300504, 1.4825257);
const GALAXY_OUTER = vec3f(0.8467218, 0.9801459, 1.6480141);
const GALAXY_YOUNG = vec3f(0.783326, 1.0281817, 1.3588555);
const GALAXY_NEBULA = vec3f(2.851653, 0.4101745, 1.3903292);
const GALAXY_HALO = vec3f(0.7698258, 1.0021421, 1.656551);
const GALAXY_DUST_REDDENING = vec3f(0.78, 1.0, 1.32);
const FIELD_TAN_HALF_FOV: f32 = 0.3125;
const FIELD_DEFLECTION_REACH: f32 = 0.999;
const FIELD_DEFLECTION_SAMPLES: u32 = 32u;
var<private> FIELD_DEFLECTION: array<f32, 32> = array<f32, 32>(
0.0, -0.014405162, -0.028853972, -0.043341845,
-0.057863623, -0.07241352, -0.08698502, -0.101570815,
-0.11616267, -0.13075136, -0.14532645, -0.15987624,
-0.1743875, -0.18884532, -0.20323278, -0.21753076,
-0.23171745, -0.2457681, -0.25965434, -0.27334365,
-0.28679857, -0.29997566, -0.31282446, -0.3252857,
-0.3372893, -0.34875154, -0.35957116, -0.36962345,
-0.37875152, -0.38675123, -0.39334333, -0.3981081
);
const PASSAGE_RF_STEPS: u32 = 7u;
const PASSAGE_RIM: f32 = 0.0001;
const PASSAGE_WINDING_CORE: f32 = 0.1;
const DISK_PERSPECTIVE: f32 = 1.6;
const DISK_PERSPECTIVE_FLOOR: f32 = 0.8;
const ROTATION_CORE: f32 = 1.2;
const ROTATION_REFERENCE: f32 = 10.;
const GROOVE_TAPS: u32 = 6u;
var<private> GROOVE_COMB: array<vec4f, 6> = array<vec4f, 6>(
vec4f(0.037164804, 0.0, 0.49286357, 427.7251),
vec4f(0.0, 0.0641237, 0.5071364, 477.7251),
vec4f(0.0, 0.55756277, 0.0, 527.7251),
vec4f(0.36916935, 0.3783135, 0.0, 577.7251),
vec4f(0.53033364, 0.0, 0.0, 627.7251),
vec4f(0.06333218, 0.0, 0.0, 677.7251)
);
const CLOCK_SEEDS: u32 = 168u;
const CLOCK_BRISTLES: u32 = 88u;
const CLOCK_PER_SEED: u32 = 90u;
const CLOCK_BRACTS: u32 = 16u;
const CLOCK_STEM_PIECES: u32 = 24u;
const CLOCK_FIBERS: u32 = 15161u;
const CLOCK_RECEPTACLE: f32 = 0.0034;
const CLOCK_ACHENE: f32 = 0.0038;
const CLOCK_BEAK: f32 = 0.0098;
const CLOCK_BEAK_VARIATION: f32 = 0.08;
const CLOCK_PAPPUS: f32 = 0.0064;
const CLOCK_SPAN: f32 = 2.42;
const CLOCK_SCATTER: f32 = 0.06;
const CLOCK_CONE: f32 = 0.42;
const CLOCK_STEM_LENGTH: f32 = 0.3;
const CLOCK_STEM_FOOT: f32 = 0.0034;
const CLOCK_STEM_HEAD: f32 = 0.0027;
const CLOCK_STEM_LEAN: f32 = 0.06;
const CLOCK_BRACT_LENGTH: f32 = 0.012;
const CLOCK_BRACT_TIP: f32 = 0.18;
const CLOCK_WIDTH_BRISTLE: f32 = 0.000022;
const CLOCK_WIDTH_BEAK: f32 = 0.0001;
const CLOCK_WIDTH_ACHENE: f32 = 0.0009;
const CLOCK_WIDTH_BRACT: f32 = 0.0011;
const CUP_SCALE: f32 = 3.0595684;
const CUP_BOWL: f32 = 3.9;
const CUP_REACH_SINE: f32 = 0.9903268;
const CUP_REACH_COSINE: f32 = -0.13875453;
const CUP_WALL: f32 = 0.14;
const CUP_CENTER: f32 = 0.09885731;
const CUP_LIQUID: f32 = 3.7587001;
const CUP_RIM: f32 = 4.0022745;
const CUP_FOOT: f32 = -3.8011427;
const CUP_FOOT_RADIUS: f32 = 1.8;
const CUP_FOOT_TUBE: f32 = 0.19;
const CUP_HANDLE_OUT: f32 = 4.21;
const CUP_HANDLE_DOWN: f32 = 1.1;
const CUP_HANDLE_WIDTH: f32 = 0.93;
const CUP_HANDLE_HEIGHT: f32 = 1.22;
const CUP_HANDLE_THICKNESS: f32 = 0.15;
const CUP_HANDLE_BREADTH: f32 = 0.23;
const CUP_FILLET: f32 = 0.26;
const CUP_BOUND_CENTER: f32 = -1.6055714;
const CUP_BOUND_RADIUS: f32 = 5.92604;
const SAUCER_CURVATURE: f32 = 17.0;
const SAUCER_SHELL: f32 = 0.11;
const SAUCER_CENTER: f32 = 12.898857;
const SAUCER_REACH_SINE: f32 = 0.37058824;
const SAUCER_REACH_COSINE: f32 = 0.92879725;
const SAUCER_RIM: f32 = 6.41;
const SAUCER_BOUND_CENTER: f32 = -3.4959195;
const SAUCER_BOUND_RADIUS: f32 = 6.4997787;
const CUP_TABLE: f32 = -4.2111425;
const CUP_TABLE_NIGHT: f32 = 0.009;
const CUP_TABLE_DAY: f32 = 0.9;
const CUP_TABLE_ROUGHNESS: f32 = 0.42;
const CUP_CAMERA_DISTANCE: f32 = 2.0;
const CUP_CAMERA_FOCAL: f32 = 3.2;
const CUP_LAMP_SOFT: f32 = 6.0;
const CUP_NIGHT_KEY: f32 = 0.9;
const CUP_DAY_KEY: f32 = 0.35;
const CUP_LAMP_REACH: f32 = 2.2;
const CUP_LAMP_HEIGHT: f32 = 30.;
const CUP_LAMP_LIFT: f32 = 2.0;
const CUP_WINDOW_NIGHT: f32 = 1.1;
const CUP_WINDOW_DAY: f32 = 1.15;
const CUP_WINDOW_POOL: f32 = 7.0;
const CUP_FILL: f32 = 0.1;
const CUP_RIPPLE_SPEED: f32 = 3.4;
const CUP_RIPPLE_LIFE: f32 = 1.5;
const CUP_RIPPLE_LENGTH: f32 = 0.85;
const CUP_RIPPLE_SLOPE: f32 = 0.32;
const CUP_SOFTBOX = vec3f(-0.54947823, 0.54947823, 0.62940234);
const CUP_STRIP = vec3f(0.6227461, -0.58256894, 0.5223032);
fn fieldDeflection(b: f32) -> f32 {
let x = min(B_CRIT / max(b, B_CRIT), FIELD_DEFLECTION_REACH);
let at = (1.0 - sqrt(1.0 - x)) / (1.0 - sqrt(1.0 - FIELD_DEFLECTION_REACH)) *
f32(FIELD_DEFLECTION_SAMPLES - 1u);
let index = min(u32(at), FIELD_DEFLECTION_SAMPLES - 2u);
let residual = mix(FIELD_DEFLECTION[index], FIELD_DEFLECTION[index + 1u], at - f32(index));
return residual - log(1.0 - x);
}
const FIELD_GRAZE: f32 = 0.26;
fn fieldLensAt(screen: vec2f, distance: f32) -> vec4f {
let radius = length(screen);
let view = atan(radius * FIELD_TAN_HALF_FOV);
let impact = distance * sin(view);
let turned = view - fieldDeflection(impact);
let reach = sin(turned) / (max(abs(cos(turned)), FIELD_GRAZE) * FIELD_TAN_HALF_FOV);
let sheet = screen * (reach / max(radius, 1e-6));
let bent = 1.0 - smoothstep(2.0, 12.5, impact);
let held = smoothstep(B_CRIT, B_CRIT * 1.02, impact);
return vec4f(sheet, bent, held);
}
fn fieldRuling(sheet: vec2f, pitch: f32, lineWidth: f32) -> f32 {
let cell = sheet / max(pitch, 0.02);
let footprint = max(fwidth(cell) * lineWidth, vec2f(1e-4));
let grid = abs(fract(cell + 0.5) - 0.5) / footprint;
let line = 1.0 - min(min(grid.x, grid.y), 1.0);
let share = min(footprint, vec2f(1.0));
let mean = 1.0 - (1.0 - share.x) * (1.0 - share.y);
return mix(line, mean, smoothstep(0.35, 0.9, max(footprint.x, footprint.y)));
}
fn fieldFront(screen: vec2f, open: f32, pulse: f32) -> vec2f {
let radius = length(screen) * 0.5;
let front = open * 1.15;
let reveal = 1.0 - smoothstep(front - 0.24, front, radius);
let edge = exp(-pow((radius - front) * 34.0, 2.0)) * pulse;
return vec2f(reveal, edge);
}
const MAX_WINDOWS: u32 = 6u;
fn arrival(id: vec2f) -> f32 {
let ring = max(abs(id.x - u.assembly.x), abs(id.y - u.assembly.y));
if (ring < 0.5) {
return 0.0;
}
return ((ring - 1.0 + bayerRank(vec2i(id))) / max(u.assembly.w, 1.0)) * u.schedule.x;
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let css = in.uv * u.frame.xy;
var found = MAX_WINDOWS;
let count = u32(u.impression.w);
for (var i = 0u; i < MAX_WINDOWS; i++) {
if (i >= count) {
break;
}
let w = u.windows[i];
if (css.x >= w.x && css.y >= w.y && css.x < w.x + w.z && css.y < w.y + w.w) {
found = i;
break;
}
}
if (found == MAX_WINDOWS) {
return vec4f(0.0);
}
let window = u.windows[found];
let grid = u.windowGrid[found];
let pitch = u.grid.y;
let square = u.grid.z;
let origin = vec2f(u.grid.x, grid.x);
let p = css - origin;
let id = floor(p / pitch);
let local = p - id * pitch;
if (id.x < 0.0 || id.x >= u.grid.w || id.y < 0.0 || local.x >= square || local.y >= square) {
return vec4f(0.0);
}
if (grid.y > 0.5) {
let t = clamp((u.assembly.z - arrival(id)) / max(u.schedule.y, 1e-3), 0.0, 1.0);
let size = ceil(t * 4.0) * 0.25 * square;
let fromCenter = abs(local - square * 0.5);
if (max(fromCenter.x, fromCenter.y) > size * 0.5) {
return vec4f(0.0);
}
}
let halfHeight = u.frame.y * 0.5;
let screen = (css - u.mass.xy) / halfHeight * vec2f(1.0, -1.0);
let lens = fieldLensAt(screen, u.mass.z);
let sheet = lens.xy * vec2f(1.0, -1.0) * halfHeight + u.mass.xy;
let bent = lens.z;
let captured = 1.0 - lens.w;
let gutter = pitch - square;
let cell = (sheet - origin + gutter * 0.5) / pitch;
let away = abs(fract(cell) - 0.5);
let toLine = (0.5 - max(away.x, away.y)) * pitch;
let reach = length(css - u.mass.xy) / (u.frame.y * 0.3);
let near = exp(-reach * reach);
let line = (1.0 - smoothstep(0.3, 1.15, toLine)) * mix(0.42, 1.0, near);
let halo = exp(-toLine / u.mass.w) * 0.5 * near;
let ruling = clamp(max(line, halo) + bent * 0.2, 0.0, 1.0);
let clothAt = clamp(sheet / u.frame.xy, vec2f(0.0), vec2f(1.0));
let weave = textureSampleLevel(cloth, smp, clothAt, 0.0).rg;
let woven = clamp(max(weave.r, weave.g) * mix(0.62, 1.0, u.ink.w) + bent * 0.15, 0.0, 1.0);
let printed = vec2i(floor(css / u.frame.w));
let framed = step(bayerRank(printed + vec2i(5, 3)), u.ground.w);
var tone = mix(ruling, woven, framed);
var colored = framed * weave.g;
let tile = grid.z;
if (tile > 0.5) {
let side = min(window.z, window.w) * u.schedule.w;
let at = (sheet - (window.xy + window.zw * 0.5)) / side + 0.5;
if (all(at >= vec2f(0.0)) && all(at < vec2f(1.0))) {
let mark = textureSampleLevel(marks, smp, vec2f((tile - 1.0 + at.x) / u.schedule.z, at.y), 0.0).rg;
tone = max(tone * (1.0 - mark.r * 0.85), max(mark.r, mark.g));
colored = max(colored, mark.g);
}
}
tone = max(tone, captured);
let bit = step(bayerRank(printed), tone);
let hue = max(clamp(bent * 1.6, 0.0, 1.0), colored) * (1.0 - captured) * (1.0 - grid.w);
let ink = mix(u.ink.rgb, u.impression.rgb, hue);
return vec4f(mix(u.ground.rgb, ink, bit), 1.0);
}`;export{e as default};