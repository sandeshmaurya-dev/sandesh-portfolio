var e=`fn bayerRank(cell: vec2i) -> f32 {
let c = cell & vec2i(7);
let d = c.x ^ c.y;
let index = (((((d & 1) << 1u) | (c.y & 1)) << 4u) |
(((((d >> 1u) & 1) << 1u) | ((c.y >> 1u) & 1)) << 2u) |
((((d >> 2u) & 1) << 1u) | ((c.y >> 2u) & 1)));
return (f32(index) + 0.5) / 64.0;
}
fn inkOf(reading: texture_2d<f32>, side: f32, sampled: vec2f) -> i32 {
let uv = (sampled + 0.5) / side;
return i32(floor(textureSampleLevel(reading, smp, uv, 0.0).r * 2.55 + 0.5));
}
fn rounded(x: f32) -> f32 {
return floor(x + 0.5);
}
fn cellOf(pixel: f32, count: f32, pixels: f32) -> f32 {
let size = pixels / count;
var cell = floor((pixel + 0.5) / size);
if (rounded(cell * size) > pixel) {
cell -= 1.0;
} else if (rounded((cell + 1.0) * size) <= pixel) {
cell += 1.0;
}
return clamp(cell, 0.0, count - 1.0);
}
fn inSquare(pixel: vec2f, cell: vec2f, count: f32, pixels: f32, gutter: f32) -> bool {
let size = pixels / count;
let inset = size * gutter;
let start = vec2f(rounded(cell.x * size), rounded(cell.y * size));
let to = vec2f(rounded((cell.x + 1.0) * size - inset), rounded((cell.y + 1.0) * size - inset));
let extent = max(to - start, vec2f(1.0));
return all(pixel < start + extent);
}
fn inked(ink: i32) -> vec4f {
if (ink == 1) {
return vec4f(u.impression.rgb, 1.0);
}
if (ink == 2) {
return vec4f(u.ink.rgb, 1.0);
}
return vec4f(0.0);
}
fn toned(value: f32, dark: vec3f, light: vec3f, tint: vec3f) -> vec3f {
let lean = u.grade.x * max(0.0, 1.0 - abs(value - u.grade.y) / u.grade.z);
let ramp = dark + (light - dark) * value;
return floor(255.0 * (ramp + (tint - ramp) * lean * value) + 0.5) / 255.0;
}
@fragment fn main(in: Varyings) -> @location(0) vec4f {
let pixels = u.frame.x;
let finest = u.frame.y;
let pixel = floor(in.uv * pixels);
let reach = u.print.y;
let loupe = u.print.z;
if (reach > 0.0 || loupe > 0.0) {
let grain = floor((pixel + 0.5) * finest / pixels);
let at = (grain + 0.5) / finest;
let band = u.print.w;
let inPerson = select(0.0, clamp((reach - distance(at, u.attention.xy)) / band, 0.0, 1.0), reach > 0.0);
let held = select(0.0, clamp((loupe - distance(at, u.attention.zw)) / (band * 0.6), 0.0, 1.0), loupe > 0.0);
if (max(inPerson, held) > bayerRank(vec2i(grain))) {
let texel = textureSampleLevel(photograph, smp, (pixel + 0.5) / pixels, u.frame.w);
let matte = texel.a;
let value = select(0.0, clamp(texel.r / matte, 0.0, 1.0), matte > 0.0);
let paper = toned(value, u.paperDark.rgb, u.paperLight.rgb, u.paperTint.rgb);
let night = toned(value, u.nightDark.rgb, u.nightLight.rgb, u.nightTint.rgb);
return vec4f(mix(paper, night, u.frame.z) * matte, matte);
}
}
let coarse = u.levels.x;
let fine = u.levels.y;
let split = u.levels.z;
let doubling = u.levels.w > 0.5;
let gutter = u.print.x;
if (gutter > 0.001) {
let cell = vec2f(cellOf(pixel.x, coarse, pixels), cellOf(pixel.y, coarse, pixels));
let splitting = split > 0.0 && doubling && bayerRank(vec2i(cell)) < split;
if (!splitting) {
if (!inSquare(pixel, cell, coarse, pixels, gutter)) {
return vec4f(0.0);
}
return inked(inkOf(coarseInks, coarse, cell));
}
let part = vec2f(cellOf(pixel.x, fine, pixels), cellOf(pixel.y, fine, pixels));
if (!inSquare(pixel, part, fine, pixels, gutter)) {
return vec4f(0.0);
}
return inked(inkOf(fineInks, fine, part));
}
let shown = select(coarse, fine, split > 0.0);
let sampled = floor((pixel + 0.5) * shown / pixels);
if (shown == coarse) {
return inked(inkOf(coarseInks, coarse, sampled));
}
let parent = floor(sampled * coarse / shown);
let rank = select(bayerRank(vec2i(sampled)), bayerRank(vec2i(parent)), doubling);
if (rank < split) {
return inked(inkOf(fineInks, fine, sampled));
}
return inked(inkOf(coarseInks, coarse, parent));
}`;export{e as default};