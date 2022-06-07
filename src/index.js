import { createLine, createLogo, createBackground, createBannerBackground } from "./svgDraw";

const bannerSize = 300


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

createLogo(svgMask,60,5,10)
createBackground(svgBG,6,d3.schemeAccent)


let scrollCurr
let scrollNew

document.addEventListener("scroll", event => {
    scrollNew = window.scrollY
    console.log(scrollNew)
  });

