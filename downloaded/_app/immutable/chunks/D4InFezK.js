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
const NOISE_PERIOD: f32 = 64.0;
fn valueNoise(position: vec3f) -> f32 {
let cell = floor(position);
let local = position - cell;
let weight = local * local * local * (local * (local * 6.0 - 15.0) + 10.0);
let wrapped = cell - NOISE_PERIOD * floor(cell / NOISE_PERIOD);
return textureSampleLevel(noise, smpRepeat, (wrapped + weight + 0.5) / NOISE_PERIOD, 0.0).r;
}
fn fbmFiltered(start: vec3f, octaves: i32, footprint: f32) -> f32 {
let tumble = mat3x3f(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);
var position = start;
var sum = 0.0;
var amplitude = 0.5;
var total = 0.0;
var frequency = 1.0;
for (var octave = 0; octave < 5; octave++) {
if (octave >= octaves) {
break;
}
let fade = 1.0 - smoothstep(0.35, 0.9, footprint * frequency);
total += amplitude;
if (fade > 0.004) {
sum += amplitude * mix(0.5, valueNoise(position), fade);
} else {
sum += amplitude * 0.5;
}
position = tumble * position * 2.02;
amplitude *= 0.5;
frequency *= 2.02;
}
return sum / max(total, 1e-5);
}
fn blackbodyChroma(kelvin: f32) -> vec3f {
let temperature = clamp(kelvin, 1000.0, 40000.0);
let inverse = 1.0 / temperature;
let inverse2 = inverse * inverse;
let inverse3 = inverse2 * inverse;
let xCool = -0.2661239e9 * inverse3 - 0.2343589e6 * inverse2 + 0.8776956e3 * inverse + 0.179910;
let xWarm = -3.0258469e9 * inverse3 + 2.1070379e6 * inverse2 + 0.2226347e3 * inverse + 0.240390;
let x = select(xWarm, xCool, temperature < 4000.0);
let x2 = x * x;
let x3 = x2 * x;
let yEmber = -1.1063814 * x3 - 1.34811020 * x2 + 2.18555832 * x - 0.20219683;
let yFlame = -0.9549476 * x3 - 1.37418593 * x2 + 2.09137015 * x - 0.16748867;
let yStar = 3.0817580 * x3 - 5.87338670 * x2 + 3.75112997 * x - 0.37001483;
let y = select(select(yStar, yFlame, temperature < 4000.0), yEmber, temperature < 2222.0);
let safeY = max(y, 1e-4);
let tristimulus = vec3f(x / safeY, 1.0, (1.0 - x - y) / safeY);
var rgb = vec3f(
dot(tristimulus, vec3f(3.2404542, -1.5371385, -0.4985314)),
dot(tristimulus, vec3f(-0.9692660, 1.8760108, 0.0415560)),
dot(tristimulus, vec3f(0.0556434, -0.2040259, 1.0572252))
);
rgb -= min(min(rgb.r, min(rgb.g, rgb.b)), 0.0);
return rgb / max(luminance(rgb), 1e-4);
}
fn visibleFraction(kelvin: f32) -> f32 {
let x = 20554.0 / max(kelvin, 1.0);
return 0.15399 * exp(-x) * (x * (x * (x + 3.0) + 6.0) + 6.0);
}
struct Path {
total: f32,
start: f32,
column: f32,
layer: i32,
captured: bool,
}
fn atlasColumn(impact: f32, captured: bool) -> f32 {
let offset = select(
max(impact / B_CRIT - 1.0, ATLAS_EDGE_NEAR),
max(1.0 - impact / B_CRIT, ATLAS_EDGE_NEAR),
captured
);
let decades = select(ATLAS_EDGE_DECADES, ATLAS_CAPTURED_DECADES, captured);
return log(offset / ATLAS_EDGE_NEAR) / decades;
}
fn atlasPath(impact: f32) -> Path {
let captured = impact < B_CRIT;
let column = atlasColumn(impact, captured);
let layer = select(0, 1, captured);
let held = textureSampleLevel(approach, smp, vec2f(column, u.observerRow), layer, 0.0).rg;
return Path(held.g, held.r * held.g, column, layer, captured);
}
fn atlasRadius(path: Path, psi: f32) -> f32 {
let fraction = psi / path.total;
let folded = select(1.0 - abs(1.0 - fraction), fraction, path.captured);
if (folded <= 0.0 || folded > 1.0) {
return 0.0;
}
let row = folded * u.angleAxis.x + u.angleAxis.y;
return textureSampleLevel(trajectory, smp, vec2f(path.column, row), path.layer, 0.0).r;
}
fn atlasEscape(path: Path, inbound: bool) -> f32 {
return select(path.start, 2.0 * path.total - path.start, inbound);
}
fn atlasSlope(u_: f32, impact: f32) -> f32 {
let inverseB2 = 1.0 / (impact * impact);
return sqrt(max(inverseB2 - u_ * u_ + u_ * u_ * u_, 0.0));
}
fn weakDeflection(impact: f32) -> f32 {
let w = 1.0 / impact;
return w * (2.0 + w * (2.945243 + w * (5.333333 + w * 10.63194)));
}
override VARIANT_STELLAR: u32 = 0u;
override READING_VOID: u32 = 0u;
const SPIRAL_PATTERN_RATE: f32 = 0.0075;
const SHEAR_REFERENCE_RATE: f32 = 0.121268;
const SHEAR_SATURATION: f32 = 9.0;
const WINDING_SHARPNESS: f32 = 1.0;
const CROSSING_LIMIT: i32 = 4;
const TURBULENCE_AZIMUTHAL: f32 = 1.6;
const TURBULENCE_RADIAL: f32 = 8.0;
const MAX_CHORD: f32 = 9.0;
const FILTER_STRETCH_LIMIT: f32 = 110.0;
const FLARE: f32 = 0.6;
const DISK_SCALE_HEIGHT: f32 = 0.39894228;
const GAUSS_HERMITE_NODE: f32 = 1.7320508;
const GAUSS_HERMITE_CENTER: f32 = 0.6666667;
const GAUSS_HERMITE_WING: f32 = 0.1666667;
const TRAVERSE_LIMIT: f32 = 0.22;
const PLUNGE_GLOW: f32 = 0.34;
const RIM_MIDPOINT: f32 = 0.86;
const RIM_RELIEF: f32 = 0.062;
const EDDY_RATE: f32 = 0.5;
const EDDY_FLOOR: f32 = 0.12;
const STREAM_ANCHOR: f32 = 1.35;
const DEBRIS_RADIUS: f32 = 11.0;
const STREAM_WIND: f32 = 0.155;
const STREAM_WIDTH: f32 = 0.036;
const STREAM_CONTRAST: f32 = 3.4;
const STREAM_HEAT: f32 = 0.62;
const STREAM_REACH: f32 = 1.6;
const STREAM_SHOCK_RADIUS: f32 = 0.74;
const STREAM_SHOCK_WIDTH: f32 = 0.24;
const DUST_ONSET: f32 = 0.44;
const DUST_OPACITY: f32 = 3.4;
const STREAM_LIT: f32 = 0.68;
const STREAM_DARK: f32 = 0.95;
const NEBULA_SCALE: f32 = 2.6;
const NEBULA_WARP: f32 = 1.35;
fn beam(value: f32) -> f32 {
let squared = value * value;
return squared * squared;
}
fn medium(direction: vec3f) -> vec3f {
var gain = u.blueshift * u.blueshift;
gain *= gain;
let warp = fbmFiltered(direction * 1.7 + 3.1, 2, 0.0);
let warped = direction * NEBULA_SCALE + vec3f(warp, warp * 1.7, -warp * 1.3) * NEBULA_WARP;
let cloud = fbmFiltered(warped, 4, 0.0);
var veil = smoothstep(0.4, 0.86, cloud);
veil *= veil;
let dense = veil * veil;
return (vec3f(0.26, 0.45, 1.0) * veil + vec3f(1.0, 0.44, 0.26) * dense * 0.7) * u.nebula * gain;
}
struct Launch {
direction: vec3f,
impact: f32,
bearing: f32,
inbound: bool,
}
fn launchRay(radius: f32, radial: vec3f, view: vec3f) -> Launch {
let lapse = sqrt(max(1.0 - RS / radius, 1e-6));
let outward = dot(view, radial);
let across = view - outward * radial;
let sine = length(across);
return Launch(
normalize(outward * lapse * radial + across),
radius * sine / lapse,
acos(clamp(-outward, -1.0, 1.0)),
outward < 0.0
);
}
fn diskWinding(radius: f32) -> f32 {
let rigid = u.diskPhase * SHEAR_REFERENCE_RATE;
let free = u.diskPhase * inverseSqrt(radius) / radius;
return rigid + SHEAR_SATURATION * tanh((free - rigid) / SHEAR_SATURATION);
}
fn diskWindingShear(radius: f32) -> vec2f {
let rigid = u.diskPhase * SHEAR_REFERENCE_RATE;
let free = u.diskPhase * inverseSqrt(radius) / radius;
let bent = tanh((free - rigid) / SHEAR_SATURATION);
let shear = 1.5 * abs(free) / radius * (1.0 - bent * bent);
return vec2f(rigid + SHEAR_SATURATION * bent, shear);
}
fn diskTaper(radius: f32, azimuth: f32) -> f32 {
let drift = azimuth - u.diskPhase * inverseSqrt(u.diskOuterRadius) / u.diskOuterRadius;
let relief = sin(drift * 2.0 + 0.7) * 0.55 + sin(drift * 3.0 - 1.9) * 0.31 + sin(drift * 5.0 + 2.6) * 0.14;
let rim = u.diskOuterRadius * (RIM_MIDPOINT + RIM_RELIEF * relief);
let ratio = radius / rim;
let squared = ratio * ratio;
let fourth = squared * squared;
return exp(-0.6931472 * fourth * squared * ratio);
}
fn diskShape(radius: f32) -> f32 {
let ratio = R_ISCO / radius;
let root = sqrt(ratio);
let torque = sqrt(sqrt(max(1.0 - root, 0.0)));
let inside = clamp((R_ISCO - radius) / (R_ISCO - PHOTON_SPHERE), 0.0, 1.0);
let plunge = PLUNGE_GLOW * sqrt(inside) * smoothstep(RS, PHOTON_SPHERE, radius);
return root * sqrt(root) * (torque + plunge) / TEMPERATURE_SHAPE_PEAK;
}
fn streamStrand(radius: f32, azimuth: f32) -> f32 {
let anchor = DEBRIS_RADIUS * STREAM_ANCHOR;
let turns = (log(radius / anchor) / STREAM_WIND + azimuth - u.streamPhase) / TAU;
let offset = abs(fract(turns + 0.5) - 0.5) * TAU * STREAM_WIND;
let across = offset / (STREAM_WIDTH * (0.55 + 0.45 * radius / DEBRIS_RADIUS));
let reach = radius / (DEBRIS_RADIUS * STREAM_REACH);
let reach2 = reach * reach;
let extent = exp(-0.6931472 * reach2 * reach2 * reach)
* smoothstep(R_ISCO, R_TEMPERATURE_PEAK * 1.6, radius)
* (1.0 - smoothstep(0.6, 1.0, radius / (u.diskOuterRadius * TAPER_REACH)));
return exp(-across * across) * extent;
}
struct Crossing {
radiance: vec3f,
depth: f32,
}
fn diskRadiance(position: vec3f, radius: f32, travel: vec3f, detail: i32) -> Crossing {
let toObserver = -travel;
let radial = position / radius;
let beta = min(sqrt(MASS / max(radius - RS, 1e-3)), 0.92);
let lorentz = inverseSqrt(max(1.0 - beta * beta, 1e-4));
let orbitDirection = normalize(cross(u.diskNormal, radial));
let approachShare = dot(orbitDirection, toObserver);
let doppler = 1.0 / (lorentz * (1.0 - beta * approachShare));
let redshift = sqrt(max(1.0 - RS / radius, 1e-3));
let shift = doppler * redshift * u.blueshift;
let beamed = beam(max(shift, 0.0));
let incidence = max(abs(dot(travel, u.diskNormal)), 1e-4);
let flare = pow(radius / R_TEMPERATURE_PEAK, FLARE);
let thickness = flare * DISK_SCALE_HEIGHT;
let path = MAX_CHORD * flare * tanh(1.0 / (incidence * MAX_CHORD));
let reach = min(GAUSS_HERMITE_NODE * thickness / incidence, TRAVERSE_LIMIT * radius);
let alongPlane = travel - dot(travel, u.diskNormal) * u.diskNormal;
let alongLength = length(alongPlane);
let flowDirection = select(u.diskTangent, alongPlane / alongLength, alongLength > 1e-5);
let nodes = select(1, 3, detail > 1 && u.diskSamples > 1 && reach > radius * 0.03);
let octaves = select(2, 3, detail > 1);
let pixelWorld = distance(position, u.cameraPosition) * u.pixelAngle;
let radialShare = abs(dot(flowDirection, radial));
let crossingShear = diskWindingShear(radius).y;
let wound = TURBULENCE_AZIMUTHAL * crossingShear * WINDING_SHARPNESS;
let latticeRadial = TURBULENCE_RADIAL / radius;
let radialRate = sqrt(latticeRadial * latticeRadial + wound * wound);
let rate = mix(TURBULENCE_AZIMUTHAL / radius, radialRate, radialShare);
let footprint = pixelWorld * min(1.0 / incidence, FILTER_STRETCH_LIMIT) * rate;
let bitangent = cross(u.diskNormal, u.diskTangent);
let drift = vec3f(0.41, -0.63, 0.29);
var emissivity = 0.0;
var extinction = 0.0;
var lineGlow = 0.0;
var shockHeat = 0.0;
for (var node = 0; node < 3; node++) {
if (node >= nodes) {
break;
}
let weight = select(select(GAUSS_HERMITE_WING, GAUSS_HERMITE_CENTER, node == 0), 1.0, nodes == 1);
let offset = select(select(-reach, reach, node == 1), 0.0, node == 0);
let point = position + flowDirection * offset;
let pointRadius = max(length(point), RS * 1.02);
let azimuth = atan2(dot(point, bitangent), dot(point, u.diskTangent));
let orbits = diskWinding(pointRadius);
let pattern = azimuth - orbits;
let logRadius = log(pointRadius);
let churn = orbits * EDDY_RATE + u.diskPhase * EDDY_FLOOR;
let flow = vec3f(
cos(pattern) * TURBULENCE_AZIMUTHAL,
sin(pattern) * TURBULENCE_AZIMUTHAL,
logRadius * TURBULENCE_RADIAL
) + drift * churn;
let spiral = sin(2.0 * (azimuth - u.diskPhase * SPIRAL_PATTERN_RATE + SPIRAL_PITCH * logRadius));
let grain = (fbmFiltered(flow, octaves, footprint) * 2.0 - 1.0) * 0.62 + spiral * 0.28;
var density = exp(u.turbulence * grain * 1.5);
let taper = diskTaper(pointRadius, azimuth);
let shape = diskShape(pointRadius);
var material = taper;
var glowing = taper;
var shockGlow = 1.0;
if (VARIANT_STELLAR != 0u) {
let strand = streamStrand(pointRadius, azimuth) * u.streamIntensity;
density *= 1.0 + STREAM_CONTRAST * strand;
material = max(taper, strand);
let arrived = 1.0 - smoothstep(STREAM_LIT, STREAM_DARK, pointRadius / DEBRIS_RADIUS);
glowing = max(taper, strand * arrived);
let shockOffset = (pointRadius / DEBRIS_RADIUS - STREAM_SHOCK_RADIUS) / STREAM_SHOCK_WIDTH;
let shock = strand * exp(-shockOffset * shockOffset);
shockGlow *= beam(1.0 + STREAM_HEAT * shock);
shockHeat += weight * shock;
}
let band = sqrt(visibleFraction(u.peakTemperature * shape) / u.peakVisible);
emissivity += weight * beam(shape) * band * glowing * density * shockGlow;
var opacity = density * material * smoothstep(RS, RS * 1.9, pointRadius)
* mix(PLUNGE_GLOW, 1.0, smoothstep(PHOTON_SPHERE, R_ISCO, pointRadius));
if (VARIANT_STELLAR != 0u) {
let dust = smoothstep(DUST_ONSET * DEBRIS_RADIUS, DEBRIS_RADIUS, pointRadius);
opacity *= mix(1.0, DUST_OPACITY, dust);
let reprocessed = smoothstep(0.3, 0.66, pointRadius / DEBRIS_RADIUS)
* (1.0 - smoothstep(0.8, 1.2, pointRadius / DEBRIS_RADIUS));
lineGlow += weight * density * density * glowing * reprocessed / (pointRadius * pointRadius);
}
extinction += weight * opacity;
}
let intensity = emissivity * path * beamed * u.diskIntensity;
let depth = u.diskOpacity * extinction * path;
var observed = u.peakTemperature * diskShape(radius) * shift;
if (VARIANT_STELLAR != 0u) {
observed *= u.colorScale * (1.0 + STREAM_HEAT * shockHeat);
let tint = mix(vec3f(1.0), blackbodyChroma(observed), u.chroma);
let hardness = 1.0 - smoothstep(DEBRIS_RADIUS * 0.34, DEBRIS_RADIUS * 0.72, radius);
let lineTint = mix(vec3f(1.0), mix(u.lineWarm, u.lineCool, hardness * 0.5), u.chroma);
return Crossing(
tint * intensity + lineTint * (lineGlow * path * beamed * u.lineEmission * u.diskIntensity),
depth
);
}
let tint = mix(vec3f(1.0), blackbodyChroma(observed * u.colorScale), u.chroma);
return Crossing(tint * intensity, depth);
}
fn crossDiskStraight(
origin: vec3f,
direction: vec3f,
radiance: ptr<function, vec3f>,
transmittance: ptr<function, f32>
) {
let denominator = dot(direction, u.diskNormal);
if (abs(denominator) < 1e-5) {
return;
}
let distanceAlong = -dot(origin, u.diskNormal) / denominator;
if (distanceAlong <= 0.0) {
return;
}
let hit = origin + direction * distanceAlong;
let radius = length(hit);
if (radius <= RS * 1.05 || radius >= u.diskOuterRadius * TAPER_REACH) {
return;
}
let crossing = diskRadiance(hit, radius, direction, 2);
*radiance += crossing.radiance * *transmittance;
*transmittance *= exp(-crossing.depth);
}
struct RayResult {
radiance: vec3f,
shadow: f32,
skyDirection: vec3f,
skyWeight: f32,
}
fn traceRay(origin: vec3f, originRadius: f32, radialAxis: vec3f, launch: Launch) -> RayResult {
var result = RayResult(vec3f(0.0), 0.0, launch.direction, 0.0);
var transmittance = 1.0;
let direction = launch.direction;
let impact = launch.impact;
let tangentialPart = direction - dot(direction, radialAxis) * radialAxis;
let tangential = length(tangentialPart);
if (tangential < 1e-5) {
if (launch.inbound) {
result.shadow = 1.0;
} else {
result.skyWeight = 1.0;
}
return result;
}
if (!launch.inbound && (originRadius > PHOTON_SPHERE || impact < B_CRIT)) {
var radiance = vec3f(0.0);
crossDiskStraight(origin, direction, &radiance, &transmittance);
result.radiance = radiance;
result.skyWeight = transmittance;
return result;
}
if (impact > WEAK_FIELD_B) {
let deflection = weakDeflection(impact);
let closestApproach = origin - dot(origin, direction) * direction;
let towardRay = normalize(closestApproach);
result.skyDirection = normalize(direction - towardRay * deflection);
result.skyWeight = 1.0;
return result;
}
let planeAxis = tangentialPart / tangential;
let axialRadial = dot(radialAxis, u.diskNormal);
let axialPlane = dot(planeAxis, u.diskNormal);
var firstCrossing = 1e9;
if (length(vec2f(axialRadial, axialPlane)) > 1e-6) {
firstCrossing = atan2(axialPlane, axialRadial) + PI * 0.5;
firstCrossing -= PI * floor(firstCrossing / PI);
if (firstCrossing < 1e-5) {
firstCrossing = PI;
}
}
let path = atlasPath(impact);
let taperReach = u.diskOuterRadius * TAPER_REACH;
let travelSign = select(-1.0, 1.0, launch.inbound);
for (var image = 0; image < CROSSING_LIMIT; image++) {
let phi = firstCrossing + f32(image) * PI;
let psi = path.start + travelSign * phi;
let crossingU = atlasRadius(path, psi);
if (crossingU <= 0.0) {
continue;
}
if (crossingU <= 1.0 / taperReach || crossingU >= 1.0 / (RS * 1.05)) {
continue;
}
let crossingRadius = 1.0 / crossingU;
let cosine = cos(phi);
let sine = sin(phi);
let outward = cosine * radialAxis + sine * planeAxis;
let forward = -sine * radialAxis + cosine * planeAxis;
let turning = select(1.0, -1.0, psi > path.total && !path.captured);
let slope = travelSign * turning * atlasSlope(crossingU, impact);
let crossingTravel = normalize(forward - slope * crossingRadius * outward);
let crossing = diskRadiance(
crossingRadius * outward,
crossingRadius,
crossingTravel,
select(1, 2, image == 0)
);
result.radiance += crossing.radiance * transmittance;
transmittance *= exp(-crossing.depth);
if (transmittance < 0.005) {
break;
}
}
if (path.captured && launch.inbound) {
result.shadow = 1.0;
} else {
let escape = atlasEscape(path, launch.inbound);
result.skyDirection = normalize(cos(escape) * radialAxis + sin(escape) * planeAxis);
result.skyWeight = transmittance;
}
return result;
}
fn ringShift(toRing: vec3f, rayDirection: vec3f) -> f32 {
let inPlane = toRing - dot(toRing, u.diskNormal) * u.diskNormal;
let extent = length(inPlane);
if (extent < 1e-4) {
return 1.0;
}
let orbitDirection = normalize(cross(u.diskNormal, inPlane / extent));
let approachShare = dot(orbitDirection, -rayDirection);
let doppler = 1.0 / (1.15470053838 * (1.0 - 0.5 * approachShare));
return doppler * sqrt(1.0 - RS / R_ISCO);
}
struct Scene {
@location(0) radiance: vec4f,
@location(1) sheetCover: vec4f,
}
@fragment fn main(in: Varyings) -> Scene {
let fragCoord = in.uv * u.resolution;
var screen = (fragCoord * 2.0 - u.resolution) / u.resolution.y;
screen -= u.lensShift;
let toPointer = screen - u.pointer;
screen -= toPointer * u.pointerStrength * exp(-dot(toPointer, toPointer) * 2.4);
let view = normalize(u.cameraBasis * vec3f(screen * u.tanHalfFov, 1.0));
let radialAxis = u.cameraPosition / u.cameraRadius;
let launch = launchRay(u.cameraRadius, radialAxis, view);
let rayDirection = launch.direction;
let ray = traceRay(u.cameraPosition, u.cameraRadius, radialAxis, launch);
var radiance = ray.radiance;
if (READING_VOID != 0u && VARIANT_STELLAR != 0u) {
radiance += medium(ray.skyDirection) * ray.skyWeight;
}
let margin = launch.bearing - u.shadowAngle;
let marginFootprint = max(fwidth(margin), 1e-5);
let outsideShadow = smoothstep(-marginFootprint, marginFootprint, margin);
let alongRay = dot(u.cameraPosition, rayDirection);
let closestApproach = u.cameraPosition - alongRay * rayDirection;
let impact = select(launch.impact, 1e4, u.cameraRadius > PHOTON_SPHERE && !launch.inbound);
let impactFootprint = max(fwidth(impact), 1e-4);
let firstOffset = B_CRIT * RING_SPACING * exp(-RING_LYAPUNOV);
let stackOffset = B_CRIT * RING_SPACING * exp(-2.0 * RING_LYAPUNOV);
let firstWidth = max(impactFootprint * 1.1, firstOffset * 0.85);
let stackWidth = max(impactFootprint * 1.1, 0.022);
let firstFalloff = (impact - B_CRIT - firstOffset) / firstWidth;
let stackFalloff = (impact - B_CRIT - stackOffset) / stackWidth;
let ring = exp(-firstFalloff * firstFalloff) * 0.62 + exp(-stackFalloff * stackFalloff);
if (ring > 1e-4) {
let shift = ringShift(normalize(closestApproach), rayDirection);
let ringTemperature = u.peakTemperature * shift * u.colorScale;
let tint = mix(vec3f(1.0), blackbodyChroma(ringTemperature), u.chroma);
radiance += tint * (ring * pow(shift, 2.2) * u.ringIntensity * outsideShadow);
}
let feather = exp(-max(margin, 0.0) / (u.shadowAngle * 0.11));
let shadow = max(1.0 - outsideShadow, feather * 0.5);
return Scene(vec4f(radiance, shadow), vec4f(ray.skyWeight, 0.0, 0.0, 1.0));
}`;export{e as default};