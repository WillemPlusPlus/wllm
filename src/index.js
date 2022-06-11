import { createLine, createLogo, createBackgroundData, createBannerBackground, createBackground } from "./svgDraw";

let vh = window.innerHeight
let vw = window.innerWidth
const vMax = Math.max(vh,vw)/100
const vMin = Math.min(vh,vw)/100
const bannerSize = vMax*25


const svgBG = d3.select("#background")
const svgLogo = d3.select("#logo")
const svgBanner = createBannerBackground(svgBG,bannerSize,d3.schemeDark2[0])
svgBanner.attr("mask", "url(#logoClip)")
const svgMask = svgBG.append("mask")
    .attr("id", "logoClip")
svgMask.append("rect")
    .attr("width", bannerSize)
    .attr("height", bannerSize)
    .attr("fill", "#fff")
    
let svgLines = svgBG.append("svg").attr("id", "lines")
let dataLines = createBackgroundData(svgBG,6,d3.schemeDark2,vMax, vw, 0, [])
createBackground(svgLines, dataLines, vMax)

createLogo(svgMask,vMax*5,vMax*0.5,vMax*0.5)



let lastKnownScrollPosition = 0;
let ticking = false;

const scrollAnimation = (scrollPos,) => {
    const yBuffTop = 50
    const yBuffBot = 2500
    let yPos = Math.max(Math.min(scrollPos,yBuffBot), yBuffTop)
    dataLines = createBackgroundData(svgBG,6,d3.schemeAccent,vMax, vw, yPos, dataLines)
    createBackground(svgLines, dataLines)

}



const openAbout = (e) => {

    // Get all elements with class="tabcontent" and hide them
    const id = e.currentTarget.id+"Content"
    let tabContent = document.getElementsByClassName("tabcontent");
    for(let i = 0; i<tabContent.length; i++){
        if(tabContent[i].id == id){
            tabContent[i].style.display = "block";
        }else{
            tabContent[i].style.display = "none";
        }
    }
    let tabs = document.getElementsByClassName("tab");
    for(let i = 0; i<tabs.length; i++){tabs[i].className.replace(" active", "");}
    // Show the current tab, and add an "active" class to the button that opened the tab
    e.currentTarget.className += " active";
}

let tabs = document.getElementsByClassName("tab");
for(let i = 0; i<tabs.length; i++){
    tabs[i].addEventListener("click",openAbout);
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
        scrollAnimation(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
openAbout({"currentTarget":document.getElementById("about")})
