var e=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uDirection;
uniform float uRadius;
in vec2 vUv;
layout(location = 0) out vec4 fragColor;
const float WEIGHT_CENTER = 0.2270270270;
const vec2 WEIGHTS = vec2(0.3162162162, 0.0702702703);
const vec2 OFFSETS = vec2(1.3846153846, 3.2307692308);
void main() {
vec2 step = uDirection * uRadius;
vec3 sum = texture(uSource, vUv).rgb * WEIGHT_CENTER;
sum += texture(uSource, vUv + step * OFFSETS.x).rgb * WEIGHTS.x;
sum += texture(uSource, vUv - step * OFFSETS.x).rgb * WEIGHTS.x;
sum += texture(uSource, vUv + step * OFFSETS.y).rgb * WEIGHTS.y;
sum += texture(uSource, vUv - step * OFFSETS.y).rgb * WEIGHTS.y;
fragColor = vec4(sum, 1.0);
}`;export{e as default};