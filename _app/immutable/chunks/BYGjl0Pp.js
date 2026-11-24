var e=`const HDR_RANGE: f32 = 24.0;
fn hdrDecode(texel: vec4f) -> vec3f {
return texel.rgb * texel.rgb * HDR_RANGE;
}
fn hdrEncode(color: vec3f, alpha: f32) -> vec4f {
return vec4f(sqrt(clamp(color, vec3f(0.0), vec3f(HDR_RANGE)) / HDR_RANGE), alpha);
}
fn tap(at: vec2f) -> vec3f {
let texel = textureSampleLevel(image, smp, at, 0.0);
let color = hdrDecode(texel);
let eligible = mix(1.0, texel.a, u.extract);
let luma = max(color.r, max(color.g, color.b));
return color * mix(1.0, smoothstep(0.10, 0.62, luma), u.extract) * eligible;
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let t = u.texel;
let at = (in.position.xy) * t * 2.0;
let center = tap(at);
let inner = tap(at + vec2f(-1.0, 1.0) * t) + tap(at + vec2f(1.0, 1.0) * t)
+ tap(at + vec2f(-1.0, -1.0) * t) + tap(at + vec2f(1.0, -1.0) * t);
let edge = tap(at + vec2f(0.0, 2.0) * t) + tap(at + vec2f(0.0, -2.0) * t)
+ tap(at + vec2f(-2.0, 0.0) * t) + tap(at + vec2f(2.0, 0.0) * t);
let corner = tap(at + vec2f(-2.0, 2.0) * t) + tap(at + vec2f(2.0, 2.0) * t)
+ tap(at + vec2f(-2.0, -2.0) * t) + tap(at + vec2f(2.0, -2.0) * t);
return hdrEncode(center * 0.125 + inner * 0.125 + edge * 0.0625 + corner * 0.03125, 1.0);
}`;export{e as default};