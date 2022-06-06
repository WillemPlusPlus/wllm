export const createLine = (e,d,c,s) => {
    e.append("path")
      .attr("d", d)
      .attr("stroke", c)
      .attr("stroke-width", s)
      .attr("stroke-linecap","round")
  }

  export const createLogo = (e,height, offsetX, offsetY) =>{

    const h = height/2;
    const w = height*3/8;
    const sx = height/4;
    const sx2 = sx*0.75;
    const h1 = 0.5*h
    const hl = [h,0];
    const hs = [[0,h1],[h1,0],[0,0],hl,hl,hl,hl,hl,hl,[h,h-h1],[h-h1,h],[h,h]]
    const ws = [[0,w/2],[w/2,w],[w,0],[w,2*w],[2*w,3*w],[3*w,4*w],[4*w,5*w],[5*w,6*w],[6*w,7*w],[7*w,7.5*w],[7.5*w,8*w],[8*w,7*w]]
    const cs = [0,0,0,0,0,1,1,0,0,0,0,0]
    let d, colour;
    const colourMap = ["black", "white"]
    hs.forEach((d,i)=>{
        colour = colourMap[cs[i]]
        d = d3.line()([
        [ws[i][0]+sx+offsetX,d[0]+sx+offsetY],[ws[i][1]+sx+offsetX,d[1]+sx+offsetY]
    ]);

        createLine(e,d,colourMap[0],sx);
        if(cs[i]){
            createLine(e,d,colourMap[1],sx2);
        }
    })
}

export const createBackground = (e, n, colours) => {
  const spacing = 100
  const sinC = 0.866
  const lenMin = 300
  const lenRange = 300
  const startMax = 100
  const stroke = 100
  const offsetX = 1920-startMax*0.5*n*0.5
  const offestY = -startMax*sinC*n*0.5
  d3.range(n).forEach(i => {
    const len = Math.random()*lenRange+lenMin
    const start = i*spacing + Math.random()*startMax
    const x = start*sinC + offsetX
    const y = start*sinC + offestY
    const line = d3.line()([[x,y],[x-len,y+len]]);
    createLine(e,line,colours[i],stroke)
  });
}

export const createBannerBackground = (e,s,c) => {
    const triangle  = "0,0 " + s.toString() + ",0 0," + s.toString()

    return e.append("polygon")
    .data([triangle])
    .attr("stroke" , "none")
    .attr("fill" , c)
    .attr("points", triangle)
}
