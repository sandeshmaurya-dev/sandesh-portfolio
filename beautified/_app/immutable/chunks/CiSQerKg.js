var e=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uPicture;
uniform vec4 uFrame;
uniform vec4 uScreen;
uniform vec4 uShape;
uniform vec4 uBody;
uniform vec4 uMetal;
uniform vec4 uGrille;
uniform vec4 uHoles;
uniform vec4 uBeam;
uniform vec4 uSignal;
uniform vec4 uNoise;
uniform vec4 uLook;
const vec2 LIGHT = vec2(0.6, 0.8);
const float TAU = 6.283185307179586;
float superellipse(vec2 p, vec2 extent, float n) {
vec2 q = abs(p) / max(extent, vec2(1e-3));
float f = pow(pow(q.x, n) + pow(q.y, n), 1.0 / n);
return (f - 1.0) * min(extent.x, extent.y);
}
float hash(vec2 p) {
vec2 q = fract(p * vec2(123.34, 456.21));
q += dot(q, q + 45.32);
return fract(q.x * q.y);
}
float valueNoise(vec2 p) {
vec2 i = floor(p);
vec2 f = fract(p);
vec2 w = f * f * (3.0 - 2.0 * f);
float a = hash(i);
float b = hash(i + vec2(1.0, 0.0));
float c = hash(i + vec2(0.0, 1.0));
float d = hash(i + vec2(1.0, 1.0));
return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}
float luminance(vec3 color) {
return dot(color, vec3(0.2126, 0.7152, 0.0722));
}
float noiseOf(uvec3 v) {
v = v * 1664525u + 1013904223u;
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
v ^= v >> 16u;
v.x += v.y * v.z;
v.y += v.z * v.x;
v.z += v.x * v.y;
return float(v.x & 0xffffffu) / 16777215.0;
}
float snowAt(vec2 point, vec2 local, float time) {
uint field = uint(floor(time * 60.0));
uint line = uint(max(floor(point.y * 0.5), 0.0));
float along = point.x * 0.42;
uint cell = uint(max(floor(along), 0.0));
float a = noiseOf(uvec3(cell, line, field));
float b = noiseOf(uvec3(cell + 1u, line, field));
float grain = mix(a, b, smoothstep(0.0, 1.0, fract(along)));
float lineGain = 0.72 + 0.5 * noiseOf(uvec3(line, field, 7u));
float spark = step(0.9965, noiseOf(uvec3(cell / 5u, line, field ^ 0x5bd1u))) * 0.9;
float rolling = fract(local.y * 0.5 - time * 0.43);
float bar = 1.0 - 0.32 * smoothstep(0.0, 0.08, rolling) * smoothstep(0.24, 0.12, rolling);
float flicker = 0.9 + 0.1 * noiseOf(uvec3(field, 3u, 11u));
return clamp((grain * grain * 1.25 * lineGain + spark) * bar * flicker, 0.0, 1.0);
}
void main() {
vec2 stage = uFrame.xy;
vec2 point = vUv * vec2(uFrame.x, uFrame.z);
float time = uFrame.w;
float assembled = uShape.z;
float flop = uShape.w;
float night = uLook.y;
vec2 pageUv = point / vec2(uFrame.x, uFrame.z);
pageUv.x = mix(pageUv.x, 1.0 - pageUv.x, flop);
vec3 page = textureLod(uPicture, pageUv, 0.0).rgb;
if (assembled < 1e-4) {
fragColor = vec4(page, 1.0);
return;
}
vec2 low = vec2(uScreen.w, uScreen.x);
vec2 high = vec2(stage.x - uScreen.y, stage.y - uScreen.z);
vec2 center = (low + high) * 0.5;
vec2 extent = max((high - low) * 0.5, vec2(1.0));
float n = uShape.x;
vec2 offset = point - center;
float opening = superellipse(offset, extent, n);
float chamfer = uBody.w * assembled;
float bezel = uLook.x * assembled;
float inset = (uBody.w + uLook.x + uMetal.w) * assembled;
vec2 glassExtent = max(extent - inset, vec2(1.0));
float bend = 1.0 + uShape.y * assembled * dot(offset, offset) / dot(glassExtent, glassExtent);
vec2 seen = center + offset * bend;
float glassEdge = superellipse(seen - center, glassExtent, n);
float pixel = max(fwidth(opening), 1e-3);
float inGlass = 1.0 - smoothstep(-pixel, pixel, glassEdge);
float inOpening = 1.0 - smoothstep(-pixel, pixel, opening);
vec2 local = (seen - center) / glassExtent;
vec2 light = normalize(LIGHT);
float snowing = uSignal.x;
float roll = uSignal.y;
float contrast = uSignal.z;
float ghost = uSignal.w;
vec2 raster = vec2(max(uBeam.x, 1e-3), max(uBeam.y, 1e-3));
vec2 traced = abs(local) / raster;
float onRaster = (1.0 - smoothstep(0.985, 1.0, traced.x)) * (1.0 - smoothstep(0.96, 1.0, traced.y));
vec2 squeezed = center + (seen - center) / raster;
float height = glassExtent.y * 2.0;
float top = center.y - glassExtent.y;
float fieldAt = fract((squeezed.y - top) / height + roll);
float rolled = top + fieldAt * height;
float blanking = smoothstep(0.0, 0.035, fieldAt) * smoothstep(1.0, 0.985, fieldAt);
float scanline = floor(squeezed.y / uHoles.z);
float tear = (noiseOf(uvec3(uint(max(scanline, 0.0)), uint(floor(time * 30.0)), 5u)) - 0.5) * uNoise.x * (1.0 + 6.0 * snowing);
vec2 readAt = vec2(squeezed.x + tear, rolled);
vec2 uv = readAt / vec2(uFrame.x, uFrame.z);
uv.x = mix(uv.x, 1.0 - uv.x, flop);
float luma = luminance(textureLod(uPicture, uv, 0.0).rgb);
vec2 ghostUv = (readAt + vec2(7.0, 0.0)) / vec2(uFrame.x, uFrame.z);
ghostUv.x = mix(ghostUv.x, 1.0 - ghostUv.x, flop);
float late = luminance(textureLod(uPicture, ghostUv, 1.0).rgb);
luma = mix(luma, late, ghost * 0.22);
luma = clamp((luma - 0.5) * contrast + 0.5, 0.0, 1.0);
luma = mix(luma, snowAt(point, local, time), clamp(snowing, 0.0, 1.0));
float hum = 1.0 - uNoise.y * (0.5 + 0.5 * sin(TAU * (local.y * 0.5 - time * 0.11)));
float fine = (noiseOf(uvec3(uvec2(max(floor(point), 0.0)), uint(floor(time * 30.0)))) - 0.5) * 0.04;
luma = clamp(luma * hum + fine, 0.0, 1.0) * blanking * onRaster;
float halo = luminance(textureLod(uPicture, uv, 3.5).rgb) * blanking * onRaster;
float within = fract(seen.y / uHoles.z) - 0.5;
float spot = mix(0.32, 0.5, clamp(luma, 0.0, 1.0));
float beam = exp(-within * within / (2.0 * spot * spot * 0.25));
luma *= mix(1.0, beam * 1.12, uHoles.w * 2.2);
luma = min(luma * uBeam.z + halo * mix(0.08, 0.16, snowing), 1.5) * uBeam.w;
vec3 tube = vec3(0.07, 0.075, 0.074);
vec3 phosphor = vec3(0.95, 0.96, 0.97);
vec3 screen = mix(tube, phosphor, clamp(luma, 0.0, 1.0)) + phosphor * max(luma - 1.0, 0.0);
float rim = smoothstep(0.0, min(glassExtent.x, glassExtent.y) * 0.34, -glassEdge);
screen *= mix(0.66, 1.0, rim);
vec2 pane = (local - vec2(-0.48, -0.55)) * vec2(2.2, 3.8);
float window = exp(-pow(dot(pane, pane), 1.6)) * 0.085;
float darkness = 1.0 - clamp(luma, 0.0, 1.0);
screen += vec3(window * (0.3 + 0.7 * darkness));
float lip = exp(glassEdge / 1.8) * smoothstep(0.2, -0.95, dot(local, light)) * 0.22;
screen += vec3(lip * inGlass);
float floorGlow = exp(-pow((local.y - 0.82) / 0.12, 2.0)) * 0.025 * (0.4 + darkness);
screen += vec3(floorGlow);
vec2 across = (point - stage * 0.5) / stage;
float lightness = dot(across, -light);
float peel = (valueNoise(point * 0.55) - 0.5) * 0.018 + (valueNoise(point * 2.1) - 0.5) * 0.008;
vec3 cabinet = uBody.rgb * (1.0 + 0.08 * lightness + peel);
float streak = dot(across, vec2(0.62, 0.78)) + 0.18;
float softbox = exp(-streak * streak / 0.012) * smoothstep(0.55, 0.15, length(across + vec2(0.18, 0.3)));
cabinet += vec3(mix(0.05, 0.14, night) * softbox) * (0.6 + 0.4 * (1.0 - peel * 30.0));
float fromEdge = min(min(point.x, stage.x - point.x), min(point.y, stage.y - point.y));
float edgeTurn = 1.0 - smoothstep(0.0, 6.0 * assembled, fromEdge);
float edgeFacing = (point.x < stage.x * 0.5 || point.y < stage.y * 0.5) ? 0.5 : -0.5;
cabinet *= 1.0 + edgeTurn * edgeFacing * 0.14;
cabinet += vec3(exp(-pow(fromEdge - 1.5, 2.0)) * 0.08 * max(edgeFacing, 0.0) * assembled);
float deckTop = stage.y - uScreen.z;
float inDeck = smoothstep(deckTop - 0.5, deckTop + 0.5, point.y);
float brushed =
(valueNoise(vec2(point.x * 0.012, point.y * 1.3)) - 0.5) * 0.05 +
(hash(vec2(floor(point.y), 3.0)) - 0.5) * 0.025;
float sheen = exp(-pow((point.x / stage.x - 0.32) / 0.22, 2.0)) * 0.06;
vec3 deck = uMetal.rgb * (1.0 + brushed + 0.05 * lightness + sheen);
float seam = point.y - deckTop;
deck *= 1.0 - exp(-seam * seam / 1.2) * 0.45;
deck *= 1.0 + exp(-(seam - 2.0) * (seam - 2.0)) * 0.12;
vec4 grille = uGrille;
float inGrille = step(grille.x, point.x) * step(point.x, grille.x + grille.z) *
step(grille.y, point.y) * step(point.y, grille.y + grille.w);
float pitch = uHoles.y;
float row = floor((point.y - grille.y) / (pitch * 0.866));
float stagger = fract(row * 0.5) > 0.25 ? pitch * 0.5 : 0.0;
vec2 hole = vec2(
fract((point.x - grille.x - stagger) / pitch) - 0.5,
fract((point.y - grille.y) / (pitch * 0.866)) - 0.5
) * vec2(pitch, pitch * 0.866);
float holeDistance = length(hole) - uHoles.x;
float drilled = (1.0 - smoothstep(-0.6, 0.6, holeDistance)) * inGrille;
float wall = smoothstep(0.0, -uHoles.x, hole.y) * 0.25;
deck = mix(deck, uMetal.rgb * (0.12 + wall), drilled);
cabinet = mix(cabinet, deck, inDeck);
float into = -opening;
float inChamfer = (1.0 - smoothstep(chamfer - 0.75, chamfer + 0.75, into)) * inOpening;
float inBezel = (1.0 - smoothstep(chamfer + bezel - 0.75, chamfer + bezel + 0.75, into)) * inOpening * (1.0 - inChamfer);
vec2 toward = normalize(-offset / extent + vec2(1e-5));
float facing = dot(toward, -light);
vec3 chamferWall = uBody.rgb * (0.78 + 0.34 * facing) * (0.9 + 0.1 * into / max(chamfer, 1.0));
float ringAngle = atan(offset.y / extent.y, offset.x / extent.x);
float spun = (hash(vec2(floor(ringAngle * 260.0), floor(into))) - 0.5) * 0.06;
float onRing = clamp((into - chamfer) / max(bezel, 1.0), 0.0, 1.0);
float bevel = 0.6 + 0.4 * facing * (1.0 - 2.0 * onRing);
vec3 ring = uMetal.rgb * (0.82 + 0.3 * bevel + spun) + vec3(0.25 * pow(max(facing, 0.0), 6.0) * (1.0 - onRing));
vec3 mask = vec3(0.04) * (1.0 + 0.4 * facing * smoothstep(chamfer + bezel, chamfer + bezel + 3.0, into));
vec3 color = cabinet;
color = mix(color, mask, inOpening);
color = mix(color, ring, inBezel);
color = mix(color, chamferWall, inChamfer);
color = mix(color, screen, inGlass);
fragColor = vec4(clamp(color, vec3(0.0), vec3(1.0)), 1.0);
}`;export{e as default};