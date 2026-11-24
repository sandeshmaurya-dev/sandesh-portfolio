var e=`const SPECTRUM_TAPS: u32 = 16u;
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
const PI: f32 = 3.14159265359;
const TAU: f32 = 6.28318530718;
fn hashUint(value: u32) -> u32 {
var x = value;
x ^= x >> 16u;
x *= 0x21f0aaadu;
x ^= x >> 15u;
x *= 0xd35a2d97u;
x ^= x >> 15u;
return x;
}
fn hash11(key: vec3u) -> f32 {
return f32(hashUint(key.x ^ hashUint(key.y ^ hashUint(key.z)))) / 4294967296.0;
}
fn interleavedGradientNoise(position: vec2f) -> f32 {
return fract(52.9829189 * fract(dot(position, vec2f(0.06711056, 0.00583715))));
}
fn rot2(a: f32) -> mat2x2f {
let s = sin(a);
let c = cos(a);
return mat2x2f(c, -s, s, c);
}
fn luminance(color: vec3f) -> f32 {
return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}
fn toneMap(energy: f32, exposure: f32) -> f32 {
return 1.0 - exp(-max(energy, 0.0) * exposure);
}
fn toneMapColor(radiance: vec3f, exposure: f32) -> vec3f {
let exposed = max(radiance, vec3f(0.0));
let peak = max(exposed.r, max(exposed.g, exposed.b));
if (peak < 1e-6) {
return vec3f(0.0);
}
let mapped = toneMap(peak, exposure);
let squared = mapped * mapped;
let fourth = squared * squared;
let bleach = fourth * fourth;
return mix(exposed / peak, vec3f(1.0), bleach) * mapped;
}
fn linearToSrgb(linear: vec3f) -> vec3f {
let clamped = clamp(linear, vec3f(0.0), vec3f(1.0));
return select(
clamped * 12.92,
1.055 * pow(clamped, vec3f(1.0 / 2.4)) - 0.055,
clamped >= vec3f(0.0031308)
);
}
const WINDOW_COLUMNS: f32 = 6.0;
const WINDOW_ROWS: f32 = 4.0;
const WINDOW_EDGE: f32 = 0.22;
fn windowIris(local: vec2f, open: f32, unit: f32) -> vec2f {
let edge = max(abs(local.x), abs(local.y));
let reach = 0.5 * open;
let aperture = 1.0 - smoothstep(reach - unit, reach, edge);
let contour = smoothstep(reach - unit * 2.2, reach - unit * 0.4, edge) * aperture;
return vec2f(aperture, contour);
}
fn heldWindowAt(cover: vec2f, pixel: f32, cell: f32, held: vec4f) -> vec2f {
if (held.w <= 0.002) {
return vec2f(0.0);
}
let size = max(cell, 1e-4);
let d = (cover - held.xy) / size;
let c = cos(held.z);
let s = sin(held.z);
let local = vec2f(c * d.x + s * d.y, -s * d.x + c * d.y);
if (max(abs(local.x), abs(local.y)) > 0.75) {
return vec2f(0.0);
}
return windowIris(local, held.w, pixel / size);
}
fn fieldWindowAt(cover: vec2f, pixel: f32, cell: f32, open: array<vec4f, 6>) -> vec2f {
let size = max(cell, 1e-4);
let grid = cover / size + vec2f(WINDOW_COLUMNS, WINDOW_ROWS) * 0.5;
if (grid.x < 0.0 || grid.x >= WINDOW_COLUMNS || grid.y < 0.0 || grid.y >= WINDOW_ROWS) {
return vec2f(0.0);
}
let index = (i32(WINDOW_ROWS) - 1 - i32(grid.y)) * i32(WINDOW_COLUMNS) + i32(grid.x);
var cells = open;
let openness = cells[index >> 2u][index & 3];
if (openness <= 0.002) {
return vec2f(0.0);
}
return windowIris(fract(grid) - 0.5, openness, pixel / size);
}
fn windowAt(cover: vec2f, pixel: f32, cell: f32, open: array<vec4f, 6>, held: vec4f) -> vec2f {
return max(fieldWindowAt(cover, pixel, cell, open), heldWindowAt(cover, pixel, cell, held));
}
fn windowBlur(resolution: vec2f, cell: f32) -> vec2f {
return cell * 0.12 * resolution.y / (2.0 * resolution);
}
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
const BURN_SOFTNESS: f32 = 0.42;
const BURN_WARP: f32 = 0.07;
fn burnt(cover: vec2f, world: f32, origin: f32, farthest: f32, pixel: vec2f) -> f32 {
let front = mix(origin, farthest + BURN_SOFTNESS, sqrt(world));
let angle = atan2(cover.y, cover.x);
var reach = length(cover) *
(1.0 + BURN_WARP * sin(angle * 3.0 + 1.7) * sin(angle * 2.0 - world * 3.0));
reach += (interleavedGradientNoise(pixel) - 0.5) * BURN_SOFTNESS * 0.3;
return 1.0 - smoothstep(front - BURN_SOFTNESS, front, reach);
}
override READ_PAPER: u32 = 0u;
override READ_VOID: u32 = 0u;
override DRAW_MONOCHROME: u32 = 0u;
override DRAW_STELLAR: u32 = 0u;
const VOID_DENSITY: f32 = 4.2;
const LIGHT_DENSITY_MAX: f32 = 2.5;
const LIGHT_DENSITY_GAIN: f32 = 4.2;
const PAPER_EXPOSURE: f32 = 0.45;
const INK_TINT_FLOOR: f32 = 0.35;
const INK_TINT_CEILING: f32 = 0.95;
const PROCESS_GAIN: f32 = 3.2;
fn tap(reading: texture_2d<f32>, at: vec2f) -> vec4f {
return textureSampleLevel(reading, smp, at, 0.0);
}
fn bloomAt(at: vec2f) -> vec3f {
return tap(bloomNear, at).rgb * u.bloomWeights.x + tap(bloomFar, at).rgb * u.bloomWeights.y;
}
fn dispersionAlong(uv: vec2f, spread: f32) -> vec2f {
let radial = uv - u.opticalAxis;
let reach = length(radial);
let t = reach / max(u.shadowUv, 1e-3);
return radial / max(reach, 1e-5) * (spread * 2.0 * t / (1.0 + t * t));
}
fn dispersed(reading: texture_2d<f32>, uv: vec2f, along: vec2f, fragCoord: vec2f) -> vec3f {
if (u.strata <= 1) {
return tap(reading, uv).rgb;
}
let jitter = (interleavedGradientNoise(fragCoord) - 0.5) / f32(u.strata);
var radiance = vec3f(0.0);
for (var k = 0; k < i32(SPECTRUM_TAPS); k++) {
if (k >= u.strata) {
break;
}
radiance += u.stratumWeight[k] * tap(reading, uv + along * (u.stratumOffset[k].x + jitter)).rgb;
}
return radiance;
}
fn throughWindows(reading: texture_2d<f32>, radiance: vec3f, aperture: vec2f, uv: vec2f) -> vec3f {
if (aperture.x <= 0.0) {
return radiance;
}
let spread = windowBlur(u.resolution, u.windowCell);
let soft = tap(reading, uv + vec2f(spread.x, 0.0)).rgb + tap(reading, uv - vec2f(spread.x, 0.0)).rgb
+ tap(reading, uv + vec2f(0.0, spread.y)).rgb + tap(reading, uv - vec2f(0.0, spread.y)).rgb;
return mix(radiance, soft * 0.25, aperture.x) + vec3f(WINDOW_EDGE) * aperture.y;
}
fn rulingInLight(lens: vec4f, front: vec2f, ruling: f32, seen: f32) -> vec3f {
if (u.field <= 0.001 && u.pulse <= 0.001) {
return vec3f(0.0);
}
let lines = ruling * lens.w * front.x * seen;
return vec3f(0.10, 0.095, 0.15) * lines * 0.10 + vec3f(0.62, 0.56, 0.78) * front.y * seen;
}
struct Field {
lens: vec4f,
front: vec2f,
ruling: vec3f,
}
fn pressPaper(glow: vec3f, aperture: vec2f, vignette: f32, field: Field, uv: vec2f, fragCoord: vec2f) -> vec3f {
var radiance = dispersed(scene, uv, dispersionAlong(uv, u.dispersion), fragCoord) + glow;
radiance = throughWindows(scene, radiance, aperture, uv);
let shadow = tap(scene, uv).a;
let exposed = radiance * vignette * u.presence;
let lit = linearToSrgb(toneMapColor(exposed * u.densityScale, u.exposure * PAPER_EXPOSURE));
let energy = luminance(lit);
let warmth = clamp(u.inkAxis * (lit.r - lit.b) / max(lit.r + lit.b, 1e-3), 0.0, 1.0);
let lightDensity = LIGHT_DENSITY_MAX * (1.0 - exp(-energy * LIGHT_DENSITY_GAIN / LIGHT_DENSITY_MAX));
let tint = mix(INK_TINT_FLOOR, INK_TINT_CEILING, warmth) * u.inkWarmth;
let heatDensity = lightDensity * tint;
let keyDensity = lightDensity * (1.0 - tint);
let paper = vec3f(1.0) - u.paperBleed * warmth * u.inkWarmth * energy * u.presence;
let duotone = paper * exp(
-(keyDensity + shadow * u.presence * VOID_DENSITY) * u.inkKey - heatDensity * u.inkSecondary
);
let hue = lit / max(max(lit.r, max(lit.g, lit.b)), 1e-4);
var plates = 1.0 + PROCESS_GAIN * (vec3f(1.0) - hue);
plates /= max((plates.r + plates.g + plates.b) / 3.0, 1e-4);
let process = paper * exp(-(lightDensity * plates + shadow * u.presence * VOID_DENSITY * u.inkKey));
var color = mix(duotone, process, u.process);
if (u.field > 0.001 || u.pulse > 0.001) {
let ruling = field.ruling * (1.0 - field.lens.z * 0.30) * field.lens.w;
let mark = (ruling * field.front.x * 0.14 + field.front.y * 0.5) * tap(sheetCover, uv).r;
color *= linearToSrgb(mix(vec3f(1.0), u.ink, mark));
}
return color;
}
fn telescope(glow: vec3f, aperture: vec2f, vignette: f32, field: Field, uv: vec2f, fragCoord: vec2f) -> vec3f {
var radiance = dispersed(voidScene, uv, dispersionAlong(uv, u.dispersion), fragCoord) + glow;
radiance = throughWindows(voidScene, radiance, aperture, uv);
let shadow = tap(voidScene, uv).a * u.presence;
let exposed = radiance * vignette * u.presence * (1.0 - shadow * u.swallow);
var seen = u.void * (1.0 - shadow) + toneMapColor(exposed, u.exposure);
seen += rulingInLight(field.lens, field.front, field.ruling.y, tap(voidCover, uv).r) * (1.0 - u.swallow);
return linearToSrgb(seen);
}
fn softCeiling(x: f32, ceiling: f32) -> f32 {
return ceiling * (1.0 - exp(-x / ceiling));
}
fn stellarExposed(glow: vec3f, aperture: vec2f, vignette: f32, uv: vec2f, fragCoord: vec2f) -> vec3f {
var radiance = dispersed(stellarScene, uv, dispersionAlong(uv, u.stellarDispersion), fragCoord) + glow;
radiance = throughWindows(stellarScene, radiance, aperture, uv);
return radiance * vignette * u.presence;
}
fn filament(sharp: vec3f, uv: vec2f) -> f32 {
let reach = EXCITED_FILAMENT_RADIUS / vec2f(textureDimensions(stellarScene));
let around = luminance(tap(stellarScene, uv + reach * vec2f(1.0, 0.0)).rgb)
+ luminance(tap(stellarScene, uv + reach * vec2f(0.5, 0.866)).rgb)
+ luminance(tap(stellarScene, uv + reach * vec2f(-0.5, 0.866)).rgb)
+ luminance(tap(stellarScene, uv + reach * vec2f(-1.0, 0.0)).rgb)
+ luminance(tap(stellarScene, uv + reach * vec2f(-0.5, -0.866)).rgb)
+ luminance(tap(stellarScene, uv + reach * vec2f(0.5, -0.866)).rgb);
return clamp(1.0 - around / (6.0 * max(luminance(sharp), 1e-5)), 0.0, 1.0);
}
struct Excited {
absorbance: vec3f,
light: vec3f,
}
fn pressStellar(exposed: vec3f, field: Field, uv: vec2f) -> Excited {
let inked = exposed * u.densityScale;
let energy = luminance(linearToSrgb(toneMapColor(inked, u.exposure * PAPER_EXPOSURE)));
let density = LIGHT_DENSITY_MAX * (1.0 - exp(-energy * LIGHT_DENSITY_GAIN / LIGHT_DENSITY_MAX));
let dye = softCeiling(density, EXCITED_DYE_CEILING);
let key = max(density - dye, 0.0) * EXCITED_KEY_GAIN;
let silhouette = tap(stellarScene, uv).a * u.presence;
var absorbance = dye * u.holdDye + key * u.holdKey + silhouette * VOID_DENSITY * u.inkKey;
var light = pow(
linearToSrgb(toneMapColor(inked, u.exposure * EXCITED_EXPOSURE * u.kindle)),
vec3f(EXCITED_CONTRAST)
);
light *= mix(EXCITED_BROAD, 1.0, smoothstep(0.02, 0.25, filament(tap(stellarScene, uv).rgb, uv)));
let strength = clamp(luminance(light), 0.0, 1.0);
light *= mix(u.holdNeon, vec3f(1.0), pow(strength, EXCITED_CORE));
if (u.field > 0.001 || u.pulse > 0.001) {
let seen = tap(stellarCover, uv).r;
let ruling = field.ruling.y * field.lens.w;
let mark = (ruling * (1.0 - field.lens.z * 0.30) * field.front.x * 0.14 + field.front.y * 0.5) * seen;
absorbance -= log(max(linearToSrgb(mix(vec3f(1.0), u.ink, vec3f(mark))), vec3f(1e-4)));
}
return Excited(absorbance, light);
}
fn screenThrough(absorbance: vec3f, light: vec3f) -> vec3f {
return 1.0 - (1.0 - exp(-absorbance)) * (1.0 - light);
}
fn seeStellar(exposed: vec3f, field: Field, uv: vec2f) -> vec3f {
let shadow = tap(stellarScene, uv).a * u.presence;
var seen = u.void * (1.0 - shadow) + toneMapColor(exposed * (1.0 - shadow * u.swallow), u.exposure);
seen += rulingInLight(field.lens, field.front, field.ruling.y, tap(stellarCover, uv).r) * (1.0 - u.swallow);
return linearToSrgb(seen);
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let uv = in.uv;
let fragCoord = uv * u.resolution;
let glow = bloomAt(uv);
let cover = (uv - u.opticalAxis) * vec2f(u.resolution.x / u.resolution.y, 1.0) * 2.0;
let aperture = windowAt(cover, 2.0 / u.resolution.y, u.windowCell, u.windowOpen, u.heldWindow) * u.presence;
let centered = (uv - 0.5) * vec2f(u.resolution.x / u.resolution.y, 1.0);
let vignette = 1.0 - u.vignette * pow(clamp(length(centered) * 0.82, 0.0, 1.0), 2.2);
var field = Field(vec4f(0.0), vec2f(0.0), vec3f(0.0));
if (u.field > 0.001 || u.pulse > 0.001) {
let lens = fieldLensAt(cover, u.fieldDistance);
let spread = lens.z * 0.02;
field = Field(
lens,
fieldFront(cover, u.field, u.pulse),
vec3f(
fieldRuling(lens.xy * (1.0 - spread), u.gridPitch, u.lineWidth),
fieldRuling(lens.xy, u.gridPitch, u.lineWidth),
fieldRuling(lens.xy * (1.0 + spread), u.gridPitch, u.lineWidth)
)
);
}
var exposed = vec3f(0.0);
if (DRAW_STELLAR != 0u) {
exposed = stellarExposed(glow, aperture, vignette, uv, fragCoord);
}
var sheet = vec3f(1.0);
if (READ_PAPER != 0u) {
if (DRAW_MONOCHROME != 0u && DRAW_STELLAR != 0u) {
let graphite = pressPaper(glow * (1.0 - u.condense), aperture, vignette, field, uv, fragCoord);
let excited = pressStellar(exposed, field, uv);
let graphiteAbsorbance = -log(max(graphite, vec3f(1e-4)));
sheet = screenThrough(mix(graphiteAbsorbance, excited.absorbance, u.condense), excited.light);
} else if (DRAW_STELLAR != 0u) {
let excited = pressStellar(exposed, field, uv);
sheet = screenThrough(excited.absorbance, excited.light);
} else {
sheet = pressPaper(glow, aperture, vignette, field, uv, fragCoord);
}
}
var space = vec3f(0.0);
if (READ_VOID != 0u) {
if (DRAW_MONOCHROME != 0u && DRAW_STELLAR != 0u) {
space = mix(
telescope(glow, aperture, vignette, field, uv, fragCoord),
seeStellar(exposed, field, uv),
u.condense
);
} else if (DRAW_STELLAR != 0u) {
space = seeStellar(exposed, field, uv);
} else {
space = telescope(glow, aperture, vignette, field, uv, fragCoord);
}
}
var color = sheet;
if (READ_PAPER != 0u && READ_VOID != 0u) {
let aspect = u.resolution.x / u.resolution.y;
let axis = (u.opticalAxis - 0.5) * vec2f(aspect, 1.0) * 2.0;
let burn = burnt(cover, u.world, u.shadowUv * 2.0, length(vec2f(aspect, 1.0) + abs(axis)), fragCoord);
color = mix(sheet, space, burn);
} else if (READ_VOID != 0u) {
color = space;
}
let noiseA = interleavedGradientNoise(fragCoord + vec2f(u.time * 71.0, u.time * 43.0));
let noiseB = interleavedGradientNoise(fragCoord + vec2f(37.3, 19.7) + vec2f(u.time * 31.0, u.time * 59.0));
color += (noiseA - noiseB) * u.grain;
return vec4f(color, 1.0);
}`;export{e as default};