var e=`fn tap(uv: vec2f) -> vec3<half> {
return vec3<half>(textureSampleLevel(source, smp, uv, 0.0).rgb);
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let texel = 1.0 / vec2f(textureDimensions(source));
let sum = tap(in.uv - texel) + tap(in.uv + vec2f(texel.x, -texel.y)) +
tap(in.uv + vec2f(-texel.x, texel.y)) + tap(in.uv + texel);
return vec4f(vec3f(sum * half(0.25)), 1.0);
}`;export{e as default};