export const createLine = (e,d,c,s) => {
    e.append("path")
      .attr("d", d)
      .attr("stroke", c)
      .attr("stroke-width", s)
      .attr("stroke-linecap","round")
  }

  export const createLogo = (e,height, offsetX, offsetY) =>{
    const createText = (e, text,x,y) => {
      e.append("text")
        .attr("class", "bannerText")
        .attr("x",x)
        .attr("y",y + height)
        .text(text)
    }

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

    createText(e,"// WILLEM MEYER",2*offsetX,2.25*offsetY)
    createText(e, "// Perth, WA",2*offsetX,3.5*offsetY)
    
}

export const createBackgroundData = (e, n, colours, vw, vh, yPos, dataLines) => {
  const spacing = vh*0.1
  const sinC = 0.707//0.866
  const lenMin = vh*0.15
  const lenRange = vh*0.25
  const startMax = vh*0.05
  const offsetX = vw-startMax*0.5*n*0.5 - yPos
  const offestY = -startMax*sinC*n*0.5 + yPos

  return d3.range(n).map(i => {
    let len, start
    if(dataLines.length){
      len = dataLines[i].len
      start = dataLines[i].start
    }else{
      len = Math.random()*lenRange+lenMin
      start = i*spacing + Math.random()*startMax
    }
    const x = start*sinC + offsetX
    const y = start*sinC + offestY

    return {"x":x,"y":y,"len":len,"start":start, "colour":d3.schemeAccent[i]}
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

export const createBackground = (e, dataLines, vMax) =>{

  const stroke = vMax*10

  e.selectAll("path")
      .data(dataLines)
      .join(enter => enter.append("path")
          .attr("d", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})
          .attr("stroke", (d) => {return d.colour})
          .attr("stroke-width", stroke)
          .attr("stroke-linecap","round"),
          update => update.attr("d", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})
      )
}

export const createMarkdown = (e,i,d) => {
  const root = d3.select(d[i])
  console.log(root,e, i)
  const toPoint = (x,y) => {return " " + x.toString() +","+ y.toString() }
  const poly = "0,0"+ toPoint(e.w+e.h,0) + toPoint(e.w,e.h) + toPoint(0,e.h)
  root.append("svg")
    .attr("class", "svgMarkdown")
    .attr("width",e.w+e.h)
    .attr("height",e.h)
    .append("polygon")
      .data([poly])
      .attr("stroke" , "none")
      .attr("fill" , "red")
      .attr("points", poly)
  root.append("p")
    .attr("class","pMarkdown")
    .text(e.textMarkdown)

}