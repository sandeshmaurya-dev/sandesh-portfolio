import{c as e}from"./CAy1iyL3.js";import{i as t,l as n}from"./B2qhPrH1.js";import{a as r,i,n as a,t as o}from"./CHqItGKm.js";import{a as s,o as c,t as l,w as u}from"./CFsHJiG0.js";import{n as d,r as f}from"./tZjf1JQz.js";import{a as p,n as m,t as h}from"./DshTci0C.js";import{t as g}from"./Cwkimsmu.js";import{t as _}from"./Kt4jKIWV.js";import{i as v}from"./CWMWuTl2.js";import{a as y,s as b,t as x}from"./ZkLX3LGz.js";import{n as ee}from"./Chcx0Btt.js";import{t as S}from"./DrsOisCf.js";import{t as C}from"./NL_OVwQu.js";import{a as te}from"./BoD1nBb4.js";import{t as ne}from"./D-FBN6o0.js";import{$ as re,B as ie,D as ae,Et as w,F as oe,G as T,I as E,K as D,L as O,M as se,P as ce,R as le,S as k,St as ue,T as A,Tt as j,U as de,W as M,X as N,Z as fe,_t as pe,b as me,ct as P,d as F,dt as he,f as ge,ft as _e,g as I,h as ve,i as ye,j as be,k as L,m as xe,mt as R,n as Se,p as z,pt as Ce,rt as we,st as Te,t as Ee,tt as De,u as Oe,vt as ke,wt as B,xt as Ae,y as V,yt as je,z as Me}from"./NC7Q2KaD.js";import{t as Ne}from"./CthXweeg.js";import{n as Pe,r as Fe,t as Ie}from"./D7TpRPw3.js";import{c as Le,d as Re,f as ze,i as Be,l as Ve,n as He,t as Ue,u as We}from"./B5iCkQG-.js";var H=2.5,Ge=[-1,.58872,.36],Ke=Math.PI*2,qe=2.16,Je=2.42,Ye=.96,Xe=.045,U=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function W(e,t,n=0){let r=Math.imul(Math.floor(e)|0,668265261)^Math.imul(Math.floor(t)|0,374761393)^Math.imul(Math.floor(n)|0,1640531527);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),((r^r>>>16)>>>0)/4294967296}function G(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e=>e*e*e*(e*(e*6-15)+10),s=o(e-r),c=o(t-i),l=o(n-a),u=(e,t,n)=>e+(t-e)*n,d=e=>u(u(W(r,i,e),W(r+1,i,e),s),u(W(r,i+1,e),W(r+1,i+1,e),s),c);return u(d(a),d(a+1),l)}function Ze(e,t,n=0){return G(e,t,n)*.55+G(e*2.03+17.1,t*2.03+3.7,n*2.03)*.3+G(e*4.11+5.3,t*4.11+29.9,n*4.11)*.15}function Qe(e){let t=qe/1.72;return qe+t*.095*Math.sin(3*e+.7)+t*.055*Math.sin(7*e-1.2)+t*.024*Math.sin(13*e+2.1)+.012*Math.sin(23*e+.4)}var $e=class{#e;constructor(e){this.#e=e}ground(e,t){return this.#e.at(e,t)}#t(e,t){let n=U(.925,1,Math.hypot(e,t)/Qe(Math.atan2(t,e)));return Xe*n*n}crown(e,t){return this.#e.at(e,t)-this.#t(e,t)}inside(e,t,n=0){return Math.hypot(e,t)<=Qe(Math.atan2(t,e))-n}rim(e){let t=Qe(e),n=Math.cos(e)*t,r=Math.sin(e)*t;return{x:n,y:this.crown(n,r),z:r,depth:0}}wall(e,t){let n=Qe(e),r=Math.cos(e),i=Math.sin(e),a=this.crown(r*n,i*n),o=t*(a+Ye),s=Math.max(0,1-t**1.7)**.62,c=(G(r*2.8+4,t*4.2,i*2.8)-.5)*.5+(G(r*11+1.3,t*15,i*11)-.5)*.08,l=Math.sin(t*21+Math.sin(e*4)*3)*.022,u=-.17*Math.exp(-(((t-.56)/.24)**2))*(.5+.5*Math.sin(e*3+1.2))**4,d=(c+l+u)*Math.sin(Math.PI*t)*U(.02,.16,o),f=.6+.8*G(r*9+3,i*9+7),p=o/.022*Math.exp(1-o/.022),m=.016*f*p-.022*f*U(.045,.085,o)*(1-U(.1,.3,o)),h=U(.05,.16,o)*(1-U(.86,1,t)),g=(1-Math.abs(2*G(r*16+3,o*2.2,i*16+5)-1))**4,_=G(r*38+1.7,o*26,i*38+2.9)-.5,v=G(r*7+9.1,o*5,i*7+4.4)-.5,y=(-.024*g+.018*_+.03*v)*h,b=Math.max(0,(n+m+d+y)*s),x=r*b+.18*t*t,ee=i*b-.14*t*t,S=(G(r*4+8,t*7,i*4)-.5)*.2*Math.sin(Math.PI*t),C=(G(r*26+5.5,t*9,i*26+1.1)-.5)*.045*U(.45,.8,t)*(1-U(.93,1,t));return{x,y:a-o+S*U(.05,.25,o)+C,z:ee,depth:o}}wallAtDepth(e,t){let n=Qe(e),r=this.crown(Math.cos(e)*n,Math.sin(e)*n);return this.wall(e,Math.min(1,Math.max(0,t/(r+Ye))))}},et=new j(-.6,.62,-.5).normalize(),tt=new j(.48,.7,.38).normalize(),nt=new j(.42,.3,.86).normalize(),rt={sun:{l:.95,c:.062,h:74},sunStrength:2.6,sky:{l:.82,c:.034,h:236},skyStrength:.98,bounce:{l:.65,c:.045,h:84},bounceStrength:.5,fill:{l:.92,c:.045,h:80},fillStrength:.5,lantern:0,exposure:1},it={sun:{l:.86,c:.065,h:240},sunStrength:.8,sky:{l:.58,c:.05,h:249},skyStrength:.7,bounce:{l:.47,c:.035,h:245},bounceStrength:.42,fill:{l:.7,c:.06,h:248},fillStrength:.22,lantern:1,exposure:1.06},at={l:.84,c:.13,h:64},ot=.75,st=(e,t,n)=>{let[r,i,a]=u(e);return n.setRGB(r*t,i*t,a*t)},ct=class{uniforms={uSunDir:{value:new j},uSunColor:{value:new k},uSkyColor:{value:new k},uBounceColor:{value:new k},uFillDir:{value:nt.clone()},uFillColor:{value:new k},uLanternPos:{value:new j(Ge[0],Ge[1]+.1,Ge[2])},uLanternColor:{value:new k},uNight:{value:0}};#e={sun:new k,sky:new k,bounce:new k,fill:new k};#t={sun:new k,sky:new k,bounce:new k,fill:new k};#n=st(at,ot,new k);#r=-1;#i=-1;exposure=1;flameColor=new k;constructor(){for(let[e,t]of[[rt,this.#e],[it,this.#t]])st(e.sun,e.sunStrength,t.sun),st(e.sky,e.skyStrength,t.sky),st(e.bounce,e.bounceStrength,t.bounce),st(e.fill,e.fillStrength,t.fill);this.set(0,0)}set(e,t){if(e===this.#r&&t===this.#i)return!1;this.#r=e,this.#i=t;let n=this.uniforms;n.uSunDir.value.copy(et).lerp(tt,e).normalize(),n.uSunColor.value.copy(this.#e.sun).lerp(this.#t.sun,e),n.uSkyColor.value.copy(this.#e.sky).lerp(this.#t.sky,e),n.uBounceColor.value.copy(this.#e.bounce).lerp(this.#t.bounce,e),n.uFillColor.value.copy(this.#e.fill).lerp(this.#t.fill,e);let r=(rt.lantern+(it.lantern-rt.lantern)*e)*t;return n.uLanternColor.value.copy(this.#n).multiplyScalar(r*r),this.flameColor.copy(this.#n).multiplyScalar(t*(.35+.65*e*e)),n.uNight.value=e,this.exposure=rt.exposure+(it.exposure-rt.exposure)*e,!0}},lt=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uBounceColor;
uniform vec3 uFillDir;
uniform vec3 uFillColor;
uniform vec3 uLanternPos;
uniform vec3 uLanternColor;
uniform float uNight;
vec3 hemisphere(vec3 n) {
return mix(uBounceColor, uSkyColor, n.y * 0.5 + 0.5);
}
vec3 fill(vec3 n) {
return uFillColor * max((dot(n, uFillDir) + 0.25) / 1.25, 0.0);
}
vec3 lantern(vec3 p, vec3 n) {
vec3 d = uLanternPos - p;
float r2 = max(dot(d, d), 1e-5);
float wrap = max((dot(n, d * inversesqrt(r2)) + 0.5) / 1.5, 0.0);
float falloff = pow(clamp(1.0 - r2 / 6.0, 0.0, 1.0), 2.0);
return uLanternColor * wrap * falloff / (r2 + 0.04);
}
`,ut=3.4,dt=2.6,ft=[0,.2],pt=[.2,.27],mt=[.22,.34],ht=[.27,1],gt=[.48,1],_t=.75,vt=2.2,yt=.45,bt={amplitude:.14,rate:7.5},xt={rest:.2,stirred:.3,alive:.45},K=`
uniform vec4 uDevelop;
uniform float uDeveloped;
uniform float uLanded;
float developedAt(vec3 world) {
float reach = length(world.xz - uDevelop.xy);
return 1.0 - smoothstep(uDevelop.z - uDevelop.w, uDevelop.z, reach);
}
float floweredAt(vec3 world) {
float reach = length(world.xz - uDevelop.xy) + ${yt.toFixed(2)};
return 1.0 - smoothstep(uDevelop.z - uDevelop.w, uDevelop.z, reach);
}
vec3 developed(vec3 color, float amount) {
return mix(vec3(dot(color, vec3(0.2126, 0.7152, 0.0722))), color, amount);
}
`,St=class{uniforms={uDevelop:{value:new w(Ge[0],Ge[2],-.75,_t)},uDeveloped:{value:0},uLanded:{value:0}};#e=0;#t=3;#n={lift:0,swing:0,present:!1,moving:!1};get progress(){return this.#e}get resting(){return this.#e===0}get flowering(){return this.#e>ht[0]}get flame(){return s(mt[0],mt[1],this.#e)}wind(e){let t=s(gt[0],gt[1],this.#e);return xt.rest+(xt.stirred-xt.rest)*l(e)*(1-t)+(xt.alive-xt.rest)*t}aim(e){this.#e<=ft[0]&&(this.#t=e)}advance(e,t,n){let r=+!!e;if(this.#e===r)return!1;this.#e=n?r:e?Math.min(this.#e+t/ut,1):Math.max(this.#e-t/dt,0);let i=this.#e,a=-.75+6.55*(1-(1-l((i-ht[0])/(ht[1]-ht[0])))**vt),o=this.uniforms;return o.uDevelop.value.z=i>=1?1e4:a,o.uDeveloped.value=s(gt[0],gt[1],i),o.uLanded.value=s(pt[0]-.03,pt[0],i),!0}lantern(){let e=this.#n,t=this.#e;if(t<=ft[0])return e.lift=e.swing=0,e.present=e.moving=!1,e;let n=l((t-ft[0])/(ft[1]-ft[0])),r=this.#t*(1-n*n),i=l((t-pt[0])/(pt[1]-pt[0])),a=i>0&&i<1?-.012*Math.sin(Math.PI*i)*(1-i):0,o=bt.amplitude*Math.sin(n*bt.rate)*(1-s(.6,1,n))+.04*Math.sin(i*Math.PI*2)*(1-i)*(i>0);return e.lift=r+a,e.swing=o,e.present=!0,e.moving=t<pt[1],e}patch(e){let t=e;if(t.userData.developed)return;t.userData.developed=!0;let n=t.onBeforeCompile.bind(t),r=t.customProgramCacheKey.bind(t);t.onBeforeCompile=(e,t)=>{n(e,t),Object.assign(e.uniforms,this.uniforms),e.vertexShader=`varying vec3 vDevelopWorld;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
					{
						vec4 developPosition = vec4(transformed, 1.0);
						#ifdef USE_INSTANCING
							developPosition = instanceMatrix * developPosition;
						#endif
						vDevelopWorld = (modelMatrix * developPosition).xyz;
					}`),e.fragmentShader=`varying vec3 vDevelopWorld;
`+K+e.fragmentShader.replace(`#include <tonemapping_fragment>`,`gl_FragColor.rgb = developed(gl_FragColor.rgb, developedAt(vDevelopWorld));
					#include <tonemapping_fragment>`)},t.customProgramCacheKey=()=>`${r()}|developed`}};function Ct(e){return Math.min(1,Math.max(At,(Ot*e/kt)**2))}function wt(e){return Math.min(1,Math.max(Mt,Math.sqrt(e)))}var Tt={Blade:0,Thatch:1,Wisp:2,Fringe:3,Root:4,Stalk:5,Moss:6},Et={Daisy:0,Buttercup:1,CloverLeaf:2,CloverFlower:3,Poppy:4,PoppyBud:5},q={root:{l:.29,c:.045,h:137},body:{l:.48,c:.101,h:136},tip:{l:.65,c:.105,h:120},straw:{l:.68,c:.067,h:88},cool:{l:.49,c:.075,h:153},warm:{l:.55,c:.092,h:116},thatch:{l:.36,c:.075,h:128},fiber:{l:.52,c:.045,h:66},translucent:{l:.68,c:.12,h:115},seed:{l:.56,c:.06,h:70},moss:{l:.44,c:.085,h:142}},J={daisy:{l:.96,c:.012,h:95},blush:{l:.78,c:.075,h:12},gold:{l:.82,c:.155,h:88},buttercup:{l:.86,c:.165,h:96},clover:{l:.44,c:.095,h:140},chevron:{l:.66,c:.05,h:132},cloverFlower:{l:.93,c:.022,h:100},poppy:{l:.63,c:.235,h:32},poppyBase:{l:.4,c:.2,h:22},poppyHeart:{l:.2,c:.07,h:24}},Y=e=>new k(...u(e)),Dt=.13,Ot=.0052,kt=2.3,At=.34,jt=2.9,Mt=.4,Nt=44,Pt=1.25;function Ft(e,t,n){let r=e=>Math.max(1,Math.round(e*t)),i=e=>Math.max(1,Math.round(e*n));return{blades:r(e.blades),thatch:r(e.thatch),wisps:r(e.wisps),fringe:r(e.fringe),roots:r(e.roots),moss:r(e.moss),daisies:i(e.daisies),buttercups:i(e.buttercups),clover:i(e.clover),poppies:e.poppies}}var It=.048;function Lt(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Rt(e=128){let t=Lt(2003398244),n=e=>{let n=new Float32Array(e*e*2);for(let r=0;r<e*e;r+=1){let e=t()*Math.PI*2;n[r*2]=Math.cos(e),n[r*2+1]=Math.sin(e)}return(t,r)=>{let i=t*e,a=r*e,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=(t,r,i,a)=>{let o=((r%e+e)%e*e+(t%e+e)%e)*2;return n[o]*i+n[o+1]*a},d=e=>e*e*e*(e*(e*6-15)+10),f=u(o,s,c,l),p=u(o+1,s,c-1,l),m=u(o,s+1,c,l-1),h=u(o+1,s+1,c-1,l-1);return(f+(p-f)*d(c))*(1-d(l))+(m+(h-m)*d(c))*d(l)}},r=[n(4),n(8)],i=[n(16),n(32)],a=new Uint8Array(e*e*4);for(let t=0;t<e;t+=1)for(let n=0;n<e;n+=1){let o=n/e,s=t/e,c=r[0](o,s)*.7+r[1](o,s)*.3,l=i[0](o,s)*.6+i[1](o,s)*.4,u=(t*e+n)*4;a[u]=Math.round(Math.min(Math.max(c*.9+.5,0),1)*255),a[u+1]=Math.round(Math.min(Math.max(l*.9+.5,0),1)*255),a[u+2]=0,a[u+3]=255}let o=new A(a,e,e,Te);return o.wrapS=o.wrapT=he,o.magFilter=Me,o.minFilter=ie,o.generateMipmaps=!0,o.needsUpdate=!0,o}var zt=`
uniform float uTime;
uniform sampler2D uWind;
uniform vec2 uWindDir;
uniform float uWindStrength;
struct Stem { vec3 root; vec3 control; vec3 tip; vec3 up; vec3 horizontal; vec3 facing; float gust; };
Stem grow(vec3 root, vec4 shape, vec4 tone, vec4 form) {
float h = shape.x;
#ifdef FLOWERING
h *= floweredAt(root);
#endif
float seed = shape.w;
float kind = form.x;
float droop = form.y;
float stiffness = form.w;
bool hanging = kind > 3.5 && kind < 4.5;
Stem s;
s.root = root;
s.up = hanging ? vec3(0.0, -1.0, 0.0) : vec3(0.0, 1.0, 0.0);
s.facing = vec3(cos(shape.z), 0.0, sin(shape.z));
vec2 flow = uWindDir * uTime;
float gust = texture(uWind, root.xz * 0.23 - flow * 0.11).r;
float flutter = texture(uWind, root.xz * 0.9 - flow * 0.37 + seed).g - 0.5;
gust = smoothstep(0.25, 0.85, gust);
float sway = sin(uTime * (1.7 + seed * 1.3) + seed * 40.0) * 0.5;
float push = uWindStrength * (0.15 + 0.85 * gust) * stiffness;
vec3 windDir = vec3(uWindDir.x, 0.0, uWindDir.y);
vec3 across = vec3(-uWindDir.y, 0.0, uWindDir.x);
vec3 lean = vec3(tone.z, 0.0, tone.w) + s.facing * (0.06 + 0.16 * fract(seed * 7.13));
lean += windDir * push * 0.9 + across * (flutter * 0.2 + sway * 0.05) * (0.3 + push) * stiffness;
float bend = min(length(lean), 1.7);
s.horizontal = bend > 1e-4 ? lean / length(lean) : s.facing;
float rise = max(1.0 - 0.42 * bend - 1.3 * droop, -0.85);
float reach = 0.3 * bend + 0.85 * droop + 0.04;
s.tip = root + normalize(s.up * rise + s.horizontal * reach) * h * (0.97 - 0.22 * droop);
s.control = root + s.up * h * (0.56 + 0.12 * droop) + s.horizontal * h * (0.04 + 0.12 * bend + 0.16 * droop);
s.gust = gust;
return s;
}
vec3 stemAt(Stem s, float t) {
return mix(mix(s.root, s.control, t), mix(s.control, s.tip, t), t);
}
vec3 stemTangent(Stem s, float t) {
return normalize(mix(s.control, s.tip, t) - mix(s.root, s.control, t) + s.up * 1e-4);
}
float canopyOcclusion(vec3 root, float above, float canopy, float t, bool contacted) {
float inCanopy = canopy > 0.0 ? smoothstep(-0.015, canopy * 1.1, above) : 0.55 + 0.45 * t;
float occlusion = mix(0.3, 1.0, pow(inCanopy, 0.8));
vec2 plan = vec2(root.x + uExtent, uExtent - root.z) / (2.0 * uExtent);
vec2 contacts = texture(uContact, plan).rg;
float contact = contacted ? mix(contacts.g, contacts.r, uLanded) : 1.0;
return occlusion * mix(1.0, contact, 1.0 - 0.45 * t);
}
`,X=16,Bt=.5/X,Vt=`
float detailShown(vec2 detail, vec3 cut) {
float at = mix(cut.x, cut.y, detail.y) * (1.0 + cut.z);
return 1.0 - smoothstep(at - cut.z, at, detail.x);
}
`,Ht=`
#include <common>
#include <shadowmap_pars_vertex>
uniform sampler2D uContact;
uniform float uExtent;
uniform float uPixel;
uniform float uThin;
uniform vec3 uDetail;
${lt}
${K}
${zt}
${Vt}
in vec2 blade;
in vec3 root;
in vec4 shape;
in vec4 tone;
in vec4 form;
in vec2 detail;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vShade;
out vec2 vBlade;
out vec4 vTone;
out float vKind;
out float vOcclusion;
out float vGust;
out float vHead;
void main() {
float t = blade.x;
float side = blade.y;
float seed = shape.w;
float kind = form.x;
bool hanging = kind > 3.5 && kind < 4.5;
float shown = detailShown(detail, uDetail);
Stem s = grow(root, vec4(shape.x * mix(0.5, 1.0, shown), shape.yzw), tone, form);
vec3 position = stemAt(s, t);
vec3 tangent = stemTangent(s, t);
vec3 toEye = cameraPosition - root;
vec3 widthAxis = normalize(cross(s.up, s.facing));
vec3 eyeAxis = normalize(cross(vec3(0.0, 1.0, 0.0), toEye));
widthAxis = normalize(mix(widthAxis, eyeAxis * sign(dot(widthAxis, eyeAxis) + 1e-4), 0.3));
float taper = (1.0 - pow(t, 1.5)) * (0.86 + 0.28 * sin(t * 3.14159));
float head = kind > 1.5 && kind < 2.5 && fract(seed * 3.7) < 0.55 ? 1.0 : 0.0;
taper *= 1.0 + head * 2.2 * smoothstep(0.7, 0.8, t);
float width = max(shape.y * (kind > 4.5 ? 1.0 : uThin), 0.62 * uPixel * length(toEye)) * shown;
position += widthAxis * side * width * 0.5 * taper;
vec3 normal = normalize(cross(widthAxis, tangent));
if (dot(normal, toEye) < 0.0) normal = -normal;
normal = normalize(normal + widthAxis * side * 0.5);
vec3 ground = hanging ? normalize(s.horizontal + vec3(0.0, 0.2, 0.0))
: kind > 2.5 && kind < 3.5 ? normalize(s.horizontal * 0.8 + vec3(0.0, 1.0, 0.0))
: vec3(0.0, 1.0, 0.0);
float blend = kind > 0.5 && kind < 1.5 ? 0.7 : hanging ? 0.35 : 0.58;
vec3 shade = normalize(mix(normal, ground, blend));
vOcclusion = canopyOcclusion(root, position.y - root.y, form.z, t, kind < 2.5 || kind > 4.5);
vWorld = position;
vNormal = normal;
vShade = shade;
vBlade = vec2(t, seed);
vTone = tone;
vKind = kind;
vGust = s.gust * uWindStrength;
vHead = head;
vec4 worldPosition = vec4(position, 1.0);
vec3 transformedNormal = mat3(viewMatrix) * shade;
#include <shadowmap_vertex>
gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,Ut=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#include <common>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
uniform vec3 uRoot;
uniform vec3 uBody;
uniform vec3 uTip;
uniform vec3 uStraw;
uniform vec3 uCool;
uniform vec3 uWarm;
uniform vec3 uThatch;
uniform vec3 uFiber;
uniform vec3 uTranslucent;
uniform vec3 uSeed;
uniform vec3 uMoss;
uniform float uExposure;
${lt}
${K}
in vec3 vWorld;
in vec3 vNormal;
in vec3 vShade;
in vec2 vBlade;
in vec4 vTone;
in float vKind;
in float vOcclusion;
in float vGust;
in float vHead;
float luma(vec3 c) {
return dot(c, vec3(0.2126, 0.7152, 0.0722));
}
void main() {
float t = vBlade.x;
float seed = vBlade.y;
vec3 n = normalize(vShade);
vec3 blade = normalize(vNormal);
vec3 v = normalize(cameraPosition - vWorld);
vec3 l = uSunDir;
bool fiber = vKind > 3.5 && vKind < 4.5;
bool stalk = vKind > 4.5;
vec3 albedo = mix(uRoot, uBody, smoothstep(0.0, 0.45, t));
albedo = mix(albedo, uTip, smoothstep(0.48, 1.0, t) * 0.62);
vec3 tuft = mix(uCool, uWarm, vTone.x);
albedo = mix(albedo, albedo * tuft / max(luma(tuft), 1e-3), 0.24);
float dry = clamp(vTone.y * 1.3 - (1.0 - t) * 0.7, 0.0, 1.0);
dry = smoothstep(0.0, 1.0, dry);
albedo = mix(albedo, uStraw, dry);
if (vKind > 0.5 && vKind < 1.5) albedo = mix(albedo, uThatch, 0.45 + 0.3 * vTone.y);
if (fiber) albedo = mix(uFiber * 0.45, uFiber, t * 0.6 + 0.4 * vTone.x);
if (stalk) albedo = mix(uRoot, uBody * 0.9, smoothstep(0.0, 0.5, t));
if (vKind > 5.5) albedo = mix(uMoss * 0.55, uMoss, t * 0.8 + 0.2 * vTone.x);
float burn = vKind < 0.5 ? step(0.86, fract(seed * 29.3)) * smoothstep(0.84, 0.97, t) : 0.0;
albedo = mix(albedo, uStraw * 0.78, burn * 0.85);
albedo = mix(albedo, uSeed, vHead * smoothstep(0.7, 0.78, t));
albedo *= 0.9 + 0.2 * fract(seed * 13.7);
float shadow = getShadowMask();
float ndl = dot(n, l);
float diffuse = max((ndl + 0.3) / 1.3, 0.0);
float behind = pow(max(dot(-l, v), 0.0), 4.0);
float through = (max(-dot(blade, l), 0.0) * 0.35 + behind * 0.75) * (0.25 + 0.75 * t);
vec3 transmitted = fiber ? vec3(0.0) : uTranslucent * through * (1.0 - dry * 0.65) * (1.0 - burn * 0.7);
vec3 halfway = normalize(l + v);
float sheen = pow(max(dot(blade, halfway), 0.0), 16.0) * (0.022 + 0.06 * vGust) * t;
vec3 color = uSunColor * shadow * (albedo * diffuse * vOcclusion + transmitted * albedo * vOcclusion + sheen);
color += hemisphere(n) * albedo * vOcclusion;
color += fill(n) * albedo * vOcclusion;
color = mix(color, luma(color) * vec3(0.8, 0.93, 1.12), uNight * 0.28);
color += lantern(vWorld, n) * albedo * mix(0.5, 1.0, vOcclusion);
float level = luma(color);
color = mix(color, vec3(level), smoothstep(0.85, 2.2, level) * 0.4);
color = developed(color, developedAt(vWorld));
gl_FragColor = vec4(color * uExposure, 1.0);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}
`,Wt=`
#include <common>
#include <shadowmap_pars_vertex>
uniform sampler2D uContact;
uniform float uExtent;
${lt}
${K}
${zt}
in vec4 petal;
in vec3 root;
in vec4 shape;
in vec4 tone;
in vec4 form;
in vec4 bloom;
in vec2 detail;
uniform vec3 uDetail;
${Vt}
out vec3 vWorld;
out vec3 vNormal;
out vec2 vPetal;
out float vSpecies;
out float vOcclusion;
out float vSeed;
void main() {
Stem s = grow(root, vec4(shape.x * mix(0.5, 1.0, detailShown(detail, uDetail)), shape.yzw), tone, form);
float species = bloom.x;
float count = species < 0.5 ? 15.0 : species < 1.5 ? 5.0 : species < 2.5 ? 3.0 : species < 3.5 ? 16.0 : species < 4.5 ? 6.0 : 5.0;
float width = species < 0.5 ? 0.2 : species < 1.5 ? 0.9 : species < 2.5 ? 0.78 : species < 3.5 ? 0.28 : species < 4.5 ? 0.86 : 0.78;
float cup = species < 0.5 ? mix(0.1, 1.45, uNight)
: species < 1.5 ? mix(0.7, 1.15, uNight)
: species < 2.5 ? -0.08
: species < 3.5 ? 1.15
: species < 4.5 ? 0.78
: 1.6;
float disk = species < 0.5 ? 0.24 : species < 1.5 ? 0.2 : species < 2.5 ? 0.0 : species < 3.5 ? 0.3 : species < 4.5 ? 0.19 : 0.1;
float span = species < 2.5 ? 1.0 : species < 3.5 ? 0.6 : 1.0;
float grown = 1.0;
#ifdef FLOWERING
grown = floweredAt(root);
cup = mix(1.6, cup, smoothstep(0.45, 1.0, grown));
#endif
vec3 tangent = stemTangent(s, 1.0);
vec3 toEye = normalize(cameraPosition - s.tip);
vec3 sky = species < 1.5 || species > 2.5
? normalize(vec3(0.0, 1.0, 0.0) + normalize(vec3(toEye.x, 0.0, toEye.z)) * (0.9 + 0.5 * fract(bloom.w * 3.1)))
: vec3(0.0, 1.0, 0.0);
vec3 up = normalize(mix(tangent, sky, species > 1.5 && species < 2.5 ? 0.85 : 0.75));
if (species > 4.5) up = normalize(mix(tangent, s.horizontal * 1.1 + vec3(0.0, -0.5, 0.0), 0.7));
vec3 reference = abs(up.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
vec3 ax = normalize(cross(reference, up));
vec3 az = cross(up, ax);
vec3 local;
vec3 localNormal = vec3(0.0, 1.0, 0.0);
float along = petal.y;
if (petal.w > 0.5) {
float angle = petal.x / 8.0 * 6.2831853;
float r = along * disk;
float dome = (1.0 - along * along) * disk * (species > 2.5 ? 1.1 : 0.4);
local = vec3(cos(angle) * r, dome, sin(angle) * r);
localNormal = normalize(vec3(cos(angle) * along, 1.2, sin(angle) * along));
} else {
float jitter = (fract(sin(petal.x * 12.9898 + bloom.w * 78.233) * 43758.5453) - 0.5) * 0.35;
float angle = (petal.x + jitter) / count * 6.2831853 + bloom.z;
vec3 d = vec3(cos(angle), 0.0, sin(angle));
vec3 across = vec3(-sin(angle), 0.0, cos(angle));
float curl = cup * (0.55 + 0.45 * along);
vec3 outward = d * cos(curl) + vec3(0.0, sin(curl), 0.0);
float profile = sin(3.14159 * pow(max(along, 0.0), 0.72));
if (species > 1.5 && species < 2.5) profile *= 1.0 - 0.45 * smoothstep(0.8, 1.0, along) * (1.0 - abs(petal.z));
if (species > 3.5) profile = pow(sin(3.14159 * pow(max(along, 0.0), 0.5)), 0.72);
local = d * disk * 0.85 + outward * along * span + across * petal.z * width * 0.5 * profile;
if (species > 3.5)
local += vec3(0.0, 1.0, 0.0) * sin(petal.z * 3.4 + bloom.w * 11.0) * 0.09 * along * (1.0 - 0.5 * along);
localNormal = normalize(cross(outward, across));
if (localNormal.y < 0.0) localNormal = -localNormal;
if (petal.x >= count) local = vec3(0.0);
}
vec3 position = s.tip + (ax * local.x + up * local.y + az * local.z) * bloom.y * grown * detailShown(detail, uDetail);
vec3 normal = normalize(ax * localNormal.x + up * localNormal.y + az * localNormal.z);
vOcclusion = canopyOcclusion(root, position.y - root.y, form.z, 1.0, true);
vWorld = position;
vNormal = normal;
vPetal = vec2(along, petal.w);
vSpecies = species;
vSeed = bloom.w;
vec4 worldPosition = vec4(position, 1.0);
vec3 transformedNormal = mat3(viewMatrix) * normal;
#include <shadowmap_vertex>
gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,Gt=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#include <common>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
uniform vec3 uDaisy;
uniform vec3 uBlush;
uniform vec3 uGold;
uniform vec3 uButtercup;
uniform vec3 uClover;
uniform vec3 uChevron;
uniform vec3 uCloverFlower;
uniform vec3 uPoppy;
uniform vec3 uPoppyBase;
uniform vec3 uPoppyHeart;
uniform float uExposure;
${lt}
${K}
in vec3 vWorld;
in vec3 vNormal;
in vec2 vPetal;
in float vSpecies;
in float vOcclusion;
in float vSeed;
float luma(vec3 c) {
return dot(c, vec3(0.2126, 0.7152, 0.0722));
}
void main() {
float along = vPetal.x;
bool disk = vPetal.y > 0.5;
vec3 albedo;
float gloss = 0.0;
float thin = 0.55;
if (vSpecies < 0.5) {
float blush = step(0.55, fract(vSeed * 5.13)) * smoothstep(0.72, 1.0, along);
albedo = disk ? uGold : mix(uDaisy, uBlush, blush * 0.75);
albedo = mix(albedo, uBlush * 0.8, uNight * 0.55 * (disk ? 0.0 : 1.0));
albedo *= disk ? 1.0 : mix(0.82, 1.0, smoothstep(0.0, 0.3, along));
} else if (vSpecies < 1.5) {
albedo = disk ? uGold * vec3(0.8, 0.85, 0.5) : uButtercup * mix(0.85, 1.0, along);
gloss = disk ? 0.0 : 1.0;
} else if (vSpecies < 2.5) {
float chevron = 1.0 - smoothstep(0.03, 0.09, abs(along - 0.42));
albedo = mix(uClover, uChevron, chevron * 0.7);
thin = 0.3;
} else if (vSpecies < 3.5) {
albedo = disk ? uCloverFlower * vec3(0.92, 0.84, 0.78) : mix(uCloverFlower * vec3(0.9, 0.8, 0.72), uCloverFlower, along);
} else if (vSpecies < 4.5) {
albedo = disk ? uPoppyHeart : mix(uPoppyBase, uPoppy, smoothstep(0.12, 0.55, along));
albedo = mix(uPoppyHeart, albedo, smoothstep(0.02, 0.22, along));
if (!disk) albedo *= mix(1.0, 1.16, smoothstep(0.62, 1.0, along));
gloss = disk ? 0.0 : 0.45;
thin = 1.45;
} else {
albedo = mix(uClover * 0.85, uPoppy * 0.75, smoothstep(0.74, 1.0, along) * 0.55);
thin = 0.4;
}
vec3 n = normalize(vNormal);
vec3 v = normalize(cameraPosition - vWorld);
if (dot(n, v) < 0.0) n = -n;
vec3 l = uSunDir;
float shadow = getShadowMask();
float ndl = dot(n, l);
float diffuse = max((ndl + 0.35) / 1.35, 0.0);
float through = (pow(max(dot(-l, v), 0.0), 3.0) + max(-ndl, 0.0) * 0.5) * thin;
float spec = pow(max(dot(n, normalize(l + v)), 0.0), 70.0) * 0.8 * gloss;
vec3 color = uSunColor * shadow * (albedo * (diffuse + through * 0.8) * vOcclusion + spec);
color += hemisphere(n) * albedo * vOcclusion;
color += fill(n) * albedo * vOcclusion;
color = mix(color, luma(color) * vec3(0.8, 0.93, 1.12), uNight * 0.35);
color += lantern(vWorld, n) * albedo;
color = developed(color, developedAt(vWorld));
gl_FragColor = vec4(color * uExposure, 1.0);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}
`;function Kt(e,t){let n=[],r=[];for(let t=0;t<e;t+=1){let e=n.length/4;for(let e of[0,.33,.68])n.push(t,e,-1,0,t,e,1,0);n.push(t,1,0,0);for(let t=0;t<2;t+=1){let n=e+t*2;r.push(n,n+1,n+2,n+1,n+3,n+2)}r.push(e+4,e+5,e+6)}if(t){let e=n.length/4;n.push(0,0,0,1);for(let e=0;e<8;e+=1)n.push(e,1,0,1);for(let t=0;t<8;t+=1)r.push(e,e+1+t,e+1+(t+1)%8)}return{petal:new Float32Array(n),index:new Uint16Array(r)}}function qt(e,...t){let n=e.root.length/3,r=new Float64Array(n),i=new Int32Array(n),a=Array(n);for(let t=0;t<n;t+=1){i[t]=t;let n=Math.floor(W(t,17,5)*X);a[t]=(n+W(t,29,7))/X;let o=-(e.root[t*3+2]+.2*e.root[t*3+1]);r[t]=n*1e3+o}let o=Array.from(i).sort((e,t)=>r[e]-r[t]),s=o.map(e=>a[e]),c=(e,t)=>{let r=e.slice();for(let i=0;i<n;i+=1){let n=o[i]*t;for(let a=0;a<t;a+=1)e[i*t+a]=r[n+a]}};for(let n of[e,...t])c(n.root,3),c(n.shape,4),c(n.tone,4),c(n.form,4),n.bloom.length&&c(n.bloom,4),n.threshold=s}function Jt(e){let t=new Int32Array(17).fill(e.length);for(let n=e.length-1;n>=0;--n)t[Math.min(Math.floor(e[n]*X),15)]=n;for(let e=15;e>=0;--e)t[e]=Math.min(t[e],t[e+1]);return t}function Yt(e,t){let n=new Float32Array(e.threshold.length*2);return e.threshold.forEach((e,r)=>{n[r*2]=e,n[r*2+1]=t}),new E(n,2)}var Xt=()=>({root:[],shape:[],tone:[],form:[],bloom:[],threshold:[]});function Zt(e,t,n){let r=t/Math.SQRT2,i=Math.ceil(2*e/r),a=new Int32Array(i*i).fill(-1),o=[],s=[],c=(t,n)=>{let c=Math.floor((t+e)/r),l=Math.floor((n+e)/r);a[l*i+c]=o.length,s.push(o.length),o.push([t,n])},l=(n,s)=>{if(n*n+s*s>e*e)return!1;let c=Math.floor((n+e)/r),l=Math.floor((s+e)/r);for(let e=-2;e<=2;e+=1)for(let r=-2;r<=2;r+=1){let u=c+r,d=l+e;if(u<0||d<0||u>=i||d>=i)continue;let f=a[d*i+u];if(f<0)continue;let[p,m]=o[f];if((p-n)**2+(m-s)**2<t*t)return!1}return!0};for(c(0,0);s.length;){let e=Math.floor(n()*s.length),[r,i]=o[s[e]],a=!1;for(let e=0;e<24;e+=1){let e=n()*Math.PI*2,o=t*(1+n()),s=r+Math.cos(e)*o,u=i+Math.sin(e)*o;if(l(s,u)){c(s,u),a=!0;break}}a||s.splice(e,1)}return o}var Qt=class{#e;constructor(e){this.#e=e}lush(e,t){return U(.28,.72,Ze(e*1.25+11.3,t*1.25+4.1))}dryness(e,t){let n=U(.5,.82,Ze(e*.95+40.2,t*.95+7.7));return Math.min(1,.1+n*.5+this.edge(e,t)*.12)}worn(e,t){return Math.exp(-((e-.12)**2/.05+(t-.48)**2/.035))*.6}edge(e,t){return U(.86,1,Math.hypot(e,t)/Qe(Math.atan2(t,e)))}rest(e,t){let n=Math.exp(-((e+.14)**2+(t+.13)**2)/.2),r=Math.exp(-((e-.6)**2+(t-.17)**2)/.06);return Math.min(1,n+r*.7)}canopy(e,t){return Dt*(.66+.5*this.lush(e,t))*(1-this.worn(e,t)*.5)*(1-this.rest(e,t)*.32)*(1+.15*this.edge(e,t))}crown(e,t){return this.#e.crown(e,t)}},$t=class e{mesh;uniforms;count;flowers;#e=[];#t=[];#n=[];#r=[];#i=[];#a;#o;#s=1;#c=X;#l=0;static async grow(t,n){let r=Math.min(1,Math.max(At,t.density??1)*Pt),i=Math.min(1,wt(r)*Pt),a=await e.#f({...t,populations:Ft(t.populations,r,i)});return new e(t,n,a,r,i)}constructor(t,n,r,i,a){this.#a=i,this.#o=a,this.uniforms={...Ae.clone(I.lights),...t.light,...t.develop,uTime:{value:0},uWind:{value:n},uWindDir:{value:new B(.86,.5).normalize()},uWindStrength:{value:.45},uContact:{value:t.contact},uExtent:{value:t.extent},uPixel:{value:.001},uThin:{value:1},uDetail:{value:new j(1,1,Bt)},uExposure:{value:1},uRoot:{value:Y(q.root)},uBody:{value:Y(q.body)},uTip:{value:Y(q.tip)},uStraw:{value:Y(q.straw)},uCool:{value:Y(q.cool)},uWarm:{value:Y(q.warm)},uThatch:{value:Y(q.thatch)},uFiber:{value:Y(q.fiber)},uTranslucent:{value:Y(q.translucent)},uSeed:{value:Y(q.seed)},uMoss:{value:Y(q.moss)}};let o=new R({glslVersion:be,vertexShader:Ht,fragmentShader:Ut,uniforms:this.uniforms,side:2,lights:!0}),s=new R({glslVersion:be,defines:{FLOWERING:``},vertexShader:Ht,fragmentShader:Ut,uniforms:this.uniforms,side:2,lights:!0});this.mesh=new se,this.mesh.name=`sward`;let c=0;for(let[n,i,a]of[[r.long,t.segments,`sward`],[r.short,Math.max(2,t.segments-2),`sward`],[r.flowerStalks,t.segments,`flowers`],[r.leafStalks,t.segments,`leaves`]]){let t=n.root.length/3;if(!t)continue;c+=t;let l=new O;l.setAttribute(`blade`,new V(e.#u(i),2)),l.setIndex(e.#d(i)),l.setAttribute(`root`,new E(new Float32Array(n.root),3)),l.setAttribute(`shape`,new E(new Float32Array(n.shape),4)),l.setAttribute(`tone`,new E(new Float32Array(n.tone),4)),l.setAttribute(`form`,new E(new Float32Array(n.form),4)),l.setAttribute(`detail`,Yt(n,a===`sward`?0:1)),l.instanceCount=t,l.boundingSphere=new pe(new j(0,.3,0),Je+.4);let u=new T(l,n===r.flowerStalks?s:o);u.frustumCulled=!1,u.receiveShadow=!0,u.renderOrder=3,this.#e.push(u),n===r.flowerStalks&&this.#n.push(u),(a===`sward`?this.#r:this.#i).push({mesh:u,full:t,kind:a,starts:Jt(n.threshold)}),this.mesh.add(u)}this.count=c,this.#l=c;let l={...this.uniforms,uDaisy:{value:Y(J.daisy)},uBlush:{value:Y(J.blush)},uGold:{value:Y(J.gold)},uButtercup:{value:Y(J.buttercup)},uClover:{value:Y(J.clover)},uChevron:{value:Y(J.chevron)},uCloverFlower:{value:Y(J.cloverFlower)},uPoppy:{value:Y(J.poppy)},uPoppyBase:{value:Y(J.poppyBase)},uPoppyHeart:{value:Y(J.poppyHeart)}},u=e=>new R({glslVersion:be,defines:e?{FLOWERING:``}:{},vertexShader:Wt,fragmentShader:Gt,uniforms:l,side:2,lights:!0}),d=u(!0),f=u(!1);this.#t.push(o,s,d,f);for(let[e,t,n,i]of[[r.flowers,16,!0,`flowers`],[r.leaves,3,!1,`leaves`]]){let a=e.root.length/3;if(!a)continue;let{petal:o,index:s}=Kt(t,n),c=new O;c.setAttribute(`petal`,new V(o,4)),c.setIndex(new V(s,1)),c.setAttribute(`root`,new E(new Float32Array(e.root),3)),c.setAttribute(`shape`,new E(new Float32Array(e.shape),4)),c.setAttribute(`tone`,new E(new Float32Array(e.tone),4)),c.setAttribute(`form`,new E(new Float32Array(e.form),4)),c.setAttribute(`bloom`,new E(new Float32Array(e.bloom),4)),c.setAttribute(`detail`,Yt(e,1)),c.instanceCount=a;let l=e===r.flowers,u=new T(c,l?d:f);u.frustumCulled=!1,u.receiveShadow=!0,u.renderOrder=3,this.#e.push(u),l&&this.#n.push(u),this.#i.push({mesh:u,full:a,kind:i,starts:Jt(e.threshold)}),this.mesh.add(u)}this.flowers=r.flowers.root.length/3}set flowering(e){for(let t of this.#n)t.visible=e}get drawn(){return this.#l}get covered(){return this.#s}coverage(e){let t=Ct(e);if(Math.abs(t-this.#s)<1e-4)return!1;this.#s=t;let n=Math.min(1,t/this.#a),r=Math.min(1,wt(t)/this.#o);this.uniforms.uDetail.value.set(n,r,Bt);let i=0,a=(e,t)=>{let n=Math.min(Math.floor(t*1.03125*X)+1,X);for(let{mesh:t,full:r,starts:a}of e){let e=Math.max(1,Math.min(r,a[n]));t.geometry.instanceCount=e,i+=e}};a(this.#r,n),a(this.#i,r),this.#l=i,this.uniforms.uThin.value=Math.min(1/t,jt);let o=Math.min(Math.floor(n*X),X);return o!==this.#c&&(this.#c=o,!0)}static#u(e){let t=[];for(let n=0;n<e;n+=1){let r=n/e;t.push(r,-1,r,1)}return t.push(1,0),new Float32Array(t)}static#d(e){let t=[];for(let n=0;n<e-1;n+=1){let e=n*2;t.push(e,e+1,e+2,e+1,e+3,e+2)}let n=(e-1)*2;return t.push(n,n+1,e*2),new V(new Uint16Array(t),1)}static async#f(e){let{island:t,populations:n}=e,r=ne(),i=Lt(e.seed??1835360612),a=new Qt(t),o=Xt(),s=Xt(),c=Xt(),l=Xt(),u=Xt(),d=Xt(),f=(e,t,n,r,i,a,o)=>{e.root.push(t,n,r),e.shape.push(...i),e.tone.push(...a),e.form.push(...o)},p=Zt(Je,e.clumpSpacing??It,i).map(([e,t],n)=>{let r=W(n,3,7);return{x:e,z:t,radius:.028+r*r*.06,height:.74+.5*W(n,4,7),tone:W(n,5,7),facing:W(n,6,7)*Math.PI*2,pull:.08+.24*W(n,8,7),fine:W(n,9,7)>.84}}),m=.12,h=new Map,g=(e,t)=>(e+512)*1024+(t+512);p.forEach((e,t)=>{let n=g(Math.floor(e.x/m),Math.floor(e.z/m)),r=h.get(n);r?r.push(t):h.set(n,[t])});let _=(e,t)=>{let n=Math.floor(e/m),r=Math.floor(t/m),i=1/0,a=p[0];for(let o=-1;o<=1;o+=1)for(let s=-1;s<=1;s+=1)for(let c of h.get(g(n+s,r+o))??[]){let n=p[c],r=Math.hypot(n.x-e,n.z-t)/n.radius;r<i&&(i=r,a=n)}return a},v=async(e,t)=>{let n=Math.PI*Je*Je,a=Math.sqrt(n/Math.max(e,1)),o=Math.ceil(Je*2/a);for(let e=0;e<o;e+=1){await r();for(let n=0;n<o;n+=1){let r=-Je+(n+i())*a,o=-Je+(e+i())*a;r*r+o*o<=5.8564&&t(r,o)}}};await v(n.blades,(e,n)=>{if(!t.inside(e,n,.004))return;let r=a.lush(e,n),s=a.worn(e,n);if(i()>(.88+.12*r)*(1-s*.3))return;let c=_(e,n),l=e+(c.x-e)*c.pull,u=n+(c.z-n)*c.pull;t.inside(l,u,.004)||(l=e,u=n);let d=l-c.x,p=u-c.z,m=Math.hypot(d,p)+1e-5,h=Math.min(m/c.radius,1.4),g=a.edge(l,u),v=a.canopy(l,u),y=v*c.height*(.78+.34*i())*(1-.22*Math.min(h,1))*(c.fine?1.18:1),b=Ot*(.75+.5*i())*(c.fine?.62:1),x=c.facing+(i()-.5)*2.6,ee=d/m*(.08+.34*Math.min(h,1)),S=p/m*(.08+.34*Math.min(h,1)),C=Math.hypot(l,u)+1e-5;ee+=l/C*g*.75,S+=u/C*g*.75;let te=Math.min(1,a.dryness(l,u)*(.75+.5*W(c.tone*1e4,1))+s*.3);f(o,l,t.crown(l,u)-.004,u,[y,b,x,i()],[c.tone,te,ee,S],[Tt.Blade,g*g*.45+i()*.08,v,1])}),await v(n.thatch,(e,n)=>{if(!t.inside(e,n,.002))return;let r=a.canopy(e,n),o=i()*Math.PI*2,c=.35+.6*i();f(s,e,t.crown(e,n)-.003,n,[.02+.04*i(),.0042+.0035*i(),o,i()],[i(),Math.min(1,.1+.45*i()+a.worn(e,n)*.3),Math.cos(o)*c,Math.sin(o)*c],[Tt.Thatch,.15+.35*i(),r,.25])}),await v(n.wisps,(e,n)=>{if(!t.inside(e,n,.01))return;let r=a.lush(e,n);if(i()>.25+.75*r||a.worn(e,n)>.15||a.rest(e,n)>.3)return;let s=a.canopy(e,n),c=i()*Math.PI*2,l=.1+.25*i(),u=a.edge(e,n),d=Math.hypot(e,n)+1e-5;f(o,e,t.crown(e,n)-.004,n,[s*(1.4+.6*i()),.0026+.0012*i(),c,i()],[i(),Math.min(1,.25+.6*i()),Math.cos(c)*l+e/d*u*.6,Math.sin(c)*l+n/d*u*.6],[Tt.Wisp,.12+.3*i(),s,.8])});let y=e=>.25+1.35*U(.3,.72,G(Math.cos(e)*5.3+2.1,Math.sin(e)*5.3+6.7))+.5*G(Math.cos(e)*13.1+8.3,Math.sin(e)*13.1+1.7);for(let e=0;e<n.fringe;e+=1){await r();let s=(e+i())/n.fringe*Math.PI*2,c=y(s);if(i()>Math.min(1,c*.75))continue;let l=.002+i()**1.6*.05,u=t.wallAtDepth(s,l),d=Math.hypot(u.x,u.z)+1e-5,p=u.x/d,m=u.z/d,h=u.x-p*.004,g=u.z-m*.004,_=a.canopy(h*.97,g*.97),v=.45+.6*i(),b=(i()-.5)*.9;f(o,h,u.y,g,[_*(.4+.5*i())*(.55+.85*c),Ot*(.6+.45*i()),s+Math.PI/2+b,i()],[i(),a.dryness(h,g)*.6,p*v-m*b*.3,m*v+p*b*.3],[Tt.Fringe,.3+.55*i(),0,.6])}for(let e=0;e<n.moss;e+=1){await r();let a=(e+i())/n.moss*Math.PI*2,o=U(.42,.68,G(Math.cos(a)*7.7+31.3,Math.sin(a)*7.7+17.9));if(i()>o*.9+.05)continue;let c=i()**1.4*.075,l=t.wallAtDepth(a,c),u=Math.hypot(l.x,l.z)+1e-5,d=i()*Math.PI*2,p=.3+.5*i();f(s,l.x-l.x/u*.002,l.y,l.z-l.z/u*.002,[.009+.016*i(),.0035+.003*i(),d,i()],[i(),0,Math.cos(d)*p+l.x/u*.35,Math.sin(d)*p+l.z/u*.35],[Tt.Moss,.2+.4*i(),0,.2])}for(let e=0;e<n.roots;e+=1){await r();let a=(e+i())/n.roots*Math.PI*2,o=.045+i()*.075,c=t.wallAtDepth(a,o),l=Math.hypot(c.x,c.z)+1e-5,u=c.x/l,d=c.z/l,p=i()*Math.PI*2,m=.05+.2*i();f(s,c.x+u*.0015,c.y,c.z+d*.0015,[.025+i()**1.8*.11,8e-4+9e-4*i(),p,i()],[i(),0,u*m+Math.cos(p)*.08,d*m+Math.sin(p)*.08],[Tt.Root,.05+.25*i(),0,.15])}let b=(e,n,r,o,s,u,p,m)=>{let h=t.crown(n,r)-.004,g=i()*Math.PI*2,_=[s,m,g,i()],v=[i(),0,Math.cos(g)*p,Math.sin(g)*p],y=[Tt.Stalk,.04*i(),a.canopy(n,r),.75];f(e===d?l:c,n,h,r,_,v,y),f(e,n,h,r,_,v,y),e.bloom.push(o,u,i()*Math.PI*2,i())};await v(n.daisies,(e,n)=>{if(!t.inside(e,n,.03))return;let r=U(.52,.8,G(e*3.3+7.1,n*3.3+1.9))*.7+a.rest(e,n)*.5+a.worn(e,n)*.8;if(i()>r*.9+.015)return;let o=a.canopy(e,n);b(u,e,n,Et.Daisy,o*(1.05+.5*i()),.014+.007*i(),.12+.2*i(),.0012)}),await v(n.buttercups,(e,n)=>{if(!t.inside(e,n,.05))return;let r=U(.55,.82,G(e*2.4+31.3,n*2.4+12.7))*a.lush(e,n);if(i()>r*.85+.01||a.rest(e,n)>.4)return;let o=a.canopy(e,n);b(u,e,n,Et.Buttercup,o*(1.25+.5*i()),.0105+.004*i(),.08+.18*i(),.0013)});let x=[];for(let e=0;e<60&&x.length<2;e+=1){let n=W(e,71,3)*Math.PI*2,r=.45+W(e,72,3)*.8,i=Math.cos(n)*r,o=Math.sin(n)*r;!t.inside(i,o,.5)||a.rest(i,o)>.28||x.some(e=>Math.hypot(e.x-i,e.z-o)<.62)||x.push({x:i,z:o,radius:.15+W(e,73,3)*.13})}let ee=(e,t)=>{let n=0;for(let r of x){let i=Math.hypot(r.x-e,r.z-t)/r.radius;n=Math.max(n,Math.exp(-i*i*1.5))}return n*(.55+.75*G(e*6.1+12.7,t*6.1+3.3))+.004},S=[];await v(n.poppies,(e,n)=>{if(!t.inside(e,n,.16))return;let r=ee(e,n);r<.015||a.rest(e,n)>.4||S.push({x:e,z:n,key:i()**(1/r)})}),S.sort((e,t)=>t.key-e.key);for(let{x:e,z:t}of S.slice(0,Nt)){let n=a.canopy(e,t),r=i();if(r<.22){b(u,e,t,Et.PoppyBud,n*(1.35+.65*i()),.0072+.0035*i(),.12+.3*i(),.0013);continue}let o=r<.55?.68+.22*i():.92+.22*i();b(u,e,t,Et.Poppy,n*(1.25+.85*i()),(.0148+.0075*i())*o,.08+.32*i(),.0014)}return await v(n.clover,(e,n)=>{if(!t.inside(e,n,.02))return;let r=U(.5,.74,G(e*4.1+51.7,n*4.1+23.3));if(i()>r)return;let o=a.canopy(e,n);i()<.05?b(u,e,n,Et.CloverFlower,o*(.85+.35*i()),.0065+.002*i(),.1,.001):b(d,e,n,Et.CloverLeaf,o*(.35+.5*i()),.0072+.003*i(),.2+.3*i(),8e-4)}),qt(o),qt(s),qt(u,c),qt(d,l),{long:o,short:s,flowerStalks:c,leafStalks:l,flowers:u,leaves:d}}dispose(){for(let e of this.#e)e.geometry.dispose();for(let e of this.#t)e.dispose()}},en=`#ifndef CLOCK_GLSL
#define CLOCK_GLSL
#ifndef CONSTANTS_GLSL
#define CONSTANTS_GLSL
#define SPECTRUM_TAPS 16
const float RS = 1.0;
const float MASS = 0.5;
const float PHOTON_SPHERE = 1.5;
const float B_CRIT = 2.598076;
const float R_ISCO = 3.0;
const float R_TEMPERATURE_PEAK = 4.0833335;
const float TEMPERATURE_SHAPE_PEAK = 0.48787135;
const float RING_LYAPUNOV = 3.1415927;
const float RING_SPACING = 1.45;
const float SPIRAL_PITCH = 2.25;
const float WEAK_FIELD_B = 26.0;
const float ATLAS_EDGE_NEAR = 0.000001;
const float ATLAS_EDGE_DECADES = 16.013557;
const float ATLAS_CAPTURED_DECADES = 13.815511;
const float DISK_OUTER_RADIUS = 16.0;
const float TAPER_REACH = 1.25;
const float RAMP_MIN_K = 700.;
const float RAMP_DECADES = 4.045554;
const float EXCITED_DYE_CEILING = 0.9;
const float EXCITED_KEY_GAIN = 1.1;
const float EXCITED_EXPOSURE = 0.7;
const float EXCITED_CONTRAST = 2.2;
const float EXCITED_BROAD = 0.65;
const float EXCITED_FILAMENT_RADIUS = 6.0;
const float EXCITED_CORE = 3.0;
const vec3 GALAXY_NUCLEUS = vec3(1.1467261, 0.97804004, 0.785482);
const vec3 GALAXY_BAR = vec3(1.302215, 0.9413963, 0.690616);
const vec3 GALAXY_INNER = vec3(1.3294382, 0.9232194, 0.79051155);
const vec3 GALAXY_ARM = vec3(1.071447, 0.9300504, 1.4825257);
const vec3 GALAXY_OUTER = vec3(0.8467218, 0.9801459, 1.6480141);
const vec3 GALAXY_YOUNG = vec3(0.783326, 1.0281817, 1.3588555);
const vec3 GALAXY_NEBULA = vec3(2.851653, 0.4101745, 1.3903292);
const vec3 GALAXY_HALO = vec3(0.7698258, 1.0021421, 1.656551);
const vec3 GALAXY_DUST_REDDENING = vec3(0.78, 1.0, 1.32);
const float FIELD_TAN_HALF_FOV = 0.3125;
const float FIELD_DEFLECTION_REACH = 0.999;
#define FIELD_DEFLECTION_SAMPLES 32
const float FIELD_DEFLECTION[FIELD_DEFLECTION_SAMPLES] = float[FIELD_DEFLECTION_SAMPLES](
0.0, -0.014405162, -0.028853972, -0.043341845,
-0.057863623, -0.07241352, -0.08698502, -0.101570815,
-0.11616267, -0.13075136, -0.14532645, -0.15987624,
-0.1743875, -0.18884532, -0.20323278, -0.21753076,
-0.23171745, -0.2457681, -0.25965434, -0.27334365,
-0.28679857, -0.29997566, -0.31282446, -0.3252857,
-0.3372893, -0.34875154, -0.35957116, -0.36962345,
-0.37875152, -0.38675123, -0.39334333, -0.3981081
);
#define PASSAGE_RF_STEPS 7
const float PASSAGE_RIM = 0.0001;
const float PASSAGE_WINDING_CORE = 0.1;
const float DISK_PERSPECTIVE = 1.6;
const float DISK_PERSPECTIVE_FLOOR = 0.8;
const float ROTATION_CORE = 1.2;
const float ROTATION_REFERENCE = 10.;
#define GROOVE_TAPS 6
const vec4 GROOVE_COMB[GROOVE_TAPS] = vec4[GROOVE_TAPS](
vec4(0.037164804, 0.0, 0.49286357, 427.7251),
vec4(0.0, 0.0641237, 0.5071364, 477.7251),
vec4(0.0, 0.55756277, 0.0, 527.7251),
vec4(0.36916935, 0.3783135, 0.0, 577.7251),
vec4(0.53033364, 0.0, 0.0, 627.7251),
vec4(0.06333218, 0.0, 0.0, 677.7251)
);
#define CLOCK_SEEDS 168
#define CLOCK_BRISTLES 88
#define CLOCK_PER_SEED 90
#define CLOCK_BRACTS 16
#define CLOCK_STEM_PIECES 24
#define CLOCK_FIBERS 15161
const float CLOCK_RECEPTACLE = 0.0034;
const float CLOCK_ACHENE = 0.0038;
const float CLOCK_BEAK = 0.0098;
const float CLOCK_BEAK_VARIATION = 0.08;
const float CLOCK_PAPPUS = 0.0064;
const float CLOCK_SPAN = 2.42;
const float CLOCK_SCATTER = 0.06;
const float CLOCK_CONE = 0.42;
const float CLOCK_STEM_LENGTH = 0.3;
const float CLOCK_STEM_FOOT = 0.0034;
const float CLOCK_STEM_HEAD = 0.0027;
const float CLOCK_STEM_LEAN = 0.06;
const float CLOCK_BRACT_LENGTH = 0.012;
const float CLOCK_BRACT_TIP = 0.18;
const float CLOCK_WIDTH_BRISTLE = 0.000022;
const float CLOCK_WIDTH_BEAK = 0.0001;
const float CLOCK_WIDTH_ACHENE = 0.0009;
const float CLOCK_WIDTH_BRACT = 0.0011;
const float CUP_SCALE = 3.0595684;
const float CUP_BOWL = 3.9;
const float CUP_REACH_SINE = 0.9903268;
const float CUP_REACH_COSINE = -0.13875453;
const float CUP_WALL = 0.14;
const float CUP_CENTER = 0.09885731;
const float CUP_LIQUID = 3.7587001;
const float CUP_RIM = 4.0022745;
const float CUP_FOOT = -3.8011427;
const float CUP_FOOT_RADIUS = 1.8;
const float CUP_FOOT_TUBE = 0.19;
const float CUP_HANDLE_OUT = 4.21;
const float CUP_HANDLE_DOWN = 1.1;
const float CUP_HANDLE_WIDTH = 0.93;
const float CUP_HANDLE_HEIGHT = 1.22;
const float CUP_HANDLE_THICKNESS = 0.15;
const float CUP_HANDLE_BREADTH = 0.23;
const float CUP_FILLET = 0.26;
const float CUP_BOUND_CENTER = -1.6055714;
const float CUP_BOUND_RADIUS = 5.92604;
const float SAUCER_CURVATURE = 17.0;
const float SAUCER_SHELL = 0.11;
const float SAUCER_CENTER = 12.898857;
const float SAUCER_REACH_SINE = 0.37058824;
const float SAUCER_REACH_COSINE = 0.92879725;
const float SAUCER_RIM = 6.41;
const float SAUCER_BOUND_CENTER = -3.4959195;
const float SAUCER_BOUND_RADIUS = 6.4997787;
const float CUP_TABLE = -4.2111425;
const float CUP_TABLE_NIGHT = 0.009;
const float CUP_TABLE_DAY = 0.9;
const float CUP_TABLE_ROUGHNESS = 0.42;
const float CUP_CAMERA_DISTANCE = 2.0;
const float CUP_CAMERA_FOCAL = 3.2;
const float CUP_LAMP_SOFT = 6.0;
const float CUP_NIGHT_KEY = 0.9;
const float CUP_DAY_KEY = 0.35;
const float CUP_LAMP_REACH = 2.2;
const float CUP_LAMP_HEIGHT = 30.;
const float CUP_LAMP_LIFT = 2.0;
const float CUP_WINDOW_NIGHT = 1.1;
const float CUP_WINDOW_DAY = 1.15;
const float CUP_WINDOW_POOL = 7.0;
const float CUP_FILL = 0.1;
const float CUP_RIPPLE_SPEED = 3.4;
const float CUP_RIPPLE_LIFE = 1.5;
const float CUP_RIPPLE_LENGTH = 0.85;
const float CUP_RIPPLE_SLOPE = 0.32;
const vec3 CUP_SOFTBOX = vec3(-0.54947823, 0.54947823, 0.62940234);
const vec3 CUP_STRIP = vec3(0.6227461, -0.58256894, 0.5223032);
#endif
const float CLOCK_GOLDEN = 2.39996322973;
const float CLOCK_TAU = 6.28318530718;
const float FIBER_BRISTLE = 0.0;
const float FIBER_BEAK = 1.0;
const float FIBER_ACHENE = 2.0;
const float FIBER_BRACT = 3.0;
const float FIBER_STEM = 4.0;
const float FIBER_RECEPTACLE = 5.0;
float clockHash(uint index, uint salt) {
uint x = (index * 0x9e3779b1u) ^ (salt * 0x85ebca77u);
x = (x ^ (x >> 16u)) * 0x7feb352du;
x = (x ^ (x >> 15u)) * 0x846ca68bu;
x = x ^ (x >> 16u);
return float(x >> 8u) / 16777216.0;
}
vec4 clockSeed(uint index) {
float share = (float(index) + 0.5) / float(CLOCK_SEEDS);
float cosine = 1.0 - share * (1.0 - cos(CLOCK_SPAN));
float sine = sqrt(max(1.0 - cosine * cosine, 0.0));
float polar = acos(cosine) + (clockHash(index, 1u) - 0.5) * 2.0 * CLOCK_SCATTER;
float around = float(index) * CLOCK_GOLDEN + (clockHash(index, 2u) - 0.5) * 2.0 * CLOCK_SCATTER / max(sine, 0.2);
float s = sin(polar);
vec3 d = vec3(s * cos(around), cos(polar), s * sin(around));
float beak = CLOCK_BEAK * (1.0 + (clockHash(index, 3u) - 0.5) * 2.0 * CLOCK_BEAK_VARIATION);
return vec4(d, beak);
}
vec3 clockStem(float t) {
float bow = CLOCK_STEM_LENGTH * tan(CLOCK_STEM_LEAN) * 0.5;
return vec3(bow * (t * t - 1.0), (t - 1.0) * CLOCK_STEM_LENGTH, 0.0);
}
struct ClockFiber {
vec3 a;
vec3 b;
float width;
float kind;
float seed;
vec3 pivot;
};
ClockFiber clockFiber(uint fiber) {
ClockFiber f;
uint perSeed = uint(CLOCK_PER_SEED);
uint seeded = uint(CLOCK_SEEDS) * perSeed;
f.seed = -1.0;
f.pivot = vec3(0.0);
if (fiber < seeded) {
uint index = fiber / perSeed;
uint part = fiber - index * perSeed;
vec4 seed = clockSeed(index);
vec3 d = seed.xyz;
vec3 helper = abs(d.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
vec3 t1 = normalize(cross(helper, d));
vec3 t2 = cross(d, t1);
vec3 tip = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE + seed.w);
f.seed = float(index);
f.pivot = d * CLOCK_RECEPTACLE;
if (part < uint(CLOCK_BRISTLES)) {
uint key = index * uint(CLOCK_BRISTLES) + part;
float jitter = clockHash(key, 5u);
float other = clockHash(key, 6u);
float bearing = (float(part) + (jitter - 0.5) * 0.7) * CLOCK_TAU / float(CLOCK_BRISTLES)
+ clockHash(index, 4u) * CLOCK_TAU;
float lift = CLOCK_CONE + (jitter - 0.5) * 0.35;
vec3 spread = cos(lift) * (cos(bearing) * t1 + sin(bearing) * t2) + sin(lift) * d;
f.a = tip;
f.b = tip + normalize(spread) * CLOCK_PAPPUS * (0.72 + 0.4 * other);
f.width = CLOCK_WIDTH_BRISTLE;
f.kind = FIBER_BRISTLE;
} else if (part == uint(CLOCK_BRISTLES)) {
f.a = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE);
f.b = tip;
f.width = CLOCK_WIDTH_BEAK;
f.kind = FIBER_BEAK;
} else {
f.a = d * CLOCK_RECEPTACLE;
f.b = d * (CLOCK_RECEPTACLE + CLOCK_ACHENE);
f.width = CLOCK_WIDTH_ACHENE;
f.kind = FIBER_ACHENE;
}
return f;
}
uint rest = fiber - seeded;
if (rest < uint(CLOCK_BRACTS)) {
float around = float(rest) / float(CLOCK_BRACTS) * CLOCK_TAU + clockHash(rest, 9u) * 0.4;
vec3 out1 = vec3(cos(around), 0.0, sin(around));
f.a = out1 * CLOCK_RECEPTACLE * 0.7 - vec3(0.0, CLOCK_RECEPTACLE * 0.75, 0.0);
f.b = f.a + normalize(out1 * (0.35 + 0.2 * clockHash(rest, 11u)) - vec3(0.0, 1.0, 0.0))
* CLOCK_BRACT_LENGTH * (0.8 + 0.4 * clockHash(rest, 10u));
f.width = CLOCK_WIDTH_BRACT;
f.kind = FIBER_BRACT;
return f;
}
rest -= uint(CLOCK_BRACTS);
if (rest < uint(CLOCK_STEM_PIECES)) {
float t0 = float(rest) / float(CLOCK_STEM_PIECES);
float t1 = float(rest + 1u) / float(CLOCK_STEM_PIECES);
f.a = clockStem(t0);
f.b = clockStem(t1);
float flare = smoothstep(0.75, 1.0, (t0 + t1) * 0.5);
f.width = mix(CLOCK_STEM_FOOT, CLOCK_STEM_HEAD, (t0 + t1) * 0.5) * (1.0 + 0.22 * flare);
f.kind = FIBER_STEM;
return f;
}
f.a = vec3(0.0, -CLOCK_RECEPTACLE * 0.15, 0.0);
f.b = f.a;
f.width = CLOCK_RECEPTACLE * 1.7;
f.kind = FIBER_RECEPTACLE;
return f;
}
vec3 clockHue(float kind) {
return kind < 0.5 ? vec3(1.0, 0.97, 0.9)
: kind < 1.5 ? vec3(0.95, 0.92, 0.82)
: kind < 2.5 ? vec3(0.5, 0.33, 0.17)
: kind < 3.5 ? vec3(0.27, 0.46, 0.14)
: kind < 4.5 ? vec3(0.4, 0.55, 0.2)
: vec3(0.6, 0.5, 0.28);
}
vec3 clockTinted(vec3 tone, vec3 hue, float amount) {
float weight = max(dot(hue, vec3(0.2126, 0.7152, 0.0722)), 1e-3);
return mix(tone, tone * hue / weight, amount);
}
vec4 clockShade(float kind, float cover, vec2 normal, float along, float glow, float night, vec3 ink, vec3 silver, float hue) {
float behind = clamp((glow - 0.55) / 1.6, 0.0, 1.0);
vec3 paper;
vec3 light;
float strength;
if (kind < 0.5) {
paper = ink * mix(9.0, 13.0, behind);
light = silver * glow;
strength = 0.5 * (1.0 - 0.7 * along) * (1.0 - 0.3 * behind);
} else if (kind < 1.5) {
paper = ink * 6.0;
light = silver * glow * 0.75;
strength = 0.55;
} else if (kind < 2.5) {
float taper = smoothstep(0.0, 0.25, along) * smoothstep(1.0, 0.6, along);
float rib = 0.8 + 0.2 * cos(normal.x * 9.42);
paper = ink * 1.6 * rib;
light = silver * 0.18 * rib;
strength = 0.92 * taper;
} else if (kind < 3.5) {
float rib = 1.0 - 0.35 * exp(-normal.x * normal.x * 18.0);
paper = ink * 3.4 * rib;
light = silver * 0.26 * rib;
strength = 0.85 * (1.0 - 0.7 * along * along);
} else if (kind < 4.5) {
float round = sqrt(max(1.0 - normal.x * normal.x, 0.0));
float side = 0.55 + 0.45 * clamp(-normal.x * 0.8 + 0.2, -1.0, 1.0);
float rim = pow(abs(normal.x), 4.0) * behind;
paper = ink * (mix(2.4, 7.5, round * side) + 6.0 * rim);
light = silver * (mix(0.12, 0.42, round * side) + 0.5 * rim);
strength = 1.0;
} else {
float r = min(dot(normal, normal), 1.0);
vec3 n = vec3(normal.x, -normal.y, sqrt(1.0 - r));
float lit = max(dot(n, normalize(vec3(-0.45, 0.55, 0.7))), 0.0);
paper = ink * mix(1.2, 2.8, lit);
light = silver * mix(0.06, 0.2, lit);
strength = 1.0;
}
vec3 own = clockHue(kind);
vec3 inked = mix(clockTinted(paper, own, hue), clockTinted(light, own, hue), night);
return vec4(inked, clamp(cover * strength, 0.0, 1.0));
}
#endif`,tn={x:1.35,z:.62},nn={lean:.035,rate:.9},rn={reach:.13,frequency:1.1,damping:.14},an=`
${en}
${K}
uniform vec2 uViewport;
uniform vec4 uHead;
attribute vec2 corner;
attribute float fiber;
varying float vCover;
varying vec2 vShape;
varying float vRun;
varying float vHalf;
varying float vAlong;
varying float vKind;
varying float vFar;
varying float vHue;
varying vec3 vView;
void main() {
ClockFiber f = clockFiber(uint(fiber));
vec4 ca = projectionMatrix * modelViewMatrix * vec4(f.a, 1.0);
vec4 cb = projectionMatrix * modelViewMatrix * vec4(f.b, 1.0);
vec2 sa = ca.xy / ca.w * 0.5 * uViewport;
vec2 sb = cb.xy / cb.w * 0.5 * uViewport;
vec2 run = sb - sa;
float runLength = length(run);
vec2 along = runLength > 1e-4 ? run / runLength : vec2(1.0, 0.0);
vec2 across = vec2(-along.y, along.x);
float taper = abs(f.kind - FIBER_BRACT) < 0.5 ? mix(1.0, CLOCK_BRACT_TIP, corner.x) : 1.0;
float pixels = f.width * taper * uViewport.y * 0.5 * projectionMatrix[1][1] / mix(ca.w, cb.w, corner.x);
vHalf = max(pixels, 1.0) * 0.5;
vCover = pixels / max(pixels, 1.0);
float cap = f.kind > 3.5 ? vHalf + 1.0 : 0.0;
float s = mix(-cap, runLength + cap, corner.x);
float t = runLength > 1e-4 ? clamp(s / runLength, 0.0, 1.0) : 0.5;
float side = corner.y * (vHalf + 1.0);
vShape = vec2(s, side);
vRun = runLength;
vAlong = t;
vKind = f.kind;
vec4 clip = mix(ca, cb, t);
float w = (ca.w + cb.w) * 0.5;
vec2 screen = sa + along * s + across * side;
gl_Position = vec4(screen / (0.5 * uViewport) * w, clip.z / clip.w * w, w);
vView = (modelViewMatrix * vec4(mix(f.a, f.b, t), 1.0)).xyz;
vFar = clamp((uHead.z - vView.z) / uHead.w, 0.0, 1.0);
vHue = developedAt((modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz);
}
`,on=`
${en}
uniform float uNight;
uniform float uOpacity;
uniform vec3 uSunView;
uniform vec3 uInk;
uniform vec3 uSilver;
varying float vCover;
varying vec2 vShape;
varying float vRun;
varying float vHalf;
varying float vAlong;
varying float vKind;
varying float vFar;
varying float vHue;
varying vec3 vView;
void main() {
float over = vShape.x < 0.0 ? vShape.x : max(vShape.x - vRun, 0.0);
float edge = clamp(vHalf + 0.5 - length(vec2(over, vShape.y)), 0.0, 1.0);
vec2 normal = vec2(vShape.y, over) / max(vHalf, 1e-4);
float behind = max(dot(normalize(vView), uSunView), 0.0);
float glow = 0.55 + 1.6 * pow(behind, 3.0);
vec4 inked = clockShade(vKind, vCover * edge, normal, vAlong, glow, uNight, uInk, uSilver, vHue);
float far = vKind < 2.5 ? vFar : 0.0;
float alpha = inked.a * uOpacity * (1.0 - 0.45 * far);
if (alpha < 0.004) discard;
if (abs(vKind - FIBER_STEM) < 0.5 && over != 0.0 && alpha < 0.5) discard;
gl_FragColor = vec4(inked.rgb, alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}
`,sn=class{root=new se;frame=new se;#e=[];#t;#n=new j;#r=new j;#i=new a(0,rn.frequency,rn.damping);#a=new M;constructor(e,t){this.root.position.set(tn.x,e(tn.x,tn.z),tn.z),this.root.rotation.y=Math.atan2(-et.z,et.x);let n=ze(0,{x:0,y:0,z:0});this.frame.position.set(-n.x,-n.y,-n.z),this.root.add(this.frame),this.root.userData.part=`clock`;let r=[],i=[];for(let e=0;e<We.count;e+=1)(Re(e)?r:i).push(e);let a={...t,uViewport:{value:new B(1,1)},uHead:{value:new w(0,0,0,Ve)},uNight:{value:0},uOpacity:{value:1},uSunView:{value:new j(0,0,1)},uInk:{value:new j(.03,.03,.03)},uSilver:{value:new j(.75,.78,.82)}};this.#t=a;for(let[e,t,n]of[[r,!0,3],[i,!1,4]]){let r=new O;r.setAttribute(`corner`,new V(new Float32Array([0,-1,1,-1,1,1,0,1]),2)),r.setIndex([0,1,2,0,2,3]),r.setAttribute(`fiber`,new E(Float32Array.from(e),1)),r.instanceCount=e.length;let i=new R({uniforms:a,vertexShader:an,fragmentShader:on,transparent:!0,depthWrite:t,blending:1}),o=new T(r,i);o.frustumCulled=!1,o.renderOrder=n,this.#e.push({mesh:o,geometry:r,material:i}),this.frame.add(o)}}update(e,t,n,r,i,a,o,s){this.#i.target=Math.min(Math.max(n,-1),1)*rn.reach,this.#i.update(Math.min(r,.1));let c=nn.lean*(.35+.65*t);this.root.rotation.x=Math.sin(e*nn.rate)*c*.6+this.#i.value*.35,this.root.rotation.z=Math.sin(e*nn.rate*.73+1.3)*c+this.#i.value;let l=this.#t;l.uViewport.value.copy(i),l.uNight.value=s.night,l.uOpacity.value=s.opacity,l.uInk.value.copy(s.ink),l.uSilver.value.copy(s.silver);for(let{mesh:e}of this.#e)e.visible=s.opacity>.001;l.uSunView.value.copy(this.#n.copy(o).transformDirection(a)),this.frame.updateWorldMatrix(!0,!1),this.#r.setFromMatrixPosition(this.frame.matrixWorld).applyMatrix4(a),l.uHead.value.z=this.#r.z}clipMatrix(e){return this.frame.updateWorldMatrix(!0,!1),this.#a.copy(e.projectionMatrix).multiply(e.matrixWorldInverse).multiply(this.frame.matrixWorld)}dispose(){for(let{geometry:e,material:t}of this.#e)e.dispose(),t.dispose()}},cn={high:{voxel:.008,rays:16,reach:.26},medium:{voxel:.01,rays:10,reach:.22},low:{voxel:.013,rays:8,reach:.16},handset:{voxel:.016,rays:6,reach:.14}};function ln(e){return Array.from({length:e},(t,n)=>{let r=(n+.5)/e,i=Math.sqrt(r),a=n*2.399963229728653;return new j(i*Math.cos(a),i*Math.sin(a),Math.sqrt(1-r))})}function un(e){let t=[],n=new de,r=new j;return e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof T)||e.name===`ground`)return;let i=e.geometry.getAttribute(`position`),a=e.geometry.getAttribute(`normal`);if(!i||!a)return;n.getNormalMatrix(e.matrixWorld);let o=new Float32Array(i.count*3),s=new Float32Array(i.count*3);for(let t=0;t<i.count;t+=1)r.fromBufferAttribute(i,t).applyMatrix4(e.matrixWorld),o.set([r.x,r.y,r.z],t*3),r.fromBufferAttribute(a,t).applyMatrix3(n).normalize(),s.set([r.x,r.y,r.z],t*3);t.push({mesh:e,positions:o,normals:s})}),t}async function dn(e,t,n=cn.high){let r=un(e);if(!r.length)return;let i=ne(),a=n.voxel,o=n.rays,s=n.reach,c=ln(o),l=new j(1/0,1/0,1/0),u=new j(-1/0,-1/0,-1/0);for(let{positions:e}of r)for(let t=0;t<e.length;t+=3)l.min(new j(e[t],e[t+1],e[t+2])),u.max(new j(e[t],e[t+1],e[t+2]));l.subScalar(a*2),u.addScalar(a*2);let d=Math.ceil((u.x-l.x)/a),f=Math.ceil((u.y-l.y)/a),p=Math.ceil((u.z-l.z)/a),m=new Uint8Array(d*f*p),h=(e,t,n)=>{let r=Math.floor((e-l.x)/a),i=Math.floor((t-l.y)/a),o=Math.floor((n-l.z)/a);return r<0||i<0||o<0||r>=d||i>=f||o>=p?-1:(o*f+i)*d+r};for(let{mesh:e,positions:t}of r){let n=e.geometry.index,r=n?n.count:t.length/3;for(let e=0;e<r;e+=3){await i();let r=(n?n.getX(e):e)*3,o=(n?n.getX(e+1):e+1)*3,s=(n?n.getX(e+2):e+2)*3,c=Math.max(Math.hypot(t[o]-t[r],t[o+1]-t[r+1],t[o+2]-t[r+2]),Math.hypot(t[s]-t[r],t[s+1]-t[r+1],t[s+2]-t[r+2])),l=Math.max(1,Math.ceil(c/(a*.5)));for(let e=0;e<=l;e+=1)for(let n=0;n<=l-e;n+=1){let i=e/l,a=n/l,c=h(t[r]+(t[o]-t[r])*i+(t[s]-t[r])*a,t[r+1]+(t[o+1]-t[r+1])*i+(t[s+1]-t[r+1])*a,t[r+2]+(t[o+2]-t[r+2])*i+(t[s+2]-t[r+2])*a);c>=0&&(m[c]=1)}}}let g=new j,_=new j,v=new j,y=new j,b=Math.floor(s/a);for(let{mesh:e,positions:n,normals:l}of r){let r=new Float32Array(n.length/3);for(let e=0;e<r.length;e+=1){await i(),v.set(l[e*3],l[e*3+1],l[e*3+2]),g.set(Math.abs(v.y)<.9?0:1,+(Math.abs(v.y)<.9),0).cross(v).normalize(),_.crossVectors(v,g);let u=n[e*3]+v.x*a*1.6,d=n[e*3+1]+v.y*a*1.6,f=n[e*3+2]+v.z*a*1.6,p=0;for(let e of c){y.copy(g).multiplyScalar(e.x).addScaledVector(_,e.y).addScaledVector(v,e.z);for(let e=1;e<=b;e+=1){let n=e*a,r=u+y.x*n,i=d+y.y*n,o=f+y.z*n,c=h(r,i,o);if(c>=0&&m[c]||i<t(r,o)){p+=Math.max(0,1-n/s)**.6;break}}}r[e]=(1-p/o)**1.3}fn(e,r,2);for(let e=0;e<r.length;e+=1)r[e]=.32+.68*r[e];e.geometry.setAttribute(`occlusion`,new L(r,1))}}function fn(e,t,n){let r=e.geometry.index;if(!r)return;let i=new Float32Array(t.length),a=new Float32Array(t.length);for(let e=0;e<n;e+=1){i.fill(0),a.fill(0);for(let e=0;e<r.count;e+=3){let n=r.getX(e),o=r.getX(e+1),s=r.getX(e+2),c=(t[n]+t[o]+t[s])/3;for(let e of[n,o,s])i[e]+=c,a[e]+=1}for(let e=0;e<t.length;e+=1)a[e]&&(t[e]=t[e]*.4+i[e]/a[e]*.6)}}function pn(e){let t=e.geometry.getAttribute(`position`),n=e.geometry.index,r=t.count,i=Int32Array.from({length:r},(e,t)=>t),a=e=>{for(;i[e]!==e;)i[e]=i[i[e]],e=i[e];return e},o=(e,t)=>{let n=a(e),r=a(t);n!==r&&(i[n]=r)},s=new Map;for(let e=0;e<r;e+=1){let n=`${Math.round(t.getX(e)*1e4)},${Math.round(t.getY(e)*1e4)},${Math.round(t.getZ(e)*1e4)}`,r=s.get(n);r===void 0?s.set(n,e):o(e,r)}if(n)for(let e=0;e<n.count;e+=3)o(n.getX(e),n.getX(e+1)),o(n.getX(e),n.getX(e+2));let c=new Map;for(let e=0;e<r;e+=1){let t=a(e),n=c.get(t);n?n.push(e):c.set(t,[e])}let l=new Float32Array(r*3);for(let e of c.values()){let n=0,r=0,i=0;for(let a of e)n+=t.getX(a),r+=t.getY(a),i+=t.getZ(a);n/=e.length,r/=e.length,i/=e.length;let a=[0,0,0,0,0,0];for(let o of e){let e=t.getX(o)-n,s=t.getY(o)-r,c=t.getZ(o)-i;a[0]+=e*e,a[1]+=e*s,a[2]+=e*c,a[3]+=s*s,a[4]+=s*c,a[5]+=c*c}let o=[[a[0],a[1],a[2]],[a[1],a[3],a[4]],[a[2],a[4],a[5]]],s=a[0]+a[3]+a[5],c=new j(0,1,0);for(let e=0;e<64;e+=1)c=new j(s*c.x-(o[0][0]*c.x+o[0][1]*c.y+o[0][2]*c.z),s*c.y-(o[1][0]*c.x+o[1][1]*c.y+o[1][2]*c.z),s*c.z-(o[2][0]*c.x+o[2][1]*c.y+o[2][2]*c.z)).normalize();for(let t of e)l.set([c.x,c.y,c.z],t*3)}e.geometry.setAttribute(`panel`,new L(l,3))}var mn={high:{segments:768,crownRings:56,wallRings:132,stones:72,roots:46},medium:{segments:576,crownRings:48,wallRings:104,stones:54,roots:34},low:{segments:384,crownRings:36,wallRings:72,stones:30,roots:20},handset:{segments:256,crownRings:28,wallRings:48,stones:26,roots:18}},Z=mn.high.segments,hn=mn.high.crownRings,gn=mn.high.wallRings,_n=`
varying vec3 vEarth;
varying float vDepth;
varying float vCavity;
varying float vUp;
float earthHash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.17, 0.31, 0.73)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float earthNoise(vec3 p) {
vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
return mix(mix(mix(earthHash(i), earthHash(i + vec3(1,0,0)), f.x), mix(earthHash(i + vec3(0,1,0)), earthHash(i + vec3(1,1,0)), f.x), f.y),
mix(mix(earthHash(i + vec3(0,0,1)), earthHash(i + vec3(1,0,1)), f.x), mix(earthHash(i + vec3(0,1,1)), earthHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
struct Clod {
float f1;
float f2;
float id;
vec3 face;
};
Clod earthCells(vec3 p, float frequency) {
vec3 q = p * frequency;
vec3 base = floor(q);
vec3 f = q - base;
float best = 8.0;
float second = 8.0;
float id = 0.0;
vec3 nearest = vec3(0.0);
for (int z = -1; z <= 1; z++) {
for (int y = -1; y <= 1; y++) {
for (int x = -1; x <= 1; x++) {
vec3 g = vec3(float(x), float(y), float(z));
vec3 center = g + vec3(earthHash(base + g), earthHash(base + g + 11.3), earthHash(base + g + 27.7)) - f;
float distance = dot(center, center);
if (distance < best) {
second = best;
best = distance;
id = earthHash(base + g + 3.9);
nearest = center;
} else if (distance < second) {
second = distance;
}
}
}
}
return Clod(sqrt(best), sqrt(second), id, length(nearest) > 1e-4 ? -normalize(nearest) : vec3(0.0, 1.0, 0.0));
}
float resolved(float frequency) {
float footprint = length(fwidth(vEarth)) * frequency;
return 1.0 - smoothstep(0.25, 0.75, footprint);
}
float octave(vec3 p, float frequency) {
return mix(0.5, earthNoise(p * frequency), resolved(frequency));
}
`;function vn(e){let t=new fe({color:16777215,roughness:e===`stone`?.82:.97,metalness:0});return t.name=`meadow-${e}`,t.onBeforeCompile=t=>{t.vertexShader=(e===`earth`?`attribute float soilDepth;
attribute float cavity;
`:e===`stone`?`attribute float soilDepth;
`:``)+`varying vec3 vEarth;
varying float vDepth;
varying float vCavity;
varying float vUp;
`+t.vertexShader.replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
				vec4 earthPosition = vec4(transformed, 1.0);
				#ifdef USE_INSTANCING
					earthPosition = instanceMatrix * earthPosition;
				#endif
				vEarth = (modelMatrix * earthPosition).xyz;
				vDepth = ${e===`earth`||e===`stone`?`soilDepth`:`0.0`};
				vCavity = ${e===`earth`?`cavity`:`1.0`};
				vUp = normalize(mat3(modelMatrix) * objectNormal).y;`),t.fragmentShader=_n+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
			${e===`turf`?`
			// The turf between the blades: deep green, so a gap reads as shade, not soil.
			float large = earthNoise(vEarth * 3.6) * 0.6 + earthNoise(vEarth * 7.4 + 9.3) * 0.4;
			float small = octave(vEarth, 48.0);
			vec3 earth = mix(vec3(0.038, 0.054, 0.014), vec3(0.089, 0.105, 0.029), large) * (0.72 + small * 0.4);`:e===`stone`?`
			float grain = octave(vEarth, 90.0) * 0.5 + octave(vEarth, 23.0) * 0.5;
			vec3 earth = mix(vec3(0.09, 0.075, 0.058), vec3(0.2, 0.175, 0.14), grain);
			earth *= 0.8 + 0.4 * earthHash(floor(vEarth * 9.0));`:`
			// ── The earth, read as a soil profile ──────────────────────────────
			//
			// What a cut through a meadow shows first is not its texture, it is its
			// *layers*: a black root mat, a dark crumbling topsoil, then ocher
			// subsoil in blocky peds, then paler stony parent material at the
			// bottom. Each one has its own color, its own grain and its own size
			// of clod, and the boundaries between them wander. None of that was
			// here — the face had one brown, one clod frequency and a bedding term
			// so faint it never showed, so it read as a single molded mass. The
			// depth is the organizing signal now and everything else is keyed to it.
			//
			// The boundaries wander, or they are stripes on a pot.
			float wander = (earthNoise(vEarth * vec3(3.2, 0.7, 3.2)) - 0.5) * 0.085
				+ (earthNoise(vEarth * vec3(8.7, 1.5, 8.7)) - 0.5) * 0.03;
			float d = vDepth + wander;
			float topsoil = smoothstep(0.03, 0.11, d) * (1.0 - smoothstep(0.17, 0.36, d));
			float subsoil = smoothstep(0.18, 0.37, d) * (1.0 - smoothstep(0.54, 0.8, d));
			float parent = smoothstep(0.56, 0.86, d);

			// Warped coordinates, so nothing that follows lands on a lattice.
			vec3 warp = vec3(earthNoise(vEarth * 3.1 + 1.0), earthNoise(vEarth * 3.1 + 7.0), earthNoise(vEarth * 3.1 + 13.0)) - 0.5;
			vec3 q = vEarth + warp * 0.14;
			/*
			 * One cell field, at a frequency that changes with depth.
			 *
			 * Topsoil crumbles small, subsoil breaks into big blocky peds, and the
			 * parent material below is gravel. Three sizes, but a second and third
			 * evaluation of a twenty-seven-tap lattice is not affordable on a phone
			 * — and is not needed, because moving the *frequency* with depth is the
			 * same picture. A single unvarying size over the whole face was most of
			 * why it read as one material.
			 */
			float clodFrequency = mix(mix(30.0, 17.0, subsoil), 48.0, parent)
				* (0.82 + 0.4 * earthNoise(vEarth * 1.9 + 21.0));
			Clod cells = earthCells(q, clodFrequency);
			float sharp = resolved(clodFrequency);
			float clod = cells.id;
			// …and a second, finer break inside each ped.
			Clod crumbs = earthCells(q + 3.7, clodFrequency * 2.9);
			float fineSharp = resolved(clodFrequency * 2.9);

			/*
			 * Cracks, broken rather than netted.
			 *
			 * A complete polygon network is what a dried playa looks like, not what
			 * a spade through a meadow looks like, and drawing the whole net at one
			 * size gave the face a crocodile-skin read no better than the tripe it
			 * replaced — only more graphic about it. Soil parts along *some* of its
			 * boundaries and holds together along the rest, so the net is masked by
			 * its own noise field and only fragments of it survive. Two scales,
			 * because a ped that has parted from its neighbor is itself made of
			 * crumbs that have not — and the size wanders across the face as well
			 * as down it, because one constant cell size is what makes a procedural
			 * surface look procedural.
			 */
			float netMask = smoothstep(0.34, 0.72, earthNoise(vEarth * 7.3 + 4.4));
			float fineMask = smoothstep(0.3, 0.66, earthNoise(vEarth * 15.1 + 8.8));
			float crack = min(1.0,
				(1.0 - smoothstep(0.0, 0.11, cells.f2 - cells.f1)) * sharp * netMask
				+ (1.0 - smoothstep(0.0, 0.1, crumbs.f2 - crumbs.f1)) * fineSharp * fineMask * 0.55);
			// …and each ped is lit by which way its own face is turned.
			float facing = cells.face.y * 0.5 + 0.5;

			float grain = earthHash(floor(q * 52.0 + 3.7)) * 0.5 + earthNoise(q * 60.0) * 0.5;
			// Ridged noise creases where smooth noise only swells: this is what
			// makes earth read as broken rather than molded.
			float crumb = pow(1.0 - abs(2.0 * earthNoise(q * 34.0) - 1.0), 2.2) * resolved(34.0);
			float grit = pow(1.0 - abs(2.0 * earthNoise(q * 128.0) - 1.0), 3.0) * resolved(128.0);
			float large = earthNoise(vEarth * 3.6) * 0.62 + earthNoise(vEarth * 7.45 + 9.3) * 0.38;

			// ── The horizons' own colors ──────────────────────────────────────
			vec3 umber = vec3(0.082, 0.047, 0.023);
			vec3 ocher = vec3(0.355, 0.235, 0.119);
			vec3 loam = vec3(0.105, 0.064, 0.033);
			// Paler and drier at the bottom, but never gray: this is the same warm
			// ground further from the rain, not a different rock.
			vec3 gravelly = vec3(0.30, 0.232, 0.152);
			vec3 earth = mix(umber, ocher, large * 0.72);
			earth = mix(earth, loam, topsoil * 0.85);
			earth = mix(earth, gravelly, parent * 0.85);

			/*
			 * Bedding: level laminations, and only where a soil actually has them.
			 *
			 * Thin, close together, and drawn with ridged noise so they read as
			 * partings between layers rather than as a sine wave painted on. They
			 * are what says the earth was laid down over time instead of poured.
			 * The wander is deliberately weak here — a lamina follows the level far
			 * more closely than a horizon boundary does.
			 */
			float laminaY = vEarth.y * 46.0 + earthNoise(vEarth * vec3(2.4, 0.9, 2.4)) * 3.2;
			float lamina = pow(1.0 - abs(2.0 * fract(laminaY) - 1.0), 2.4) * resolved(46.0);
			earth *= 1.0 - lamina * 0.3 * max(subsoil, parent);

			// Clod to clod, the soil changes color and value; within one, it is grainy.
			earth *= 0.82 + 0.34 * clod;
			earth *= 0.9 + 0.2 * grain;
			earth *= 0.88 + 0.26 * crumb;
			// A ped's upward faces are dusty and lit; its undersides hold damp.
			earth *= mix(0.74, 1.16, facing);
			earth = mix(earth, earth * vec3(1.06, 1.0, 0.88), smoothstep(0.55, 1.0, facing) * 0.5);
			// The cracks between the peds are deep and dark — but an eighth of an
			// ink too much and the face stops being earth and becomes a net drawn
			// on earth.
			earth *= 1.0 - crack * 0.34;

			// Rain has run down this face: stains below the crevices, drawn out vertically.
			float stain = pow(1.0 - abs(2.0 * earthNoise(vEarth * vec3(23.0, 1.6, 23.0)) - 1.0), 2.0) * resolved(23.0);
			earth *= 1.0 - stain * 0.2 * smoothstep(0.05, 0.3, vDepth);
			// Dry dust settles on what faces the sky; the undersides stay dark and damp.
			float dust = smoothstep(0.35, 0.95, vUp) * (0.3 + 0.5 * clod);
			earth = mix(earth, vec3(0.3, 0.235, 0.15), dust * 0.3);
			earth *= mix(1.0, 0.66, smoothstep(0.1, -0.7, vUp));
			// Grit catches the light as points, not as a haze, and there is more of
			// it the deeper the soil goes.
			earth += vec3(0.085, 0.078, 0.062) * grit * smoothstep(0.1, 0.35, vDepth) * (0.6 + 0.9 * parent);

			// Under the turf, a dark root mat with a wandering, ragged lower edge.
			float ragged = (earthNoise(vEarth * vec3(6.5, 1.2, 6.5)) - 0.5) * 0.06
				+ (earthNoise(vEarth * vec3(19.0, 3.0, 19.0)) - 0.5) * 0.022;
			float fiber = octave(vEarth * vec3(1.0, 0.07, 1.0), 170.0);
			vec3 mat = mix(vec3(0.026, 0.019, 0.011), vec3(0.078, 0.053, 0.03), fiber);
			earth = mix(mat, earth, smoothstep(0.025, 0.085, vDepth + ragged));
			// Fine pale roots threading the topsoil.
			float threadNoise = earthNoise(vEarth * vec3(34.0, 5.0, 34.0));
			float thread = (1.0 - smoothstep(0.0, 0.03, abs(threadNoise - 0.5))) * resolved(34.0);
			earth = mix(earth, vec3(0.2, 0.15, 0.095), thread * (1.0 - smoothstep(0.08, 0.34, vDepth)) * 0.55);`}
			// The turf overhangs this face, and the first centimeters under it stand
			// in the grass's own shade. No shadow map carries a quarter of a million
			// blades, so the sod casts its shade here, ragged along its lower edge.
			float overhang = ${e===`earth`?`mix(0.4, 1.0, smoothstep(0.015, 0.14, vDepth + (earthNoise(vEarth * vec3(9.0, 2.0, 9.0)) - 0.5) * 0.05))`:`1.0`};
			diffuseColor.rgb *= earth * mix(0.62, 1.0, vCavity) * overhang;`),t.fragmentShader=t.fragmentShader.replace(`#include <aomap_fragment>`,`#include <aomap_fragment>
			// How much sky a point of the face can see: the deeper under the island
			// it hangs, the less. Without it a cut face is one flat value, which is
			// most of what makes rendered earth look like plastic.
			/*
			 * The stones were exempt from this, and it is why they read as lint.
			 *
			 * Their depth was written as the constant 0.6 and the falloff below was
			 * applied only to the face, so every pebble — however far under the
			 * island it was bedded — received full indirect light while the earth
			 * holding it received a third of it. They came out as pale cool flecks
			 * scattered over a dark warm face, which is exactly what a sticker
			 * looks like. A stone is part of the soil profile and is lit as one.
			 */
			float skyAccess = ${e===`earth`||e===`stone`?`mix(0.3, 1.0, exp(-vDepth * 1.15))`:`1.0`};
			reflectedLight.indirectDiffuse *= vCavity * skyAccess;
			reflectedLight.indirectSpecular *= vCavity * skyAccess;
			${e===`earth`?`/*
			 * A little warm light thrown back up under the keel.
			 *
			 * Nothing stands below a floating island, so the only light reaching its
			 * underside is sky access — which falls off with depth and left the
			 * bottom third of the face as featureless mud, the one part of it with
			 * no information in it at all. Real ground hanging in the open still
			 * picks up a warm bounce from everything below and around it. This is
			 * that, and it is weak on purpose: enough to keep the keel's form
			 * readable and never enough to light it.
			 */
			reflectedLight.indirectDiffuse += diffuseColor.rgb
				* vec3(0.052, 0.04, 0.026)
				* smoothstep(0.3, 1.0, vDepth)
				* smoothstep(0.1, -0.6, vUp)
				* vCavity;`:``}`),t.fragmentShader=t.fragmentShader.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
			roughnessFactor -= (1.0 - vCavity) * 0.22;
			${e===`earth`?`// A crack holds damp long after the faces round it have dried, and
			// the dust that settles on an upward face is the driest thing here.
			// Without this every horizon returns the same sheen and the strata
			// read as paint rather than as different materials.
			roughnessFactor -= crack * 0.14;
			roughnessFactor += smoothstep(0.55, 1.0, facing) * 0.04 * (1.0 - parent);
			roughnessFactor = clamp(roughnessFactor, 0.35, 1.0);`:``}`),t.fragmentShader=t.fragmentShader.replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
			{
				/*
				 * Relief, as a height field whose screen gradient bends the normal.
				 *
				 * The clod term used to be the nearest-center distance, which makes
				 * every cell a cone: a field of soft pimples, and the other half of
				 * why the face read as tripe. A ped is a *block* — broad flat faces
				 * with a groove where it has parted from its neighbors — so what is
				 * cut into the surface here is the crack, not the cell.
				 */
				float relief = octave(vEarth, 38.0) * 0.34 + octave(vEarth, 95.0) * 0.24
					+ pow(1.0 - abs(2.0 * octave(vEarth, 30.0) - 1.0), 2.0) * 0.38
					${e===`earth`?`- crack * 0.42 - lamina * 0.16 * max(subsoil, parent)`:``}
					${e===`earth`?`+ octave(vEarth * vec3(1.0, 0.07, 1.0), 180.0) * 0.3 * (1.0 - smoothstep(0.04, 0.1, vDepth))`:``};
				vec3 dx = dFdx(-vViewPosition), dy = dFdy(-vViewPosition);
				vec3 r1 = cross(dy, normal), r2 = cross(normal, dx);
				float det = dot(dx, r1);
				vec3 gradient = sign(det) * (dFdx(relief) * r1 + dFdy(relief) * r2);
				normal = normalize(abs(det) * normal - ${e===`turf`?`0.004`:e===`stone`?`0.006`:`0.009`} * gradient);
			}`),ye(t)},t.customProgramCacheKey=()=>`meadow-${e}-7`,t}async function yn(e,t,n,r=256,i=null){let a=2*n/r,o=new Float32Array(r*r),s=new Float32Array(r*r),c=new j,l=ne();e.updateMatrixWorld(!0);let u=[];e.traverse(e=>{e instanceof T&&e.visible&&e.name!==`ground`&&u.push(e)});let d=e=>{for(let t=e;t;t=t.parent)if(t===i)return!0;return!1};for(let e of u){let i=e.geometry.getAttribute(`position`);if(!i)continue;let u=!d(e),f=Math.max(1,Math.floor(i.count/6e3));for(let d=0;d<i.count;d+=f){await l(),c.fromBufferAttribute(i,d).applyMatrix4(e.matrixWorld);let p=c.y-t.crown(c.x,c.z);if(p<-.05||p>.45)continue;let m=Math.max(p,0),h=.018+m*.32,g=(.9*Math.exp(-m/.07)+.12)*f*.0022/(h*h*400),_=(c.x+n)/a,v=(n-c.z)/a,y=Math.ceil(h*2.6/a);for(let e=Math.max(0,Math.floor(v-y));e<=Math.min(r-1,v+y);e+=1)for(let t=Math.max(0,Math.floor(_-y));t<=Math.min(r-1,_+y);t+=1){let n=(t+.5-_)*a,i=(e+.5-v)*a,c=g*Math.exp(-(n*n+i*i)/(2*h*h));o[e*r+t]+=c,u&&(s[e*r+t]+=c)}}}let f=new Uint8Array(r*r*2);for(let e=0;e<o.length;e+=1)f[e*2]=Math.round(255*(.18+.82*Math.exp(-o[e]))),f[e*2+1]=Math.round(255*(.18+.82*Math.exp(-s[e])));let p=new A(f,r,r,P,ue);return p.flipY=!1,p.minFilter=ie,p.magFilter=Me,p.generateMipmaps=!0,p.unpackAlignment=2,p.needsUpdate=!0,p}function bn(e,t){let n=e.getAttribute(`normal`),r=Z+1;for(let e=0;e<t;e+=1){let t=e*r,i=t+Z,a=n.getX(t)+n.getX(i),o=n.getY(t)+n.getY(i),s=n.getZ(t)+n.getZ(i),c=Math.hypot(a,o,s)||1;n.setXYZ(t,a/c,o/c,s/c),n.setXYZ(i,a/c,o/c,s/c)}n.needsUpdate=!0}function xn(e){let t=e.getAttribute(`position`),n=e.getAttribute(`normal`),r=Z+1,i=gn+1,a=new Float32Array(t.count).fill(1),o=(e,t)=>t*r+(e+Z)%Z;for(let e=1;e<i-1;e+=1)for(let s=0;s<r;s+=1){let c=e*r+s,l=0;for(let[r,a]of[[1,.6],[4,.4]]){let u=Math.max(0,e-r),d=Math.min(i-1,e+r),f=[o(s-r,e),o(s+r,e),o(s,u),o(s,d)],p=0,m=0,h=0;for(let e of f)p+=t.getX(e),m+=t.getY(e),h+=t.getZ(e);let g=p/4-t.getX(c),_=m/4-t.getY(c),v=h/4-t.getZ(c),y=g*n.getX(c)+_*n.getY(c)+v*n.getZ(c);l+=a*Math.max(0,y)/(.0035*r)}a[c]=1-.7*U(0,1.6,l)}return a}function Sn(e,t){let n=[],r=(e,t,r)=>{let i=[],a=[],o=new j,s=new j,c=new j,l=new j(1,0,0);for(let n=0;n<e.length;n+=1){let u=e[n];o.subVectors(e[Math.min(n+1,e.length-1)],e[Math.max(n-1,0)]).normalize(),s.crossVectors(o,l).normalize(),c.crossVectors(s,o).normalize();let d=n/(e.length-1),f=t+(r-t)*d**.7;for(let t=0;t<5;t+=1){let r=t/5*Ke;if(i.push(u.x+(s.x*Math.cos(r)+c.x*Math.sin(r))*f,u.y+(s.y*Math.cos(r)+c.y*Math.sin(r))*f,u.z+(s.z*Math.cos(r)+c.z*Math.sin(r))*f),n<e.length-1){let e=n*5+t,r=n*5+(t+1)%5;a.push(e,r,e+5,r,r+5,e+5)}}}let u=new me;u.setAttribute(`position`,new L(i,3)),u.setIndex(a),u.computeVertexNormals(),n.push(u)},i=(e,t,n,a,o,s)=>{let c=[e.clone()],l=e.clone(),u=t.clone().multiplyScalar(.35);for(let e=1;e<=14;e+=1){let t=e/14,r=new j((G(o*7.1,t*3.1,1.3)-.5)*.9,0,(G(o*7.1,t*3.1,8.7)-.5)*.9),d=u.clone().multiplyScalar(1-t).add(r).add(new j(0,-1.1-t,0)).normalize();l.addScaledVector(d,n/14),c.push(l.clone()),s===0&&e===Math.round(14*(.3+.3*W(o,3,5)))&&W(o,4,5)>.45&&i(l,r.normalize(),n*.45,a*.55,o+101,1)}r(c,a,a*.18)};for(let n=0;n<t;n+=1){let t=W(n,1,23)*Ke,r=.12+W(n,2,23)**.7*.84,a=e.wall(t,r),o=Math.hypot(a.x,a.z)||1,s=new j(a.x/o,0,a.z/o);i(new j(a.x,a.y,a.z).addScaledVector(s,-.004),s,.05+W(n,3,23)**1.6*(.12+.2*r),.0012+W(n,5,23)*.0022,n*13.7,0)}let a=z(n);for(let e of n)e.dispose();let o=new fe({color:new k(`#6f563f`),roughness:.9});o.name=`meadow-hanging-roots`;let s=new T(a,o);return s.name=`hanging-roots`,s.castShadow=!0,s.receiveShadow=!0,s}async function Cn(e,t=mn.high){Z=t.segments,hn=t.crownRings,gn=t.wallRings;let n=new se;n.name=`living-earth`;let r=ne(),i=[],a=[];for(let t=0;t<=hn;t+=1){await r();let n=1-(1-t/hn)**1.6;for(let r=0;r<=Z;r+=1){let o=r/Z*Ke;if(t===hn){let t=e.rim(o);i.push(t.x,t.y,t.z)}else{let t=Qe(o)*n,r=Math.cos(o)*t,a=Math.sin(o)*t;i.push(r,e.crown(r,a),a)}if(t<hn&&r<Z){let e=t*(Z+1)+r,n=e+Z+1;a.push(e,e+1,n,n,e+1,n+1)}}}let o=new me;o.setAttribute(`position`,new L(i,3)),o.setIndex(a),o.computeVertexNormals(),bn(o,hn+1);let s=new T(o,vn(`turf`));s.name=`turf-crown`,s.receiveShadow=!0,n.add(s);let c=[],l=[],u=[];for(let t=0;t<=gn;t+=1){await r();let n=(t/gn)**1.55;for(let r=0;r<=Z;r+=1){let i=r/Z*Ke,a=t===0?e.rim(i):e.wall(i,n);if(c.push(a.x,a.y,a.z),l.push(t===0?0:a.depth),t<gn&&r<Z){let e=t*(Z+1)+r,n=e+Z+1;u.push(e,e+1,n,n,e+1,n+1)}}}let d=new me;d.setAttribute(`position`,new L(c,3)),d.setAttribute(`soilDepth`,new L(l,1)),d.setIndex(u),d.computeVertexNormals(),bn(d,gn+1),d.setAttribute(`cavity`,new L(xn(d),1));let f=new T(d,vn(`earth`));f.name=`solid-eroded-earth`,f.receiveShadow=!0,f.castShadow=!0,n.add(f);let p=new oe(1,4),m=p.getAttribute(`position`);for(let e=0;e<m.count;e+=1){let t=m.getX(e),n=m.getY(e),r=m.getZ(e),i=.84+.26*G(t*1.6+9,n*1.6,r*1.6)+.05*G(t*6,n*6+3,r*6);m.setXYZ(e,t*i,n*i,r*i)}p.computeVertexNormals();let h=t.stones,g=new le(p,vn(`stone`),h),_=new re,v=new k,y=new Float32Array(h);for(let t=0;t<h;t+=1){await r();let n=W(t,4,11)*Ke,i=.14+W(t,5,11)*.52,a=e.wall(n,i),o=Math.hypot(a.x,a.z)||1,s=.008+W(t,7,11)**2.6*.05;_.position.set(a.x-a.x/o*s*.82,a.y,a.z-a.z/o*s*.82),_.scale.set(s*(1.05+W(t,8,11)*.55),s*(.55+W(t,10,11)*.25),s),_.rotation.set(W(t,1,11)*.6,n+W(t,2,11),W(t,3,11)*.5),_.updateMatrix(),g.setMatrixAt(t,_.matrix);let c=W(t,9,11);g.setColorAt(t,v.setRGB(.62+.4*c,.56+.32*c,.46+.24*c)),y[t]=a.depth}return p.setAttribute(`soilDepth`,new E(y,1)),g.name=`bedded-stones`,g.castShadow=!0,g.receiveShadow=!0,n.add(g),n.add(Sn(e,t.roots)),n}var wn=Math.PI*2,Tn=(e,t,n)=>e+(t-e)*n,En=e=>Math.min(1,Math.max(0,e)),Dn=e=>e*e*(3-2*e);function On(e,t){let n=Math.imul(e+127,374761393)^Math.imul(t+619,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function kn(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Dn(e-i),s=Dn(t-a),c=(e,t)=>On((e%n+n)%n,(t%r+r)%r);return Tn(Tn(c(i,a),c(i+1,a),o),Tn(c(i,a+1),c(i+1,a+1),o),s)}function An(e,t,n){let r=new A(e,t,t,Te,ue);return r.colorSpace=n?_e:``,r.wrapS=r.wrapT=he,r.minFilter=ie,r.magFilter=Me,r.anisotropy=8,r.generateMipmaps=!0,r.flipY=!1,r.needsUpdate=!0,r}function jn(e,t){let n=new Uint8Array(e*e*4),r=new Uint8Array(e*e*4);for(let i=0;i<e;i+=1)for(let a=0;a<e;a+=1){let[o,s,c,l,u]=t(a/e,i/e,a,i),d=(i*e+a)*4;n[d]=Math.round(o),n[d+1]=Math.round(s),n[d+2]=Math.round(c),n[d+3]=255,r[d]=Math.round(En(l)*255),r[d+1]=Math.round(En(u)*255),r[d+2]=0,r[d+3]=255}return{color:An(n,e,!0),relief:An(r,e,!1)}}function Mn(){return jn(512,(e,t,n,r)=>{let i=kn(e*4,t*8,4,8),a=kn(e*2,t*16,2,16),o=t*34+i*1.2+Math.sin(e*wn)*.48,s=(.5+.5*Math.sin(o*wn))**9,c=(.5+.5*Math.sin((t*170+i*2.8)*wn))**18*Dn(En((kn(e*64,t*64,64,64)-.33)*2)),l=kn(e*8,t*64,8,64),u=En(.56+(a-.5)*.4+(l-.5)*.2-s*.19),d=(On(n,r)-.5)*2;return[Tn(57,130,u)-c*14+d,Tn(32,91,u)-c*10+d,Tn(20,55,u)-c*6+d,.55-c*.35-s*.085+(l-.5)*.12,.38+s*.12+c*.24+(l-.5)*.08]})}function Nn(){return jn(256,(e,t,n,r)=>{let i=e*20+Math.sin(t*wn*3)*.032,a=t*20+Math.sin(e*wn*2)*.035,o=Math.max(0,Math.sin(i*Math.PI))**.48,s=Math.max(0,Math.sin(a*Math.PI))**.48,c=Math.floor(i)+Math.floor(a)&1?Math.max(o*.9,s*.54):Math.max(s*.9,o*.54),l=kn(e*8,t*8,8,8),u=On(n,r)-.5,d=c*8+(l-.5)*10+u*2;return[218+d,212+d,197+d,.25+c*.47+(l-.5)*.11+u*.06,.9-c*.09+u*.025]})}var Pn=`
varying vec3 vAtelierPosition;
float atelierHash(vec3 p) {
p = fract(p * 0.1031);
p += dot(p, p.yzx + 33.33);
return fract((p.x + p.y) * p.z);
}
float atelierNoise(vec3 p) {
vec3 i = floor(p), f = fract(p);
f = f * f * (3.0 - 2.0 * f);
return mix(
mix(mix(atelierHash(i), atelierHash(i + vec3(1,0,0)), f.x),
mix(atelierHash(i + vec3(0,1,0)), atelierHash(i + vec3(1,1,0)), f.x), f.y),
mix(mix(atelierHash(i + vec3(0,0,1)), atelierHash(i + vec3(1,0,1)), f.x),
mix(atelierHash(i + vec3(0,1,1)), atelierHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
`;function Fn(e,t){e.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vAtelierPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
			vAtelierPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=Pn+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,t===`brass`?`#include <color_fragment>
				float patina = smoothstep(0.57, 0.86, atelierNoise(vAtelierPosition * 39.0));
				float hammer = atelierNoise(vAtelierPosition * 280.0);
				diffuseColor.rgb *= mix(vec3(1.0, 0.94, 0.82), vec3(0.38, 0.47, 0.36), patina * 0.66);
				diffuseColor.rgb *= 0.91 + hammer * 0.13;`:`#include <color_fragment>
				float clay = atelierNoise(vAtelierPosition * 480.0);
				float speck = smoothstep(0.91, 0.98, atelierHash(floor(vAtelierPosition * 1800.0)));
				diffuseColor.rgb *= mix(vec3(1.0), vec3(0.51, 0.42, 0.29), speck * 0.27);
				diffuseColor.rgb *= 0.965 + clay * 0.045;`),e.fragmentShader=e.fragmentShader.replace(`#include <roughnessmap_fragment>`,t===`brass`?`#include <roughnessmap_fragment>
roughnessFactor += patina * 0.2 + (hammer - 0.5) * 0.09;`:`#include <roughnessmap_fragment>
roughnessFactor += (clay - 0.5) * 0.035;`)},e.customProgramCacheKey=()=>`meadow-original-${t}-1`}function In(e){let t=e.onBeforeCompile,n=e.customProgramCacheKey.bind(e);e.onBeforeCompile=(n,r)=>{t.call(e,n,r),n.vertexShader=`attribute float occlusion;
varying float vBakedOcclusion;
`+n.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vBakedOcclusion = occlusion;`),n.fragmentShader=`varying float vBakedOcclusion;
`+n.fragmentShader.replace(`#include <aomap_fragment>`,`#include <aomap_fragment>
				reflectedLight.indirectDiffuse *= vBakedOcclusion;
				reflectedLight.indirectSpecular *= vBakedOcclusion;
				reflectedLight.directDiffuse *= mix(1.0, vBakedOcclusion, 0.25);`)},e.customProgramCacheKey=()=>`${n()}|occluded`}function Ln(e){e.onBeforeCompile=e=>{e.vertexShader=`attribute vec3 panel;
varying float vSeam;
`+e.vertexShader.replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
vSeam = abs(dot(normalize(objectNormal), normalize(panel))) - 0.7071;`),e.fragmentShader=`varying float vSeam;
`+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
				{
					float aa = max(fwidth(vSeam), 1e-4);
					float cord = 1.0 - smoothstep(0.035 - aa, 0.035 + aa, abs(vSeam));
					float groove = (1.0 - smoothstep(0.012, 0.012 + aa * 1.5, abs(abs(vSeam) - 0.05))) * (1.0 - cord);
					diffuseColor.rgb *= 1.0 + cord * 0.07 - groove * 0.42;
				}`)},e.customProgramCacheKey=()=>`meadow-linen-piped-1`}function Rn(e){let t=Mn(),n=Nn(),r=new N({name:`atelier-oiled-walnut`,map:t.color,bumpMap:t.relief,bumpScale:.0013,roughnessMap:t.relief,roughness:.9,clearcoat:.3,clearcoatRoughness:.3,side:2}),i=new N({name:`atelier-woven-flax`,map:n.color,bumpMap:n.relief,bumpScale:.0018,roughnessMap:n.relief,roughness:1,sheen:.85,sheenColor:15984336,sheenRoughness:.72,specularIntensity:.32,side:2}),a=new N({name:`atelier-ivory-stoneware`,color:15657434,roughness:.23,clearcoat:.86,clearcoatRoughness:.11,side:2});Fn(a,`ceramic`);let o=new N({name:`atelier-coffee`,color:2298376,roughness:.16,clearcoat:.92,clearcoatRoughness:.07}),s=new N({name:`atelier-aged-brass`,color:11967073,metalness:.82,roughness:.36,clearcoat:.12,clearcoatRoughness:.3,side:2});Fn(s,`brass`);let c=new N({name:`atelier-lantern-glass`,color:13950408,metalness:.04,roughness:.1,clearcoat:1,clearcoatRoughness:.06,transparent:!0,opacity:.18,depthWrite:!1,side:2});Ln(i);let l=[r,i,a,o,s,c];for(let e of[r,i,a,o,s])In(e);let u=new Set,d=(e,t)=>{let n=e.name.toLowerCase(),l=t.name.toLowerCase();return n.includes(`ground`)||l.includes(`ground`)?e:(u.add(e),n.includes(`glass`)?c:n.includes(`lantern`)?s:n.includes(`coffee`)?o:n.includes(`porcelain`)?a:n.includes(`teddy`)||n.includes(`linen`)||l.includes(`cushion`)?i:r)};e.traverse(e=>{e instanceof T&&(e.material=Array.isArray(e.material)?e.material.map(t=>d(t,e)):d(e.material,e))});let f=new Set;for(let e of u){for(let t of Object.values(e))t instanceof je&&f.add(t);e.dispose()}for(let e of f)e.dispose();let p=!1;return{dispose(){if(!p){p=!0;for(let e of l)e.dispose();for(let e of[t.color,t.relief,n.color,n.relief])e.dispose()}}}}var zn={url:`/generated/meadow-original/bd49d204e99d/meadow.glb`,gzip:`/generated/meadow-original/bd49d204e99d/meadow.glb.gz`},Bn={zenith:{l:.825,c:.035,h:240},horizon:{l:.95,c:.025,h:85},glow:{l:.975,c:.035,h:77},cloud:{l:.965,c:.01,h:92},shade:{l:.875,c:.021,h:244}},Vn={zenith:{l:.265,c:.045,h:268},horizon:{l:.385,c:.051,h:249},glow:{l:.47,c:.042,h:236},cloud:{l:.42,c:.031,h:252},shade:{l:.33,c:.036,h:256}},Q=e=>new k(...u(e)),Hn=`
uniform vec4 uFrame;
out vec2 vNdc;
out vec2 vClip;
void main() {
vClip = position.xy;
vNdc = position.xy * uFrame.xz + uFrame.yw;
gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Un=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
uniform mat4 uInverseProjection;
uniform mat4 uCameraWorld;
uniform vec3 uSunDir;
uniform float uNight;
uniform float uTime;
uniform sampler2D uNoise;
uniform vec2 uCenter;
uniform vec2 uRadius;
uniform vec2 uSun;
uniform float uAspect;
uniform float uBase;
uniform float uPresence;
uniform vec3 uDayZenith, uDayHorizon, uDayGlow, uDayCloud, uDayShade;
uniform vec3 uNightZenith, uNightHorizon, uNightGlow, uNightCloud, uNightShade;
${K}
in vec2 vNdc;
in vec2 vClip;
float hash(vec2 p) {
p = fract(p * vec2(443.897, 441.423));
p += dot(p, p.yx + 19.19);
return fract((p.x + p.y) * p.x);
}
#define CLOUD_DRIFT 3.1
float air(vec2 p) {
float r2 = dot(p, p);
return exp(-r2 * 2.5) * (1.0 - smoothstep(0.62, 1.5, r2));
}
float cloudNoise(vec2 p) {
float a = texture(uNoise, p).r;
float b = texture(uNoise, p * 2.07 + vec2(0.13, 0.27)).g;
float c = texture(uNoise, p * 4.13 + vec2(0.61, 0.08)).b;
return a * 0.58 + b * 0.29 + c * 0.13;
}
float stars(vec2 p) {
vec2 cell = floor(p);
vec2 center = vec2(hash(cell + 1.31), hash(cell + 7.72)) * 0.68 + 0.16;
vec2 delta = fract(p) - center;
float radius = mix(0.022, 0.048, hash(cell + 4.2));
float aa = max(length(fwidth(p)), 0.015);
float point = 1.0 - smoothstep(radius, radius + aa, length(delta));
float keep = step(0.967, hash(cell + 5.7));
float breathe = 0.88 + 0.12 * sin(uTime * 0.31 + hash(cell) * 31.0);
return point * keep * breathe;
}
void main() {
vec2 p = (vNdc - uCenter) / uRadius;
float highAir = air((p - vec2(-0.08, 0.06)) / vec2(1.08, 0.96));
float lowAir = air((p - vec2(0.06, -0.3)) / vec2(1.18, 0.84));
float density = highAir * 0.84 + lowAir * 0.5;
float edge = (1.0 - smoothstep(0.72, 0.99, abs(vNdc.x)))
* (1.0 - smoothstep(0.76, 0.99, abs(vNdc.y)));
float floorFade = smoothstep(uBase - 0.95, uBase + 0.25, vNdc.y);
float opacity = (1.0 - exp(-density * 1.65)) * edge * floorFade * uPresence;
opacity *= mix(0.96, 0.78, uNight);
float slide = uTime * CLOUD_DRIFT;
float swell = sin(uTime * 0.021) * 0.035;
float deckNoise = cloudNoise(vec2(vNdc.x * 0.34 + slide * 0.0021, (vNdc.y - uBase) * 1.9 + swell) + 11.3);
float deckBand = smoothstep(uBase + 0.2, uBase - 0.65, vNdc.y)
* (1.0 - smoothstep(uBase - 1.3, uBase - 2.3, vNdc.y));
float deck = smoothstep(0.38, 0.74, deckNoise) * deckBand * edge;
float wisps = 0.0;
float aloft = 0.0;
#ifndef PLAIN_AIR
float wispA = smoothstep(0.48, 0.84, cloudNoise(vec2(vNdc.x * 0.4 + slide * 0.0012, vNdc.y * 2.6 - swell * 0.6) + 3.7));
float wispB = smoothstep(0.52, 0.88, cloudNoise(vec2(vNdc.x * 0.62 - slide * 0.0007, vNdc.y * 4.1 + swell) + 21.3));
wisps = (wispA * 0.6 + wispB * 0.4)
* smoothstep(uBase - 0.15, uBase + 0.55, vNdc.y)
* (1.0 - smoothstep(0.78, 1.0, vNdc.y))
* edge;
float aloftA = smoothstep(0.42, 0.80, cloudNoise(vec2(vNdc.x * 0.24 + slide * 0.0017, vNdc.y * 1.15 + swell * 1.4) + 47.1));
float aloftB = smoothstep(0.5, 0.88, cloudNoise(vec2(vNdc.x * 0.33 + slide * 0.0026, vNdc.y * 1.9 - swell) + 63.4));
aloft = (aloftA * 0.62 + aloftB * 0.48)
* smoothstep(0.06, 0.44, vNdc.y)
* (1.0 - smoothstep(0.74, 0.99, vNdc.y))
* edge;
#endif
opacity = max(opacity, deck * mix(0.66, 0.44, uNight));
opacity = max(opacity, wisps * mix(0.44, 0.3, uNight));
opacity = max(opacity, aloft * mix(0.3, 0.2, uNight));
vec2 toSun = (vNdc - uSun) * vec2(uAspect, 1.0);
float halo = exp(-length(toSun) * 3.4) * 0.55 + exp(-dot(toSun, toSun) * 22.0) * 0.45;
halo *= (1.0 - uNight * 0.82) * edge;
opacity = max(opacity, halo * 0.6);
if (opacity < 0.001) discard;
vec4 view = uInverseProjection * vec4(vClip, 1.0, 1.0);
vec3 direction = normalize((uCameraWorld * vec4(view.xyz / view.w, 0.0)).xyz);
float height = smoothstep(-0.46, 0.48, p.y);
vec3 zenith = mix(uDayZenith, uNightZenith, uNight);
vec3 horizon = mix(uDayHorizon, uNightHorizon, uNight);
vec3 color = mix(horizon, zenith, height);
vec2 lightCenter = mix(vec2(-0.38, -0.23), vec2(0.3, 0.12), uNight);
vec2 toLight = (p - lightCenter) * vec2(1.1, 1.45);
float aureole = exp(-dot(toLight, toLight) * 4.0);
float lightRay = pow(max(dot(direction, uSunDir), 0.0), 6.0);
color = mix(color, mix(uDayGlow, uNightGlow, uNight), aureole * 0.5 + lightRay * 0.08);
color += mix(uDayGlow, uNightGlow, uNight) * halo * 0.5;
float lining = exp(-abs(vNdc.x - uSun.x) * 1.2);
vec3 shaded = mix(uDayShade, uNightShade, uNight);
vec3 lit = mix(shaded, mix(uDayCloud, uDayGlow, 0.5), lining * 0.8);
lit = mix(lit, mix(uNightCloud, uNightGlow, 0.5), uNight * lining * 0.8);
color = mix(color, lit, clamp(deck * 0.8 + wisps * 0.5 + aloft * 0.45, 0.0, 1.0));
#ifndef PLAIN_AIR
vec2 drift = vec2(slide * 0.0011, slide * 0.00018);
vec2 cirrusUv = p * vec2(0.36, 0.63) + direction.xz * 0.08 + drift;
float warp = cloudNoise(cirrusUv * 0.6 + 0.32);
float streaks = cloudNoise(cirrusUv * vec2(0.75, 2.8) + vec2(warp * 0.16, 0.0));
float cloud = smoothstep(0.43, 0.7, streaks) * mix(1.0, 0.45, smoothstep(-0.12, 0.8, p.y));
color = mix(color, mix(uDayCloud, uNightCloud, uNight), cloud * mix(0.2, 0.16, uNight));
float pinpoints = stars((p + vec2(2.7, 1.4)) * vec2(18.0, 13.0));
float clearSky = smoothstep(-0.25, 0.2, p.y) * (1.0 - cloud * 0.7);
color += vec3(0.7, 0.82, 1.0) * pinpoints * clearSky * uNight * 0.65;
#endif
color = developed(color, uDeveloped);
gl_FragColor = vec4(color, opacity);
#include <tonemapping_fragment>
#include <colorspace_fragment>
gl_FragColor.rgb += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
}
`,Wn=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define CLOUD_DRIFT 3.1
uniform float uNight;
uniform float uTime;
uniform sampler2D uNoise;
uniform float uBase;
uniform float uPresence;
uniform vec3 uDayCloud, uNightCloud, uDayGlow, uNightGlow, uDayShade, uNightShade;
uniform vec2 uSun;
${K}
in vec2 vNdc;
float cloudNoise(vec2 p) {
float a = texture(uNoise, p).r;
float b = texture(uNoise, p * 2.07 + vec2(0.13, 0.27)).g;
float c = texture(uNoise, p * 4.13 + vec2(0.61, 0.08)).b;
return a * 0.58 + b * 0.29 + c * 0.13;
}
void main() {
float band = smoothstep(uBase + 1.05, uBase + 0.3, vNdc.y)
* (1.0 - smoothstep(uBase - 0.5, uBase - 1.4, vNdc.y));
float edge = (1.0 - smoothstep(0.55, 0.96, abs(vNdc.x)))
* (1.0 - smoothstep(0.6, 0.98, abs(vNdc.y)));
float swell = sin(uTime * 0.019 + 1.7) * 0.05;
float shape = cloudNoise(vec2(vNdc.x * 0.3 - uTime * CLOUD_DRIFT * 0.0016, (vNdc.y - uBase) * 1.6 + swell) + 31.7);
float veil = smoothstep(0.46, 0.84, shape) * band * edge * uPresence;
float opacity = veil * mix(0.105, 0.065, uNight);
if (opacity < 0.0015) discard;
float lining = exp(-abs(vNdc.x - uSun.x) * 1.1);
vec3 color = mix(
mix(uDayShade, uNightShade, uNight),
mix(uDayGlow, uNightGlow, uNight),
lining * 0.55
);
color = developed(color, uDeveloped);
gl_FragColor = vec4(color, opacity);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}
`,Gn=class{mesh;veil=null;uniforms={uInverseProjection:{value:new M},uCameraWorld:{value:new M},uSunDir:{value:new j(0,1,0)},uNight:{value:0},uTime:{value:0},uNoise:{value:null},uCenter:{value:new B(0,.1)},uRadius:{value:new B(1.02,1.04)},uBase:{value:-.3},uSun:{value:new B(-.5,.6)},uAspect:{value:1},uPresence:{value:.9},uFrame:{value:new w(1,0,1,0)},uDayZenith:{value:Q(Bn.zenith)},uDayHorizon:{value:Q(Bn.horizon)},uDayGlow:{value:Q(Bn.glow)},uDayCloud:{value:Q(Bn.cloud)},uDayShade:{value:Q(Bn.shade)},uNightShade:{value:Q(Vn.shade)},uNightZenith:{value:Q(Vn.zenith)},uNightHorizon:{value:Q(Vn.horizon)},uNightGlow:{value:Q(Vn.glow)},uNightCloud:{value:Q(Vn.cloud)}};constructor(e,t,n=!1){this.uniforms.uNoise.value=e,Object.assign(this.uniforms,t);let r=new me;r.setAttribute(`position`,new V(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let i=new R({glslVersion:be,defines:n?{PLAIN_AIR:``}:{},vertexShader:Hn,fragmentShader:Un,uniforms:this.uniforms,transparent:!0,depthTest:!0,depthWrite:!1});if(this.mesh=new T(r,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,n)return;let a=new R({glslVersion:be,vertexShader:Hn,fragmentShader:Wn,uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1});this.veil=new T(r,a),this.veil.frustumCulled=!1,this.veil.renderOrder=20}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.veil&&this.veil.material.dispose()}},Kn={[m.High]:{populations:{blades:229900,thatch:133100,wisps:6e3,fringe:9900,roots:4600,moss:31500,daisies:3600,buttercups:3600,clover:10900,poppies:3100},segments:5,pixelRatio:2,shadow:2048,shadowTaps:4,windHz:30,detail:`high`},[m.Medium]:{populations:{blades:140400,thatch:77400,wisps:3900,fringe:6600,roots:2900,moss:18100,daisies:2400,buttercups:2400,clover:6700,poppies:2200},segments:4,pixelRatio:1.5,shadow:2048,shadowTaps:4,windHz:30,detail:`medium`},[m.Handset]:{populations:{blades:62e3,thatch:34e3,wisps:1900,fringe:3400,roots:1300,moss:8200,daisies:1400,buttercups:1200,clover:3200,poppies:1100},segments:3,pixelRatio:1.25,shadow:1024,shadowTaps:2,windHz:20,detail:`handset`},[m.Low]:{populations:{blades:75e3,thatch:41100,wisps:2200,fringe:4e3,roots:1500,moss:9700,daisies:1500,buttercups:1300,clover:3600,poppies:1200},segments:3,pixelRatio:1.25,shadow:1024,shadowTaps:2,windHz:20,detail:`low`}};function qn(e){let t=ve.shadowmap_pars_fragment;if(t.includes(`meadow-smooth-pcf`))return;let n=t.indexOf(`float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;`),r=n<0?-1:t.indexOf(`) * 0.2;`,n);if(r<0)return;let i=(e-1)/2,a=(2/e).toFixed(4);ve.shadowmap_pars_fragment=t.slice(0,n)+`// meadow-smooth-pcf
				shadow = 0.0;
				for ( int i = 0; i < ${e}; i ++ ) {
					for ( int j = 0; j < ${e}; j ++ ) {
						vec2 offset = ( vec2( float( i ), float( j ) ) - ${i.toFixed(1)} ) * radius * ${a};
						shadow += texture( shadowMap, vec3( shadowCoord.xy + offset, shadowCoord.z ) );
					}
				}
				shadow *= ${(1/(e*e)).toFixed(6)}`+t.slice(r+7)}function Jn(){return 7}var Yn=11.9,Xn={wide:.63,compact:1.04},Zn={width:820,drop:.015},$={width:1.28,height:.96,air:.5},Qn=4.75,$n=11,er=new j(0,.56,0),tr={yaw:.24,pitch:.035},nr={yaw:.045,period:26},rr=.5,ir=11.3,ar=.55,or={eye:new j(.15,-.25,1).normalize(),distance:2.3,radius:.19,height:.46};function sr(e){let t=l((e-x.plunge[0])/(x.plunge[1]-x.plunge[0]));return .5-.5*Math.cos(Math.PI*t)}var cr=new j(0,1,0),lr={paper:new j(...Le.paper),void:new j(...Le.void),silver:new j(...Le.silver)},ur=90,dr=.76;function fr(e,t,n){let r=b(e,t,0),i=(e<=Zn.width?Xn.compact:Xn.wide)*e;return Math.min(r.radius*Yn,i,t*.76)*(1+.28*n)}function pr(e){let t=2*H/200,n=new Float32Array(40401),r=e.geometry.getAttribute(`position`);e.updateWorldMatrix(!0,!1);let i=new j;for(let a=0;a<r.count;a+=1){i.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld);let o=Math.round((i.x+H)/t),s=Math.round((H-i.z)/t);o>=0&&o<201&&s>=0&&s<201&&(n[s*201+o]=i.y)}return{at(e,r){let i=Math.min(Math.max((e+H)/t,0),199.9999),a=Math.min(Math.max((H-r)/t,0),199.9999),o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=(e,t)=>n[t*201+e];return(u(o,s)*(1-c)+u(o+1,s)*c)*(1-l)+(u(o,s+1)*(1-c)+u(o+1,s+1)*c)*l}}}function mr(e){let t=new Ce,n=new R({side:1,vertexShader:`
varying vec3 vDirection;
void main() {
vDirection = normalize(position);
gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fragmentShader:`
varying vec3 vDirection;
void main() {
float y = vDirection.y;
vec3 sky = mix(vec3(0.92, 0.88, 0.8), vec3(0.55, 0.66, 0.82), smoothstep(0.0, 0.6, y));
vec3 ground = mix(vec3(0.12, 0.14, 0.06), vec3(0.2, 0.22, 0.1), smoothstep(-0.4, 0.0, y));
vec3 sun = vec3(1.0, 0.85, 0.65) * pow(max(dot(vDirection, normalize(vec3(-0.6, 0.62, -0.5))), 0.0), 64.0) * 8.0;
gl_FragColor = vec4((y > 0.0 ? sky : ground) + sun, 1.0);
}`}),r=new ke(10,32,16);t.add(new T(r,n));let i=new xe(e),a=i.fromScene(t,.02);return i.dispose(),r.dispose(),n.dispose(),a}var hr=class{ignite=0;focus=0;#e=0;core=0;leave=0;suspended=!1;#t=!1;get standingBy(){return this.#t}set standingBy(e){this.#t=e,this.#I&&(this.#I.resting=e)}mirrored=!1;drawn=0;#n;#r;#i;#a=new Ce;#o=new De(20,1,.5,60);#s=new ct;#c=new St;#l=new Ne;#u=h.stage(`lens`);#d=0;#f=-1;#p=new AbortController;#m=null;#h=null;#g=null;#_=null;#v=null;#y=new j;#b=new j;#x=new j;#S=new j;#C=new B;#w=new M;#T=new j;#E=new j;#D=null;#O=new j;#k=[];#A=[];#j={sun:new ae,fill:new ae,hemisphere:new ce,lantern:new we(16777215,0,3.5,2),flame:new T(new ke(.011,12,8),new D({color:0}))};#M=new j(0,.2,1).normalize();#N=new j;#P=new j;#F=[];#I=null;#L=0;#R=0;#z={left:0,top:0,width:0,height:0};#B=!1;#V=!1;#H=!1;#U=!0;#W=0;#G=0;#K=0;#q=``;#J=null;#Y=0;#X=0;#Z={};#Q=-1;constructor(e,t={}){this.#n=e,this.#r=t,this.#i=Kn[h.tier]}debug(){return{tier:h.tier,blades:this.#g?.count??0,drawn:this.#g?.drawn??0,coverage:this.#g?.covered??1,flowers:this.#g?.flowers??0,builtMs:this.#X,phases:this.#Z,box:this.#z,pixelRatio:this.#m?.getPixelRatio()??0,scale:this.#u.scale,divisor:this.#u.divisor,calls:this.#m?.info.render.calls??0,triangles:this.#m?.info.render.triangles??0,clock:{head:He(0,0,0),foot:He(0,-.3,0)}}}get profile(){let e=this.#J;if(!e||!e.available)return null;let t={},n={};for(let[r,i]of e.spans)t[r]=+i.ms.toFixed(3),n[r]=i.samples;return{totalMs:+e.totalMs.toFixed(3),passes:t,shares:n}}get governor(){return{...this.#u.state,pixels:this.#n.width*this.#n.height}}start(){if(!(this.#m||this.#V)){if(!h.canRender){this.#r.onUnavailable?.(`WebGL2 is unavailable`);return}try{let e=Ee({canvas:this.#n});e.setClearColor(0,0),e.outputColorSpace=_e,e.toneMapping=Jn(),e.shadowMap.enabled=!0,e.shadowMap.type=1,e.shadowMap.autoUpdate=!1,this.#m=e,f()&&(this.#J=new d(e.getContext(),!0,`meadow`)),this.#h=mr(e),this.#a.environment=this.#h.texture,this.#$(),this.#re();let t=C.hold(this.#n,{park:()=>{e.setPixelRatio(1),e.setSize(16,16,!1)},unpark:()=>this.#se(!0)});this.#I=t,t.resting=this.#t,this.#F.push(()=>{t.dispose(),this.#I=null}),this.#F.push(v.mount(),n.on(`render`,this.#ce)),f()&&(Object.defineProperty(window,"__meadow",{value:this,configurable:!0}),Object.defineProperty(window,"__meadowRoot",{value:this.#a,configurable:!0}),Object.defineProperty(window,"__meadowInvalidate",{value:()=>{this.#q=``},configurable:!0})),this.#te()}catch(e){this.#r.onUnavailable?.(String(e))}}}#$(){let{sun:e,fill:t,hemisphere:n,lantern:r,flame:i}=this.#j;qn(this.#i.shadowTaps),e.castShadow=!0,e.shadow.mapSize.set(this.#i.shadow,this.#i.shadow);let a=e.shadow.camera;a.left=-2.85,a.right=2.85,a.top=2.85,a.bottom=-2.85,a.near=.5,a.far=14,e.shadow.bias=-35e-5,e.shadow.normalBias=.012,e.shadow.radius=3.5,e.target.position.set(0,.5,0),t.target.position.set(0,.3,0),this.#a.add(e,e.target,t,t.target,n,r,i)}async#ee(){let{bytes:t}=await Oe({url:`${e}${zn.url}`,gzip:`${e}${zn.gzip}`},{signal:this.#p.signal});return new ge().setMeshoptDecoder(F).parseAsync(t,``)}async#te(){try{let e=await this.#ee(),t=performance.now();if(this.#V){e.scene.traverse(e=>{if(e instanceof T){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}});return}let n=this.#m,r=this.#s,i=null;if(e.scene.traverse(e=>{if((e.name.startsWith(`anchor-`)||e.name.startsWith(`socket-`))&&this.#k.push(e),e instanceof T){if(e.name===`ground`){i=e;return}e.castShadow=!0,e.receiveShadow=!0}}),!i)throw Error(`The meadow has no ground`);let a=i,o=this.#i.detail,s=async e=>{this.#Z[e]=Math.round(performance.now()-c),await new Promise(e=>requestAnimationFrame(e)),c=performance.now()},c=performance.now(),l=pr(a);a.removeFromParent(),a.geometry.dispose();let u=new $e(l);await s(`ground`);let d=await Cn(u,mn[o]);await s(`terrain`),this.#A.push(Rn(e.scene));let f=e.scene.getObjectByName(`chair-cushions`);f instanceof T&&pn(f),await dn(e.scene,(e,t)=>u.crown(e,t)+.055,cn[o]),await s(`occlusion`),await s(`materials`);let p=e.scene.getObjectByName(`lantern`)??null,m=await yn(e.scene,u,H,o===`low`?128:256,p);this.#A.push(m),await s(`contact`);let h=Rt();this.#A.push(h);let g=this.#ae(),_=await $t.grow({populations:this.#i.populations,segments:this.#i.segments,clumpSpacing:o===`low`?.075:o===`medium`?.058:.048,island:u,extent:H,contact:m,density:g,light:r.uniforms,develop:this.#c.uniforms},h);this.#Z.density=Math.round(g*100),this.#g=_,await s(`grass`);let v=new Gn(h,this.#c.uniforms,o===`low`);this.#_=v,d.userData.part=`earth`,e.scene.userData.part=`furniture`,_.mesh.userData.part=`sward`,v.mesh.userData.part=`sky`;let y=new sn((e,t)=>u.crown(e,t),this.#c.uniforms);if(this.#v=y,y.root.updateWorldMatrix(!0,!0),y.frame.getWorldPosition(this.#y),this.#a.add(v.mesh,d,e.scene,_.mesh,y.root),v.veil&&(v.veil.userData.part=`sky`,this.#a.add(v.veil)),this.#ne(),this.#a.traverse(e=>{if(e instanceof T)for(let t of Array.isArray(e.material)?e.material:[e.material])t.isMeshStandardMaterial&&this.#c.patch(t)}),await Se(n,this.#a,this.#o),await s(`compile`),this.#V)return;p&&(this.#D=p,this.#O.copy(p.position)),this.#ue(),n.shadowMap.needsUpdate=!0,this.#X=Math.round(performance.now()-t),this.#B=!0,this.#r.onCompile?.()}catch(e){this.#V||this.#r.onUnavailable?.(String(e))}}#ne(){Fe();let e=this.#k.filter(e=>e.name.startsWith(`anchor-`)).slice(0,16);this.#k=e;for(let t of e)Pe.names.push(t.name),Pe.kinds.push(Ie(t.name));Pe.count=e.length}#re(){let e=this.#n.parentElement??this.#n,t=new ResizeObserver(([e])=>{e&&(this.#L=e.contentRect.width,this.#R=e.contentRect.height,this.#q=``)});t.observe(e);let n=new IntersectionObserver(([e])=>{this.#U=e?.isIntersecting??!0},{rootMargin:`20%`});n.observe(e),this.#F.push(()=>t.disconnect(),()=>n.disconnect())}#ie(e,t,n,r){let i=this.#z,a=Math.round(n),o=Math.round(r),s=Math.round(e),c=Math.round(t);if(i.left===s&&i.top===c&&i.width===a&&i.height===o)return!1;let l=this.#n.style;return(i.width!==a||i.height!==o)&&(this.#z={left:s,top:c,width:a,height:o},this.#se(!0),l.maxWidth=`none`,l.width=`${a}px`,l.height=`${o}px`),l.inset=`auto`,l.left=`${s}px`,l.top=`${c}px`,this.#z={left:s,top:c,width:a,height:o},!0}#ae(){let e=this.#L||this.#n.parentElement?.clientWidth||0,n=t.stageHeight||this.#R;return!e||!n?1:Ct(fr(e,n,1)*$.width*this.#oe()/Qn)}#oe(){let e=Math.min(this.#u.pixelRatio(t.dpr),this.#i.pixelRatio),n=h.settings.renderScale,r=Math.min(1,Math.max(this.#u.scale/n,dr));return this.#f=this.#u.revision,e*r}#se(e=!1){let t=this.#m;if(!t||!this.#z.width||!this.#z.height||this.#I&&!this.#I.resident)return;let n=this.#oe();!e&&Math.abs(n-this.#Y)<.02||(this.#Y=n,t.setPixelRatio(n),t.setSize(this.#z.width,this.#z.height,!1),this.#q=``)}#ce=({delta:e})=>{let a=e,s=this.#m,u=this.#g,d=this.#_,f=this.#v;if(!s||!u||!d||!f||!this.#B||this.#V||!this.#U||this.#I&&!this.#I.resident||this.suspended&&!this.#I?.stale||(this.#d+=a,!this.#u.allows()))return;a=this.#d,this.#d=0,this.#u.revision!==this.#f&&this.#se();let m=h.still,v=this.focus!==this.#e||o.engaged&&!m;this.#e=this.focus;let x=m?0:v?this.#l.release(a):this.#l.tick(a,1,h.period,this.#i.windHz);this.#K+=x;let C=m?ir:this.#K,ne=!m&&o.engaged,re=ne?a:x,ie=ne?o.ndcX*(this.mirrored?-1:1)*tr.yaw:m?0:Math.sin(C/nr.period*Math.PI*2)*nr.yaw,ae=ne?o.ndcY*tr.pitch:0;this.#W=m?ie:r(i(this.#W,ie,rr,re),ie,1e-4),this.#G=m?ae:r(i(this.#G,ae,rr,re),ae,1e-4);let w=l(g.mix),oe=l(this.ignite)*(1-l(this.leave)),T=y(this.focus),E=this.#L||this.#n.parentElement?.clientWidth||0,D=t.stageHeight||this.#R,O=this.#c;O.advance(S.isAwake,a,m);let se=O.lantern(),ce=O.wind(S.charge*S.charge)+(m?0:ar*te(T.consume)),le=ee.handover,k=`${C}|${this.#W}|${this.#G}|${w}|${oe}|${this.focus}|${le}|${E}|${D}|${O.progress}|${ce}`;if(k===this.#q)return;this.#q=k;let ue=b(E,D,0),A=sr(this.focus),j=+(E<=Zn.width),de=fr(E,D,T.approach),M=de*$.width,N=de*$.height,fe=Zn.drop+.045*l((520-E)/130),pe=ue.y+D*(fe*j-.065),me=pe-N*(1-$.air)+de*.05;if(A>0)this.#ie(0,0,E,Math.max(t.canvasHeight,D));else{let e=fr(E,D,1),t=e*$.height,n=pe-t*(1-$.air)+e*.05,r=se.moving?Math.max(0,Math.ceil(n)):0;this.#ie(ue.x-e*$.width/2,n-r,e*$.width,t+r)}let P=this.#z,F=this.#o,he=M/Math.max(N,1),ge=Qn/2*(M/de)/he;this.#N.copy(this.#M).applyAxisAngle(cr,this.#W),this.#N.y+=this.#G,this.#N.normalize();let _e=or.radius*D,I=c(0,.5,A),ve=c(.15,1,A),ye=c(0,.9,A),be=c(.05,1,A);this.#x.copy(er).lerp(this.#y,I),this.#b.copy(this.#N).lerp(or.eye,ve).normalize();let L=Math.exp(Math.log($n)+(Math.log(or.distance)-Math.log($n))*ye);this.#S.copy(this.#x).addScaledVector(this.#b,L);let xe=Math.exp(Math.log(L/$n*ge)+(Math.log(Ve*N/(2*_e))-Math.log(L/$n*ge))*be);F.fov=2*Math.atan(xe/L)*180/Math.PI,F.aspect=he,F.near=Math.max(L-4,.05),F.far=L+4,F.position.copy(this.#S),F.lookAt(this.#x);let R=ue.x+(E*.5-ue.x)*I,Se=me+N/2+(D*or.height-me-N/2)*I;if(F.setViewOffset(M,N,M/2-(R-P.left),N/2-(Se-P.top),P.width,P.height),F.updateProjectionMatrix(),F.updateMatrixWorld(),O.resting){this.#P.copy(this.#O).project(F);let e=this.#z.top+(.5-this.#P.y*.5)*this.#z.height,t=2*Math.tan(F.fov*Math.PI/360)*$n/N;O.aim((e+ur)*t)}this.#ue(),u.flowering=O.flowering,u.uniforms.uWindStrength.value=ce,se.moving&&(s.shadowMap.needsUpdate=!0);let z=this.#s;if(z.set(w,O.flame)||!this.#H){let e=z.uniforms,{sun:t,fill:n,hemisphere:r,lantern:i,flame:a}=this.#j;t.position.copy(e.uSunDir.value).multiplyScalar(7).add(t.target.position),t.color.copy(e.uSunColor.value),t.intensity=1,t.shadow.intensity=1-.25*w,n.position.copy(e.uFillDir.value).multiplyScalar(7).add(n.target.position),n.color.copy(e.uFillColor.value),n.intensity=1,r.color.copy(e.uSkyColor.value),r.groundColor.copy(e.uBounceColor.value),r.intensity=1,i.position.copy(e.uLanternPos.value),i.color.copy(e.uLanternColor.value),i.intensity=e.uLanternColor.value.r>0?1.2:0,a.position.copy(e.uLanternPos.value),a.visible=O.flame>0,a.material.color.copy(z.flameColor).multiplyScalar(4),this.#a.environmentIntensity=.5*(1-w*.8),s.shadowMap.needsUpdate=!0}s.toneMappingExposure=z.exposure;let Ce=N/(2*xe);u.coverage($.width*Ce*s.getPixelRatio())&&(s.shadowMap.needsUpdate=!0),u.uniforms.uTime.value=C,u.uniforms.uPixel.value=2*Math.tan(F.fov*Math.PI/360)/Math.max(N*s.getPixelRatio(),1),d.uniforms.uTime.value=C,d.uniforms.uNight.value=w,d.uniforms.uSunDir.value.copy(z.uniforms.uSunDir.value),d.uniforms.uInverseProjection.value.copy(F.projectionMatrixInverse),d.uniforms.uCameraWorld.value.copy(F.matrixWorld);let we=P.width/Math.max(M,1),Te=(2*P.left+P.width-2*R)/Math.max(M,1),Ee=P.height/Math.max(N,1),De=(2*Se-2*P.top-P.height)/Math.max(N,1);d.uniforms.uFrame.value.set(we,Te,Ee,De),this.#P.set(0,1,0).project(F);let Oe=this.#P.x*we+Te,ke=this.#P.y*Ee+De+.15;d.uniforms.uCenter.value.set(Oe*(1-I),ke+(.1-ke)*I),this.#P.set(0,.2,0).project(F);let B=this.#P.y*Ee+De;d.uniforms.uBase.value=B+(-.85-B)*I,this.#P.copy(z.uniforms.uSunDir.value).multiplyScalar(2.4).add(this.#x).project(F),d.uniforms.uSun.value.set(this.#P.x*we+Te,this.#P.y*Ee+De),d.uniforms.uAspect.value=M/Math.max(N,1),d.uniforms.uPresence.value=.9;let Ae=Be(le);s.getDrawingBufferSize(this.#C),f.update(C,ce,m?0:-_.velocity/Math.max(D*1.2,1),a,this.#C,F.matrixWorldInverse,z.uniforms.uSunDir.value,{night:w,opacity:1-Ae,ink:this.#T.copy(lr.paper).lerp(lr.void,w),silver:lr.silver}),this.#le(F,P);let V=oe*(1-c(.35,1,le));V!==this.#Q&&(this.#Q=V,this.#n.style.opacity=String(V)),this.#J?.begin(s.shadowMap.needsUpdate?`meadow+shadows`:`meadow`),s.render(this.#a,F),this.#u.drew(()=>p(s.getContext())),this.#I?.drew(),this.drawn=n.serial,this.#J?.end(),this.#J?.collect(),this.#de(),this.#H||(this.#H=!0,this.#r.onFirstFrame?.())};#le(e,t){let r=this.#v;if(!r)return;let i=t.width/2,a=t.height/2;this.#w.set(i,0,0,t.left+i,0,-a,0,t.top+a,0,0,1,0,0,0,0,1),this.#w.multiply(r.clipMatrix(e)),Ue.matrix.set(this.#w.elements),Ue.drawn=n.serial,r.frame.getWorldPosition(this.#E);let o=Math.max(this.#E.sub(e.position).normalize().dot(this.#s.uniforms.uSunDir.value),0);Ue.glow=.55+1.6*o**3}#ue(){let e=this.#D;if(!e)return;let t=this.#c.lantern();e.visible=t.present,e.position.copy(this.#O),e.position.y+=t.lift,e.rotation.z=t.swing}#de(){let{screen:e,depth:t,visible:n}=Pe,r=this.#z;for(let i=0;i<Pe.count;i+=1){this.#k[i].getWorldPosition(this.#P).project(this.#o);let a=this.#P.x*.5+.5;e[i*2]=r.left+(this.mirrored?1-a:a)*r.width,e[i*2+1]=r.top+(.5-this.#P.y*.5)*r.height,t[i]=this.#P.z*.5+.5,n[i]=+(this.#P.z>-1&&this.#P.z<1)}Pe.version+=1}dispose(){if(!this.#V){this.#V=!0,this.#p.abort();for(let e of this.#F)e();this.#F=[],Fe(),this.#g?.dispose(),this.#_?.dispose(),this.#v?.dispose();for(let e of this.#A)e.dispose();this.#a.traverse(e=>{if(e instanceof T){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material]){for(let e of Object.values(t))e instanceof je&&e.dispose();t.dispose()}}}),this.#h?.dispose(),this.#m?.dispose(),this.#m?.forceContextLoss(),this.#m=null}}};export{hr as MeadowScene};