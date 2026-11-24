var e=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
layout(location = 0) out vec4 fragColor;
void main() {
vec2 offset = uTexel;
vec3 sum = texture(uSource, vUv + offset * vec2(-1.0, -1.0)).rgb;
sum += texture(uSource, vUv + offset * vec2(1.0, -1.0)).rgb;
sum += texture(uSource, vUv + offset * vec2(-1.0, 1.0)).rgb;
sum += texture(uSource, vUv + offset * vec2(1.0, 1.0)).rgb;
fragColor = vec4(sum * 0.25, 1.0);
}`;export{e as default};