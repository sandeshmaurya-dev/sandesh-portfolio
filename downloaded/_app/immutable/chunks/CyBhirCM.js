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
uniform highp sampler2D uImage;
uniform vec2 uTexel;
uniform float uExtract;
out vec4 fragColor;
vec3 tap(vec2 uv) {
vec4 texel = texture(uImage, uv);
vec3 color = hdrDecode(texel);
float eligible = mix(1.0, texel.a, uExtract);
float luma = max(color.r, max(color.g, color.b));
return color * mix(1.0, smoothstep(0.10, 0.62, luma), uExtract) * eligible;
}
void main() {
vec2 uv = gl_FragCoord.xy * uTexel * 2.0;
vec2 t = uTexel;
vec3 center = tap(uv);
vec3 inner = tap(uv + vec2(-1.0, 1.0) * t) + tap(uv + vec2(1.0, 1.0) * t)
+ tap(uv + vec2(-1.0, -1.0) * t) + tap(uv + vec2(1.0, -1.0) * t);
vec3 edge = tap(uv + vec2(0.0, 2.0) * t) + tap(uv + vec2(0.0, -2.0) * t)
+ tap(uv + vec2(-2.0, 0.0) * t) + tap(uv + vec2(2.0, 0.0) * t);
vec3 corner = tap(uv + vec2(-2.0, 2.0) * t) + tap(uv + vec2(2.0, 2.0) * t)
+ tap(uv + vec2(-2.0, -2.0) * t) + tap(uv + vec2(2.0, -2.0) * t);
fragColor = hdrEncode(center * 0.125 + inner * 0.125 + edge * 0.0625 + corner * 0.03125, 1.0);
}`;export{e as default};