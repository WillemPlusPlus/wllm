export const createLine = (e,d,c,s) => {
    e.append("path")
      .attr("d", d)
      .attr("stroke", c)
      .attr("stroke-width", s)
      .attr("stroke-linecap","round")
  }

  export const createLogo = (e,height, offsetX, offsetY) =>{
    const createText = (id, text,x,y) => {
      let selection = e.select(id)
      if(selection.empty()){
        selection = e.append("text").attr("id", id)
      }
      selection.attr("class", "bannerText")
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

    createText("#bannerTextName","// WILLEM MEYER",2*offsetX,2.25*offsetY)
    createText("#bannerTextCity","// Perth, Australia",2*offsetX,3.5*offsetY)
    
}

export const createBackgroundData = (seed, ids, vw, vh, yPos, dataLines) => {
  const yFac = 0.5
  let countries = ids.map((id,i)=>{return seed[id].slice(1)})
  const spacing = vh*0.1
  const sinC = 0.707//0.866
  const lenMin = vh*0.005
  const lenRange = vh*2
  const startMax = vh*0.05
  const offsetX = vw-startMax*0.5*ids.length*0.5 - yPos*yFac
  const offsetY = -startMax*sinC*ids.length*0.5 + yPos*yFac
  const interp = (pos,data) =>  {
    let dist = (pos*6)%1
    let p1 = Math.floor(pos*6)
    let val = (data[p1+1]-data[p1])*dist+data[p1]
    return val
  }

  return countries.map((d,i) => {
    let len, start
    len = interp(yPos/(3*vh), d)*lenRange+lenMin
    start = i*spacing
    
    const x = start*sinC + offsetX
    const y = start*sinC + offsetY

    return {"x":x,"y":y,"len":len,"start":start, "colour":d3.schemeDark2[i]}
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

export const updateBannerBackground = (e,s) => {
  const triangle  = "0,0 " + s.toString() + ",0 0," + s.toString()
  return e.attr("points", triangle)
}

export const createBackground = (e, dataLines, stroke) =>{

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
  const toPoint = (x,y) => {return " " + x.toString() +","+ y.toString() }
  const poly = "0,0"+ toPoint(e.w+e.h,0) + toPoint(e.w,e.h) + toPoint(0,e.h)
  root.append("svg")
    .attr("class", "svgMarkdown")
    .attr("width",e.w+e.h)
    .attr("height",e.h)
    .append("polygon")
      .data([poly])
      .attr("fill" , "red")
      .attr("points", poly)
  root.append("p")
    .attr("class","pMarkdown")
    .text(e.textMarkdown)

}
