import { createLine, createLogo, createBackground, createBannerBackground } from "./svgDraw";

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
createBackground(svgBG,6,d3.schemeAccent,vMax, vw)
