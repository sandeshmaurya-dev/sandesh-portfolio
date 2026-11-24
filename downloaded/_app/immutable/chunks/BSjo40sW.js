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
const HDR_RANGE: f32 = 24.0;
fn hdrDecode(texel: vec4f) -> vec3f {
return texel.rgb * texel.rgb * HDR_RANGE;
}
fn hdrEncode(color: vec3f, alpha: f32) -> vec4f {
return vec4f(sqrt(clamp(color, vec3f(0.0), vec3f(HDR_RANGE)) / HDR_RANGE), alpha);
}
const DISK_RADIUS: f32 = 10.0;
const PATTERN_RATE: f32 = 0.0065;
const ORBIT_SHARE: f32 = 0.34;
const BAR_ANGLE: f32 = 0.44;
const BAR_LENGTH: f32 = 2.9;
const BAR_WIDTH: f32 = 0.72;
const ARM_ROOT: f32 = 2.7;
const ARM_WIND: f32 = 3.0;
const MINOR_WEIGHT: f32 = 0.36;
const MINOR_ROOT: f32 = 3.9;
const RING_RADIUS: f32 = 3.05;
const RING_WIDTH: f32 = 0.62;
fn plate(p: vec2f, footprint: f32) -> vec4f {
let size = f32(textureDimensions(clouds).x);
return textureSampleLevel(clouds, smpRepeat, p, max(0.0, log2(max(footprint * size, 1.0))));
}
fn combTap(coordinate: vec2f, dx: vec2f, dy: vec2f) -> vec4f {
return textureSampleGrad(clouds, smpRepeat, coordinate, dx, dy);
}
fn crest(phase: f32, width: f32, pixel: f32) -> f32 {
return exp((cos(phase) - 1.0) / (width + pixel * pixel));
}
fn stars(p: vec2f, footprint: f32, threshold: f32) -> f32 {
let cell = floor(p);
let key = vec2u(vec2i(cell) + 16384);
let center = vec2f(hash11(vec3u(key, 7u)), hash11(vec3u(key, 19u)));
let seed = hash11(vec3u(key, 31u));
let d = fract(p) - 0.15 - center * 0.7;
let intrinsic = 0.03 + seed * seed * 0.05;
let radius2 = intrinsic * intrinsic + footprint * footprint * 0.32;
return exp(-dot(d, d) / radius2) * step(threshold, seed) * intrinsic * intrinsic / radius2;
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let fragCoord = in.uv * u.resolution;
var uv = (fragCoord * 2.0 - u.resolution) / u.resolution.y * 0.5;
uv -= u.lensShift * 0.5;
let screen = rot2(0.34 - u.pointer.x * 0.03) * uv;
let inclination = 0.94 + u.pointer.y * 0.02;
let cotangent = sqrt(1.0 - inclination * inclination) / inclination;
let perspective = max(1.6 - screen.y * cotangent * 0.5, 0.8);
var q = screen * u.distance / (perspective * max(u.ignite, 0.01));
q.y /= inclination;
let footprint = max(length(dpdx(q)), length(dpdy(q)));
let r = length(q);
let orbit = rot2(-u.time * PATTERN_RATE) * vec2f(-q.x, q.y);
let orbitDx = dpdx(orbit);
let orbitDy = dpdy(orbit);
if (r > DISK_RADIUS * 1.55) {
return hdrEncode(vec3f(0.0), 1.0);
}
let angle = atan2(orbit.y, orbit.x);
let angularPixel = footprint * 6.5 / max(r, 1.0);
let broad = plate(orbit * 0.043 + vec2f(0.13, 0.47), footprint * 0.043);
let cloud = plate(rot2(0.9) * orbit * 0.15 + (broad.rg - 0.5) * 0.09, footprint * 0.15);
let weave = plate(rot2(-0.52) * orbit * 0.36 + (cloud.ra - 0.5) * 0.05, footprint * 0.36);
let fine = plate(rot2(0.31) * orbit * 0.92 + vec2f(0.61, 0.23), footprint * 0.92);
let grain = plate(rot2(1.93) * orbit * 2.4 + vec2f(0.27, 0.71), footprint * 2.4);
let edge = DISK_RADIUS + (broad.r - 0.5) * 1.2;
let envelope = 1.0 - smoothstep(edge - 5.0, edge + 1.6, r);
let disk = exp(-r / 3.4) * envelope;
let logRadius = log(max(r, 0.5) / ARM_ROOT);
let disturbance = (broad.r - 0.5) * 0.5 + (cloud.g - 0.5) * 0.22;
let psi = angle - BAR_ANGLE - ARM_WIND * logRadius + disturbance;
let armStart = smoothstep(ARM_ROOT * 0.85, ARM_ROOT * 1.25, r);
let minorStart = smoothstep(MINOR_ROOT, MINOR_ROOT + 1.6, r);
let width = 0.34 + cloud.b * 0.16;
let pixel = angularPixel * 2.0;
let major = crest(2.0 * psi, width, pixel) * armStart;
let minorPhase = 2.0 * psi + PI - 0.35 + (weave.r - 0.5) * 0.6;
let minor = crest(minorPhase, width * 0.65, pixel) * minorStart * MINOR_WEIGHT;
let swell = max(crest(2.0 * psi, 0.9, pixel), crest(minorPhase, 0.7, pixel) * 0.35) * armStart;
let combZone = smoothstep(1.3, 2.6, r);
let r2 = max(r * r, 0.25);
let angleGrad = vec2f(
orbit.x * orbitDx.y - orbit.y * orbitDx.x,
orbit.x * orbitDy.y - orbit.y * orbitDy.x
) / r2;
let logGrad = vec2f(dot(orbit, orbitDx), dot(orbit, orbitDy)) / r2;
let phaseGrad = angleGrad - ARM_WIND * logGrad;
let strands = combTap(
vec2f(psi / PI * 3.0, logRadius * 0.34 + 0.37),
vec2f(phaseGrad.x / PI * 3.0, logGrad.x * 0.34),
vec2f(phaseGrad.y / PI * 3.0, logGrad.y * 0.34)
);
let fibers = combTap(
vec2f(psi / PI * 8.0 + 0.5, logRadius * 0.9 + 0.11),
vec2f(phaseGrad.x / PI * 8.0, logGrad.x * 0.9),
vec2f(phaseGrad.y / PI * 8.0, logGrad.y * 0.9)
);
let combed = mix(0.5, strands.r * 0.55 + fibers.a * 0.45, combZone);
let clump = smoothstep(0.2, 0.85, cloud.r * 0.5 + combed * 0.3 + fine.r * 0.2);
let arms = (major + minor) * (0.5 + clump * 0.85);
let laneOffset = 0.44 + (cloud.a - 0.5) * 0.3;
let lanePhase = 2.0 * psi + laneOffset;
let lanes = crest(lanePhase, 0.2 + cloud.g * 0.12, pixel) * armStart
+ crest(minorPhase + laneOffset, 0.12, pixel) * minorStart * 0.55;
let fibrous = 0.35 + smoothstep(0.25, 0.8, strands.a * 0.5 + fibers.r * 0.5) * 1.15;
let broken = smoothstep(0.12, 0.62, cloud.g * 0.75 + broad.g * 0.25);
let spurs = pow(fibers.g, 2.5) * crest(lanePhase + 0.55, 0.55, pixel) * armStart * 0.5;
let barFrame = rot2(-BAR_ANGLE) * orbit;
let barLanes = exp(-pow((abs(barFrame.y) - BAR_WIDTH * 0.5) / 0.2, 2.0))
* smoothstep(BAR_LENGTH * 1.3, BAR_LENGTH * 0.3, abs(barFrame.x))
* smoothstep(-0.4, 0.8, barFrame.x * sign(barFrame.y));
let innerSpiral = crest(
2.0 * (angle - BAR_ANGLE - ARM_WIND * 1.45 * log(max(r, 0.5) / 2.0)) + (cloud.g - 0.5) * 1.6,
0.3,
pixel
);
let ring = exp(-pow((r - RING_RADIUS) / (RING_WIDTH * 2.4), 2.0)) * smoothstep(0.9, 1.9, r);
let veil = smoothstep(0.45, 0.9, fibers.a) * combZone * envelope;
var dust = lanes * fibrous * broken * 3.4
+ spurs * 1.8
+ barLanes * 0.4 * (0.5 + cloud.g)
+ ring * (innerSpiral * 1.3 + 0.15) * (0.35 + strands.g * 0.9)
+ veil * (0.22 + swell * 0.4);
dust *= smoothstep(0.7, 1.6, r);
let extinction = exp(-dust * 1.2 * GALAXY_DUST_REDDENING);
let barWarp = (cloud.r - 0.5) * 0.12;
let bar = exp(
-pow(abs(barFrame.x) / BAR_LENGTH, 2.2) - pow(abs(barFrame.y + barWarp) / BAR_WIDTH, 1.8)
);
let bulge = exp(-length(vec2f(barFrame.x * 0.7, barFrame.y)) / 0.55);
let nucleus = exp(-r * r * 9.0);
let innerDisk = exp(-pow(r / 3.9, 2.2));
let warmth = 1.0 - smoothstep(2.2, 5.6, r);
let outskirts = smoothstep(5.5, 9.8, r);
let armColor = mix(mix(GALAXY_ARM, GALAXY_OUTER, outskirts), GALAXY_INNER, warmth * 0.55);
let crestColor = mix(
armColor,
GALAXY_YOUNG,
smoothstep(0.35, 1.0, major + minor) * 0.55 * (1.0 - warmth)
);
let diskColor = mix(mix(GALAXY_ARM, GALAXY_HALO, outskirts * 0.7), GALAXY_INNER, warmth);
let glow = (exp(-r / 2.8) * 0.7 + exp(-r / 5.0) * 0.08) * envelope;
let mottling = (0.78 + (cloud.r - 0.5) * 0.3) * (0.8 + combed * 0.4);
var light = vec3f(0.0);
light += diskColor * glow * (0.16 + swell * 1.2) * mottling;
light += crestColor * arms * envelope * exp(-r / 9.0) * 0.86 * (0.72 + combed * 0.56) * (0.9 + grain.r * 0.2);
light += GALAXY_INNER * innerDisk * 0.27 * (0.7 + cloud.r * 0.3 + combed * 0.3);
light += GALAXY_BAR * (bar * 1.3 + bulge * 0.26) * (0.8 + cloud.r * 0.25 + fine.r * 0.15);
light += GALAXY_NUCLEUS * (nucleus * (1.1 + u.excite * 1.0) + bulge * 0.36);
light *= extinction;
var birth = crest(lanePhase - 0.3, 0.1, pixel) * armStart
+ crest(minorPhase + laneOffset - 0.3, 0.09, pixel) * minorStart * 0.8
+ exp(-pow((abs(barFrame.x) - BAR_LENGTH * 1.05) / 0.5, 2.0)) * exp(-barFrame.y * barFrame.y * 2.0) * 0.6;
birth *= smoothstep(0.3, 0.7, broad.b * 0.5 + cloud.b * 0.5);
let knotsCoarse = plate(rot2(2.4) * orbit * 0.11 + vec2f(0.05, 0.4), footprint * 0.11).b;
let knotsFine = plate(rot2(-0.8) * orbit * 0.27 + vec2f(0.72, 0.15), footprint * 0.27).b;
var regions = pow(smoothstep(0.42, 0.92, knotsCoarse), 2.0) * 1.6
+ pow(smoothstep(0.5, 0.95, knotsFine), 2.4) * 1.2;
regions *= 0.55 + strands.b * 0.9;
let excitement = 1.0 + u.excite * 1.4;
let nebulae = GALAXY_NEBULA * regions * birth * envelope * smoothstep(2.0, 3.4, r) * 1.5 * excitement;
light += nebulae * sqrt(extinction);
let material = u.time * ORBIT_SHARE / max(r, 0.55);
let sheared = footprint * sqrt(1.0 + material * material * 0.01);
let stellar = rot2(-u.time * ORBIT_SHARE * 0.03 / max(r * 0.2, 0.5)) * q;
let density = envelope * (0.05 + arms * 0.9 + bar * 0.4 + disk * 0.6);
var points = stars(stellar * 7.4, sheared * 7.4, 0.55) * 1.3;
points += stars(rot2(0.73) * stellar * 16.7 + 19.7, sheared * 16.7, 0.5) * 1.3;
if (u.starLayers > 2) {
points += stars(rot2(-1.1) * stellar * 33.1 + 51.3, sheared * 33.1, 0.46) * 1.5;
}
let starColor = mix(GALAXY_YOUNG, GALAXY_NUCLEUS, smoothstep(0.35, 0.75, fine.r) * (0.4 + warmth * 0.6));
light += starColor * points * density * extinction * 3.2;
let clusters = stars(rot2(0.4) * stellar * 4.1 + 7.3, sheared * 4.1, 0.9);
light += GALAXY_YOUNG * clusters * (major + minor) * envelope * extinction * (1.8 + u.excite * 1.6);
light += GALAXY_HALO * exp(-r / 5.5) * 0.03 * (0.7 + broad.r * 0.6)
* (1.0 - smoothstep(DISK_RADIUS * 1.2, DISK_RADIUS * 1.5, r));
let satellite = rot2(0.5) * (q - vec2f(-7.6, 6.9));
light += GALAXY_NUCLEUS * exp(-dot(satellite * vec2f(1.0, 1.9), satellite * vec2f(1.0, 1.9)) * 3.2) * 0.42;
light += GALAXY_NUCLEUS * exp(-dot(satellite, satellite) * 0.9) * 0.025;
return hdrEncode(max(light, vec3f(0.0)) * u.ignite, 1.0);
}`;export{e as default};