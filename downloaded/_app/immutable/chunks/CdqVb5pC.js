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
fn diskSlope(inclination: f32) -> f32 {
return 0.5 * sqrt(max(1.0 - inclination * inclination, 0.0)) / inclination;
}
fn diskOfSheet(sheet: vec2f, pose: vec4f, depth: f32) -> vec2f {
let c = cos(pose.x);
let s = sin(pose.x);
let turned = vec2f(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
let perspective = max(DISK_PERSPECTIVE - turned.y * diskSlope(pose.y), DISK_PERSPECTIVE_FLOOR);
return vec2f(turned.x, turned.y / pose.y) * depth / perspective;
}
fn diskPerspective(disk: vec2f, pose: vec4f, depth: f32) -> f32 {
let slope = diskSlope(pose.y);
let tilted = disk.y * pose.y;
let y = DISK_PERSPECTIVE * tilted / (depth + slope * tilted);
return max(DISK_PERSPECTIVE - slope * y, DISK_PERSPECTIVE_FLOOR);
}
fn sheetOfDisk(disk: vec2f, pose: vec4f, depth: f32) -> vec2f {
let perspective = diskPerspective(disk, pose, depth);
let x = disk.x * perspective / depth;
let y = disk.y * pose.y * perspective / depth;
let c = cos(pose.x);
let s = sin(pose.x);
return vec2f(c * x - s * y, s * x + c * y);
}
fn diskOfPage(page: vec2f, place: vec4f, pose: vec4f) -> vec2f {
return diskOfSheet(vec2f((page.x - place.x) * pose.z, place.y - page.y) / place.z, pose, place.w);
}
fn pageOfDisk(disk: vec2f, place: vec4f, pose: vec4f) -> vec2f {
let sheet = sheetOfDisk(disk, pose, place.w) * place.z;
return vec2f(place.x + sheet.x * pose.z, place.y - sheet.y);
}
fn turnedAt(radius: f32, wind: f32) -> f32 {
return wind * ROTATION_REFERENCE / sqrt(radius * radius + ROTATION_CORE * ROTATION_CORE);
}
fn shearAt(radius: f32, wind: f32) -> f32 {
let soft = radius * radius + ROTATION_CORE * ROTATION_CORE;
return wind * ROTATION_REFERENCE * radius / (soft * sqrt(soft));
}
fn turnedBack(disk: vec2f, angle: f32) -> vec2f {
let c = cos(angle);
let s = sin(angle);
return vec2f(c * disk.x + s * disk.y, -s * disk.x + c * disk.y);
}
const GROOVE_ORDER: f32 = 6.0;
const GROOVE_NM: f32 = 9000.0;
const GROOVE_SHARPNESS: f32 = 3.0;
const GROOVE_MEAN: f32 = 0.3125;
const GROOVE_FRINGE: f32 = 0.45;
const LAMP_SHINE: f32 = 220.0;
const LAMP_HALO: f32 = 9.0;
const LAMP_RELIEF: f32 = 0.42;
const LAMP_BAND: f32 = 1.5;
const LAMP_GLOW: f32 = 0.42;
const LAMP_WASH: f32 = 0.34;
const LAMP_SOFT: f32 = 8.0;
fn lamplight(disk: vec2f, phase: f32, wind: f32, pose: vec4f, depth: f32, lamp: vec4f) -> vec4f {
let radius = max(length(disk), 1e-4);
let gradient = vec2f(-disk.y, disk.x) / (radius * radius) + disk / radius * shearAt(radius, wind);
let density = max(length(gradient), 1e-6);
let normal = vec3f(gradient / density, 0.0);
let tangent = vec3f(-normal.y, normal.x, 0.0);
let rise = sqrt(max(1.0 - pose.y * pose.y, 0.0));
let eye = vec3f(0.0, -depth * rise, depth * pose.y);
let point = vec3f(disk, 0.0);
let toLamp = lamp.xyz - point;
let distanceSquared = max(dot(toLamp, toLamp), 1e-4);
let toward = toLamp * inverseSqrt(distanceSquared);
let view = normalize(eye - point);
let soft = LAMP_SOFT * LAMP_SOFT;
let irradiance = (lamp.z * lamp.z + soft) / (distanceSquared + soft) * max(toward.z, 0.0);
let tl = dot(tangent, toward);
let tv = dot(tangent, view);
let cone = max(sqrt(max(1.0 - tl * tl, 0.0)) * sqrt(max(1.0 - tv * tv, 0.0)) - tl * tv, 0.0);
let band = pow(cone, LAMP_SHINE);
let glow = pow(cone, LAMP_HALO);
let footprint = length(fwidth(disk)) * 0.7071;
let perPixel = GROOVE_ORDER * density * footprint / TAU;
let resolved = 1.0 - smoothstep(0.25, 0.6, perPixel);
let surface = normalize(vec3f(0.0, 0.0, 1.0) + normal * (LAMP_RELIEF * cos(phase * GROOVE_ORDER) * resolved));
let raking = max(dot(surface, toward), 0.0) / max(toward.z, 0.05);
let pitch = TAU / (GROOVE_ORDER * density);
let path = pitch * GROOVE_NM * abs(dot(toward + view, normal));
let settled = smoothstep(0.35, 1.0, fwidth(path) / GROOVE_COMB[0].w);
var spectrum = vec3f(0.0);
for (var i = 0u; i < GROOVE_TAPS; i++) {
let tap = GROOVE_COMB[i];
let c = cos(PI * path / tap.w);
let order = pow(c * c, GROOVE_SHARPNESS) / GROOVE_MEAN;
spectrum += tap.rgb * mix(order, 1.0, settled);
}
spectrum = vec3f(1.0) + (spectrum - vec3f(1.0)) * GROOVE_FRINGE;
let returned = spectrum * (band * LAMP_BAND) + vec3f(glow * LAMP_GLOW + raking * LAMP_WASH);
return vec4f(returned * irradiance, band * irradiance);
}
override CUP_STEPS: i32 = 56;
override CUP_SHADOW_STEPS: i32 = 20;
struct CupRay {
origin: vec3f,
direction: vec3f,
pixel: f32,
}
struct CupHit {
porcelain: f32,
liquid: f32,
nearest: f32,
nearestAt: f32,
}
fn cupRay(sheet: vec2f, pose: vec4f, depth: f32, rows: f32) -> CupRay {
let c = cos(pose.x);
let s = sin(pose.x);
let turned = vec2f(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
let cosine = pose.y;
let sine = sqrt(max(1.0 - cosine * cosine, 0.0));
let distance = CUP_CAMERA_DISTANCE * depth;
let direction = vec3f(
turned.x,
cosine * turned.y + sine * CUP_CAMERA_FOCAL,
sine * turned.y - cosine * CUP_CAMERA_FOCAL
);
var ray: CupRay;
ray.origin = vec3f(0.0, -distance * sine, distance * cosine) / CUP_SCALE;
ray.direction = normalize(direction);
ray.pixel = 1.0 / (rows * CUP_CAMERA_FOCAL);
return ray;
}
fn cupPlane(ray: CupRay, height: f32) -> f32 {
return select(-1.0, (height - ray.origin.z) / ray.direction.z, abs(ray.direction.z) > 1e-6);
}
fn cupRipple(radius: f32, age: f32, strength: f32) -> f32 {
if (age < 0.0) {
return 0.0;
}
let front = age * CUP_RIPPLE_SPEED;
let behind = radius - front;
let packet = exp(-behind * behind / (CUP_RIPPLE_LENGTH * CUP_RIPPLE_LENGTH * 2.2));
let fading = exp(-age / CUP_RIPPLE_LIFE) * strength;
return CUP_RIPPLE_SLOPE * fading * packet * cos(TAU * behind / CUP_RIPPLE_LENGTH);
}
fn cupBlend(a: f32, b: f32, reach: f32) -> f32 {
let h = clamp(0.5 + 0.5 * (b - a) / reach, 0.0, 1.0);
return mix(b, a, h) - reach * h * (1.0 - h);
}
fn cupDistance(p: vec3f, bearing: f32) -> f32 {
let across = length(p.xy);
let arc = vec2f(across, CUP_CENTER - p.z);
let rim = vec2f(CUP_REACH_SINE, CUP_REACH_COSINE);
let pastLip = rim.y * arc.x > rim.x * arc.y;
let bowl = select(abs(length(arc) - CUP_BOWL), length(arc - rim * CUP_BOWL), pastLip) - CUP_WALL;
let foot = length(vec2f(across - CUP_FOOT_RADIUS, p.z - CUP_FOOT)) - CUP_FOOT_TUBE;
let toward = vec2f(cos(bearing), sin(bearing));
let outward = dot(p.xy, toward) - CUP_HANDLE_OUT;
let side = dot(p.xy, vec2f(-toward.y, toward.x));
let up = p.z + CUP_HANDLE_DOWN;
let radii = vec2f(CUP_HANDLE_WIDTH, CUP_HANDLE_HEIGHT);
let k0 = length(vec2f(outward, up) / radii);
let k1 = length(vec2f(outward, up) / (radii * radii));
let ring = k0 * (k0 - 1.0) / max(k1, 1e-4);
let section = length(vec2f(ring / CUP_HANDLE_THICKNESS, side / CUP_HANDLE_BREADTH));
var handle = (section - 1.0) * min(CUP_HANDLE_THICKNESS, CUP_HANDLE_BREADTH);
handle = max(handle, CUP_BOWL + CUP_WALL * 0.5 - length(p - vec3f(0.0, 0.0, CUP_CENTER)));
return cupBlend(cupBlend(bowl, foot, CUP_FILLET), handle, CUP_FILLET * 0.6);
}
fn saucerDistance(p: vec3f) -> f32 {
let arc = vec2f(length(p.xy), SAUCER_CENTER - p.z);
let rim = vec2f(SAUCER_REACH_SINE, SAUCER_REACH_COSINE);
let pastRim = rim.y * arc.x > rim.x * arc.y;
return select(abs(length(arc) - SAUCER_CURVATURE), length(arc - rim * SAUCER_CURVATURE), pastRim)
- SAUCER_SHELL;
}
fn cupSceneDistance(p: vec3f, thrown: vec3f, bearing: f32) -> f32 {
return min(cupDistance(p - thrown, bearing), saucerDistance(p));
}
fn cupNormal(p: vec3f, bearing: f32, reach: f32) -> vec3f {
let k = vec2f(1.0, -1.0);
return normalize(
k.xyy * cupDistance(p + k.xyy * reach, bearing) +
k.yyx * cupDistance(p + k.yyx * reach, bearing) +
k.yxy * cupDistance(p + k.yxy * reach, bearing) +
k.xxx * cupDistance(p + k.xxx * reach, bearing)
);
}
fn saucerNormal(p: vec3f, reach: f32) -> vec3f {
let k = vec2f(1.0, -1.0);
return normalize(
k.xyy * saucerDistance(p + k.xyy * reach) +
k.yyx * saucerDistance(p + k.yyx * reach) +
k.yxy * saucerDistance(p + k.yxy * reach) +
k.xxx * saucerDistance(p + k.xxx * reach)
);
}
fn cupTrace(ray: CupRay, bearing: f32) -> CupHit {
var hit: CupHit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
let toLiquid = cupPlane(ray, 0.0);
let onLiquid = ray.origin.xy + ray.direction.xy * toLiquid;
let liquid = select(-1.0, toLiquid, toLiquid > 0.0 && length(onLiquid) < CUP_LIQUID);
let offset = ray.origin - vec3f(0.0, 0.0, CUP_BOUND_CENTER);
let b = dot(offset, ray.direction);
let c = dot(offset, offset) - CUP_BOUND_RADIUS * CUP_BOUND_RADIUS;
let h = b * b - c;
if (h <= 0.0) {
hit.liquid = liquid;
return hit;
}
let root = sqrt(h);
var t = max(-b - root, 0.0);
let end = select(-b + root, min(-b + root, liquid), liquid > 0.0);
for (var i = 0; i < CUP_STEPS; i++) {
if (t > end) {
break;
}
let d = cupDistance(ray.origin + ray.direction * t, bearing);
let footprint = ray.pixel * t;
let near = d / footprint;
if (near < hit.nearest) {
hit.nearest = near;
hit.nearestAt = t;
}
if (d < footprint * 0.25) {
hit.porcelain = t;
hit.nearest = 0.0;
hit.nearestAt = t;
break;
}
t += max(d * 0.92, footprint * 0.3);
}
hit.liquid = select(liquid, -1.0, hit.porcelain > 0.0);
return hit;
}
fn saucerTrace(ray: CupRay) -> CupHit {
var hit: CupHit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
let offset = ray.origin - vec3f(0.0, 0.0, SAUCER_BOUND_CENTER);
let b = dot(offset, ray.direction);
let c = dot(offset, offset) - SAUCER_BOUND_RADIUS * SAUCER_BOUND_RADIUS;
let h = b * b - c;
if (h <= 0.0) {
return hit;
}
let root = sqrt(h);
var t = max(-b - root, 0.0);
let end = -b + root;
for (var i = 0; i < CUP_STEPS; i++) {
if (t > end) {
break;
}
let d = saucerDistance(ray.origin + ray.direction * t);
let footprint = ray.pixel * t;
let near = d / footprint;
if (near < hit.nearest) {
hit.nearest = near;
hit.nearestAt = t;
}
if (d < footprint * 0.25) {
hit.porcelain = t;
hit.nearest = 0.0;
hit.nearestAt = t;
break;
}
t += max(d * 0.92, footprint * 0.3);
}
return hit;
}
fn cupShadow(p: vec3f, direction: vec3f, far: f32, bearing: f32, sharpness: f32) -> f32 {
var lit = 1.0;
var t = 0.06;
for (var i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) {
break;
}
let d = cupDistance(p + direction * t, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) {
break;
}
t += clamp(d, 0.05, 0.6);
}
return smoothstep(0.0, 1.0, lit);
}
fn cupSceneShadow(p: vec3f, direction: vec3f, far: f32, thrown: vec3f, bearing: f32, sharpness: f32) -> f32 {
var lit = 1.0;
var t = 0.04;
for (var i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) {
break;
}
let d = cupSceneDistance(p + direction * t, thrown, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) {
break;
}
t += clamp(d, 0.05, 0.8);
}
return smoothstep(0.0, 1.0, lit);
}
fn cupOcclusion(p: vec3f, n: vec3f, thrown: vec3f, bearing: f32) -> f32 {
var shut = 0.0;
for (var i = 1; i <= 3; i++) {
let h = 0.12 * f32(i * i);
shut += (h - cupSceneDistance(p + n * h, thrown, bearing)) / h * (0.6 / f32(i));
}
return clamp(1.0 - shut * 0.55, 0.0, 1.0);
}
fn cupLipHeight() -> f32 {
return CUP_CENTER - CUP_BOWL * CUP_REACH_COSINE;
}
fn cupBowlExit(p: vec3f, direction: vec3f) -> vec4f {
let offset = p - vec3f(0.0, 0.0, CUP_CENTER);
let inner = CUP_BOWL - CUP_WALL;
let b = dot(offset, direction);
let c = dot(offset, offset) - inner * inner;
let t = -b + sqrt(max(b * b - c, 0.0));
let at = p + direction * t;
return vec4f(at, at.z - cupLipHeight());
}
fn cupRimLight(p: vec3f, direction: vec3f, softness: f32) -> f32 {
if (direction.z <= 0.0) {
return 0.0;
}
let exit = cupBowlExit(p, direction);
return smoothstep(-softness, softness, exit.w);
}
fn coffeeBreath(p: vec2f, time: f32) -> vec2f {
let a = vec3f(0.9, 1.7, 2.9);
let k1 = vec2f(1.7, 0.6);
let k2 = vec2f(-0.8, 2.3);
let k3 = vec2f(3.1, -1.9);
return 0.006 * (
a.x * k1 * cos(dot(k1, p) - time * 1.3) +
a.y * k2 * cos(dot(k2, p) - time * 1.7 + 1.1) * 0.5 +
a.z * k3 * cos(dot(k3, p) - time * 2.3 + 2.3) * 0.25
);
}
fn coffeeDropRing(radius: f32, age: f32, strength: f32) -> f32 {
let front = age * 1.8;
let spread = 0.3 + 0.5 * age;
let behind = radius - front;
let packet = exp(-behind * behind / (spread * spread));
let waveLength = 0.55 + 0.25 * age;
let fading = exp(-age / 1.2) / (1.0 + 1.1 * radius);
return 1.3 * strength * fading * packet * sin(6.2831853 * behind / waveLength) * smoothstep(0.0, 0.08, age);
}
fn cupLampOf(lamp: vec3f) -> vec3f {
return vec3f(lamp.xy * CUP_LAMP_REACH, CUP_LAMP_HEIGHT + lamp.z * CUP_LAMP_LIFT) / CUP_SCALE;
}
fn cupIrradiance(p: vec3f, lamp: vec3f) -> f32 {
let soft = CUP_LAMP_SOFT * CUP_LAMP_SOFT;
let toward = lamp - p;
let over = lamp.z - CUP_TABLE;
return (over * over + soft) / (dot(toward, toward) + soft);
}
fn cupWindowPool(p: vec3f) -> f32 {
let away = length(p.xy - CUP_SOFTBOX.xy * 2.0) / CUP_WINDOW_POOL;
return exp(-0.5 * away * away);
}
fn cupSpecular(n: vec3f, v: vec3f, l: vec3f, alpha: f32) -> f32 {
let m = normalize(v + l);
let nm = max(dot(n, m), 0.0);
let nv = max(dot(n, v), 1e-3);
let nl = max(dot(n, l), 0.0);
let a2 = alpha * alpha;
let spread = nm * nm * (a2 - 1.0) + 1.0;
let distribution = a2 / (PI * spread * spread);
let k = alpha * 0.5;
let visibility = 0.25 / ((nv * (1.0 - k) + k) * (nl * (1.0 - k) + k));
return distribution * visibility * nl;
}
fn cupFresnel(f0: f32, cosine: f32) -> f32 {
return f0 + (1.0 - f0) * pow(1.0 - clamp(cosine, 0.0, 1.0), 5.0);
}
fn cupRoom(direction: vec3f, world: f32) -> f32 {
let strip = pow(max(dot(direction, CUP_STRIP), 0.0), 16.0);
let night = 0.003 + 0.008 * max(direction.z, 0.0) + 2.5 * strip;
let day = 0.62 + 0.3 * max(direction.z, 0.0) + 1.1 * strip;
return mix(day, night, world);
}
fn cupAmbient(n: vec3f, night: f32) -> f32 {
let day = 0.22 + 0.22 * n.z;
let dark = 0.004 + 0.01 * max(n.z, 0.0);
return mix(day, dark, night);
}
fn cupShade(
p: vec3f,
n: vec3f,
v: vec3f,
lamp: vec3f,
albedo: vec3f,
alpha: f32,
f0: f32,
lit: vec2f,
open: f32,
night: f32
) -> vec3f {
let toLamp = normalize(lamp - p);
let key = mix(CUP_DAY_KEY, CUP_NIGHT_KEY, night) * cupIrradiance(p, lamp) * lit.x;
let window = mix(CUP_WINDOW_DAY, CUP_WINDOW_NIGHT, night) * cupWindowPool(p) * lit.y;
let wrap = max((dot(n, toLamp) + 0.2) / 1.2, 0.0);
let wrapWindow = max((dot(n, CUP_SOFTBOX) + 0.4) / 1.4, 0.0);
let facing = max(dot(n, v), 0.0);
let fresnel = cupFresnel(f0, facing);
let fill = CUP_FILL * night * max(dot(n, normalize(v + vec3f(0.0, 0.0, 0.5))), 0.0);
let diffuse = albedo * (key * wrap + window * wrapWindow + (cupAmbient(n, night) + fill) * open)
* (1.0 - fresnel);
let glint = key * cupSpecular(n, v, toLamp, alpha) * cupFresnel(f0, max(dot(v, normalize(v + toLamp)), 0.0));
let sheen = window * cupSpecular(n, v, CUP_SOFTBOX, max(alpha, 0.12))
* cupFresnel(f0, max(dot(v, normalize(v + CUP_SOFTBOX)), 0.0));
let room = cupRoom(reflect(-v, n), night) * fresnel * open;
return diffuse + vec3f(glint + sheen + room);
}
fn cupValue(p: vec2f) -> f32 {
let cell = floor(p);
let f = p - cell;
let s = f * f * (3.0 - 2.0 * f);
let x = u32(cell.x + 4096.0);
let y = u32(cell.y + 4096.0);
let a = hash11(vec3u(x, y, 71u));
let b = hash11(vec3u(x + 1u, y, 71u));
let c = hash11(vec3u(x, y + 1u, 71u));
let d = hash11(vec3u(x + 1u, y + 1u, 71u));
return mix(mix(a, b, s.x), mix(c, d, s.x), s.y);
}
fn cupTableAlbedo(p: vec2f) -> vec2f {
let cloud = cupValue(p * 0.35) * 0.55 + cupValue(p * 0.9 + 17.0) * 0.3 + cupValue(p * 2.4 + 41.0) * 0.15;
let grain = cupValue(p * 9.0 + 5.0) * 0.6 + cupValue(p * 23.0 + 9.0) * 0.4;
let night = CUP_TABLE_NIGHT * (0.72 + 0.5 * cloud + 0.16 * (grain - 0.5));
let day = CUP_TABLE_DAY * (0.985 + 0.015 * grain);
return vec2f(night, day);
}
const HDR_RANGE: f32 = 24.0;
fn hdrDecode(texel: vec4f) -> vec3f {
return texel.rgb * texel.rgb * HDR_RANGE;
}
fn hdrEncode(color: vec3f, alpha: f32) -> vec4f {
return vec4f(sqrt(clamp(color, vec3f(0.0), vec3f(HDR_RANGE)) / HDR_RANGE), alpha);
}
override REGISTER: u32 = 0u;
override ARC_TAPS: i32 = 12;
const PLATE_DENSITY_MAX: f32 = 2.4;
const PLATE_DENSITY_GAIN: f32 = 3.6;
const PLATE_EXPOSURE: f32 = 0.55;
const PLATE_TOE = vec2f(0.02, 0.17);
const PLATE_CONES = vec2f(0.12, 0.42);
const PROCESS_GAIN: f32 = 3.2;
const PLATE_BLOOM: f32 = 0.35;
const ARC_STEP: f32 = 1.5;
const SHEEN_LIGHT: f32 = 1.35;
const SHEEN_LIFT: f32 = 0.85;
const GLINT: f32 = 2.2;
const COFFEE = vec3f(0.011, 0.006, 0.0032);
const CREMA = vec3f(0.34, 0.19, 0.085);
const FOAM = vec3f(0.9, 0.85, 0.75);
const LATTE = vec3f(0.48, 0.31, 0.18);
const MILK_DENSITY: f32 = 0.8;
const MILK_CONTRAST: f32 = 2.4;
const STAIN = vec3f(0.78, 1.0, 1.3);
const RIM_CREMA = vec3f(0.42, 0.27, 0.15);
const PORCELAIN = vec3f(0.86, 0.855, 0.84);
override STEAM_SHEETS: i32 = 3;
const STEAM_LIGHT: f32 = 0.42;
const VORTEX = vec2f(0.16, 0.95);
const MENISCUS = vec2f(1.1, 0.045);
fn exposedColor(color: vec3f, exposed: f32) -> vec3f {
return mix(vec3f(luminance(color)), color, exposed);
}
fn printed(radiance: vec3f) -> vec3f {
return linearToSrgb(u.paper * (vec3f(1.0) - exp(-radiance * 1.25)) / (1.0 - exp(-1.25)));
}
fn lightAt(at: vec2f, glow: vec3f) -> vec3f {
return hdrDecode(textureSampleLevel(scene, smp, at, 0.0)) + glow;
}
fn uvOfSheet(sheet: vec2f) -> vec2f {
return (2.0 * sheet + u.lensShift) * u.resolution.y / (2.0 * u.resolution) + 0.5;
}
fn softAt(at: vec2f) -> vec3f {
return hdrDecode(textureSampleLevel(soft, smp, at, 0.0));
}
fn plateDensity(lit: vec3f) -> vec2f {
var energy = luminance(lit);
energy *= smoothstep(PLATE_TOE.x, PLATE_TOE.y, energy);
let amount = PLATE_DENSITY_MAX * (1.0 - exp(-energy * PLATE_DENSITY_GAIN / PLATE_DENSITY_MAX));
return vec2f(amount, smoothstep(PLATE_CONES.x, PLATE_CONES.y, energy));
}
fn density(light: vec3f) -> vec3f {
let lit = linearToSrgb(toneMapColor(light, u.exposure * PLATE_EXPOSURE));
let amount = plateDensity(lit);
let hue = lit / max(max(lit.r, max(lit.g, lit.b)), 1e-4);
var plates = 1.0 + PROCESS_GAIN * (vec3f(1.0) - hue);
plates /= max((plates.r + plates.g + plates.b) / 3.0, 1e-4);
return amount.x * mix(u.inkKey, plates, amount.y);
}
fn keyDensity(light: vec3f) -> vec3f {
let lit = linearToSrgb(toneMapColor(light, u.exposure * PLATE_EXPOSURE));
return plateDensity(lit).x * u.inkKey;
}
fn dropsAt(p: vec2f) -> vec2f {
var slope = vec2f(0.0);
for (var i = 0; i < 8; i++) {
let drop = u.drops[i];
if (drop.z < 0.0) {
continue;
}
let offset = p - drop.xy;
let distance = length(offset);
slope += offset / max(distance, 1e-3) * coffeeDropRing(distance, drop.z, drop.w);
}
return slope;
}
fn steamNoise(p: vec3f) -> f32 {
let cell = floor(p);
let f = p - cell;
let s = f * f * (3.0 - 2.0 * f);
let k = vec3u(cell + 4096.0);
let n000 = hash11(k);
let n100 = hash11(k + vec3u(1u, 0u, 0u));
let n010 = hash11(k + vec3u(0u, 1u, 0u));
let n110 = hash11(k + vec3u(1u, 1u, 0u));
let n001 = hash11(k + vec3u(0u, 0u, 1u));
let n101 = hash11(k + vec3u(1u, 0u, 1u));
let n011 = hash11(k + vec3u(0u, 1u, 1u));
let n111 = hash11(k + vec3u(1u, 1u, 1u));
return mix(
mix(mix(n000, n100, s.x), mix(n010, n110, s.x), s.y),
mix(mix(n001, n101, s.x), mix(n011, n111, s.x), s.y),
s.z
);
}
fn steamAt(ray: CupRay, time: f32) -> vec2f {
var veil = 0.0;
var light = 0.0;
for (var i = 0; i < STEAM_SHEETS; i++) {
let layer = f32(i);
let height = 0.3 + 0.75 * layer;
let t = (height - ray.origin.z) / ray.direction.z;
let q = ray.origin.xy + ray.direction.xy * t;
let away = length(q) / CUP_LIQUID;
let column = (1.0 - smoothstep(0.45 + 0.12 * layer, 0.95 + 0.18 * layer, away)) * (1.0 - 0.22 * layer);
let rise = time * 0.42 - layer * 0.55;
let c = cos(0.22 * rise);
let s = sin(0.22 * rise);
let turned = vec2f(c * q.x - s * q.y, s * q.x + c * q.y) * (0.9 - 0.07 * layer);
let air = vec3f(turned * 1.6, rise);
let warp = vec2f(steamNoise(air * vec3f(0.7, 0.7, 0.3) + 5.0), steamNoise(air * vec3f(0.7, 0.7, 0.3) + 23.0)) - 0.5;
let curled = air + vec3f(warp * 1.4, 0.0);
let n = steamNoise(curled * vec3f(1.0, 1.0, 0.35)) * 0.7 + steamNoise(curled * vec3f(2.6, 2.6, 0.8) + 17.0) * 0.3;
let filament = 1.0 - smoothstep(0.0, 0.06, abs(n - 0.52));
let wisp = (filament * 0.75 + smoothstep(0.55, 0.85, n) * 0.25) * column * 0.16;
veil += wisp * (1.0 - veil);
light += wisp * smoothstep(0.4, 0.9, steamNoise(air * 1.4 + vec3f(CUP_SOFTBOX.xy, 0.0)));
}
return vec2f(veil, clamp(light / max(veil, 1e-3), 0.0, 1.0));
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let fragCoord = in.uv * u.resolution;
var screen = (fragCoord * 2.0 - u.resolution) / u.resolution.y;
screen -= u.lensShift;
var glow = hdrDecode(textureSampleLevel(bloom, smp, in.uv, 0.0)) * u.bloomWeight;
var light = lightAt(in.uv, glow);
var read = in.uv;
let pose = vec4f(u.disk.xy, 1.0, 0.0);
let drawnPose = vec4f(u.plate.xy, 1.0, 0.0);
let depth = u.disk.w;
let drawnDepth = u.plate.z;
let sheet = screen * 0.5;
var disk = diskOfSheet(sheet, pose, depth);
let ray = cupRay(sheet, pose, depth, u.resolution.y);
let thrown = vec3f(u.shake.xy / CUP_SCALE, 0.0);
var inCup = ray;
inCup.origin -= thrown;
let cupLamp = cupLampOf(u.lamp.xyz);
var liquid = 0.0;
var liquidAt = vec3f(0.0);
var poured = 0.0;
var ripple = 0.0;
var dropped = vec2f(0.0);
var cupHit: CupHit;
cupHit.porcelain = -1.0;
cupHit.liquid = -1.0;
cupHit.nearest = 1e6;
cupHit.nearestAt = -1.0;
if (u.cup.x > 0.0) {
cupHit = cupTrace(inCup, u.cup.z);
if (cupHit.liquid > 0.0) {
liquidAt = inCup.origin + inCup.direction * cupHit.liquid;
let across = length(liquidAt.xy);
ripple = cupRipple(across, u.shake.z, u.shake.w);
dropped = dropsAt(liquidAt.xy);
let bent = liquidAt.xy + liquidAt.xy / max(across, 1e-3) * ripple * 0.18 + dropped * 0.5;
disk = bent * (CUP_SCALE / u.flow.x);
poured = u.flow.y * (1.6 - 0.6 * across / CUP_LIQUID) + u.coffee.z * (1.0 - 0.7 * across / CUP_LIQUID);
liquid = 1.0;
}
}
let radius = length(disk);
let wind = u.turning.x;
let stirred = liquid * u.cup.w * (1.0 - 0.45 * smoothstep(0.0, CUP_LIQUID, length(liquidAt.xy)));
let angle = turnedAt(radius, wind) + u.turning.y + poured + stirred;
let across = shearAt(radius, wind) * fwidth(radius);
let swept = u.turning.z * turnedAt(radius, 1.0) / turnedAt(ROTATION_REFERENCE, 1.0);
let before = turnedBack(disk, angle);
let lamp = lamplight(disk, atan2(before.y, before.x), wind, pose, depth, u.lamp);
if (wind > 0.0 || u.turning.y != 0.0 || u.cup.x > 0.0) {
let arc = min(max(across, swept), TAU);
read = uvOfSheet(sheetOfDisk(before, drawnPose, drawnDepth));
glow = hdrDecode(textureSampleLevel(bloom, smp, read, 0.0)) * u.bloomWeight;
let ringPixels = arc * length(sheet) * u.resolution.y;
let taps = clamp(i32(ceil(ringPixels / ARC_STEP)), 1, ARC_TAPS);
let coarse = max(smoothstep(2.0, 6.0, ringPixels / f32(taps)), liquid * smoothstep(0.45, 0.9, 1.0 - u.flow.x));
var gathered = vec3f(0.0);
for (var k = 0; k < taps; k++) {
let along = (f32(k) + 0.5) / f32(taps) - 0.5;
let at = uvOfSheet(sheetOfDisk(turnedBack(disk, angle + arc * along), drawnPose, drawnDepth));
let inside = step(vec2f(0.0), at) * step(at, vec2f(1.0));
var tap = vec3f(0.0);
if (coarse < 1.0) {
tap += hdrDecode(textureSampleLevel(scene, smp, at, 0.0)) * (1.0 - coarse);
}
if (coarse > 0.0) {
tap += softAt(at) * coarse;
}
gathered += tap * inside.x * inside.y;
}
light = gathered / f32(taps) + glow;
}
var cupNight = vec3f(0.0);
var cupDay = vec3f(0.0);
var coffeeInk = vec3f(0.0);
var glazedOver = 0.0;
var standing = 0.0;
var tableVeil = 1.0;
if (u.cup.x > 0.0) {
let view = -ray.direction;
let exposedShare = (u.exposed.x + u.exposed.y + u.exposed.z) / 3.0;
let body = exposedColor(PORCELAIN, exposedShare);
let lampInCup = cupLamp - thrown;
let glazed = select(1.0 - smoothstep(0.0, 1.0, cupHit.nearest), 1.0, cupHit.porcelain > 0.0);
glazedOver = glazed;
standing = max(liquid, glazed);
var underNight = vec3f(0.0);
var underDay = vec3f(0.0);
if (liquid > 0.0) {
let printedInk = keyDensity(light - glow * (1.0 - PLATE_BLOOM));
let milk = pow(1.0 - exp(-luminance(printedInk) * MILK_DENSITY), MILK_CONTRAST);
let across = length(liquidAt.xy);
let toWall = CUP_LIQUID - across;
let crema = (1.0 - smoothstep(0.0, 0.55, toWall)) * (1.0 - milk);
let night = mix(mix(COFFEE, CREMA, crema * 0.7), FOAM, milk);
let day = mix(LATTE, RIM_CREMA, crema * 0.55);
coffeeInk = luminance(printedInk) * STAIN;
let spread = VORTEX.y * VORTEX.y;
let dip = 2.0 * VORTEX.x / spread * exp(-across * across / spread) * (0.3 + 2.4 * u.cup.y);
let climb = MENISCUS.x * exp(-max(toWall, 0.0) / MENISCUS.y);
let outward = liquidAt.xy / max(across, 1e-3);
let gradient = liquidAt.xy * dip + outward * (ripple + climb) + dropped
+ coffeeBreath(liquidAt.xy, u.coffee.x);
let normal = normalize(vec3f(-gradient, 1.0));
let toLamp = lampInCup - liquidAt;
let lifted = liquidAt + vec3f(0.0, 0.0, 0.03);
let lit = vec2f(cupRimLight(lifted, normalize(toLamp), 0.1), cupRimLight(lifted, CUP_SOFTBOX, 0.35));
let open = mix(0.55, 1.0, smoothstep(0.0, 0.9, toWall));
let rough = mix(0.045, 0.12, milk);
let inCupView = -inCup.direction;
underNight = cupShade(liquidAt, normal, inCupView, lampInCup, night * open, rough, 0.02, lit, open, 1.0);
underDay = cupShade(liquidAt, normal, inCupView, lampInCup, day * open, rough, 0.02, lit, open, 0.0);
let mirrored = reflect(inCup.direction, normal);
let wall = cupBowlExit(liquidAt, mirrored);
let onWall = 1.0 - smoothstep(-0.06, 0.06, wall.w);
if (onWall > 0.0) {
let wallNormal = normalize(vec3f(0.0, 0.0, CUP_CENTER) - wall.xyz);
let toward = normalize(lampInCup - wall.xyz);
let wallLit = vec2f(cupRimLight(wall.xyz, toward, 0.1), cupRimLight(wall.xyz, CUP_SOFTBOX, 0.35));
let wallNight = cupShade(wall.xyz, wallNormal, -mirrored, lampInCup, body, 0.09, 0.045, wallLit, 1.0, 1.0);
let wallDay = cupShade(wall.xyz, wallNormal, -mirrored, lampInCup, body, 0.09, 0.045, wallLit, 1.0, 0.0);
let mirror = cupFresnel(0.02, max(dot(normal, inCupView), 0.0)) * onWall * (1.0 - milk * 0.7);
underNight += (wallNight - cupRoom(mirrored, 1.0) * open) * mirror;
underDay += (wallDay - cupRoom(mirrored, 0.0) * open) * mirror;
}
} else if (glazed < 1.0) {
let onTable = ray.origin + ray.direction * cupPlane(ray, CUP_TABLE);
let up = vec3f(0.0, 0.0, 1.0);
let toLamp = cupLamp - onTable;
var lit = vec2f(1.0);
var open = 1.0;
if (length(onTable.xy) < SAUCER_RIM * 2.6) {
let lifted = onTable + up * 0.02;
lit = vec2f(
cupSceneShadow(lifted, normalize(toLamp), length(toLamp), thrown, u.cup.z, 5.0),
cupSceneShadow(lifted, CUP_SOFTBOX, 18.0, thrown, u.cup.z, 2.0)
);
open = cupOcclusion(onTable, up, thrown, u.cup.z);
}
tableVeil = mix(open * mix(0.55, 1.0, 0.6 * lit.x + 0.4 * lit.y), 1.0,
smoothstep(SAUCER_RIM * 1.4, SAUCER_RIM * 2.6, length(onTable.xy)));
let stone = cupTableAlbedo(onTable.xy);
underNight = cupShade(onTable, up, view, cupLamp, vec3f(stone.x), CUP_TABLE_ROUGHNESS, 0.035, lit, open, 1.0);
underDay = cupShade(onTable, up, view, cupLamp, vec3f(stone.y), 0.6, 0.02, lit, open, 0.0);
let saucer = saucerTrace(ray);
let covered = select(1.0 - smoothstep(0.0, 1.0, saucer.nearest), 1.0, saucer.porcelain > 0.0);
if (covered > 0.0) {
let at = ray.origin + ray.direction * saucer.nearestAt;
let normal = saucerNormal(at, max(ray.pixel * saucer.nearestAt * 0.5, 1e-3));
let toward = cupLamp - at;
let raised = at + normal * 0.03;
let shadowed = vec2f(
cupSceneShadow(raised, normalize(toward), length(toward), thrown, u.cup.z, 6.0),
cupSceneShadow(raised, CUP_SOFTBOX, 14.0, thrown, u.cup.z, 2.5)
);
let reached = cupOcclusion(at, normal, thrown, u.cup.z);
let saucerNight = cupShade(at, normal, view, cupLamp, body, 0.09, 0.045, shadowed, reached, 1.0);
let saucerDay = cupShade(at, normal, view, cupLamp, body, 0.09, 0.045, shadowed, reached, 0.0);
underNight = mix(underNight, saucerNight, covered);
underDay = mix(underDay, saucerDay, covered);
standing = max(standing, covered);
}
}
cupNight = underNight;
cupDay = underDay;
if (u.coffee.y > 0.0 && u.world > 0.0) {
let steam = steamAt(inCup, u.coffee.x) * u.coffee.y;
cupNight = mix(cupNight, vec3f(STEAM_LIGHT) * (0.55 + 0.45 * steam.y), steam.x);
}
if (glazed > 0.0) {
let at = inCup.origin + inCup.direction * cupHit.nearestAt;
let normal = cupNormal(at, u.cup.z, max(inCup.pixel * cupHit.nearestAt * 0.5, 1e-3));
let toLamp = lampInCup - at;
let raised = at + normal * 0.04;
let lit = vec2f(
cupShadow(raised, normalize(toLamp), length(toLamp), u.cup.z, 9.0),
cupShadow(raised, CUP_SOFTBOX, 12.0, u.cup.z, 3.0)
);
let glazeNight = cupShade(at, normal, -inCup.direction, lampInCup, body, 0.09, 0.045, lit, 1.0, 1.0);
let glazeDay = cupShade(at, normal, -inCup.direction, lampInCup, body, 0.09, 0.045, lit, 1.0, 0.0);
cupNight = mix(cupNight, glazeNight, glazed);
cupDay = mix(cupDay, glazeDay, glazed);
}
}
let ringed = shearAt(radius, wind) * radius;
let cut = ringed / sqrt(1.0 + ringed * ringed);
let matter = 1.0 - exp(-max(luminance(light - glow), 0.0) / 0.12);
let knot = max(luminance(light - glow) - luminance(softAt(read)), 0.0);
let glint = smoothstep(0.02, 0.22, knot) * sqrt(lamp.w) * GLINT;
let sheen = (lamp.rgb + vec3f(glint)) * u.turning.w * cut * matter;
let window = windowAt(screen, 2.0 / u.resolution.y, u.windowCell, u.windowOpen, u.heldWindow);
if (window.x > 0.0) {
let reach = windowBlur(u.resolution, u.windowCell);
let blurred = hdrDecode(textureSampleLevel(scene, smp, in.uv + vec2f(reach.x, 0.0), 0.0))
+ hdrDecode(textureSampleLevel(scene, smp, in.uv - vec2f(reach.x, 0.0), 0.0))
+ hdrDecode(textureSampleLevel(scene, smp, in.uv + vec2f(0.0, reach.y), 0.0))
+ hdrDecode(textureSampleLevel(scene, smp, in.uv - vec2f(0.0, reach.y), 0.0));
light = mix(light, blurred * 0.25, window.x);
light += vec3f(WINDOW_EDGE) * window.y;
}
var blue = light;
var green = light;
var red = light;
if (REGISTER != 0u) {
blue = lightAt(read + u.misregister[0].xy, glow);
green = lightAt(read + u.misregister[1].xy, glow);
red = lightAt(read + u.misregister[2].xy, glow);
}
let lens = fieldLensAt(screen, u.fieldDistance);
let front = fieldFront(screen, u.field, u.pulse);
let ruling = fieldRuling(lens.xy, u.gridPitch, u.lineWidth);
let silver = vec3f(luminance(light));
let exposed = vec3f(
mix(silver.r, red.r, u.exposed.z),
mix(silver.g, green.g, u.exposed.y),
mix(silver.b, blue.b, u.exposed.x)
);
var space = toneMapColor(exposed + sheen * SHEEN_LIGHT, u.exposure);
let lines = ruling * front.x * lens.w;
var ground = u.void;
ground += vec3f(0.10, 0.095, 0.15) * lines * 0.10;
ground += vec3f(0.62, 0.56, 0.78) * front.y;
space = ground + space;
if (u.cup.x > 0.0) {
let bare = 1.0 - standing;
space = mix(space, mix(toneMapColor(cupNight, u.exposure), u.void * tableVeil, bare), u.cup.x);
}
space *= 1.0 - 0.14 * dot(screen, screen) * 0.25;
space = linearToSrgb(mix(u.void, space, u.presence));
let fog = glow * (1.0 - PLATE_BLOOM);
let graphite = keyDensity(light - fog);
let inked = vec3f(
mix(graphite.r, density(red - fog).r, u.exposed.z),
mix(graphite.g, density(green - fog).g, u.exposed.y),
mix(graphite.b, density(blue - fog).b, u.exposed.x)
);
let lifted = inked * max(vec3f(1.0) - sheen * SHEEN_LIFT, vec3f(0.2));
var plate = linearToSrgb(u.paper) * exp(-lifted * u.presence);
let mark = (ruling * (1.0 - lens.z * 0.30) * front.x * 0.14 + front.y * 0.5) * lens.w;
plate *= linearToSrgb(mix(vec3f(1.0), u.ink, mark));
if (u.cup.x > 0.0) {
let bare = 1.0 - standing;
let cupped = mix(printed(cupDay) * exp(-coffeeInk * (1.0 - glazedOver)), linearToSrgb(u.paper) * tableVeil, bare);
plate = mix(plate, mix(linearToSrgb(u.paper), cupped, u.presence), u.cup.x);
}
let aspect = u.resolution.x / u.resolution.y;
var burn = 0.0;
if (u.world >= 1.0) {
burn = 1.0;
} else if (u.world > 0.0) {
burn = burnt(screen, u.world, u.nucleus, length(vec2f(aspect, 1.0) + abs(u.lensShift)), fragCoord);
}
var color = mix(plate, space, burn);
color += (interleavedGradientNoise(fragCoord) - 0.5) / 255.0;
return vec4f(color, 1.0);
}`;export{e as default};