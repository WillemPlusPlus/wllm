import { createLine, createLogo, createBackground } from "./svgDraw";

const svgBG = d3.select("#bg")
const svgLogo = d3.select("#logo")

createLogo(svgLogo)
createBackground(svgBG,6,d3.schemeAccent)