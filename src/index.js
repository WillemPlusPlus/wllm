import { createLine, createLogo, createBackground, createBannerBackground } from "./svgDraw";

const bannerSize = 250


const svgBG = d3.select("#background")
const svgLogo = d3.select("#logo")
const svgBanner = createBannerBackground(svgBG,250,d3.schemeAccent[0])
svgBanner.attr("mask", "url(#logoClip)")
const svgMask = svgBG.append("mask")
    .attr("id", "logoClip")
svgMask.append("rect")
    .attr("width", bannerSize)
    .attr("height", bannerSize)
    .attr("fill", "#fff")

createLogo(svgMask,48,5,10)
createBackground(svgBG,6,d3.schemeAccent)
