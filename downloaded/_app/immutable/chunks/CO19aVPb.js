var e=`const HDR_RANGE: f32 = 24.0;
fn hdrDecode(texel: vec4f) -> vec3f {
return texel.rgb * texel.rgb * HDR_RANGE;
}
fn hdrEncode(color: vec3f, alpha: f32) -> vec4f {
return vec4f(sqrt(clamp(color, vec3f(0.0), vec3f(HDR_RANGE)) / HDR_RANGE), alpha);
}
fn tap(at: vec2f) -> vec3f {
return hdrDecode(textureSampleLevel(small, smp, at, 0.0));
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let at = in.position.xy / u.extent;
let t = u.smallTexel * u.radius;
var sum = tap(at + vec2f(-1.0, 1.0) * t) + tap(at + vec2f(0.0, 1.0) * t) * 2.0
+ tap(at + vec2f(1.0, 1.0) * t);
sum += tap(at + vec2f(-1.0, 0.0) * t) * 2.0 + tap(at) * 4.0
+ tap(at + vec2f(1.0, 0.0) * t) * 2.0;
sum += tap(at + vec2f(-1.0, -1.0) * t) + tap(at + vec2f(0.0, -1.0) * t) * 2.0
+ tap(at + vec2f(1.0, -1.0) * t);
let level = hdrDecode(textureSampleLevel(large, smp, at, 0.0));
return hdrEncode(mix(level, sum * 0.0625, u.mix), 1.0);
}`;export{e as default};