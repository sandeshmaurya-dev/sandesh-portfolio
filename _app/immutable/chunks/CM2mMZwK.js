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
const PI: f32 = 3.14159265;
const GRAZE: f32 = 0.26;
fn carlsonRF(args: vec3f) -> f32 {
var p = args;
for (var iteration = 0u; iteration < PASSAGE_RF_STEPS; iteration++) {
let root = sqrt(p);
let lambda = root.x * root.y + root.y * root.z + root.z * root.x;
p = (p + lambda) * 0.25;
}
let mean = (p.x + p.y + p.z) / 3.0;
let dx = 1.0 - p.x / mean;
let dy = 1.0 - p.y / mean;
let dz = -(dx + dy);
let e2 = dx * dy - dz * dz;
let e3 = dx * dy * dz;
return (1.0 - e2 / 10.0 + e3 / 14.0 + e2 * e2 / 24.0 - 3.0 * e2 * e3 / 44.0) / sqrt(mean);
}
fn escapeAt(theta: f32, x: f32) -> vec2f {
let before = x >= 0.0;
let distance = abs(x);
let fromOutward = select(theta, PI - theta, before);
let beta = sqrt(distance * distance + 1.0) * sin(fromOutward);
let inward = fromOutward > PI * 0.5;
let crossing = beta < 1.0;
let c2 = max(1.0 - beta * beta, PASSAGE_RIM * 2.0);
let k2 = 1.0 / max(beta * beta, 1.0 + PASSAGE_RIM * 2.0);
let cos2 = min(max(beta * beta - 1.0, 0.0) / max(distance * distance, 1e-12), 1.0);
let sin2 = 1.0 - cos2;
let whole = carlsonRF(select(vec3f(0.0, 1.0 - k2, 1.0), vec3f(0.0, 1.0, c2), crossing));
let part = carlsonRF(
select(
vec3f(cos2, 1.0 - k2 * sin2, 1.0),
vec3f(c2, c2 * (1.0 + distance * distance), c2 + distance * distance),
crossing
)
) * select(sqrt(sin2), distance, crossing);
let angle = select(1.0, beta, crossing) * (whole + select(-part, part, inward));
let crossed = crossing && inward;
let beyond = select(!crossed, crossed, before);
return vec2f(select(PI - angle, angle, beyond), select(0.0, 1.0, beyond));
}
fn onPicture(at: vec2f, rect: vec4f, mirrored: f32) -> vec3f {
let local = (at - rect.xy) / rect.zw;
let inside = all(local >= vec2f(0.0)) && all(local <= vec2f(1.0));
return vec3f(mix(local.x, 1.0 - local.x, mirrored), local.y, select(0.0, 1.0, inside));
}
fn nearAt(at: vec2f, gradX: vec2f, gradY: vec2f) -> vec4f {
let on = onPicture(at, u.nearRect, u.plates.x);
let ground = textureSampleLevel(near, smp, vec2f(0.0), 0.0);
let seen = textureSampleGrad(near, smp, on.xy, gradX / u.nearRect.zw, gradY / u.nearRect.zw);
return mix(ground, seen, on.z);
}
fn farAt(at: vec2f, gradX: vec2f, gradY: vec2f) -> vec4f {
let on = onPicture(at, u.farRect, u.plates.y);
let ground = textureSampleLevel(far, smp, vec2f(0.0), 0.0);
let seen = textureSampleGrad(far, smp, on.xy, gradX / u.farRect.zw, gradY / u.farRect.zw);
return mix(ground, seen, on.z);
}
fn nearAtLevel(at: vec2f, level: f32) -> vec4f {
let on = onPicture(at, u.nearRect, u.plates.x);
return mix(textureSampleLevel(near, smp, vec2f(0.0), 0.0), textureSampleLevel(near, smp, on.xy, level), on.z);
}
fn farAtLevel(at: vec2f, level: f32) -> vec4f {
let on = onPicture(at, u.farRect, u.plates.y);
return mix(textureSampleLevel(far, smp, vec2f(0.0), 0.0), textureSampleLevel(far, smp, on.xy, level), on.z);
}
fn turn(v: vec2f, angle: f32) -> vec2f {
let c = cos(angle);
let s = sin(angle);
return vec2f(c * v.x - s * v.y, s * v.x + c * v.y);
}
fn seedHash(cell: vec2f) -> vec4f {
var x = (u32(cell.x + 8192.0) * 0x9e3779b1u) ^ (u32(cell.y + 8192.0) * 0x85ebca77u);
var values = vec4f(0.0);
for (var i = 0; i < 4; i++) {
x ^= x >> 16u;
x *= 0x21f0aaadu;
x ^= x >> 15u;
x *= 0xd35a2d97u;
x ^= x >> 15u;
values[i] = f32(x >> 8u) / 16777216.0;
}
return values;
}
fn seedsAt(at: vec2f, footprint: f32, density: f32, time: f32, reading: f32) -> vec2f {
let cellSize = 52.0;
let carried = at - vec2f(reading * time * 46.0, -time * 9.0);
let cell = floor(carried / cellSize);
var cover = 0.0;
var light = 0.0;
for (var j = -1; j <= 1; j++) {
for (var i = -1; i <= 1; i++) {
let lattice = cell + vec2f(f32(i), f32(j));
let h = seedHash(lattice);
if (h.w > density) {
continue;
}
let bob = vec2f(sin(time * (0.9 + h.x) + h.y * 6.28), cos(time * (0.7 + h.y) + h.x * 6.28)) * 6.0;
let place = (lattice + 0.15 + h.xy * 0.7) * cellSize + bob;
let distance = length(carried - place);
let size = 0.9 + 0.9 * h.z;
let spread = max(footprint, 0.75);
let share = min(size * size / (spread * spread), 1.0);
let core = (1.0 - smoothstep(size - spread * 0.5, size + spread * 0.5, distance)) * share;
let hairs = exp(-pow((distance - size * 2.3) / max(spread, size * 0.5), 2.0)) * 0.12 * share;
cover = max(cover, core + hairs);
let flicker = 0.55 + 0.45 * sin(time * (2.0 + 2.5 * h.z) + h.x * 40.0);
light = max(light, (core + exp(-distance * distance / (size * size * 9.0)) * 0.5 * share) * flicker);
}
}
return vec2f(min(cover, 1.0), light);
}
fn driftingAt(point: vec2f, time: f32, reading: f32) -> f32 {
var cover = 0.0;
for (var i = 0; i < 7; i++) {
let h = seedHash(vec2f(f32(i), 401.0));
let radius = (0.035 + 0.05 * h.z) * u.frame.y;
let across = fract(h.x + time * (0.16 + 0.1 * h.y));
let x = mix(-radius, u.frame.x + radius, select(1.0 - across, across, reading > 0.0));
let y = u.frame.y * (0.12 + 0.76 * h.y) + sin(time * (0.6 + 0.4 * h.w) + h.w * 6.28) * 0.035 * u.frame.y;
let d = length(point - vec2f(x, y)) / radius;
let disk = 1.0 - smoothstep(0.86, 1.0, d);
let rim = exp(-pow((d - 0.9) / 0.08, 2.0));
cover += (disk * 0.55 + rim * 0.45) * (0.6 + 0.4 * h.w);
}
return min(cover, 1.0);
}
fn withSeeds(color: vec4f, seeds: vec2f) -> vec4f {
let ink = seeds.x * (1.0 - u.ink.w) * 0.6;
let glow = seeds.y * u.ink.w;
return vec4f(color.rgb * (1.0 - ink) + u.ink.rgb * (ink + glow), min(color.a * (1.0 - ink) + ink + glow, 1.0));
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let point = in.uv * u.frame.xy;
let offset = turn((point - u.frame.zw) / u.throat.z, -u.style.y * step(1.5, u.style.x));
let radius = length(offset);
let axis = select(vec2f(1.0, 0.0), offset / radius, radius > 1e-5);
let style = u.style.x;
let center = u.frame.zw;
var color = vec4f(0.0);
var sheet = vec2f(0.0);
var honest = 0.0;
if (style < 0.5 || style > 1.5) {
let theta = atan(radius * u.throat.y);
var escaped = escapeAt(theta, u.throat.x);
escaped = select(escaped, vec2f(theta, 0.0), u.throat.w < 0.5);
escaped = select(escaped, vec2f(theta, 1.0), u.throat.w > 1.5);
let sky = escaped.x;
let beyond = escaped.y;
let facing = cos(sky);
let reach = sin(sky) / max(facing, 1e-3) / u.throat.y;
let uv = (center + axis * reach * u.throat.z) / u.frame.xy;
let ahead = smoothstep(0.02, 0.08, facing);
let gradX = dpdx(uv) * ahead;
let gradY = dpdy(uv) * ahead;
let nearUv = (center + (uv * u.frame.xy - center) / u.scales.x) / u.frame.xy;
var nearColor = mix(
textureSampleLevel(near, smp, vec2f(0.0), 0.0),
nearAt(nearUv, gradX / u.scales.x, gradY / u.scales.x),
ahead
);
var farColor = mix(textureSampleLevel(far, smp, vec2f(0.0), 0.0), farAt(uv, gradX, gradY), ahead)
* u.plates.z;
if (u.seeds.x > 0.0 || u.seeds.y > 0.0) {
let pixels = uv * u.frame.xy;
let footprint = max(length(gradX * u.frame.xy), length(gradY * u.frame.xy)) + (1.0 - ahead) * 1e3;
nearColor = withSeeds(nearColor, seedsAt(nearUv * u.frame.xy, footprint / u.scales.x, u.seeds.x, u.style.w, u.scales.z) * ahead);
farColor = withSeeds(farColor, seedsAt(pixels + 911.0, footprint, u.seeds.y, u.style.w, u.scales.z) * ahead * u.plates.z);
}
color = mix(nearColor, farColor, beyond);
sheet = axis * (sin(sky) / max(facing, GRAZE) / u.throat.y) * u.throat.z;
honest = mix(smoothstep(0.12, 0.42, facing), 1.0, step(1.5, style) * beyond);
} else if (style < 1.5) {
let core2 = PASSAGE_WINDING_CORE * PASSAGE_WINDING_CORE;
let rate = sqrt(1.0 + core2) / sqrt(radius * radius + core2);
let turned = u.style.y * rate;
let shear = u.style.y * sqrt(1.0 + core2) * radius / pow(radius * radius + core2, 1.5);
let arc = min(shear * fwidth(radius), 6.2831853);
let ringPixels = arc * radius * u.throat.z * u.detail.x;
let taps = clamp(i32(ceil(ringPixels / 1.5)), 1, 10);
var nearSum = vec4f(0.0);
var farSum = vec4f(0.0);
for (var k = 0; k < taps; k++) {
let along = (f32(k) + 0.5) / f32(taps) - 0.5;
let back = turn(offset, -(turned + arc * along));
nearSum += nearAtLevel((center + back / u.scales.x * u.throat.z) / u.frame.xy, 0.0);
farSum += farAtLevel((center + back / u.scales.y * u.throat.z) / u.frame.xy, 0.0);
}
color = mix(nearSum / f32(taps), farSum / f32(taps) * u.plates.z, u.style.z);
sheet = turn(offset, -turned) / mix(u.scales.x, u.scales.y, u.style.z) * u.throat.z;
honest = 1.0;
}
let cell = sheet / u.field.z;
let width = max(fwidth(cell) * u.detail.x, vec2f(1e-4));
let grid = abs(fract(cell + 0.5) - 0.5) / width;
let line = 1.0 - min(min(grid.x, grid.y), 1.0);
let share = min(width, vec2f(1.0));
let mean = 1.0 - (1.0 - share.x) * (1.0 - share.y);
let ruled = mix(line, mean, smoothstep(0.35, 0.9, max(width.x, width.y)));
let travel = radius * 0.5;
let reveal = 1.0 - smoothstep(u.field.x - 0.24, u.field.x, travel);
let edge = exp(-pow((travel - u.field.x) * 34.0, 2.0)) * u.field.y;
let seen = dot(color.rgb, vec3f(0.2126, 0.7152, 0.0722));
let sheetShows = mix(seen + (1.0 - color.a), 1.0 - seen, u.ink.w);
let density = clamp((ruled * reveal * honest * sheetShows + edge * 0.35) * u.field.w, 0.0, 1.0);
var drawn = vec4f(color.rgb * (1.0 - density) + u.ink.rgb * density, color.a * (1.0 - density) + density);
if (u.seeds.z > 0.0) {
let near = driftingAt(point, u.style.w, u.scales.z) * u.seeds.z;
drawn = withSeeds(drawn, vec2f(near * 0.1, near * 0.16));
}
return drawn;
}`;export{e as default};