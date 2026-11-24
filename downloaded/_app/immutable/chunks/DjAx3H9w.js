function e(e,t,n=3){let r=0;for(let i=0;i<n;i+=1){let n=e>>i&1,a=t>>i&1;r=r*4+2*(n^a)+a}return r}function t(t,n,r=3){let i=1<<r;return(e((t%i+i)%i,(n%i+i)%i,r)+.5)/(i*i)}var n=`
float bayerRank( ivec2 cell ) {
ivec2 c = cell & 7;
int d = c.x ^ c.y;
int index =
( ( ( d & 1 ) << 1 ) | ( c.y & 1 ) ) << 4 |
( ( ( d >> 1 & 1 ) << 1 ) | ( c.y >> 1 & 1 ) ) << 2 |
( ( ( d >> 2 & 1 ) << 1 ) | ( c.y >> 2 & 1 ) );
return ( float( index ) + 0.5 ) / 64.0;
}
`;export{t as n,n as t};