var e=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uSeeds;
uniform sampler2D uPrint;
uniform vec4 uFrame;
uniform vec4 uGust;
uniform vec4 uGround;
uniform vec4 uInk;
void main() {
vec2 stage = uFrame.xy;
vec2 point = vUv * vec2(uFrame.x, uFrame.z);
vec4 marks = textureLod(uSeeds, vUv, 0.0);
vec4 printed = textureLod(uPrint, point / stage, 0.0);
float along = (uGust.w > 0.0 ? point.x : stage.x - point.x) + point.y * uGust.z;
float behind = 1.0 - smoothstep(uGust.x - uGust.y, uGust.x, along);
float hand = printed.r * uInk.w * (1.0 - behind);
float inCast = printed.g * behind;
float seeded = 1.0 - exp(-marks.x);
float density = clamp(1.0 - (1.0 - seeded) * (1.0 - hand) * (1.0 - inCast), 0.0, 1.0);
float cover = clamp(density + marks.y * 0.35, 0.0, 1.0);
float ground = uGround.a;
float alpha = cover + ground * (1.0 - cover);
vec3 color = uInk.rgb * density + uGround.rgb * ground * (1.0 - density);
color += uInk.rgb * marks.y * 0.35;
fragColor = vec4(color, max(alpha, density));
}`;export{e as default};