var e=`#version 300 es
precision highp float;
precision highp int;
#ifndef BAYER_GLSL
#define BAYER_GLSL
float bayerRank( ivec2 cell ) {
ivec2 c = cell & 7;
int d = c.x ^ c.y;
int index =
( ( ( d & 1 ) << 1 ) | ( c.y & 1 ) ) << 4 |
( ( ( d >> 1 & 1 ) << 1 ) | ( c.y >> 1 & 1 ) ) << 2 |
( ( ( d >> 2 & 1 ) << 1 ) | ( c.y >> 2 & 1 ) );
return ( float( index ) + 0.5 ) / 64.0;
}
#endif
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uCoarseInks;
uniform sampler2D uFineInks;
uniform sampler2D uPhotograph;
uniform vec4 uFrame;
uniform vec4 uLevels;
uniform vec4 uPrint;
uniform vec4 uAttention;
uniform vec4 uGrade;
uniform vec4 uImpression;
uniform vec4 uInk;
uniform vec4 uPaperDark;
uniform vec4 uPaperLight;
uniform vec4 uPaperTint;
uniform vec4 uNightDark;
uniform vec4 uNightLight;
uniform vec4 uNightTint;
int inkOf(sampler2D reading, float side, vec2 sampled) {
vec2 uv = (sampled + 0.5) / side;
return int(floor(textureLod(reading, uv, 0.0).r * 2.55 + 0.5));
}
float rounded(float x) {
return floor(x + 0.5);
}
float cellOf(float pixel, float count, float pixels) {
float size = pixels / count;
float cell = floor((pixel + 0.5) / size);
if (rounded(cell * size) > pixel) cell -= 1.0;
else if (rounded((cell + 1.0) * size) <= pixel) cell += 1.0;
return clamp(cell, 0.0, count - 1.0);
}
bool inSquare(vec2 pixel, vec2 cell, float count, float pixels, float gutter) {
float size = pixels / count;
float inset = size * gutter;
vec2 start = vec2(rounded(cell.x * size), rounded(cell.y * size));
vec2 to = vec2(rounded((cell.x + 1.0) * size - inset), rounded((cell.y + 1.0) * size - inset));
vec2 extent = max(to - start, vec2(1.0));
return all(lessThan(pixel, start + extent));
}
vec4 inked(int ink) {
if (ink == 1) return vec4(uImpression.rgb, 1.0);
if (ink == 2) return vec4(uInk.rgb, 1.0);
return vec4(0.0);
}
vec3 toned(float value, vec3 dark, vec3 light, vec3 tint) {
float lean = uGrade.x * max(0.0, 1.0 - abs(value - uGrade.y) / uGrade.z);
vec3 ramp = dark + (light - dark) * value;
return floor(255.0 * (ramp + (tint - ramp) * lean * value) + 0.5) / 255.0;
}
void main() {
float pixels = uFrame.x;
float finest = uFrame.y;
vec2 pixel = floor(vUv * pixels);
float reach = uPrint.y;
float loupe = uPrint.z;
if (reach > 0.0 || loupe > 0.0) {
vec2 grain = floor((pixel + 0.5) * finest / pixels);
vec2 at = (grain + 0.5) / finest;
float band = uPrint.w;
float inPerson = reach > 0.0 ? clamp((reach - distance(at, uAttention.xy)) / band, 0.0, 1.0) : 0.0;
float held = loupe > 0.0 ? clamp((loupe - distance(at, uAttention.zw)) / (band * 0.6), 0.0, 1.0) : 0.0;
if (max(inPerson, held) > bayerRank(ivec2(grain))) {
vec4 texel = textureLod(uPhotograph, (pixel + 0.5) / pixels, uFrame.w);
float matte = texel.a;
float value = matte > 0.0 ? clamp(texel.r / matte, 0.0, 1.0) : 0.0;
vec3 paper = toned(value, uPaperDark.rgb, uPaperLight.rgb, uPaperTint.rgb);
vec3 night = toned(value, uNightDark.rgb, uNightLight.rgb, uNightTint.rgb);
fragColor = vec4(mix(paper, night, uFrame.z) * matte, matte);
return;
}
}
float coarse = uLevels.x;
float fine = uLevels.y;
float split = uLevels.z;
bool doubling = uLevels.w > 0.5;
float gutter = uPrint.x;
if (gutter > 0.001) {
vec2 cell = vec2(cellOf(pixel.x, coarse, pixels), cellOf(pixel.y, coarse, pixels));
bool splitting = split > 0.0 && doubling && bayerRank(ivec2(cell)) < split;
if (!splitting) {
fragColor = inSquare(pixel, cell, coarse, pixels, gutter)
? inked(inkOf(uCoarseInks, coarse, cell))
: vec4(0.0);
return;
}
vec2 part = vec2(cellOf(pixel.x, fine, pixels), cellOf(pixel.y, fine, pixels));
fragColor = inSquare(pixel, part, fine, pixels, gutter) ? inked(inkOf(uFineInks, fine, part)) : vec4(0.0);
return;
}
float shown = split > 0.0 ? fine : coarse;
vec2 sampled = floor((pixel + 0.5) * shown / pixels);
int ink;
if (shown == coarse) {
ink = inkOf(uCoarseInks, coarse, sampled);
} else {
vec2 parent = floor(sampled * coarse / shown);
float rank = doubling ? bayerRank(ivec2(parent)) : bayerRank(ivec2(sampled));
ink = rank < split ? inkOf(uFineInks, fine, sampled) : inkOf(uCoarseInks, coarse, parent);
}
fragColor = inked(ink);
}`;export{e as default};