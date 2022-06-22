import { createLine, createLogo, createBackgroundData, createBannerBackground, createBackground, createMarkdown } from "./svgDraw"
const careers = require("./offers.json")
let vh = window.innerHeight
let vw = window.innerWidth
const vMax = Math.max(vh,vw)/100
const vMin = Math.min(vh,vw)/100
const divBanner = d3.select("#bannerwrapper")
const bannerSize = Number(divBanner.style('width').slice(0, -2))
console.log(bannerSize)
const svgBG = d3.select("#background")

const svgLogo = d3.select("#banner")

const svgBanner = createBannerBackground(svgLogo,bannerSize,d3.schemeDark2[0])
const svgMask = svgLogo.append("mask")
    .attr("id", "logoClip")
svgMask.append("rect")
    .attr("width", bannerSize)
    .attr("height", bannerSize)
    .attr("fill", "#fff")
svgBanner.attr("mask", "url(#logoClip)")
let svgLines = svgBG.append("svg").attr("id", "lines")
let dataLines = createBackgroundData(svgBG,6,d3.schemeDark2,vw, vh, 0, [])
createBackground(svgLines, dataLines, vMax)

createLogo(svgMask,bannerSize/5,bannerSize/20,bannerSize/20)



let lastKnownScrollPosition = 0;
let ticking = false;

const scrollAnimation = (scrollPos) => {

    const yBuffTop = 50
    const yBuffBot = 5000
    const yFac = 0.6
    let yPos = Math.max(Math.min(scrollPos*yFac,yBuffBot), yBuffTop)
    dataLines = createBackgroundData(svgBG,6,d3.schemeDark2, vw, vh, yPos, dataLines)
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
    for(let i = 0; i<tabs.length; i++){tabs[i].className = tabs[i].className.replace(" active", "");}
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
const w = vh*0.2
const h = vh*0.05

for(const career of careers){
    career.w = w
    career.h = h
}

const createOffer = (e,i,d) => {
    const root = d3.select(d[i])
    root.append("div").attr("class","workHeader")
    .text(e.textHeading)
    root.append("div").attr("class","workStart")
    .text(e.textPreamble)
    let rate = root.append("div").attr("class","workRate")
    rate.append("span").attr("class","pricePreamble").text(e.pricePreamble)
    rate.append("span").attr("class","price").text(e.price)
    rate.append("span").attr("class","pricePostamble").text(e.pricePostamble)

    root.append("button").attr("class", "workButton").attr("type", "button")
    .text("Email Me")
    
    root.append("div").attr("class","workInfo")
    .text(e.textBody)
    root.append("div").attr("class","workFooter")
    .text(e.textFooter)

}

let divMarkdown = d3.select("#workWrapper").selectAll(".workOffer")
    .data(careers)
    .join(
        enter =>{

        let offer = enter.append("div")
        .attr("class","workOffer");

        offer.append("div")
        .attr("class", "markdown")
        .each(createMarkdown);

        offer.each(createOffer);



        return offer;}
    )




