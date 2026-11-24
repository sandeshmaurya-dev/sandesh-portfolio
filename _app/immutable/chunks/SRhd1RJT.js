var e=`override AXIS: u32 = 0u;
const CENTER = 0.2270270270;
const NEAR = vec2f(1.3846153846, 0.3162162162);
const FAR = vec2f(3.2307692308, 0.0702702703);
fn tap(uv: vec2f) -> vec3<half> {
return vec3<half>(textureSampleLevel(source, smp, uv, 0.0).rgb);
}
fn pair(uv: vec2f, step: vec2f, taps: vec2f) -> vec3<half> {
let offset = step * taps.x;
return (tap(uv + offset) + tap(uv - offset)) * half(taps.y);
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let texel = 1.0 / vec2f(textureDimensions(source));
let step = select(vec2f(0.0, texel.y), vec2f(texel.x, 0.0), AXIS == 0u) * u.radius;
let sum = tap(in.uv) * half(CENTER) + pair(in.uv, step, NEAR) + pair(in.uv, step, FAR);
return vec4f(vec3f(sum), 1.0);
}`;export{e as default};