(()=>{"use strict";const t=(t,e,o,a)=>{console.log(t),t.append("path").attr("d",e).attr("stroke",o).attr("stroke-width",a).attr("stroke-linecap","round")},e=d3.select("#bg");var o,a;(e=>{const o=40,a=[o,0],r=[[0,15],[15,30],[30,0],[30,60],[60,90],[90,120],[120,150],[150,180],[180,210],[210,225],[225,240],[240,210]],c=[0,0,0,0,0,1,1,0,0,0,0,0];let n;const s=["black","grey"];[[0,20],[20,0],[0,0],a,a,a,a,a,a,[o,20],[20,o],[o,o]].forEach(((o,a)=>{n=s[c[a]],o=d3.line()([[r[a][0]+20,o[0]+20],[r[a][1]+20,o[1]+20]]),t(e,o,n,20)}))})(d3.select("#logo")),o=e,a=d3.schemeAccent,d3.range(6).forEach((e=>{const r=300*Math.random()+300,c=100*e+100*Math.random(),n=.866*c+1770,s=.866*c-259.79999999999995,d=d3.line()([[n,s],[n-r,s+r]]);t(o,d,a[e],100)}))})();