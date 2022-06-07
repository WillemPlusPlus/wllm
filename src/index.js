import { createLine, createLogo, createBackgroundData, createBannerBackground } from "./svgDraw";

let vh = window.innerHeight
let vw = window.innerWidth
const vMax = Math.max(vh,vw)/100
const vMin = Math.min(vh,vw)/100
const bannerSize = vMax*20


const svgBG = d3.select("#background")
const svgLogo = d3.select("#logo")
const svgBanner = createBannerBackground(svgBG,bannerSize,d3.schemeAccent[0])
svgBanner.attr("mask", "url(#logoClip)")
const svgMask = svgBG.append("mask")
    .attr("id", "logoClip")
svgMask.append("rect")
    .attr("width", bannerSize)
    .attr("height", bannerSize)
    .attr("fill", "#fff")

createLogo(svgMask,vMax*2.5,vMax*5/1000,vMax*10/1000)
let dataLine = createBackgroundData(svgBG,6,d3.schemeAccent,vMax, vw)

console.log(dataLine)
let svgLines = svgBG.append("svg").attr("id", "lines")
svgLines.selectAll("path")
    .data(dataLine)
    .join(enter => enter.append("path")
        .attr("d", (d)=>{return d3.line()([[d.x,d.y],[d.x-d.len,d.y+d.len]])})
        .attr("stroke", (d) => {return d.colour})
        .attr("stroke-width", vMax*5)
        .attr("stroke-linecap","round")
    )