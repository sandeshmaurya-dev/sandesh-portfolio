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
fn indexAt(cauchy: vec2f, nanometers: f32) -> f32 {
let micrometers = nanometers * 0.001;
return cauchy.x + cauchy.y / (micrometers * micrometers);
}
fn reflectance(cosine: f32, eta: f32) -> f32 {
let c = clamp(cosine, 0.0, 1.0);
let sine = sqrt(max(1.0 - c * c, 0.0)) * eta;
if (sine >= 1.0) {
return 1.0;
}
let t = sqrt(1.0 - sine * sine);
let s = (eta * c - t) / (eta * c + t);
let p = (c - eta * t) / (c + eta * t);
return 0.5 * (s * s + p * p);
}
struct Path {
through: bool,
at: vec2f,
carried: f32,
span: f32,
normal: vec3f,
facing: f32,
}
struct Entry {
hit: bool,
point: vec3f,
normal: vec3f,
facing: f32,
}
fn enterSphere(origin: vec3f, direction: vec3f, radius: f32, height: f32) -> Entry {
let o = origin - vec3f(0.0, 0.0, height);
let b = dot(o, direction);
let discriminant = b * b - (dot(o, o) - radius * radius);
var entry = Entry(false, vec3f(0.0), vec3f(0.0, 0.0, 1.0), 1.0);
if (discriminant <= 0.0) {
return entry;
}
let point = o + direction * (-b - sqrt(discriminant));
if (point.z + height < 0.0) {
return entry;
}
let normal = point / radius;
return Entry(true, point, normal, -dot(normal, direction));
}
fn throughSphere(
entry: Entry,
origin: vec3f,
direction: vec3f,
radius: f32,
height: f32,
index: f32
) -> Path {
var path = Path(
false,
origin.xy - direction.xy * (origin.z / direction.z),
1.0,
0.0,
vec3f(0.0, 0.0, 1.0),
1.0
);
if (!entry.hit) {
return path;
}
let inside = refract(direction, entry.normal, 1.0 / index);
path.normal = entry.normal;
path.facing = entry.facing;
path.through = true;
path.carried = 1.0 - reflectance(entry.facing, 1.0 / index);
let across = -2.0 * dot(entry.point, inside);
let toSheet = select(1e9, -(entry.point.z + height) / inside.z, inside.z < 0.0);
if (toSheet <= across) {
path.at = entry.point.xy + inside.xy * toSheet;
path.span = toSheet;
return path;
}
let exit = entry.point + inside * across;
let outward = exit / radius;
let leaving = refract(inside, -outward, index);
path.carried *= 1.0 - reflectance(dot(outward, inside), index);
path.span = across;
if (leaving.z >= -1e-4) {
path.through = false;
path.carried = 0.0;
path.at = exit.xy;
return path;
}
path.at = exit.xy + leaving.xy * (-(exit.z + height) / leaving.z);
return path;
}
fn traceSphere(origin: vec3f, direction: vec3f, radius: f32, height: f32, index: f32) -> Path {
return throughSphere(enterSphere(origin, direction, radius, height), origin, direction, radius, height, index);
}
fn outline(phi: f32, amplitudes: vec4f, phases: vec4f) -> f32 {
return 1.0 + dot(amplitudes, cos(vec4f(2.0, 3.0, 4.0, 5.0) * phi - phases));
}
fn toLinear(c: vec3f) -> vec3f {
return select(c / 12.92, pow((c + 0.055) / 1.055, vec3f(2.4)), c > vec3f(0.04045));
}
fn toDisplay(c: vec3f) -> vec3f {
return select(
c * 12.92,
1.055 * pow(max(c, vec3f(0.0)), vec3f(1.0 / 2.4)) - 0.055,
c > vec3f(0.0031308)
);
}
override TAPS: u32 = 8u;
const CONTACT: f32 = 0.32;
const POOL: f32 = 0.045;
const HORIZON: f32 = 0.24;
const D_LINE: f32 = 587.56;
fn sourceOf(at: vec2f) -> vec2f {
let theta = at - u.frame.xy * 0.5;
let gravity = u.lens.x * u.lens.x * theta / (dot(theta, theta) + u.lens.w * u.lens.w);
return at - gravity - u.lens.yz;
}
fn sheet(at: vec2f, level: f32) -> vec3f {
let center = u.frame.xy * 0.5;
let pixel = u.frame.z;
let source = sourceOf(at);
let ink = textureSampleLevel(print, smp, source / u.frame.xy, level).rg;
let radius = length(at - center);
let behind = (1.0 - smoothstep(-pixel, pixel, radius - u.front.x)) * u.front.w;
let reach = length(source - center) / length(center);
let coverage = mix(ink.r, ink.g, behind) * clamp((u.shade.z - 0.35 * reach) / 0.65, 0.0, 1.0);
let core = 1.0 - smoothstep(u.shade.y - pixel, u.shade.y + pixel, radius);
let shade = (1.0 - smoothstep(u.shade.x - pixel, u.shade.x + pixel, radius)) *
(1.0 - core * smoothstep(0.9, 1.0, u.drop.w));
let paper = mix(
mix(u.ground.rgb, u.shadeInk.rgb, shade),
mix(u.ink.rgb, u.ground.rgb, shade),
coverage
);
let night = mix(u.night.rgb, u.bone.rgb, coverage);
return mix(paper, night, u.shade.w);
}
fn sunlit(p: vec2f) -> f32 {
let center = vec3f(-p, u.drop.y);
let along = dot(center, u.sun.xyz);
let miss = length(center - u.sun.xyz * along);
let penumbra = max(along, 0.0) * u.sun.w + u.frame.z;
let chord = sqrt(max(u.drop.x * u.drop.x - miss * miss, 0.0));
let ahead = step(0.0, along + chord);
let blocked = (1.0 - smoothstep(u.drop.x - penumbra, u.drop.x + penumbra, miss)) * ahead;
return 1.0 - blocked * u.drop.w;
}
fn gathered(p: vec2f, extra: f32) -> vec4f {
let uv = (p - u.region.xy) / (2.0 * u.region.z) + 0.5;
let window = 1.0 - smoothstep(0.72, 0.98, length(uv - 0.5) * 2.0);
let present = window * u.drop.w;
if (present <= 0.0) {
return vec4f(0.0);
}
return textureSampleLevel(caustic, smp, uv, max(u.region.w, 1.0) + extra) * present;
}
fn skylit(p: vec2f) -> f32 {
let r = u.drop.x;
let h = u.drop.y;
let foot = select(0.0, sqrt(max(r * r - h * h, 0.0)), h < r);
let outside = length(p) - foot;
let toward = vec3f(-p, h);
let distance = length(toward);
let cosine = max(toward.z / distance, 0.0);
let ball = select(0.0, (r * r) / (distance * distance) * cosine * cosine, h > 0.0);
let contact = select(
0.0,
exp(-max(outside, 0.0) / (0.09 * foot)) * step(0.0, outside),
foot > 0.0
);
return 1.0 - CONTACT * clamp(ball * 0.6 + contact, 0.0, 1.0) * u.drop.w;
}
struct Ridge {
height: f32,
gradient: vec2f,
curvature: f32,
}
const RIDGE_REACH: f32 = 5.0;
fn ridge(p: vec2f) -> Ridge {
let radius = length(p);
let width = max(u.front.y, 1.0);
let x = (radius - u.front.x) / width;
if (u.front.w <= 0.0 || abs(x) > RIDGE_REACH) {
return Ridge(0.0, vec2f(0.0), 0.0);
}
let h = u.front.z * exp(-x * x) * u.front.w * smoothstep(0.0, width * 2.5, u.front.x);
let slope = -2.0 * x / width * h;
let radial = select(vec2f(1.0, 0.0), p / radius, radius > 1e-4);
return Ridge(h, radial * slope, (4.0 * x * x - 2.0) / (width * width) * h);
}
fn ridgeLight(p: vec2f, index: f32) -> f32 {
let wave = ridge(p);
if (wave.height == 0.0) {
return 1.0;
}
let spread = (1.0 - 1.0 / index) * (dot(wave.gradient, wave.gradient) + wave.height * wave.curvature);
return 1.0 / max(1.0 + spread, 0.25);
}
fn gatheredColor(bands: vec4f) -> vec3f {
return u.bandWeights[0].rgb * bands.x + u.bandWeights[1].rgb * bands.y +
u.bandWeights[2].rgb * bands.z + u.bandWeights[3].rgb * bands.w;
}
fn irradiance(p: vec2f, gatheredLight: vec3f, index: f32) -> vec3f {
let sun = u.medium.w;
let sky = u.sky.rgb * (1.0 - sun) * skylit(p);
return sky + u.sunTint.rgb * sun * (sunlit(p) * ridgeLight(p, index) + gatheredLight);
}
fn shaded(printed: vec3f, p: vec2f, gatheredLight: vec3f, index: f32) -> vec3f {
let albedo = toLinear(printed);
let light = irradiance(p, gatheredLight, index);
let paper = albedo * light;
let pool = max(gatheredLight - 1.15, vec3f(0.0));
let night = albedo * mix(vec3f(1.0), light, 0.55) + u.sunTint.rgb * pool * POOL;
return mix(paper, night, u.shade.w);
}
const OPEN_SKY: f32 = 1.0 / 512.0;
fn open(p: vec2f, over: f32, crest: f32) -> bool {
if (over > 0.0 || crest > 1e-3) {
return false;
}
if (ridgeLight(p, 1.0) != 1.0) {
return false;
}
let uv = (p - u.region.xy) / (2.0 * u.region.z) + 0.5;
if (u.drop.w > 0.0 && 1.0 - smoothstep(0.72, 0.98, length(uv - 0.5) * 2.0) > 0.0) {
return false;
}
return skylit(p) >= 1.0 - OPEN_SKY && sunlit(p) == 1.0;
}
fn softbox(direction: vec3f) -> f32 {
let axis = u.sun.xyz;
let across = normalize(cross(vec3f(0.0, 0.0, 1.0), axis) + vec3f(1e-6, 0.0, 0.0));
let up = cross(axis, across);
let facing = dot(direction, axis);
if (facing <= 0.0) {
return 0.0;
}
let at = abs(vec2f(dot(direction, across), dot(direction, up)) / facing);
let pane = smoothstep(vec2f(0.44, 0.27), vec2f(0.3, 0.15), at);
return pane.x * pane.y;
}
fn environment(direction: vec3f) -> vec3f {
let world = u.shade.w;
let z = direction.z;
let skyShare = 1.0 - u.medium.w;
let skyLight = mix(vec3f(skyShare), vec3f(0.012), world) * u.sky.rgb * mix(0.75, 1.15, clamp(z, 0.0, 1.0));
let room = mix(vec3f(0.07), vec3f(0.035), world);
let below = mix(vec3f(0.9), vec3f(0.002), world);
let color = select(
mix(room, below, smoothstep(0.0, -0.5, z)),
mix(room, skyLight, smoothstep(0.0, HORIZON, z)),
z > 0.0
) + u.sunTint.rgb * softbox(direction) * mix(0.22, 0.95, world);
let toward = dot(direction, u.sun.xyz);
let disk = smoothstep(cos(u.sun.w * 2.2), cos(u.sun.w * 0.8), toward);
let glare = pow(max(toward, 0.0), 220.0) * 0.6 + pow(max(toward, 0.0), 24.0) * 0.08;
return color + u.sunTint.rgb * (disk * 60.0 + glare) * u.medium.z;
}
@fragment
fn main(in: Varyings) -> @location(0) vec4f {
let point = in.uv * vec2f(u.frame.x, u.display.y);
let center = u.frame.xy * 0.5;
let p = point - center;
let pixel = u.frame.z;
let world = u.shade.w;
let presence = u.drop.w;
let r = u.drop.x;
let h = u.drop.y;
let widest = (r + pixel) * (1.0 + dot(abs(u.modes), vec4f(1.0)));
let near = dot(p, p) < widest * widest;
var scale = 1.0;
var over = 0.0;
var eye = vec3f(p, h + r * 2.0 + 1.0);
let down = vec3f(0.0, 0.0, -1.0);
if (near) {
scale = outline(atan2(p.y, p.x), u.modes, u.phases);
let q = p / scale;
let silhouette = select(sqrt(max(r * r - h * h, 0.0)), r, h >= 0.0);
over = (1.0 - smoothstep(silhouette - pixel, silhouette + pixel, length(q))) * presence;
eye = vec3f(q, h + r * 2.0 + 1.0);
}
let wave = ridge(p);
let crest = wave.height;
let ridgeNormal = normalize(vec3f(-wave.gradient, 1.0));
let central = 1.0 + (indexAt(u.medium.xy, D_LINE) - 1.0) * presence;
var middle = Path(false, eye.xy, 1.0, 0.0, vec3f(0.0, 0.0, 1.0), 1.0);
if (near) {
middle = traceSphere(eye, down, r, h, central);
}
var mapped = select(p, middle.at * scale, middle.through);
let centralBent = refract(down, ridgeNormal, 1.0 / central);
mapped += select(vec2f(0.0), centralBent.xy * (crest / max(-centralBent.z, 1e-3)), crest > 1e-3);
let footprint = max(length(dpdx(mapped)), length(dpdy(mapped)));
let supersample = max(u.frame.w * u.frame.z, 1.0);
let level = log2(max(footprint * u.frame.w / supersample, 1.0));
let printed = sheet(point, level);
if (open(p, over, crest)) {
return vec4f(printed, 1.0);
}
let lit = shaded(printed, p, gatheredColor(gathered(p, 0.0)), central);
var color = lit;
let glassy = crest > 1e-3;
if (over > 0.0 || glassy) {
var through = vec3f(0.0);
let absorbance = u.drop.z;
let entry = enterSphere(eye, down, r, h);
for (var k = 0u; k < TAPS; k++) {
let tap = u.comb[k];
let index = 1.0 + (indexAt(u.medium.xy, 550.0 + tap.w * 300.0) - 1.0) * presence;
var at = p;
var carried = 1.0;
if (over > 0.0) {
let path = throughSphere(entry, eye, down, r, h, index);
at = select(p, path.at * scale, path.through);
carried = select(1.0, path.carried * exp(-absorbance * path.span), path.through);
}
if (glassy) {
let bent = refract(down, ridgeNormal, 1.0 / index);
at += bent.xy * (crest / max(-bent.z, 1e-3));
carried *= 1.0 - reflectance(ridgeNormal.z, 1.0 / index);
}
let band = vec3f(dot(gathered(at, 0.0), u.combBands[k]));
through += tap.rgb * shaded(sheet(center + at, level), at, band, index) * carried;
}
let onDrop = over > 0.0 && middle.through;
let normal = select(ridgeNormal, middle.normal, onDrop);
let facing = select(ridgeNormal.z, middle.facing, onDrop);
let mirror = reflectance(facing, 1.0 / central) * select(u.front.w, presence, onDrop);
through += environment(reflect(down, normal)) * mirror;
color = mix(lit, through, max(over, select(0.0, 1.0, glassy)));
}
let glow = gathered(p, 1.5);
let excess = max(dot(glow, vec4f(0.25)) - 1.0, 0.0);
let bloom = select(0.08, 0.03, u.display.x > 1.0);
color += u.sunTint.rgb * u.medium.w * excess * bloom * (1.0 - world);
return vec4f(toDisplay(clamp(color, vec3f(0.0), vec3f(u.display.x))), 1.0);
}`;export{e as default};