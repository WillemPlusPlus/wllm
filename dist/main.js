(()=>{"use strict";const t=(t,e,n,a)=>{t.append("path").attr("d",e).attr("stroke",n).attr("stroke-width",a).attr("stroke-linecap","round")};let e=window.innerHeight,n=window.innerWidth;const a=Math.max(e,n)/100,r=(Math.min(e,n),20*a),o=d3.select("#background");d3.select("#logo"),((t,e,n)=>{const a="0,0 "+e.toString()+",0 0,"+e.toString();return t.append("polygon").data([a]).attr("stroke","none").attr("fill",n).attr("points",a)})(o,r,d3.schemeAccent[0]).attr("mask","url(#logoClip)");const l=o.append("mask").attr("id","logoClip");l.append("rect").attr("width",r).attr("height",r).attr("fill","#fff"),((e,n,a,r)=>{const o=n/2,l=3*n/8,d=n/4,c=d/.9,s=.5*o,i=[o,0],p=[[0,l/2],[l/2,l],[l,0],[l,2*l],[2*l,3*l],[3*l,4*l],[4*l,5*l],[5*l,6*l],[6*l,7*l],[7*l,7.5*l],[7.5*l,8*l],[8*l,7*l]],h=[0,0,0,0,0,1,1,0,0,0,0,0];let g;const k=["black","white"];[[0,s],[s,0],[0,0],i,i,i,i,i,i,[o,o-s],[o-s,o],[o,o]].forEach(((n,o)=>{g=k[h[o]],n=d3.line()([[p[o][0]+d+a,n[0]+d+r],[p[o][1]+d+a,n[1]+d+r]]),t(e,n,k[0],d),h[o]&&t(e,n,k[1],c)}))})(l,2.5*a,5*a/1e3,10*a/1e3);let d=((t,e,n,a,r)=>{const o=5*a,l=.707,d=15*a,c=15*a,s=5*a,i=r-.5*s*6*.5,p=-s*l*6*.5;return d3.range(6).map((t=>{const e=Math.random()*c+d,n=t*o+Math.random()*s;return{x:n*l+i,y:n*l+p,len:e,start:n,colour:d3.schemeAccent[t]}}))})(0,0,d3.schemeAccent,a,n);console.log(d),o.append("svg").attr("id","lines").selectAll("path").data(d).join((t=>t.append("path").attr("d",(t=>d3.line()([[t.x,t.y],[t.x-t.len,t.y+t.len]]))).attr("stroke",(t=>t.colour)).attr("stroke-width",5*a).attr("stroke-linecap","round")))})();