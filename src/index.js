import { createLine, createLogo, createBackgroundData, createBannerBackground, createBackground, createMarkdown, updateBannerBackground} from "./svgDraw"
const careers = require("./offers.json")
const menuItems = require("./menu.json")

const quips = require("./quips.json")
let dataBG = require("./dataBG.json")




/**
 * Event Callback for scrolling
 */

const onScroll = () => {
    if(window.scrollY){lastKnownScrollPosition = window.scrollY;
    }else{lastKnownScrollPosition = 0;}
    scrollFocus = Math.floor(lastKnownScrollPosition/window.innerHeight)
  
    if (!ticking) {
      window.requestAnimationFrame(() => {
            
            toggleScrollButtons(scrollFocus)
            scrollAnimation();
        ticking = false;
      });
  
      ticking = true;
    }
  }

/**
 * Hide scroll button if at top or bottom
 * @param {*} scrollFoc page index
 */
const toggleScrollButtons = (scrollFoc) => {
    buttonUp.style.display = 'block';
    buttonDown.style.display = 'block';
    if(scrollFoc==0){
        buttonUp.style.display = 'none';
    }
    if(scrollFoc==2){
        buttonDown.style.display = 'none';
    }
}
/**
 * Event Callback for scroll button
 */
const scrollUp = () => {
    onScroll()
    let y = (scrollFocus-1)*window.innerHeight
    window.scrollTo(0, y+1)
}
/**
 * Event Callback for scroll button
 */
const scrollDown = () => {
    onScroll()
    let y = (scrollFocus+1)*window.innerHeight
    window.scrollTo(0, y+1)
}

/**
 * Update BG data and present acord
 */
const scrollAnimation = () => {

    const yBuffTop = vh*0.01
    const yBuffBot = vh*2.9
    const yFac = 0.6
    dataLines = createBackgroundData(dataBG, bgIDs, vw, vh, lastKnownScrollPosition, dataLines)
    createBackground(svgLines, dataLines, bgStroke)
    updateBGInfo()

}

/**
 * Event Callback for toggle active About page
 * @param {*} e event
 */
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
/**
 * Populate DOM element with offer data 
 * @param {*} e datum
 * @param {*} i list index
 * @param {*} d d3 selection list
 */
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
    .attr("onclick","location.href='mailto:hello@wllm.info'")
    
    root.append("div").attr("class","workInfo")
    .text(e.textBody)
    root.append("div").attr("class","workFooter")
    .text(e.textFooter)

}

/**
 * Update BG Data based on scroll position
 */
const updateBGInfo = () =>{
    let year = 1965+Math.floor(lastKnownScrollPosition/(3*vh)*80)
    let names = bgIDs.map((id,i)=>{return dataBG[id][0]})
    divBGInfo = d3.select("#bgCountry").selectAll(".country").data(names).join(
        enter => {
            let div = enter.append("div")
            div.attr("class", "country").text(d=>d)
            return div},
        update => update.text(d=>d)
    )
    divBGYear = d3.select("body").selectAll(".bgYear").data([year]).join(
        enter => {
            let div = enter.append("span")
            div.attr("class", "bgYear").text(d=>d)
            return div},
        update => update.text(d=>d)
    )
}
/**
 * Update Quip presentaion
 */
const updateQuip = () => {
    divQuip = d3.select("#blockc2r3").data(bgIDs).text("// "+quips[quipID])
    divQuip = d3.select("#menuTextemail").text("< Copy my email")
}

/**
 * Event Callback for updating variables/elements that affect presentation when veiwport view changes
 */
const updateLayout  = () => {
    vh = window.innerHeight
    vw = window.innerWidth
    vMax = Math.max(vh,vw)/100
    vMin = Math.min(vh,vw)/100
    bannerSize = Number(divBanner.style('width').slice(0, -2))
    updateBannerBackground(svgBanner,bannerSize, bannerC)
    dataLines = createBackgroundData(dataBG, bgIDs, vw, vh, lastKnownScrollPosition, dataLines)
    createBackground(svgLines, dataLines, bgStroke)
    updateQuip()
    createLogo(svgMask,bannerSize/5,bannerSize/20,bannerSize/20)
    updateBGInfo(dataBG, bgIDs)
}
/**
 * Toggle BG info panel
 */
const toggleInfo = () => {
    const disp = document.getElementById("bgInfo").style.display
    if(disp!="block"||!(disp)){
        document.getElementById("bgInfo").style.display = "block"
    }else{
        document.getElementById("bgInfo").style.display = "none"
    }
}

/**
 * Update all data
 */
const updateData = () => {
    bannerC = d3.schemeDark2[Math.floor(Math.random()*d3.schemeDark2.length)]
    quipID = Math.floor(Math.random()*quips.length)
    bgIDs = []
    dataLines = []
    while(bgIDs.length<bgLines){
        bgIDs.push(Math.floor(Math.random()*dataBG.length))
    }
    updateLayout()
}


/**
 * Copy Email adress to clipboard, requires ssl cert
 */
const copyEmail = () => {
    let copyText = document.getElementById("menuItememail").getAttribute("link");
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById("menuTextemail").innerHTML = "< Copied!";
    });
}

window.updateData = updateData
window.copyEmail = copyEmail
dataBG  = dataBG.data

//Number of background line elements 
const bgLines = 6
let quipID = 0
let bannerC = "#1b9e77"
let bgIDs = []
let dataLines = []
let divQuip
let scrollFocus = 1
let vh = window.innerHeight
let vw = window.innerWidth
let vMax = Math.max(vh,vw)/100
let vMin = Math.min(vh,vw)/100
let lastKnownScrollPosition = 0;
let ticking = false;

let divBGInfo = d3.select("#bgCountry")
let divBGYear = d3.select("#bgYear")
let divBanner = d3.select("#bannerwrapper")
let bannerSize = Number(divBanner.style('width').slice(0, -2))
const bgStroke = vh/10
const svgBG = d3.select("#background")
const svgLogo = d3.select("#banner")
const svgBanner = createBannerBackground(svgLogo,bannerSize,d3.schemeDark2)
const svgMask = svgLogo.append("mask")
    .attr("id", "logoClip")
svgMask.append("rect")
    .attr("width", 1000)
    .attr("height", 1000)
    .attr("fill", "#fff")
svgBanner.attr("mask", "url(#logoClip)")
const svgLines = svgBG.append("svg").attr("id", "lines")

const w = vh*0.2
const h = vh*0.05
for(const career of careers){
    career.w = w
    career.h = h
}

let divMenu = d3.select("#menuWrapper").selectAll(".menuItem")
    .data(menuItems)
    .join(
        enter =>{

        let item = enter.append("div")
        .attr("class","menuItem")
        .attr("id",d=>"menuItem"+d.name)
        .attr("link",d=>d.link)
        .attr("onclick",d=>d.onclick)

        item.append("div")
        .attr("class", "menuImgWrapper")
        .append("img")
        .attr("src", d => d.img)
        .attr("alt", d => d.name)
        .attr("class", "menuImg")

        item.append("div")
        .attr("class", "menuText")
        .attr("id",d=>"menuText"+d.name)
        .text(d => d.text)




        return item;}
    )

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



let tabs = document.getElementsByClassName("tab");
for(let i = 0; i<tabs.length; i++){
    tabs[i].addEventListener("click",openAbout);
}

updateData();
document.addEventListener('scroll', onScroll);

let buttonInfo = document.getElementById("infoButton")
let buttonUp = document.getElementById("scrollUp")
let buttonDown = document.getElementById("scrollDown")

buttonUp.onclick = scrollUp;
buttonDown.onclick = scrollDown;
buttonInfo.onclick = toggleInfo;
window.onresize = updateLayout;

openAbout({"currentTarget":document.getElementById("project")})






