import { createLine, createLogo, createBackground, createBannerBackground } from "./svgDraw";

const svgBG = d3.select("#background")
const svgLogo = d3.select("#logo")

createLogo(svgLogo)
createBackground(svgBG,6,d3.schemeAccent)
createBannerBackground(svgBG,250,d3.schemeAccent[0])