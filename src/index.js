import { createLine, createLogo, createBackgroundData, createBannerBackground, createBackground } from "./svgDraw";

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
    
let svgLines = svgBG.append("svg").attr("id", "lines")
let dataLines = createBackgroundData(svgBG,6,d3.schemeAccent,vMax, vw, 0, [])
createBackground(svgLines, dataLines)

createLogo(svgMask,vMax*2.5,vMax*5/1000,vMax*10/1000)



let lastKnownScrollPosition = 0;
let ticking = false;

const scrollAnimation = (scrollPos,) => {
    const yBuffTop = 50
    const yBuffBot = 2500
    let yPos = Math.max(Math.min(scrollPos,yBuffBot), yBuffTop)
    dataLines = createBackgroundData(svgBG,6,d3.schemeAccent,vMax, vw, yPos, dataLines)
    createBackground(svgLines, dataLines)

}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
        scrollAnimation(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
