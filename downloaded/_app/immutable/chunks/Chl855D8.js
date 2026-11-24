var e=`#version 300 es
precision highp float;
uniform vec4 uRegion;
uniform vec4 uMedium;
in vec2 vLattice;
in float vCarried;
in float vThrough;
flat in int vBand;
out vec4 fragColor;
void main() {
vec2 dx = dFdx(vLattice);
vec2 dy = dFdy(vLattice);
float squeezed = abs(dx.x * dy.y - dx.y * dy.x);
if (vThrough < 0.9999) discard;
vec4 bands = vec4(0.0);
bands[vBand] = min(vCarried * squeezed * uMedium.z, uRegion.w);
fragColor = bands;
}`;export{e as default};