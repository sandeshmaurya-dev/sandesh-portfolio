var e=`#version 300 es
precision highp float;
#ifndef CORE_GLSL
#define CORE_GLSL
const float PI = 3.14159265359;
const float TAU = 6.28318530718;
uint hashUint(uint x) {
x ^= x >> 16;
x *= 0x21f0aaadu;
x ^= x >> 15;
x *= 0xd35a2d97u;
x ^= x >> 15;
return x;
}
float hash11(uvec3 key) {
return float(hashUint(key.x ^ hashUint(key.y ^ hashUint(key.z)))) / 4294967296.0;
}
float interleavedGradientNoise(vec2 position) {
return fract(52.9829189 * fract(dot(position, vec2(0.06711056, 0.00583715))));
}
mat2 rot2(float a) {
float s = sin(a);
float c = cos(a);
return mat2(c, -s, s, c);
}
float luminance(vec3 color) {
return dot(color, vec3(0.2126, 0.7152, 0.0722));
}
float toneMap(float energy, float exposure) {
return 1.0 - exp(-max(energy, 0.0) * exposure);
}
vec3 toneMapColor(vec3 radiance, float exposure) {
vec3 exposed = max(radiance, vec3(0.0));
float peak = max(exposed.r, max(exposed.g, exposed.b));
if (peak < 1e-6) return vec3(0.0);
float mapped = toneMap(peak, exposure);
float squared = mapped * mapped;
float bleach = squared * squared * squared * squared;
return mix(exposed / peak, vec3(1.0), bleach) * mapped;
}
vec3 linearToSrgb(vec3 linear) {
vec3 clamped = clamp(linear, 0.0, 1.0);
return mix(
clamped * 12.92,
1.055 * pow(clamped, vec3(1.0 / 2.4)) - 0.055,
step(vec3(0.0031308), clamped)
);
}
#endif
#ifndef WINDOWS_GLSL
#define WINDOWS_GLSL
uniform float uWindowCell;
uniform vec4 uWindowOpen[6];
uniform vec4 uHeldWindow;
const float WINDOW_COLUMNS = 6.0;
const float WINDOW_ROWS = 4.0;
const float WINDOW_EDGE = 0.22;
float windowOpenness(int index) {
vec4 packed = uWindowOpen[index >> 2];
int lane = index & 3;
return lane == 0 ? packed.x : lane == 1 ? packed.y : lane == 2 ? packed.z : packed.w;
}
vec2 windowIris(vec2 local, float open, float unit) {
float edge = max(abs(local.x), abs(local.y));
float reach = 0.5 * open;
float aperture = 1.0 - smoothstep(reach - unit, reach, edge);
float contour = smoothstep(reach - unit * 2.2, reach - unit * 0.4, edge) * aperture;
return vec2(aperture, contour);
}
vec2 heldWindowAt(vec2 cover, float pixel) {
if (uHeldWindow.w <= 0.002) return vec2(0.0);
float cell = max(uWindowCell, 1e-4);
vec2 d = (cover - uHeldWindow.xy) / cell;
float c = cos(uHeldWindow.z);
float s = sin(uHeldWindow.z);
vec2 local = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
if (max(abs(local.x), abs(local.y)) > 0.75) return vec2(0.0);
return windowIris(local, uHeldWindow.w, pixel / cell);
}
vec2 fieldWindowAt(vec2 cover, float pixel) {
vec2 grid = cover / max(uWindowCell, 1e-4) + vec2(WINDOW_COLUMNS, WINDOW_ROWS) * 0.5;
if (grid.x < 0.0 || grid.x >= WINDOW_COLUMNS || grid.y < 0.0 || grid.y >= WINDOW_ROWS) {
return vec2(0.0);
}
int index = (int(WINDOW_ROWS) - 1 - int(grid.y)) * int(WINDOW_COLUMNS) + int(grid.x);
float open = windowOpenness(index);
if (open <= 0.002) return vec2(0.0);
return windowIris(fract(grid) - 0.5, open, pixel / max(uWindowCell, 1e-4));
}
vec2 windowAt(vec2 cover, float pixel) {
return max(fieldWindowAt(cover, pixel), heldWindowAt(cover, pixel));
}
vec2 windowBlur(vec2 resolution) {
return uWindowCell * 0.12 * resolution.y / (2.0 * resolution);
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
#ifndef BURN_GLSL
#define BURN_GLSL
const float BURN_SOFTNESS = 0.42;
const float BURN_WARP = 0.07;
float burnt(vec2 cover, float world, float origin, float farthest) {
float front = mix(origin, farthest + BURN_SOFTNESS, sqrt(world));
float angle = atan(cover.y, cover.x);
float reach = length(cover) *
(1.0 + BURN_WARP * sin(angle * 3.0 + 1.7) * sin(angle * 2.0 - world * 3.0));
reach += (interleavedGradientNoise(gl_FragCoord.xy) - 0.5) * BURN_SOFTNESS * 0.3;
return 1.0 - smoothstep(front - BURN_SOFTNESS, front, reach);
}
#endif
#ifndef DISK_GLSL
#define DISK_GLSL
float diskSlope(float inclination) {
return 0.5 * sqrt(max(1.0 - inclination * inclination, 0.0)) / inclination;
}
vec2 diskOfSheet(vec2 sheet, vec4 pose, float depth) {
float c = cos(pose.x);
float s = sin(pose.x);
vec2 turned = vec2(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
float perspective = max(DISK_PERSPECTIVE - turned.y * diskSlope(pose.y), DISK_PERSPECTIVE_FLOOR);
return vec2(turned.x, turned.y / pose.y) * depth / perspective;
}
float diskPerspective(vec2 disk, vec4 pose, float depth) {
float slope = diskSlope(pose.y);
float tilted = disk.y * pose.y;
float y = DISK_PERSPECTIVE * tilted / (depth + slope * tilted);
return max(DISK_PERSPECTIVE - slope * y, DISK_PERSPECTIVE_FLOOR);
}
vec2 sheetOfDisk(vec2 disk, vec4 pose, float depth) {
float perspective = diskPerspective(disk, pose, depth);
float x = disk.x * perspective / depth;
float y = disk.y * pose.y * perspective / depth;
float c = cos(pose.x);
float s = sin(pose.x);
return vec2(c * x - s * y, s * x + c * y);
}
vec2 diskOfPage(vec2 page, vec4 place, vec4 pose) {
return diskOfSheet(vec2((page.x - place.x) * pose.z, place.y - page.y) / place.z, pose, place.w);
}
vec2 pageOfDisk(vec2 disk, vec4 place, vec4 pose) {
vec2 sheet = sheetOfDisk(disk, pose, place.w) * place.z;
return vec2(place.x + sheet.x * pose.z, place.y - sheet.y);
}
float turnedAt(float radius, float wind) {
return wind * ROTATION_REFERENCE / sqrt(radius * radius + ROTATION_CORE * ROTATION_CORE);
}
float shearAt(float radius, float wind) {
float soft = radius * radius + ROTATION_CORE * ROTATION_CORE;
return wind * ROTATION_REFERENCE * radius / (soft * sqrt(soft));
}
vec2 turnedBack(vec2 disk, float angle) {
float c = cos(angle);
float s = sin(angle);
return vec2(c * disk.x + s * disk.y, -s * disk.x + c * disk.y);
}
#endif
#ifndef GROOVES_GLSL
#define GROOVES_GLSL
const float GROOVE_ORDER = 6.0;
const float GROOVE_NM = 9000.0;
const float GROOVE_SHARPNESS = 3.0;
const float GROOVE_MEAN = 0.3125;
const float GROOVE_FRINGE = 0.45;
const float LAMP_SHINE = 220.0;
const float LAMP_HALO = 9.0;
const float LAMP_RELIEF = 0.42;
const float LAMP_BAND = 1.5;
const float LAMP_GLOW = 0.42;
const float LAMP_WASH = 0.34;
const float LAMP_SOFT = 8.0;
vec4 lamplight(vec2 disk, float phase, float wind, vec4 pose, float depth, vec4 lamp) {
float radius = max(length(disk), 1e-4);
vec2 gradient = vec2(-disk.y, disk.x) / (radius * radius) + disk / radius * shearAt(radius, wind);
float density = max(length(gradient), 1e-6);
vec3 normal = vec3(gradient / density, 0.0);
vec3 tangent = vec3(-normal.y, normal.x, 0.0);
float rise = sqrt(max(1.0 - pose.y * pose.y, 0.0));
vec3 eye = vec3(0.0, -depth * rise, depth * pose.y);
vec3 point = vec3(disk, 0.0);
vec3 toLamp = lamp.xyz - point;
float distanceSquared = max(dot(toLamp, toLamp), 1e-4);
vec3 toward = toLamp * inversesqrt(distanceSquared);
vec3 view = normalize(eye - point);
float soft = LAMP_SOFT * LAMP_SOFT;
float irradiance = (lamp.z * lamp.z + soft) / (distanceSquared + soft) * max(toward.z, 0.0);
float tl = dot(tangent, toward);
float tv = dot(tangent, view);
float cone = max(sqrt(max(1.0 - tl * tl, 0.0)) * sqrt(max(1.0 - tv * tv, 0.0)) - tl * tv, 0.0);
float band = pow(cone, LAMP_SHINE);
float glow = pow(cone, LAMP_HALO);
float footprint = length(fwidth(disk)) * 0.7071;
float perPixel = GROOVE_ORDER * density * footprint / TAU;
float resolved = 1.0 - smoothstep(0.25, 0.6, perPixel);
vec3 surface = normalize(vec3(0.0, 0.0, 1.0) + normal * (LAMP_RELIEF * cos(phase * GROOVE_ORDER) * resolved));
float raking = max(dot(surface, toward), 0.0) / max(toward.z, 0.05);
float pitch = TAU / (GROOVE_ORDER * density);
float path = pitch * GROOVE_NM * abs(dot(toward + view, normal));
float settled = smoothstep(0.35, 1.0, fwidth(path) / GROOVE_COMB[0].w);
vec3 spectrum = vec3(0.0);
for (int i = 0; i < GROOVE_TAPS; i++) {
vec4 tap = GROOVE_COMB[i];
float c = cos(PI * path / tap.w);
float order = pow(c * c, GROOVE_SHARPNESS) / GROOVE_MEAN;
spectrum += tap.rgb * mix(order, 1.0, settled);
}
spectrum = vec3(1.0) + (spectrum - vec3(1.0)) * GROOVE_FRINGE;
vec3 returned = spectrum * (band * LAMP_BAND) + vec3(glow * LAMP_GLOW + raking * LAMP_WASH);
return vec4(returned * irradiance, band * irradiance);
}
#endif
#ifndef CUP_GLSL
#define CUP_GLSL
#ifndef CUP_STEPS
#define CUP_STEPS 56
#endif
#ifndef CUP_SHADOW_STEPS
#define CUP_SHADOW_STEPS 20
#endif
struct CupRay {
vec3 origin;
vec3 direction;
float pixel;
};
struct CupHit {
float porcelain;
float liquid;
float nearest;
float nearestAt;
};
CupRay cupRay(vec2 sheet, vec4 pose, float depth, float rows) {
float c = cos(pose.x);
float s = sin(pose.x);
vec2 turned = vec2(c * sheet.x + s * sheet.y, -s * sheet.x + c * sheet.y);
float cosine = pose.y;
float sine = sqrt(max(1.0 - cosine * cosine, 0.0));
float away = CUP_CAMERA_DISTANCE * depth;
vec3 direction = vec3(
turned.x,
cosine * turned.y + sine * CUP_CAMERA_FOCAL,
sine * turned.y - cosine * CUP_CAMERA_FOCAL
);
CupRay ray;
ray.origin = vec3(0.0, -away * sine, away * cosine) / CUP_SCALE;
ray.direction = normalize(direction);
ray.pixel = 1.0 / (rows * CUP_CAMERA_FOCAL);
return ray;
}
float cupPlane(CupRay ray, float height) {
return abs(ray.direction.z) > 1e-6 ? (height - ray.origin.z) / ray.direction.z : -1.0;
}
float cupRipple(float radius, float age, float strength) {
if (age < 0.0) return 0.0;
float front = age * CUP_RIPPLE_SPEED;
float behind = radius - front;
float packet = exp(-behind * behind / (CUP_RIPPLE_LENGTH * CUP_RIPPLE_LENGTH * 2.2));
float fading = exp(-age / CUP_RIPPLE_LIFE) * strength;
return CUP_RIPPLE_SLOPE * fading * packet * cos(TAU * behind / CUP_RIPPLE_LENGTH);
}
float cupBlend(float a, float b, float reach) {
float h = clamp(0.5 + 0.5 * (b - a) / reach, 0.0, 1.0);
return mix(b, a, h) - reach * h * (1.0 - h);
}
float cupDistance(vec3 p, float bearing) {
float across = length(p.xy);
vec2 arc = vec2(across, CUP_CENTER - p.z);
vec2 rim = vec2(CUP_REACH_SINE, CUP_REACH_COSINE);
bool pastLip = rim.y * arc.x > rim.x * arc.y;
float bowl = (pastLip ? length(arc - rim * CUP_BOWL) : abs(length(arc) - CUP_BOWL)) - CUP_WALL;
float foot = length(vec2(across - CUP_FOOT_RADIUS, p.z - CUP_FOOT)) - CUP_FOOT_TUBE;
vec2 toward = vec2(cos(bearing), sin(bearing));
float outward = dot(p.xy, toward) - CUP_HANDLE_OUT;
float side = dot(p.xy, vec2(-toward.y, toward.x));
float up = p.z + CUP_HANDLE_DOWN;
vec2 radii = vec2(CUP_HANDLE_WIDTH, CUP_HANDLE_HEIGHT);
float k0 = length(vec2(outward, up) / radii);
float k1 = length(vec2(outward, up) / (radii * radii));
float ring = k0 * (k0 - 1.0) / max(k1, 1e-4);
float section = length(vec2(ring / CUP_HANDLE_THICKNESS, side / CUP_HANDLE_BREADTH));
float handle = (section - 1.0) * min(CUP_HANDLE_THICKNESS, CUP_HANDLE_BREADTH);
handle = max(handle, CUP_BOWL + CUP_WALL * 0.5 - length(p - vec3(0.0, 0.0, CUP_CENTER)));
return cupBlend(cupBlend(bowl, foot, CUP_FILLET), handle, CUP_FILLET * 0.6);
}
float saucerDistance(vec3 p) {
vec2 arc = vec2(length(p.xy), SAUCER_CENTER - p.z);
vec2 rim = vec2(SAUCER_REACH_SINE, SAUCER_REACH_COSINE);
bool pastRim = rim.y * arc.x > rim.x * arc.y;
return (pastRim ? length(arc - rim * SAUCER_CURVATURE) : abs(length(arc) - SAUCER_CURVATURE))
- SAUCER_SHELL;
}
float cupSceneDistance(vec3 p, vec3 thrown, float bearing) {
return min(cupDistance(p - thrown, bearing), saucerDistance(p));
}
vec3 cupNormal(vec3 p, float bearing, float reach) {
vec2 k = vec2(1.0, -1.0);
return normalize(
k.xyy * cupDistance(p + k.xyy * reach, bearing) +
k.yyx * cupDistance(p + k.yyx * reach, bearing) +
k.yxy * cupDistance(p + k.yxy * reach, bearing) +
k.xxx * cupDistance(p + k.xxx * reach, bearing)
);
}
vec3 saucerNormal(vec3 p, float reach) {
vec2 k = vec2(1.0, -1.0);
return normalize(
k.xyy * saucerDistance(p + k.xyy * reach) +
k.yyx * saucerDistance(p + k.yyx * reach) +
k.yxy * saucerDistance(p + k.yxy * reach) +
k.xxx * saucerDistance(p + k.xxx * reach)
);
}
CupHit cupTrace(CupRay ray, float bearing) {
CupHit hit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
float toLiquid = cupPlane(ray, 0.0);
vec2 onLiquid = ray.origin.xy + ray.direction.xy * toLiquid;
float liquid = toLiquid > 0.0 && length(onLiquid) < CUP_LIQUID ? toLiquid : -1.0;
vec3 offset = ray.origin - vec3(0.0, 0.0, CUP_BOUND_CENTER);
float b = dot(offset, ray.direction);
float c = dot(offset, offset) - CUP_BOUND_RADIUS * CUP_BOUND_RADIUS;
float h = b * b - c;
if (h <= 0.0) {
hit.liquid = liquid;
return hit;
}
float root = sqrt(h);
float t = max(-b - root, 0.0);
float end = liquid > 0.0 ? min(-b + root, liquid) : -b + root;
for (int i = 0; i < CUP_STEPS; i++) {
if (t > end) break;
float d = cupDistance(ray.origin + ray.direction * t, bearing);
float footprint = ray.pixel * t;
float near = d / footprint;
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
hit.liquid = hit.porcelain > 0.0 ? -1.0 : liquid;
return hit;
}
CupHit saucerTrace(CupRay ray) {
CupHit hit;
hit.porcelain = -1.0;
hit.liquid = -1.0;
hit.nearest = 1e6;
hit.nearestAt = -1.0;
vec3 offset = ray.origin - vec3(0.0, 0.0, SAUCER_BOUND_CENTER);
float b = dot(offset, ray.direction);
float c = dot(offset, offset) - SAUCER_BOUND_RADIUS * SAUCER_BOUND_RADIUS;
float h = b * b - c;
if (h <= 0.0) return hit;
float root = sqrt(h);
float t = max(-b - root, 0.0);
float end = -b + root;
for (int i = 0; i < CUP_STEPS; i++) {
if (t > end) break;
float d = saucerDistance(ray.origin + ray.direction * t);
float footprint = ray.pixel * t;
float near = d / footprint;
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
float cupShadow(vec3 p, vec3 direction, float far, float bearing, float sharpness) {
float lit = 1.0;
float t = 0.06;
for (int i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) break;
float d = cupDistance(p + direction * t, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) break;
t += clamp(d, 0.05, 0.6);
}
return smoothstep(0.0, 1.0, lit);
}
float cupSceneShadow(vec3 p, vec3 direction, float far, vec3 thrown, float bearing, float sharpness) {
float lit = 1.0;
float t = 0.04;
for (int i = 0; i < CUP_SHADOW_STEPS; i++) {
if (t > far) break;
float d = cupSceneDistance(p + direction * t, thrown, bearing);
lit = min(lit, sharpness * d / t);
if (lit < 0.01) break;
t += clamp(d, 0.05, 0.8);
}
return smoothstep(0.0, 1.0, lit);
}
float cupOcclusion(vec3 p, vec3 n, vec3 thrown, float bearing) {
float shut = 0.0;
for (int i = 1; i <= 3; i++) {
float h = 0.12 * float(i * i);
shut += (h - cupSceneDistance(p + n * h, thrown, bearing)) / h * (0.6 / float(i));
}
return clamp(1.0 - shut * 0.55, 0.0, 1.0);
}
float cupLipHeight() {
return CUP_CENTER - CUP_BOWL * CUP_REACH_COSINE;
}
vec4 cupBowlExit(vec3 p, vec3 direction) {
vec3 offset = p - vec3(0.0, 0.0, CUP_CENTER);
float inner = CUP_BOWL - CUP_WALL;
float b = dot(offset, direction);
float c = dot(offset, offset) - inner * inner;
float t = -b + sqrt(max(b * b - c, 0.0));
vec3 at = p + direction * t;
return vec4(at, at.z - cupLipHeight());
}
float cupRimLight(vec3 p, vec3 direction, float softness) {
if (direction.z <= 0.0) return 0.0;
vec4 exit = cupBowlExit(p, direction);
return smoothstep(-softness, softness, exit.w);
}
vec2 coffeeBreath(vec2 p, float time) {
vec3 a = vec3(0.9, 1.7, 2.9);
vec2 k1 = vec2(1.7, 0.6);
vec2 k2 = vec2(-0.8, 2.3);
vec2 k3 = vec2(3.1, -1.9);
return 0.006 * (
a.x * k1 * cos(dot(k1, p) - time * 1.3) +
a.y * k2 * cos(dot(k2, p) - time * 1.7 + 1.1) * 0.5 +
a.z * k3 * cos(dot(k3, p) - time * 2.3 + 2.3) * 0.25
);
}
float coffeeDropRing(float radius, float age, float strength) {
float front = age * 1.8;
float spread = 0.3 + 0.5 * age;
float behind = radius - front;
float packet = exp(-behind * behind / (spread * spread));
float waveLength = 0.55 + 0.25 * age;
float fading = exp(-age / 1.2) / (1.0 + 1.1 * radius);
return 1.3 * strength * fading * packet * sin(6.2831853 * behind / waveLength) * smoothstep(0.0, 0.08, age);
}
vec3 cupLampOf(vec3 lamp) {
return vec3(lamp.xy * CUP_LAMP_REACH, CUP_LAMP_HEIGHT + lamp.z * CUP_LAMP_LIFT) / CUP_SCALE;
}
float cupIrradiance(vec3 p, vec3 lamp) {
float soft = CUP_LAMP_SOFT * CUP_LAMP_SOFT;
vec3 toward = lamp - p;
float over = lamp.z - CUP_TABLE;
return (over * over + soft) / (dot(toward, toward) + soft);
}
float cupWindowPool(vec3 p) {
float away = length(p.xy - CUP_SOFTBOX.xy * 2.0) / CUP_WINDOW_POOL;
return exp(-0.5 * away * away);
}
float cupSpecular(vec3 n, vec3 v, vec3 l, float alpha) {
vec3 m = normalize(v + l);
float nm = max(dot(n, m), 0.0);
float nv = max(dot(n, v), 1e-3);
float nl = max(dot(n, l), 0.0);
float a2 = alpha * alpha;
float spread = nm * nm * (a2 - 1.0) + 1.0;
float distribution = a2 / (PI * spread * spread);
float k = alpha * 0.5;
float visibility = 0.25 / ((nv * (1.0 - k) + k) * (nl * (1.0 - k) + k));
return distribution * visibility * nl;
}
float cupFresnel(float f0, float cosine) {
return f0 + (1.0 - f0) * pow(1.0 - clamp(cosine, 0.0, 1.0), 5.0);
}
float cupRoom(vec3 direction, float world) {
float strip = pow(max(dot(direction, CUP_STRIP), 0.0), 16.0);
float night = 0.003 + 0.008 * max(direction.z, 0.0) + 2.5 * strip;
float day = 0.62 + 0.3 * max(direction.z, 0.0) + 1.1 * strip;
return mix(day, night, world);
}
float cupAmbient(vec3 n, float night) {
float day = 0.22 + 0.22 * n.z;
float dark = 0.004 + 0.01 * max(n.z, 0.0);
return mix(day, dark, night);
}
vec3 cupShade(vec3 p, vec3 n, vec3 v, vec3 lamp, vec3 albedo, float alpha, float f0, vec2 lit, float open, float night) {
vec3 toLamp = normalize(lamp - p);
float key = mix(CUP_DAY_KEY, CUP_NIGHT_KEY, night) * cupIrradiance(p, lamp) * lit.x;
float window = mix(CUP_WINDOW_DAY, CUP_WINDOW_NIGHT, night) * cupWindowPool(p) * lit.y;
float wrap = max((dot(n, toLamp) + 0.2) / 1.2, 0.0);
float wrapWindow = max((dot(n, CUP_SOFTBOX) + 0.4) / 1.4, 0.0);
float facing = max(dot(n, v), 0.0);
float fresnel = cupFresnel(f0, facing);
float fill = CUP_FILL * night * max(dot(n, normalize(v + vec3(0.0, 0.0, 0.5))), 0.0);
vec3 diffuse = albedo * (key * wrap + window * wrapWindow + (cupAmbient(n, night) + fill) * open)
* (1.0 - fresnel);
float glint = key * cupSpecular(n, v, toLamp, alpha) * cupFresnel(f0, max(dot(v, normalize(v + toLamp)), 0.0));
float sheen = window * cupSpecular(n, v, CUP_SOFTBOX, max(alpha, 0.12))
* cupFresnel(f0, max(dot(v, normalize(v + CUP_SOFTBOX)), 0.0));
float room = cupRoom(reflect(-v, n), night) * fresnel * open;
return diffuse + vec3(glint + sheen + room);
}
float cupValue(vec2 p) {
vec2 cell = floor(p);
vec2 f = p - cell;
vec2 s = f * f * (3.0 - 2.0 * f);
uint x = uint(cell.x + 4096.0);
uint y = uint(cell.y + 4096.0);
float a = hash11(uvec3(x, y, 71u));
float b = hash11(uvec3(x + 1u, y, 71u));
float c = hash11(uvec3(x, y + 1u, 71u));
float d = hash11(uvec3(x + 1u, y + 1u, 71u));
return mix(mix(a, b, s.x), mix(c, d, s.x), s.y);
}
vec2 cupTableAlbedo(vec2 p) {
float cloud = cupValue(p * 0.35) * 0.55 + cupValue(p * 0.9 + 17.0) * 0.3 + cupValue(p * 2.4 + 41.0) * 0.15;
float grain = cupValue(p * 9.0 + 5.0) * 0.6 + cupValue(p * 23.0 + 9.0) * 0.4;
float night = CUP_TABLE_NIGHT * (0.72 + 0.5 * cloud + 0.16 * (grain - 0.5));
float day = CUP_TABLE_DAY * (0.985 + 0.015 * grain);
return vec2(night, day);
}
#endif
#ifndef HDR_GLSL
#define HDR_GLSL
const float HDR_RANGE = 24.0;
vec3 hdrDecode(vec4 texel) {
return texel.rgb * texel.rgb * HDR_RANGE;
}
vec4 hdrEncode(vec3 color, float alpha) {
return vec4(sqrt(clamp(color, 0.0, HDR_RANGE) / HDR_RANGE), alpha);
}
#endif
#ifndef ARC_TAPS
#define ARC_TAPS 12
#endif
#ifndef STEAM_SHEETS
#define STEAM_SHEETS 3
#endif
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform sampler2D uSoft;
uniform vec2 uResolution;
uniform float uExposure;
uniform float uBloomWeight;
uniform vec3 uVoid;
uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uInkKey;
uniform float uPresence;
uniform float uWorld;
uniform vec3 uExposed;
#ifdef REGISTER
uniform vec2 uMisregister[3];
#endif
uniform vec2 uLensShift;
uniform float uNucleus;
uniform vec4 uDisk;
uniform vec4 uTurning;
uniform vec4 uLamp;
uniform vec4 uPlate;
uniform vec4 uCup;
uniform vec4 uFlow;
uniform vec4 uShake;
uniform vec4 uCoffee;
uniform vec4 uDrops[8];
const float ARC_STEP = 1.5;
const float SHEEN_LIGHT = 1.35;
const float SHEEN_LIFT = 0.85;
const float GLINT = 2.2;
const vec3 COFFEE = vec3(0.011, 0.006, 0.0032);
const vec3 CREMA = vec3(0.34, 0.19, 0.085);
const vec3 FOAM = vec3(0.9, 0.85, 0.75);
const vec3 LATTE = vec3(0.48, 0.31, 0.18);
const float MILK_DENSITY = 0.8;
const float MILK_CONTRAST = 2.4;
const vec3 STAIN = vec3(0.78, 1.0, 1.3);
const vec3 RIM_CREMA = vec3(0.42, 0.27, 0.15);
const vec3 PORCELAIN = vec3(0.86, 0.855, 0.84);
const vec2 VORTEX = vec2(0.16, 0.95);
const vec2 MENISCUS = vec2(1.1, 0.045);
const float STEAM_LIGHT = 0.42;
in vec2 vUv;
layout(location = 0) out vec4 fragColor;
const float PLATE_DENSITY_MAX = 2.4;
const float PLATE_DENSITY_GAIN = 3.6;
const float PLATE_EXPOSURE = 0.55;
const vec2 PLATE_TOE = vec2(0.02, 0.17);
const vec2 PLATE_CONES = vec2(0.12, 0.42);
const float PROCESS_GAIN = 3.2;
const float PLATE_BLOOM = 0.35;
vec3 lightAt(vec2 uv, vec3 bloom) {
return hdrDecode(texture(uScene, uv)) + bloom;
}
vec2 uvOfSheet(vec2 sheet) {
return (2.0 * sheet + uLensShift) * uResolution.y / (2.0 * uResolution) + 0.5;
}
vec2 plateDensity(vec3 lit) {
float energy = luminance(lit);
energy *= smoothstep(PLATE_TOE.x, PLATE_TOE.y, energy);
float amount =
PLATE_DENSITY_MAX * (1.0 - exp(-energy * PLATE_DENSITY_GAIN / PLATE_DENSITY_MAX));
return vec2(amount, smoothstep(PLATE_CONES.x, PLATE_CONES.y, energy));
}
vec3 density(vec3 light) {
vec3 lit = linearToSrgb(toneMapColor(light, uExposure * PLATE_EXPOSURE));
vec2 plate = plateDensity(lit);
vec3 hue = lit / max(max(lit.r, max(lit.g, lit.b)), 1e-4);
vec3 plates = 1.0 + PROCESS_GAIN * (vec3(1.0) - hue);
plates /= max((plates.r + plates.g + plates.b) / 3.0, 1e-4);
return plate.x * mix(uInkKey, plates, plate.y);
}
vec3 keyDensity(vec3 light) {
vec3 lit = linearToSrgb(toneMapColor(light, uExposure * PLATE_EXPOSURE));
return plateDensity(lit).x * uInkKey;
}
vec3 exposedColor(vec3 color, float exposed) {
return mix(vec3(luminance(color)), color, exposed);
}
vec3 printed(vec3 radiance) {
return linearToSrgb(uPaper * (vec3(1.0) - exp(-radiance * 1.25)) / (1.0 - exp(-1.25)));
}
vec2 dropsAt(vec2 p) {
vec2 slope = vec2(0.0);
for (int i = 0; i < 8; i++) {
vec4 drop = uDrops[i];
if (drop.z < 0.0) continue;
vec2 offset = p - drop.xy;
float distance = length(offset);
slope += offset / max(distance, 1e-3) * coffeeDropRing(distance, drop.z, drop.w);
}
return slope;
}
float steamNoise(vec3 p) {
vec3 cell = floor(p);
vec3 f = p - cell;
vec3 s = f * f * (3.0 - 2.0 * f);
uvec3 k = uvec3(cell + 4096.0);
float n000 = hash11(k);
float n100 = hash11(k + uvec3(1u, 0u, 0u));
float n010 = hash11(k + uvec3(0u, 1u, 0u));
float n110 = hash11(k + uvec3(1u, 1u, 0u));
float n001 = hash11(k + uvec3(0u, 0u, 1u));
float n101 = hash11(k + uvec3(1u, 0u, 1u));
float n011 = hash11(k + uvec3(0u, 1u, 1u));
float n111 = hash11(k + uvec3(1u, 1u, 1u));
return mix(
mix(mix(n000, n100, s.x), mix(n010, n110, s.x), s.y),
mix(mix(n001, n101, s.x), mix(n011, n111, s.x), s.y),
s.z
);
}
vec2 steamAt(CupRay ray, float time) {
float veil = 0.0;
float light = 0.0;
for (int i = 0; i < STEAM_SHEETS; i++) {
float layer = float(i);
float height = 0.3 + 0.75 * layer;
float t = (height - ray.origin.z) / ray.direction.z;
vec2 q = ray.origin.xy + ray.direction.xy * t;
float away = length(q) / CUP_LIQUID;
float column = (1.0 - smoothstep(0.45 + 0.12 * layer, 0.95 + 0.18 * layer, away)) * (1.0 - 0.22 * layer);
float rise = time * 0.42 - layer * 0.55;
float c = cos(0.22 * rise);
float s = sin(0.22 * rise);
vec2 turned = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * (0.9 - 0.07 * layer);
vec3 air = vec3(turned * 1.6, rise);
vec2 warp = vec2(steamNoise(air * vec3(0.7, 0.7, 0.3) + 5.0), steamNoise(air * vec3(0.7, 0.7, 0.3) + 23.0)) - 0.5;
vec3 curled = air + vec3(warp * 1.4, 0.0);
float n = steamNoise(curled * vec3(1.0, 1.0, 0.35)) * 0.7 + steamNoise(curled * vec3(2.6, 2.6, 0.8) + 17.0) * 0.3;
float filament = 1.0 - smoothstep(0.0, 0.06, abs(n - 0.52));
float wisp = (filament * 0.75 + smoothstep(0.55, 0.85, n) * 0.25) * column * 0.16;
veil += wisp * (1.0 - veil);
light += wisp * smoothstep(0.4, 0.9, steamNoise(air * 1.4 + vec3(CUP_SOFTBOX.xy, 0.0)));
}
return vec2(veil, clamp(light / max(veil, 1e-3), 0.0, 1.0));
}
void main() {
vec2 screen = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y;
screen -= uLensShift;
vec3 bloom = hdrDecode(textureLod(uBloom, vUv, 0.0)) * uBloomWeight;
vec3 light = lightAt(vUv, bloom);
vec2 read = vUv;
vec4 pose = vec4(uDisk.xy, 1.0, 0.0);
vec4 drawnPose = vec4(uPlate.xy, 1.0, 0.0);
float depth = uDisk.w;
float drawnDepth = uPlate.z;
vec2 sheet = screen * 0.5;
vec2 disk = diskOfSheet(sheet, pose, depth);
CupRay ray = cupRay(sheet, pose, depth, uResolution.y);
vec3 thrown = vec3(uShake.xy / CUP_SCALE, 0.0);
CupRay inCup = ray;
inCup.origin -= thrown;
vec3 cupLamp = cupLampOf(uLamp.xyz);
float liquid = 0.0;
vec3 liquidAt = vec3(0.0);
float poured = 0.0;
float ripple = 0.0;
vec2 dropped = vec2(0.0);
CupHit cupHit;
cupHit.porcelain = -1.0;
cupHit.liquid = -1.0;
cupHit.nearest = 1e6;
cupHit.nearestAt = -1.0;
if (uCup.x > 0.0) {
cupHit = cupTrace(inCup, uCup.z);
if (cupHit.liquid > 0.0) {
liquidAt = inCup.origin + inCup.direction * cupHit.liquid;
float across = length(liquidAt.xy);
ripple = cupRipple(across, uShake.z, uShake.w);
dropped = dropsAt(liquidAt.xy);
vec2 bent = liquidAt.xy + liquidAt.xy / max(across, 1e-3) * ripple * 0.18 + dropped * 0.5;
disk = bent * (CUP_SCALE / uFlow.x);
poured = uFlow.y * (1.6 - 0.6 * across / CUP_LIQUID) + uCoffee.z * (1.0 - 0.7 * across / CUP_LIQUID);
liquid = 1.0;
}
}
float radius = length(disk);
float wind = uTurning.x;
float stirred = liquid * uCup.w * (1.0 - 0.45 * smoothstep(0.0, CUP_LIQUID, length(liquidAt.xy)));
float angle = turnedAt(radius, wind) + uTurning.y + poured + stirred;
float across = shearAt(radius, wind) * fwidth(radius);
float swept = uTurning.z * turnedAt(radius, 1.0) / turnedAt(ROTATION_REFERENCE, 1.0);
vec2 before = turnedBack(disk, angle);
vec4 lamp = lamplight(disk, atan(before.y, before.x), wind, pose, depth, uLamp);
if (wind > 0.0 || uTurning.y != 0.0 || uCup.x > 0.0) {
float arc = min(max(across, swept), TAU);
read = uvOfSheet(sheetOfDisk(before, drawnPose, drawnDepth));
bloom = hdrDecode(textureLod(uBloom, read, 0.0)) * uBloomWeight;
float ringPixels = arc * length(sheet) * uResolution.y;
int taps = clamp(int(ceil(ringPixels / ARC_STEP)), 1, ARC_TAPS);
float coarse = max(smoothstep(2.0, 6.0, ringPixels / float(taps)), liquid * smoothstep(0.45, 0.9, 1.0 - uFlow.x));
vec3 gathered = vec3(0.0);
for (int k = 0; k < ARC_TAPS; k++) {
if (k >= taps) break;
float along = (float(k) + 0.5) / float(taps) - 0.5;
vec2 at = uvOfSheet(sheetOfDisk(turnedBack(disk, angle + arc * along), drawnPose, drawnDepth));
vec2 inside = step(vec2(0.0), at) * step(at, vec2(1.0));
vec3 tap = vec3(0.0);
if (coarse < 1.0) tap += hdrDecode(textureLod(uScene, at, 0.0)) * (1.0 - coarse);
if (coarse > 0.0) tap += hdrDecode(textureLod(uSoft, at, 0.0)) * coarse;
gathered += tap * inside.x * inside.y;
}
light = gathered / float(taps) + bloom;
}
vec3 cupNight = vec3(0.0);
vec3 cupDay = vec3(0.0);
vec3 coffeeInk = vec3(0.0);
float glazedOver = 0.0;
float standing = 0.0;
float tableVeil = 1.0;
if (uCup.x > 0.0) {
vec3 view = -ray.direction;
float exposedShare = (uExposed.x + uExposed.y + uExposed.z) / 3.0;
vec3 body = exposedColor(PORCELAIN, exposedShare);
vec3 lampInCup = cupLamp - thrown;
float glazed = cupHit.porcelain > 0.0 ? 1.0 : 1.0 - smoothstep(0.0, 1.0, cupHit.nearest);
glazedOver = glazed;
standing = max(liquid, glazed);
vec3 underNight = vec3(0.0);
vec3 underDay = vec3(0.0);
if (liquid > 0.0) {
vec3 printedInk = keyDensity(light - bloom * (1.0 - PLATE_BLOOM));
float milk = pow(1.0 - exp(-luminance(printedInk) * MILK_DENSITY), MILK_CONTRAST);
float across = length(liquidAt.xy);
float toWall = CUP_LIQUID - across;
float crema = (1.0 - smoothstep(0.0, 0.55, toWall)) * (1.0 - milk);
vec3 night = mix(mix(COFFEE, CREMA, crema * 0.7), FOAM, milk);
vec3 day = mix(LATTE, RIM_CREMA, crema * 0.55);
coffeeInk = luminance(printedInk) * STAIN;
float spread = VORTEX.y * VORTEX.y;
float dip = 2.0 * VORTEX.x / spread * exp(-across * across / spread) * (0.3 + 2.4 * uCup.y);
float climb = MENISCUS.x * exp(-max(toWall, 0.0) / MENISCUS.y);
vec2 outward = liquidAt.xy / max(across, 1e-3);
vec2 gradient = liquidAt.xy * dip + outward * (ripple + climb) + dropped + coffeeBreath(liquidAt.xy, uCoffee.x);
vec3 normal = normalize(vec3(-gradient, 1.0));
vec3 toLamp = lampInCup - liquidAt;
vec3 lifted = liquidAt + vec3(0.0, 0.0, 0.03);
vec2 lit = vec2(cupRimLight(lifted, normalize(toLamp), 0.1), cupRimLight(lifted, CUP_SOFTBOX, 0.35));
float open = mix(0.55, 1.0, smoothstep(0.0, 0.9, toWall));
float rough = mix(0.045, 0.12, milk);
vec3 inCupView = -inCup.direction;
underNight = cupShade(liquidAt, normal, inCupView, lampInCup, night * open, rough, 0.02, lit, open, 1.0);
underDay = cupShade(liquidAt, normal, inCupView, lampInCup, day * open, rough, 0.02, lit, open, 0.0);
vec3 mirrored = reflect(inCup.direction, normal);
vec4 wall = cupBowlExit(liquidAt, mirrored);
float onWall = 1.0 - smoothstep(-0.06, 0.06, wall.w);
if (onWall > 0.0) {
vec3 wallNormal = normalize(vec3(0.0, 0.0, CUP_CENTER) - wall.xyz);
vec3 toward = normalize(lampInCup - wall.xyz);
vec2 wallLit = vec2(cupRimLight(wall.xyz, toward, 0.1), cupRimLight(wall.xyz, CUP_SOFTBOX, 0.35));
vec3 wallNight = cupShade(wall.xyz, wallNormal, -mirrored, lampInCup, body, 0.09, 0.045, wallLit, 1.0, 1.0);
vec3 wallDay = cupShade(wall.xyz, wallNormal, -mirrored, lampInCup, body, 0.09, 0.045, wallLit, 1.0, 0.0);
float mirror = cupFresnel(0.02, max(dot(normal, inCupView), 0.0)) * onWall * (1.0 - milk * 0.7);
underNight += (wallNight - cupRoom(mirrored, 1.0) * open) * mirror;
underDay += (wallDay - cupRoom(mirrored, 0.0) * open) * mirror;
}
} else if (glazed < 1.0) {
vec3 onTable = ray.origin + ray.direction * cupPlane(ray, CUP_TABLE);
vec3 up = vec3(0.0, 0.0, 1.0);
vec3 toLamp = cupLamp - onTable;
vec2 lit = vec2(1.0);
float open = 1.0;
if (length(onTable.xy) < SAUCER_RIM * 2.6) {
vec3 lifted = onTable + up * 0.02;
lit = vec2(
cupSceneShadow(lifted, normalize(toLamp), length(toLamp), thrown, uCup.z, 5.0),
cupSceneShadow(lifted, CUP_SOFTBOX, 18.0, thrown, uCup.z, 2.0)
);
open = cupOcclusion(onTable, up, thrown, uCup.z);
}
tableVeil = mix(open * mix(0.55, 1.0, 0.6 * lit.x + 0.4 * lit.y), 1.0,
smoothstep(SAUCER_RIM * 1.4, SAUCER_RIM * 2.6, length(onTable.xy)));
vec2 stone = cupTableAlbedo(onTable.xy);
underNight = cupShade(onTable, up, view, cupLamp, vec3(stone.x), CUP_TABLE_ROUGHNESS, 0.035, lit, open, 1.0);
underDay = cupShade(onTable, up, view, cupLamp, vec3(stone.y), 0.6, 0.02, lit, open, 0.0);
CupHit saucer = saucerTrace(ray);
float covered = saucer.porcelain > 0.0 ? 1.0 : 1.0 - smoothstep(0.0, 1.0, saucer.nearest);
if (covered > 0.0) {
vec3 at = ray.origin + ray.direction * saucer.nearestAt;
vec3 normal = saucerNormal(at, max(ray.pixel * saucer.nearestAt * 0.5, 1e-3));
vec3 toward = cupLamp - at;
vec3 raised = at + normal * 0.03;
vec2 shadowed = vec2(
cupSceneShadow(raised, normalize(toward), length(toward), thrown, uCup.z, 6.0),
cupSceneShadow(raised, CUP_SOFTBOX, 14.0, thrown, uCup.z, 2.5)
);
float reached = cupOcclusion(at, normal, thrown, uCup.z);
vec3 saucerNight = cupShade(at, normal, view, cupLamp, body, 0.09, 0.045, shadowed, reached, 1.0);
vec3 saucerDay = cupShade(at, normal, view, cupLamp, body, 0.09, 0.045, shadowed, reached, 0.0);
underNight = mix(underNight, saucerNight, covered);
underDay = mix(underDay, saucerDay, covered);
standing = max(standing, covered);
}
}
cupNight = underNight;
cupDay = underDay;
if (uCoffee.y > 0.0 && uWorld > 0.0) {
vec2 steam = steamAt(inCup, uCoffee.x) * uCoffee.y;
cupNight = mix(cupNight, vec3(STEAM_LIGHT) * (0.55 + 0.45 * steam.y), steam.x);
}
if (glazed > 0.0) {
vec3 at = inCup.origin + inCup.direction * cupHit.nearestAt;
vec3 normal = cupNormal(at, uCup.z, max(inCup.pixel * cupHit.nearestAt * 0.5, 1e-3));
vec3 toLamp = lampInCup - at;
vec3 raised = at + normal * 0.04;
vec2 lit = vec2(
cupShadow(raised, normalize(toLamp), length(toLamp), uCup.z, 9.0),
cupShadow(raised, CUP_SOFTBOX, 12.0, uCup.z, 3.0)
);
vec3 glazeNight = cupShade(at, normal, -inCup.direction, lampInCup, body, 0.09, 0.045, lit, 1.0, 1.0);
vec3 glazeDay = cupShade(at, normal, -inCup.direction, lampInCup, body, 0.09, 0.045, lit, 1.0, 0.0);
cupNight = mix(cupNight, glazeNight, glazed);
cupDay = mix(cupDay, glazeDay, glazed);
}
}
float ringed = shearAt(radius, wind) * radius;
float cut = ringed / sqrt(1.0 + ringed * ringed);
float matter = 1.0 - exp(-max(luminance(light - bloom), 0.0) / 0.12);
float knot = max(luminance(light - bloom) - luminance(hdrDecode(textureLod(uSoft, read, 0.0))), 0.0);
float glint = smoothstep(0.02, 0.22, knot) * sqrt(lamp.w) * GLINT;
vec3 sheen = (lamp.rgb + vec3(glint)) * uTurning.w * cut * matter;
vec2 window = windowAt(screen, 2.0 / uResolution.y);
if (window.x > 0.0) {
vec2 reach = windowBlur(uResolution);
vec3 blurred =
hdrDecode(textureLod(uScene, vUv + vec2(reach.x, 0.0), 0.0)) +
hdrDecode(textureLod(uScene, vUv - vec2(reach.x, 0.0), 0.0)) +
hdrDecode(textureLod(uScene, vUv + vec2(0.0, reach.y), 0.0)) +
hdrDecode(textureLod(uScene, vUv - vec2(0.0, reach.y), 0.0));
light = mix(light, blurred * 0.25, window.x);
light += vec3(WINDOW_EDGE) * window.y;
}
#ifdef REGISTER
vec3 blue = lightAt(read + uMisregister[0], bloom);
vec3 green = lightAt(read + uMisregister[1], bloom);
vec3 red = lightAt(read + uMisregister[2], bloom);
#else
vec3 blue = light;
vec3 green = light;
vec3 red = light;
#endif
vec3 silver = vec3(luminance(light));
vec3 exposed = vec3(
mix(silver.r, red.r, uExposed.z),
mix(silver.g, green.g, uExposed.y),
mix(silver.b, blue.b, uExposed.x)
);
vec3 space = toneMapColor(exposed + sheen * SHEEN_LIGHT, uExposure);
vec4 lens = fieldLens(screen);
vec2 front = fieldFront(screen);
float lines = fieldRuling(lens.xy) * front.x * lens.w;
vec3 ground = uVoid;
ground += vec3(0.10, 0.095, 0.15) * lines * 0.10;
ground += vec3(0.62, 0.56, 0.78) * front.y;
space = ground + space;
if (uCup.x > 0.0) {
float bare = 1.0 - standing;
space = mix(space, mix(toneMapColor(cupNight, uExposure), uVoid * tableVeil, bare), uCup.x);
}
space *= 1.0 - 0.14 * dot(screen, screen) * 0.25;
space = linearToSrgb(mix(uVoid, space, uPresence));
vec3 fog = bloom * (1.0 - PLATE_BLOOM);
vec3 graphite = keyDensity(light - fog);
vec3 inked = vec3(
mix(graphite.r, density(red - fog).r, uExposed.z),
mix(graphite.g, density(green - fog).g, uExposed.y),
mix(graphite.b, density(blue - fog).b, uExposed.x)
);
vec3 lifted = inked * max(vec3(1.0) - sheen * SHEEN_LIFT, vec3(0.2));
vec3 plate = linearToSrgb(uPaper) * exp(-lifted * uPresence);
float mark = (fieldRuling(lens.xy) * (1.0 - lens.z * 0.30) * front.x * 0.14 + front.y * 0.5) * lens.w;
plate *= linearToSrgb(mix(vec3(1.0), uInk, mark));
if (uCup.x > 0.0) {
float bare = 1.0 - standing;
vec3 cupped = mix(printed(cupDay) * exp(-coffeeInk * (1.0 - glazedOver)), linearToSrgb(uPaper) * tableVeil, bare);
plate = mix(plate, mix(linearToSrgb(uPaper), cupped, uPresence), uCup.x);
}
float aspect = uResolution.x / uResolution.y;
float burn = uWorld <= 0.0
? 0.0
: uWorld >= 1.0
? 1.0
: burnt(screen, uWorld, uNucleus, length(vec2(aspect, 1.0) + abs(uLensShift)));
vec3 color = mix(plate, space, burn);
color += (interleavedGradientNoise(gl_FragCoord.xy) - 0.5) / 255.0;
fragColor = vec4(color, 1.0);
}`;export{e as default};