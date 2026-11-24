var e=`#version 300 es
precision highp float;
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
uniform highp sampler2D uSmall;
uniform highp sampler2D uLarge;
uniform vec2 uSmallTexel;
uniform vec2 uExtent;
uniform float uRadius;
uniform float uMix;
out vec4 fragColor;
vec3 tap(vec2 uv) {
return hdrDecode(texture(uSmall, uv));
}
void main() {
vec2 uv = gl_FragCoord.xy / uExtent;
vec2 t = uSmallTexel * uRadius;
vec3 sum = tap(uv + vec2(-1.0, 1.0) * t) + tap(uv + vec2(0.0, 1.0) * t) * 2.0
+ tap(uv + vec2(1.0, 1.0) * t);
sum += tap(uv + vec2(-1.0, 0.0) * t) * 2.0 + tap(uv) * 4.0
+ tap(uv + vec2(1.0, 0.0) * t) * 2.0;
sum += tap(uv + vec2(-1.0, -1.0) * t) + tap(uv + vec2(0.0, -1.0) * t) * 2.0
+ tap(uv + vec2(1.0, -1.0) * t);
fragColor = hdrEncode(mix(hdrDecode(texture(uLarge, uv)), sum * 0.0625, uMix), 1.0);
}`;export{e as default};