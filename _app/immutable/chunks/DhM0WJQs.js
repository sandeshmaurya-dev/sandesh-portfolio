var e=`const LIGHT: vec2f = vec2f(0.6, 0.8);
const TAU: f32 = 6.283185307179586;
fn superellipse(p: vec2f, extent: vec2f, n: f32) -> f32 {
let q = abs(p) / max(extent, vec2f(1e-3));
let f = pow(pow(q.x, n) + pow(q.y, n), 1.0 / n);
return (f - 1.0) * min(extent.x, extent.y);
}
fn hash(p: vec2f) -> f32 {
var q = fract(p * vec2f(123.34, 456.21));
q += dot(q, q + 45.32);
return fract(q.x * q.y);
}
fn valueNoise(p: vec2f) -> f32 {
let i = floor(p);
let f = fract(p);
let w = f * f * (3.0 - 2.0 * f);
let a = hash(i);
let b = hash(i + vec2f(1.0, 0.0));
let c = hash(i + vec2f(0.0, 1.0));
let d = hash(i + vec2f(1.0, 1.0));
return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}
fn luminance(color: vec3f) -> f32 {
return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}
fn noiseOf(seed: vec3u) -> f32 {
var v = seed * 1664525u + 1013904223u;
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
v ^= v >> vec3u(16u);
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
return f32(v.x & 0xffffffu) / 16777215.0;
}
fn snowAt(point: vec2f, local: vec2f, time: f32) -> f32 {
let field = u32(floor(time * 60.0));
let line = u32(max(floor(point.y * 0.5), 0.0));
let along = point.x * 0.42;
let cell = u32(max(floor(along), 0.0));
let a = noiseOf(vec3u(cell, line, field));
let b = noiseOf(vec3u(cell + 1u, line, field));
let grain = mix(a, b, smoothstep(0.0, 1.0, fract(along)));
let lineGain = 0.72 + 0.5 * noiseOf(vec3u(line, field, 7u));
let spark = step(0.9965, noiseOf(vec3u(cell / 5u, line, field ^ 0x5bd1u))) * 0.9;
let rolling = fract(local.y * 0.5 - time * 0.43);
let bar = 1.0 - 0.32 * smoothstep(0.0, 0.08, rolling) * smoothstep(0.24, 0.12, rolling);
let flicker = 0.9 + 0.1 * noiseOf(vec3u(field, 3u, 11u));
return clamp((grain * grain * 1.25 * lineGain + spark) * bar * flicker, 0.0, 1.0);
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let stage = u.frame.xy;
let point = in.uv * vec2f(u.frame.x, u.frame.z);
let time = u.frame.w;
let assembled = u.shape.z;
let flop = u.shape.w;
let night = u.look.y;
var pageUv = point / vec2f(u.frame.x, u.frame.z);
pageUv.x = mix(pageUv.x, 1.0 - pageUv.x, flop);
let page = textureSampleLevel(picture, smp, pageUv, 0.0).rgb;
if (assembled < 1e-4) {
return vec4f(page, 1.0);
}
let low = vec2f(u.screen.w, u.screen.x);
let high = vec2f(stage.x - u.screen.y, stage.y - u.screen.z);
let center = (low + high) * 0.5;
let extent = max((high - low) * 0.5, vec2f(1.0));
let n = u.shape.x;
let offset = point - center;
let opening = superellipse(offset, extent, n);
let chamfer = u.body.w * assembled;
let bezel = u.look.x * assembled;
let inset = (u.body.w + u.look.x + u.metal.w) * assembled;
let glassExtent = max(extent - inset, vec2f(1.0));
let bend = 1.0 + u.shape.y * assembled * dot(offset, offset) / dot(glassExtent, glassExtent);
let seen = center + offset * bend;
let glassEdge = superellipse(seen - center, glassExtent, n);
let pixel = max(fwidth(opening), 1e-3);
let inGlass = 1.0 - smoothstep(-pixel, pixel, glassEdge);
let inOpening = 1.0 - smoothstep(-pixel, pixel, opening);
let local = (seen - center) / glassExtent;
let light = normalize(LIGHT);
let snowing = u.signal.x;
let roll = u.signal.y;
let contrast = u.signal.z;
let ghost = u.signal.w;
let raster = vec2f(max(u.beam.x, 1e-3), max(u.beam.y, 1e-3));
let traced = abs(local) / raster;
let onRaster = (1.0 - smoothstep(0.985, 1.0, traced.x)) * (1.0 - smoothstep(0.96, 1.0, traced.y));
let squeezed = center + (seen - center) / raster;
let height = glassExtent.y * 2.0;
let top = center.y - glassExtent.y;
let fieldAt = fract((squeezed.y - top) / height + roll);
let rolled = top + fieldAt * height;
let blanking = smoothstep(0.0, 0.035, fieldAt) * smoothstep(1.0, 0.985, fieldAt);
let scanline = floor(squeezed.y / u.holes.z);
let tear = (noiseOf(vec3u(u32(max(scanline, 0.0)), u32(floor(time * 30.0)), 5u)) - 0.5) * u.noise.x * (1.0 + 6.0 * snowing);
let readAt = vec2f(squeezed.x + tear, rolled);
var uv = readAt / vec2f(u.frame.x, u.frame.z);
uv.x = mix(uv.x, 1.0 - uv.x, flop);
var luma = luminance(textureSampleLevel(picture, smp, uv, 0.0).rgb);
var ghostUv = (readAt + vec2f(7.0, 0.0)) / vec2f(u.frame.x, u.frame.z);
ghostUv.x = mix(ghostUv.x, 1.0 - ghostUv.x, flop);
let late = luminance(textureSampleLevel(picture, smp, ghostUv, 1.0).rgb);
luma = mix(luma, late, ghost * 0.22);
luma = clamp((luma - 0.5) * contrast + 0.5, 0.0, 1.0);
luma = mix(luma, snowAt(point, local, time), clamp(snowing, 0.0, 1.0));
let hum = 1.0 - u.noise.y * (0.5 + 0.5 * sin(TAU * (local.y * 0.5 - time * 0.11)));
let fine = (noiseOf(vec3u(vec2u(max(floor(point), vec2f(0.0))), u32(floor(time * 30.0)))) - 0.5) * 0.04;
luma = clamp(luma * hum + fine, 0.0, 1.0) * blanking * onRaster;
let halo = luminance(textureSampleLevel(picture, smp, uv, 3.5).rgb) * blanking * onRaster;
let within = fract(seen.y / u.holes.z) - 0.5;
let spot = mix(0.32, 0.5, clamp(luma, 0.0, 1.0));
let beam = exp(-within * within / (2.0 * spot * spot * 0.25));
luma *= mix(1.0, beam * 1.12, u.holes.w * 2.2);
luma = min(luma * u.beam.z + halo * mix(0.08, 0.16, snowing), 1.5) * u.beam.w;
let tube = vec3f(0.07, 0.075, 0.074);
let phosphor = vec3f(0.95, 0.96, 0.97);
var screen = mix(tube, phosphor, clamp(luma, 0.0, 1.0)) + phosphor * max(luma - 1.0, 0.0);
let rim = smoothstep(0.0, min(glassExtent.x, glassExtent.y) * 0.34, -glassEdge);
screen *= mix(0.66, 1.0, rim);
let pane = (local - vec2f(-0.48, -0.55)) * vec2f(2.2, 3.8);
let window = exp(-pow(dot(pane, pane), 1.6)) * 0.085;
let darkness = 1.0 - clamp(luma, 0.0, 1.0);
screen += vec3f(window * (0.3 + 0.7 * darkness));
let lip = exp(glassEdge / 1.8) * smoothstep(0.2, -0.95, dot(local, light)) * 0.22;
screen += vec3f(lip * inGlass);
let floorGlow = exp(-pow((local.y - 0.82) / 0.12, 2.0)) * 0.025 * (0.4 + darkness);
screen += vec3f(floorGlow);
let across = (point - stage * 0.5) / stage;
let lightness = dot(across, -light);
let peel = (valueNoise(point * 0.55) - 0.5) * 0.018 + (valueNoise(point * 2.1) - 0.5) * 0.008;
var cabinet = u.body.rgb * (1.0 + 0.08 * lightness + peel);
let streak = dot(across, vec2f(0.62, 0.78)) + 0.18;
let softbox = exp(-streak * streak / 0.012) * smoothstep(0.55, 0.15, length(across + vec2f(0.18, 0.3)));
cabinet += vec3f(mix(0.05, 0.14, night) * softbox) * (0.6 + 0.4 * (1.0 - peel * 30.0));
let fromEdge = min(min(point.x, stage.x - point.x), min(point.y, stage.y - point.y));
let edgeTurn = 1.0 - smoothstep(0.0, 6.0 * assembled, fromEdge);
let edgeFacing = select(-0.5, 0.5, point.x < stage.x * 0.5 || point.y < stage.y * 0.5);
cabinet *= 1.0 + edgeTurn * edgeFacing * 0.14;
cabinet += vec3f(exp(-pow(fromEdge - 1.5, 2.0)) * 0.08 * max(edgeFacing, 0.0) * assembled);
let deckTop = stage.y - u.screen.z;
let inDeck = smoothstep(deckTop - 0.5, deckTop + 0.5, point.y);
let brushed =
(valueNoise(vec2f(point.x * 0.012, point.y * 1.3)) - 0.5) * 0.05 +
(hash(vec2f(floor(point.y), 3.0)) - 0.5) * 0.025;
let sheen = exp(-pow((point.x / stage.x - 0.32) / 0.22, 2.0)) * 0.06;
var deck = u.metal.rgb * (1.0 + brushed + 0.05 * lightness + sheen);
let seam = point.y - deckTop;
deck *= 1.0 - exp(-seam * seam / 1.2) * 0.45;
deck *= 1.0 + exp(-(seam - 2.0) * (seam - 2.0)) * 0.12;
let grille = u.grille;
let inGrille = step(grille.x, point.x) * step(point.x, grille.x + grille.z) *
step(grille.y, point.y) * step(point.y, grille.y + grille.w);
let pitch = u.holes.y;
let row = floor((point.y - grille.y) / (pitch * 0.866));
let stagger = select(0.0, pitch * 0.5, fract(row * 0.5) > 0.25);
let hole = vec2f(
fract((point.x - grille.x - stagger) / pitch) - 0.5,
fract((point.y - grille.y) / (pitch * 0.866)) - 0.5
) * vec2f(pitch, pitch * 0.866);
let holeDistance = length(hole) - u.holes.x;
let drilled = (1.0 - smoothstep(-0.6, 0.6, holeDistance)) * inGrille;
let wall = smoothstep(0.0, -u.holes.x, hole.y) * 0.25;
deck = mix(deck, u.metal.rgb * (0.12 + wall), drilled);
cabinet = mix(cabinet, deck, inDeck);
let into = -opening;
let inChamfer = (1.0 - smoothstep(chamfer - 0.75, chamfer + 0.75, into)) * inOpening;
let inBezel = (1.0 - smoothstep(chamfer + bezel - 0.75, chamfer + bezel + 0.75, into)) * inOpening * (1.0 - inChamfer);
let toward = normalize(-offset / extent + vec2f(1e-5));
let facing = dot(toward, -light);
let chamferWall = u.body.rgb * (0.78 + 0.34 * facing) * (0.9 + 0.1 * into / max(chamfer, 1.0));
let ringAngle = atan2(offset.y / extent.y, offset.x / extent.x);
let spun = (hash(vec2f(floor(ringAngle * 260.0), floor(into))) - 0.5) * 0.06;
let onRing = clamp((into - chamfer) / max(bezel, 1.0), 0.0, 1.0);
let bevel = 0.6 + 0.4 * facing * (1.0 - 2.0 * onRing);
let ring = u.metal.rgb * (0.82 + 0.3 * bevel + spun) + vec3f(0.25 * pow(max(facing, 0.0), 6.0) * (1.0 - onRing));
let mask = vec3f(0.04) * (1.0 + 0.4 * facing * smoothstep(chamfer + bezel, chamfer + bezel + 3.0, into));
var color = cabinet;
color = mix(color, mask, inOpening);
color = mix(color, ring, inBezel);
color = mix(color, chamferWall, inChamfer);
color = mix(color, screen, inGlass);
return vec4f(clamp(color, vec3f(0.0), vec3f(1.0)), 1.0);
}`;export{e as default};