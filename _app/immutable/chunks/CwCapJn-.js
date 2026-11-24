var e=`struct Splat {
@builtin(position) position: vec4f,
@location(0) carried: f32,
@location(1) @interpolate(flat) irradiance: f32,
@location(2) @interpolate(flat) band: u32,
}
const CORNERS = array<vec2u, 6>(
vec2u(0u, 0u), vec2u(1u, 0u), vec2u(0u, 1u),
vec2u(1u, 0u), vec2u(1u, 1u), vec2u(0u, 1u)
);
fn landing(corner: vec2u, band: u32) -> vec4f {
return landings[(corner.y * (CELLS + 1u) + corner.x) * BANDS + band];
}
@vertex
fn vertex(@builtin(vertex_index) id: u32, @builtin(instance_index) band: u32) -> Splat {
let cell = id / 6u;
let base = vec2u(cell % CELLS, cell / CELLS);
let first = id - id % 3u;
let a = landing(base + CORNERS[first % 6u], band);
let b = landing(base + CORNERS[(first + 1u) % 6u], band);
let c = landing(base + CORNERS[(first + 2u) % 6u], band);
let own = landing(base + CORNERS[id % 6u], band);
let texels = u.medium.w;
let ab = (b.xy - a.xy) * texels;
let ac = (c.xy - a.xy) * texels;
let landed = abs(ab.x * ac.y - ab.y * ac.x);
let cells = f32(CELLS);
let left = 4.0 / (cells * cells);
let squeezed = left / max(landed, 1e-12);
let whole = a.w * b.w * c.w > 0.5;
let position = select(vec4f(2.0, 2.0, 0.0, 1.0), vec4f(own.x * 2.0 - 1.0, 1.0 - own.y * 2.0, 0.0, 1.0), whole);
return Splat(
position,
own.z,
squeezed * u.medium.z,
band
);
}
@fragment
fn fragment(splat: Splat) -> @location(0) vec4f {
var bands = vec4f(0.0);
bands[splat.band] = min(splat.carried * splat.irradiance, u.region.w);
return bands;
}`;export{e as default};