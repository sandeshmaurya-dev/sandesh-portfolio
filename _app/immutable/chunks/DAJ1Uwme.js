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
fn fieldDeflection(b: f32) -> f32 {
let x = min(B_CRIT / max(b, B_CRIT), FIELD_DEFLECTION_REACH);
let at = (1.0 - sqrt(1.0 - x)) / (1.0 - sqrt(1.0 - FIELD_DEFLECTION_REACH)) *
f32(FIELD_DEFLECTION_SAMPLES - 1u);
let index = min(u32(at), FIELD_DEFLECTION_SAMPLES - 2u);
let residual = mix(FIELD_DEFLECTION[index], FIELD_DEFLECTION[index + 1u], at - f32(index));
return residual - log(1.0 - x);
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
const BODIES: u32 = 40u;
const BIN_BITS: u32 = 10u;
const FIELDS: u32 = 5u;
const GRAZE: f32 = 0.26;
fn onSheet(turned: f32) -> f32 {
return u.frame.z * sin(turned) / max(abs(cos(turned)), GRAZE);
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let point = in.uv * u.frame.xy;
let theta = point - u.hole.xy;
let rho = length(theta);
let axis = select(vec2f(1.0, 0.0), theta / rho, rho > 1e-4);
let view = atan(rho / u.frame.z);
let impact = u.frame.w * sin(view);
let bend = fieldDeflection(impact);
let pixelImpact = u.frame.w * cos(view) / u.frame.z * u.ember.w;
let captured = 1.0 - smoothstep(B_CRIT - pixelImpact, B_CRIT + pixelImpact, impact);
let depth = u.lens.x;
let lensed = axis * onSheet(view - depth * bend);
let footprint = max(length(dpdx(lensed)), length(dpdy(lensed)));
let near = u.hole.xy + axis * onSheet(view);
let span = u.hole.xy + lensed - near;
let spanSquared = max(dot(span, span), 1e-6);
let bounded = view - depth * bend > -1.5;
let bin = vec2i(clamp(floor(point / u.tiles.x), vec2f(0.0), u.tiles.yz - 1.0));
let held = vec4u(textureLoad(bins, bin, 0) + 0.5);
if (all(held == vec4u(0u))) {
return vec4f(0.0);
}
var transmit = 1.0;
var color = vec3f(0.0);
if (u.lens.y > 0.5) {
let disk = diskOfPage(point, u.place, u.pose);
let radius = length(disk);
for (var channel = 0u; channel < 4u; channel++) {
let word = held[channel];
if (word == 0u) {
continue;
}
for (var bit = 0u; bit < BIN_BITS; bit++) {
if ((word & (1u << bit)) == 0u) {
continue;
}
let i = channel * BIN_BITS + bit;
let rest = u.bodies[i * FIELDS];
let now = u.bodies[i * FIELDS + 1u];
let shape = u.bodies[i * FIELDS + 2u];
let light = u.bodies[i * FIELDS + 3u];
let cell = u.bodies[i * FIELDS + 4u];
if (radius < shape.z || radius > shape.w) {
continue;
}
let turned = now.z + now.w * (turnedAt(radius, shape.y) - now.z);
let home = pageOfDisk(turnedBack(disk, turned) / shape.x, u.place, u.pose);
let q = home - rest.xy;
if (abs(q.x) > rest.z || abs(q.y) > rest.w) {
continue;
}
let atlas = select(u.atlas.xy, u.atlas.zw, light.w >= 0.5);
let uv = (rest.xy + q + cell.xy) / atlas;
let sheared = now.w * shearAt(radius, shape.y) * radius;
let texels = u.ember.w * sqrt(1.0 + sheared * sheared) / shape.x * u.hole.w;
let level = log2(max(texels, 1.0));
var ink = select(
textureSampleLevel(page, smp, uv, level).a,
textureSampleLevel(sentence, smp, uv, level).a,
light.w >= 0.5
);
ink *= light.x;
color += transmit * ink * u.ink.rgb;
transmit *= 1.0 - ink;
}
}
return vec4f(color, 1.0 - transmit);
}
for (var channel = 0u; channel < 4u; channel++) {
let word = held[channel];
if (word == 0u) {
continue;
}
for (var bit = 0u; bit < BIN_BITS; bit++) {
if ((word & (1u << bit)) == 0u) {
continue;
}
let i = channel * BIN_BITS + bit;
let rest = u.bodies[i * FIELDS];
let now = u.bodies[i * FIELDS + 1u];
let shape = u.bodies[i * FIELDS + 2u];
let light = u.bodies[i * FIELDS + 3u];
let cell = u.bodies[i * FIELDS + 4u];
if (bounded) {
let toBody = now.xy - near;
let gap = toBody - span * clamp(dot(toBody, span) / spanSquared, 0.0, 1.0);
if (dot(gap, gap) > light.z * light.z) {
continue;
}
}
let beta = u.hole.xy + axis * onSheet(view - shape.w * depth * bend);
var v = beta - now.xy;
if (dot(v, v) > light.z * light.z) {
continue;
}
v = vec2f(now.z * v.x + now.w * v.y, -now.w * v.x + now.z * v.y);
let q = vec2f(shape.x * v.x + shape.y * v.y, shape.y * v.x + shape.z * v.y);
if (abs(q.x) > rest.z || abs(q.y) > rest.w) {
continue;
}
let atlas = select(u.atlas.xy, u.atlas.zw, light.w >= 0.5);
let uv = (rest.xy + q + cell.xy) / atlas;
let stretch = max(abs(shape.x) + abs(shape.y), abs(shape.y) + abs(shape.z));
let texels = mix(u.ember.w, footprint, shape.w) * stretch * u.hole.w;
let level = log2(max(texels, 1.0));
var ink = select(
textureSampleLevel(page, smp, uv, level).a,
textureSampleLevel(sentence, smp, uv, level).a,
light.w >= 0.5
);
ink *= light.x * (1.0 - captured * shape.w);
let tint = mix(u.ink.rgb, u.ember.rgb, light.y);
color += transmit * ink * tint;
transmit *= 1.0 - ink;
}
}
return vec4f(color, 1.0 - transmit);
}`;export{e as default};