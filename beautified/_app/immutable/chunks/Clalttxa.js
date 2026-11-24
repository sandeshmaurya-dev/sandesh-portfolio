var e=`fn indexAt(cauchy: vec2f, nanometers: f32) -> f32 {
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
@compute @workgroup_size(8, 8)
fn trace(@builtin(global_invocation_id) id: vec3u) {
if (id.x > CELLS || id.y > CELLS) {
return;
}
let corner = id.y * (CELLS + 1u) + id.x;
let square = vec2f(id.xy) / f32(CELLS) * 2.0 - 1.0;
let sun = u.sun.xyz;
let across = normalize(cross(vec3f(0.0, 0.0, 1.0), sun) + vec3f(1e-6, 0.0, 0.0));
let up = cross(sun, across);
let radius = u.drop.x;
let height = u.drop.y;
let beam = mix(u.lattice.xz, u.lattice.yw, square * 0.5 + 0.5);
let origin = vec3f(0.0, 0.0, height) + across * beam.x + up * beam.y + sun * (2.0 * radius);
let entry = enterSphere(origin, -sun, radius, height);
for (var band = 0u; band < BANDS; band++) {
let index = 1.0 + (indexAt(u.medium.xy, u.bands[band]) - 1.0) * u.drop.w;
let path = throughSphere(entry, origin, -sun, radius, height, index);
let carried = select(0.0, path.carried * exp(-u.drop.z * path.span), path.through);
let at = path.at * outline(atan2(path.at.y, path.at.x), u.modes, u.phases);
let uv = (at - u.region.xy) / (2.0 * u.region.z) + 0.5;
let near = all(uv > vec2f(-0.25)) && all(uv < vec2f(1.25));
landings[corner * BANDS + band] = vec4f(uv, carried, select(0.0, 1.0, path.through && near));
}
}`;export{e as default};