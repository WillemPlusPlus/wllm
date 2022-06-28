/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svgDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgDraw */ \"./src/svgDraw.js\");\n\r\nconst careers = __webpack_require__(/*! ./offers.json */ \"./src/offers.json\")\r\nconst menuItems = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\")\r\n\r\nconst quips = __webpack_require__(/*! ./quips.json */ \"./src/quips.json\")\r\nlet dataBG = __webpack_require__(/*! ./dataBG.json */ \"./src/dataBG.json\")\r\ndataBG  = dataBG.data\r\n\r\nconst bgLines = 6\r\nlet quipID = 0\r\nlet bgIDs = []\r\nlet dataLines = []\r\nlet divQuip\r\nlet scrollFocus = 1\r\nlet vh = window.innerHeight\r\nlet vw = window.innerWidth\r\nlet vMax = Math.max(vh,vw)/100\r\nlet vMin = Math.min(vh,vw)/100\r\nlet lastKnownScrollPosition = 0;\r\nlet ticking = false;\r\nconst w = vh*0.2\r\nconst h = vh*0.05\r\nlet divBGInfo = d3.select(\"#bgCountry\")\r\nlet divBGYear = d3.select(\"#bgYear\")\r\nlet divBanner = d3.select(\"#bannerwrapper\")\r\nlet bannerSize = Number(divBanner.style('width').slice(0, -2))\r\nconst bgStroke = vh/10\r\nconst svgBG = d3.select(\"#background\")\r\nconst svgLogo = d3.select(\"#banner\")\r\nconst svgBanner = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBannerBackground)(svgLogo,bannerSize,d3.schemeDark2)\r\nconst svgMask = svgLogo.append(\"mask\")\r\n    .attr(\"id\", \"logoClip\")\r\nsvgMask.append(\"rect\")\r\n    .attr(\"width\", bannerSize)\r\n    .attr(\"height\", bannerSize)\r\n    .attr(\"fill\", \"#fff\")\r\nsvgBanner.attr(\"mask\", \"url(#logoClip)\")\r\nconst svgLines = svgBG.append(\"svg\").attr(\"id\", \"lines\")\r\n\r\n\r\n\r\n\r\n\r\nconst onScroll = () => {\r\n    if(window.scrollY){lastKnownScrollPosition = window.scrollY;\r\n    }else{lastKnownScrollPosition = 0;}\r\n    scrollFocus = Math.floor(lastKnownScrollPosition/window.innerHeight)\r\n  \r\n    if (!ticking) {\r\n      window.requestAnimationFrame(() => {\r\n            \r\n            toggleScrollButtons(scrollFocus)\r\n            scrollAnimation();\r\n        ticking = false;\r\n      });\r\n  \r\n      ticking = true;\r\n    }\r\n  }\r\n\r\nconst toggleScrollButtons = (scrollFoc) => {\r\n    buttonUp.style.display = 'block';\r\n    buttonDown.style.display = 'block';\r\n    if(scrollFoc==0){\r\n        buttonUp.style.display = 'none';\r\n    }\r\n    if(scrollFoc==2){\r\n        buttonDown.style.display = 'none';\r\n    }\r\n}\r\nconst scrollUp = () => {\r\n    onScroll()\r\n    let y = (scrollFocus-1)*window.innerHeight\r\n    window.scrollTo(0, y+1)\r\n}\r\n\r\nconst scrollDown = () => {\r\n    onScroll()\r\n    let y = (scrollFocus+1)*window.innerHeight\r\n    window.scrollTo(0, y+1)\r\n}\r\n\r\nconst scrollAnimation = () => {\r\n\r\n    const yBuffTop = vh*0.01\r\n    const yBuffBot = vh*2.9\r\n    const yFac = 0.6\r\n    dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(dataBG, bgIDs, vw, vh, lastKnownScrollPosition, dataLines)\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines, bgStroke)\r\n    updateBGInfo()\r\n\r\n}\r\n\r\n\r\nconst openAbout = (e) => {\r\n\r\n    // Get all elements with class=\"tabcontent\" and hide them\r\n    const id = e.currentTarget.id+\"Content\"\r\n    let tabContent = document.getElementsByClassName(\"tabcontent\");\r\n    for(let i = 0; i<tabContent.length; i++){\r\n        if(tabContent[i].id == id){\r\n            tabContent[i].style.display = \"block\";\r\n        }else{\r\n            tabContent[i].style.display = \"none\";\r\n        }\r\n    }\r\n    let tabs = document.getElementsByClassName(\"tab\");\r\n    for(let i = 0; i<tabs.length; i++){tabs[i].className = tabs[i].className.replace(\" active\", \"\");}\r\n    // Show the current tab, and add an \"active\" class to the button that opened the tab\r\n    e.currentTarget.className += \" active\";\r\n}\r\n\r\nconst createOffer = (e,i,d) => {\r\n    const root = d3.select(d[i])\r\n    root.append(\"div\").attr(\"class\",\"workHeader\")\r\n    .text(e.textHeading)\r\n    root.append(\"div\").attr(\"class\",\"workStart\")\r\n    .text(e.textPreamble)\r\n    let rate = root.append(\"div\").attr(\"class\",\"workRate\")\r\n    rate.append(\"span\").attr(\"class\",\"pricePreamble\").text(e.pricePreamble)\r\n    rate.append(\"span\").attr(\"class\",\"price\").text(e.price)\r\n    rate.append(\"span\").attr(\"class\",\"pricePostamble\").text(e.pricePostamble)\r\n\r\n    root.append(\"button\").attr(\"class\", \"workButton\").attr(\"type\", \"button\")\r\n    .text(\"Email Me\")\r\n    .attr(\"onclick\",\"location.href='mailto:hello@wllm.info'\")\r\n    \r\n    root.append(\"div\").attr(\"class\",\"workInfo\")\r\n    .text(e.textBody)\r\n    root.append(\"div\").attr(\"class\",\"workFooter\")\r\n    .text(e.textFooter)\r\n\r\n}\r\n\r\nconst updateBGInfo = () =>{\r\n    let year = 1965+Math.floor(lastKnownScrollPosition/(3*vw)*50)\r\n    let names = bgIDs.map((id,i)=>{return dataBG[id][0]})\r\n    divBGInfo = d3.select(\"#bgCountry\").selectAll(\".country\").data(names).join(\r\n        enter => {\r\n            let div = enter.append(\"div\")\r\n            div.attr(\"class\", \"country\").text(d=>d)\r\n            return div},\r\n        update => update.text(d=>d)\r\n    )\r\n    divBGYear = d3.select(\"#bgInfo\").selectAll(\".bgYear\").data([year]).join(\r\n        enter => {\r\n            let div = enter.append(\"span\")\r\n            div.attr(\"class\", \"bgYear\").text(d=>d)\r\n            return div},\r\n        update => update.text(d=>d)\r\n    )\r\n}\r\n\r\nconst updateQuip = () => {\r\n    divQuip = d3.select(\"#blockc2r3\").data(bgIDs).text(\"// \"+quips[quipID])\r\n    divQuip = d3.select(\"#menuTextemail\").text(\"< Copy my email\")\r\n}\r\n\r\nconst updateLayout  = () => {\r\n    vh = window.innerHeight\r\n    vw = window.innerWidth\r\n    vMax = Math.max(vh,vw)/100\r\n    vMin = Math.min(vh,vw)/100\r\n    bannerSize = Number(divBanner.style('width').slice(0, -2))\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.updateBannerBackground)(svgLogo,bannerSize)\r\n    dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(dataBG, bgIDs, vw, vh, lastKnownScrollPosition, dataLines)\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines, bgStroke)\r\n    updateQuip()\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createLogo)(svgMask,bannerSize/5,bannerSize/20,bannerSize/20)\r\n    updateBGInfo(dataBG, bgIDs)\r\n}\r\n\r\nconst toggleInfo = () => {\r\n    const disp = document.getElementById(\"bgInfo\").style.display\r\n    if(disp!=\"block\"||!(disp)){\r\n        document.getElementById(\"bgInfo\").style.display = \"block\"\r\n    }else{\r\n        document.getElementById(\"bgInfo\").style.display = \"none\"\r\n    }\r\n}\r\n\r\nconst updateData = () => {\r\n    quipID = Math.floor(Math.random()*quips.length)\r\n    bgIDs = []\r\n    dataLines = []\r\n    while(bgIDs.length<bgLines){\r\n        bgIDs.push(Math.floor(Math.random()*dataBG.length))\r\n    }\r\n    updateLayout()\r\n}\r\n\r\nwindow.updateData = updateData\r\n//Copy the text to the clipboard\r\nconst copyEmail = () => {\r\n    let copyText = document.getElementById(\"menuItememail\").getAttribute(\"link\");\r\n    navigator.clipboard.writeText(copyText).then(() => {\r\n        document.getElementById(\"menuTextemail\").innerHTML = \"< Copied!\";\r\n    });\r\n}\r\n\r\nwindow.copyEmail = copyEmail\r\n\r\n\r\nfor(const career of careers){\r\n    career.w = w\r\n    career.h = h\r\n}\r\n\r\nlet divMenu = d3.select(\"#menuWrapper\").selectAll(\".menuItem\")\r\n    .data(menuItems)\r\n    .join(\r\n        enter =>{\r\n\r\n        let item = enter.append(\"div\")\r\n        .attr(\"class\",\"menuItem\")\r\n        .attr(\"id\",d=>\"menuItem\"+d.name)\r\n        .attr(\"link\",d=>d.link)\r\n        .attr(\"onclick\",d=>d.onclick)\r\n\r\n        item.append(\"div\")\r\n        .attr(\"class\", \"menuImgWrapper\")\r\n        .append(\"img\")\r\n        .attr(\"src\", d => d.img)\r\n        .attr(\"alt\", d => d.name)\r\n        .attr(\"class\", \"menuImg\")\r\n\r\n        item.append(\"div\")\r\n        .attr(\"class\", \"menuText\")\r\n        .attr(\"id\",d=>\"menuText\"+d.name)\r\n        .text(d => d.text)\r\n\r\n\r\n\r\n\r\n        return item;}\r\n    )\r\n\r\nlet divMarkdown = d3.select(\"#workWrapper\").selectAll(\".workOffer\")\r\n    .data(careers)\r\n    .join(\r\n        enter =>{\r\n\r\n        let offer = enter.append(\"div\")\r\n        .attr(\"class\",\"workOffer\");\r\n\r\n        offer.append(\"div\")\r\n        .attr(\"class\", \"markdown\")\r\n        .each(_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createMarkdown);\r\n\r\n        offer.each(createOffer);\r\n\r\n\r\n\r\n        return offer;}\r\n    )\r\n\r\nwindow.onresize = updateLayout;\r\n\r\nlet tabs = document.getElementsByClassName(\"tab\");\r\nfor(let i = 0; i<tabs.length; i++){\r\n    tabs[i].addEventListener(\"click\",openAbout);\r\n}\r\n\r\n\r\n\r\nupdateData();\r\ndocument.addEventListener('scroll', onScroll);\r\n\r\nlet buttonInfo = document.getElementById(\"infoButton\")\r\nlet buttonUp = document.getElementById(\"scrollUp\")\r\nlet buttonDown = document.getElementById(\"scrollDown\")\r\nbuttonUp.onclick = scrollUp;\r\nbuttonDown.onclick = scrollDown;\r\nbuttonInfo.onclick = toggleInfo;\r\n\r\nopenAbout({\"currentTarget\":document.getElementById(\"about\")})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svgDraw.js":
/*!************************!*\
  !*** ./src/svgDraw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBackground\": () => (/* binding */ createBackground),\n/* harmony export */   \"createBackgroundData\": () => (/* binding */ createBackgroundData),\n/* harmony export */   \"createBannerBackground\": () => (/* binding */ createBannerBackground),\n/* harmony export */   \"createLine\": () => (/* binding */ createLine),\n/* harmony export */   \"createLogo\": () => (/* binding */ createLogo),\n/* harmony export */   \"createMarkdown\": () => (/* binding */ createMarkdown),\n/* harmony export */   \"updateBannerBackground\": () => (/* binding */ updateBannerBackground)\n/* harmony export */ });\nconst createLine = (e,d,c,s) => {\r\n    e.append(\"path\")\r\n      .attr(\"d\", d)\r\n      .attr(\"stroke\", c)\r\n      .attr(\"stroke-width\", s)\r\n      .attr(\"stroke-linecap\",\"round\")\r\n  }\r\n\r\n  const createLogo = (e,height, offsetX, offsetY) =>{\r\n    const createText = (id, text,x,y) => {\r\n      let selection = e.select(\"#\"+id)\r\n      if(selection.empty()){\r\n        selection = e.append(\"text\").attr(\"id\", id)\r\n      }\r\n      selection.attr(\"class\", \"bannerText\")\r\n        .attr(\"x\",x)\r\n        .attr(\"y\",y + height)\r\n        .text(text)\r\n    }\r\n\r\n    e.selectAll(\"path\").remove();\r\n\r\n\r\n    const h = height/2;\r\n    const w = height*3/8;\r\n    const sx = height/4;\r\n    const sx2 = sx*0.75;\r\n    const h1 = 0.5*h\r\n    const hl = [h,0];\r\n    const hs = [[0,h1],[h1,0],[0,0],hl,hl,hl,hl,hl,hl,[h,h-h1],[h-h1,h],[h,h]]\r\n    const ws = [[0,w/2],[w/2,w],[w,0],[w,2*w],[2*w,3*w],[3*w,4*w],[4*w,5*w],[5*w,6*w],[6*w,7*w],[7*w,7.5*w],[7.5*w,8*w],[8*w,7*w]]\r\n    const cs = [0,0,0,0,0,1,1,0,0,0,0,0]\r\n    let d, colour;\r\n    const colourMap = [\"black\", \"white\"]\r\n    hs.forEach((d,i)=>{\r\n        colour = colourMap[cs[i]]\r\n        d = d3.line()([\r\n        [ws[i][0]+sx+offsetX,d[0]+sx+offsetY],[ws[i][1]+sx+offsetX,d[1]+sx+offsetY]\r\n    ]);\r\n\r\n        createLine(e,d,colourMap[0],sx);\r\n        if(cs[i]){\r\n            createLine(e,d,colourMap[1],sx2);\r\n        }\r\n    })\r\n\r\n    createText(\"bannerTextName\",\"// WILLEM MEYER\",2*offsetX,2.25*offsetY)\r\n    createText(\"bannerTextCity\",\"// Perth, Australia\",2*offsetX,3.5*offsetY)\r\n    \r\n}\r\n\r\nconst createBackgroundData = (seed, ids, vw, vh, yPos, dataLines) => {\r\n  const yFac = 0.5\r\n  let countries = ids.map((id,i)=>{return seed[id].slice(1)})\r\n  const spacing = vh*0.1\r\n  const sinC = 0.707//0.866\r\n  const lenMin = vh*0.005\r\n  const lenRange = vh*2\r\n  const startMax = vh*0.05\r\n  const offsetX = vw-startMax*0.5*ids.length*0.5 - yPos*yFac\r\n  const offsetY = -startMax*sinC*ids.length*0.5 + yPos*yFac\r\n  const interp = (pos,data) =>  {\r\n    let dist = (pos*6)%1\r\n    let p1 = Math.floor(pos*6)\r\n    let val = (data[p1+1]-data[p1])*dist+data[p1]\r\n    return val\r\n  }\r\n\r\n  return countries.map((d,i) => {\r\n    let len, start\r\n    len = interp(yPos/(3*vh), d)*lenRange+lenMin\r\n    start = i*spacing\r\n    \r\n    const x = start*sinC + offsetX\r\n    const y = start*sinC + offsetY\r\n\r\n    return {\"x\":x,\"y\":y,\"len\":len,\"start\":start, \"colour\":d3.schemeDark2[i]}\r\n  });\r\n}\r\n\r\nconst createBannerBackground = (e,s,cs) => {\r\n    const triangle  = \"0,0 \" + s.toString() + \",0 0,\" + s.toString()\r\n    const c = cs[Math.floor(Math.random()*cs.length)]\r\n\r\n    return e.append(\"polygon\")\r\n    .data([triangle])\r\n    .attr(\"stroke\" , \"none\")\r\n    .attr(\"fill\" , c)\r\n    .attr(\"points\", triangle)\r\n}\r\n\r\nconst updateBannerBackground = (e,s) => {\r\n  const triangle  = \"0,0 \" + s.toString() + \",0 0,\" + s.toString()\r\n  return e.attr(\"points\", triangle)\r\n}\r\n\r\nconst createBackground = (e, dataLines, stroke) =>{\r\n\r\n  e.selectAll(\"path\")\r\n      .data(dataLines)\r\n      .join(enter => enter.append(\"path\")\r\n          .attr(\"d\", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})\r\n          .attr(\"stroke\", (d) => {return d.colour})\r\n          .attr(\"stroke-width\", stroke)\r\n          .attr(\"stroke-linecap\",\"round\"),\r\n          update => update.attr(\"d\", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})\r\n      )\r\n}\r\n\r\nconst createMarkdown = (e,i,d) => {\r\n  const root = d3.select(d[i])\r\n  const toPoint = (x,y) => {return \" \" + x.toString() +\",\"+ y.toString() }\r\n  const poly = \"0,0\"+ toPoint(e.w+e.h,0) + toPoint(e.w,e.h) + toPoint(0,e.h)\r\n  root.append(\"svg\")\r\n    .attr(\"class\", \"svgMarkdown\")\r\n    .attr(\"width\",e.w+e.h)\r\n    .attr(\"height\",e.h)\r\n    .append(\"polygon\")\r\n      .data([poly])\r\n      .attr(\"fill\" , \"red\")\r\n      .attr(\"points\", poly)\r\n  root.append(\"p\")\r\n    .attr(\"class\",\"pMarkdown\")\r\n    .text(e.textMarkdown)\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/svgDraw.js?");

/***/ }),

/***/ "./src/dataBG.json":
/*!*************************!*\
  !*** ./src/dataBG.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"columns\":[\"Area\",\"1960s\",\"1970s\",\"1980s\",\"1990s\",\"2000s\",\"2010s\"],\"index\":[32,66,100,134,168,202,236,270,304,338,406,440,474,542,576,610,644,780,814,848,882,950,984,1018,1052,1086,1120,1154,1188,1222,1256,1290,1324,1358,1392,1426,1460,1494,1528,1562,1596,1630,1664,1698,1732,1766,1800,1834,1868,1902,1970,2004,2106,2140,2174,2208,2242,2276,2310,2344,2378,2412,2514,2650,2684,2718,2752,2786,2820,2854,2888,2922,2990,3024,3058,3092,3126,3160,3194,3228,3262,3296,3330,3364,3398,3432,3466,3500,3534,3568,3602,3636,3670,3704,3738,3772,3806,3840,3874,3942,3976,4010,4078,4146,4180,4214,4248,4282,4384,4418,4452,4486,4520,4554,4622,4656,4690,4724,4758,4860,4894,4962,4996,5030,5064,5098,5166,5200,5234,5268,5302,5336,5370,5404,5472,5540,5574,5642,5710,5744,5778,5812,5846,5880,5914,5948,5982,6016,6050,6084,6152,6186,6254,6288,6322,6356,6390,6424,6458,6492,6526,6560,6594,6696,6730,6866,6900,6934,6968,7036,7070,7138,7172,7206,7240,7274,7308,7376,7410,7444,7478,7512,7546,7580,7614,7682,7716,7750,7818,7852,7886,7920,7954,7988,8090,8124,8158,8192,8226,8260,8362,8396,8430,8464,8498,8532,8566,8600,8634,8668,8702,8736,8770,8804,8838,8906,8940,8974,9008,9042,9076,9110,9144,9178,9212,9246,9280,9314,9348,9382,9416,9450,9484,9518,9552,9586,9620,9654],\"data\":[[\"Afghanistan\",-0.1294,0.0317,0.2145,0.3447,0.9704,1.1188],[\"Albania\",0.1005,-0.176,0.0346,0.3967,0.927,1.5816],[\"Algeria\",0.0972,-0.1315,0.5516,0.7998,1.3387,1.54],[\"American Samoa\",-0.102,0.0145,0.304,0.7146666667,0.7828888889,1.1611],[\"Andorra\",0.0773,-0.1164,0.4487,0.9615,1.199,1.5096],[\"Angola\",-0.0527,0.0403,0.3598,0.5205,0.5321,1.0363],[\"Anguilla\",0.0101,-0.1997,0.1566,0.3631,0.4636,0.7179],[\"Antarctica\",-0.0728,0.0389,0.0412,-0.0808,0.3467,0.6561],[\"Antigua and Barbuda\",0.0095,-0.1839,0.1605,0.4217777778,0.438375,0.7456],[\"Argentina\",0.0438,0.0433,0.2389,0.2656,0.3295,0.6419],[\"Aruba\",-0.0305,-0.1221428571,0.4012,0.589,0.5994444444,0.9911],[\"Australia\",-0.0159,0.0771,0.3834,0.4819,0.6781,0.9527],[\"Austria\",-0.0185,0.0769,0.2661,0.8762,1.3986,1.8172],[\"Bahamas\",-0.086,0.0963,0.3632,0.692,0.5855,0.8507],[\"Bahrain\",0.0639,0.006,0.2747,0.5205,1.3372,1.9284],[\"Bangladesh\",-0.0379,-0.077,0.0623,0.0745,0.5053,0.8165],[\"Barbados\",-0.0224,-0.1502,0.0031666667,0.3919,0.6612,1.0193],[\"Belize\",-0.157,0.2253,0.479,0.7121,0.6716,1.0092],[\"Benin\",-0.0386,0.0866,0.4515,0.582,0.8952,1.1404],[\"Bhutan\",-0.1325,0.0434,0.1229,0.1591,0.7648,1.157],[\"Bolivia (Plurinational State of)\",0.1945,0.0692,0.3489,0.5035,0.6571,0.9278],[\"Botswana\",-0.0035,-0.0441,0.2896,0.5928,0.3491,0.9716],[\"Brazil\",-0.0092,0.0169,0.335,0.6461,0.9271,1.3251],[\"British Virgin Islands\",0.0084,-0.2064,0.1548,0.345,0.4617,0.6944],[\"Brunei Darussalam\",-0.0639,0.0261,0.2399,0.4996,0.6211,0.9465],[\"Bulgaria\",0.1197,-0.0901,-0.0356,0.3076,0.9196,1.4461],[\"Burkina Faso\",-0.0738,0.1226,0.5129,0.5463,0.8434,1.0033],[\"Burundi\",-0.0945,0.1913333333,0.1243333333,0.148,0.4045714286,0.628],[\"Cabo Verde\",0.0353,0.2733333333,0.8982857143,0.9179,1.1026,1.3152],[\"Cambodia\",0.0298,-0.0144,0.2825,0.492,0.5078,0.9327],[\"Cameroon\",-0.0427,0.102,0.145,0.5054,0.8126,1.0512],[\"Canada\",-0.1051,-0.1346,0.4967,0.6784,1.1433,1.4771],[\"Cayman Islands\",-0.111,0.1252,0.3339,0.9033,0.6958,0.8076],[\"Central African Republic\",-0.0744,0.1219,0.2621,0.3344,0.8501,1.0248],[\"Chad\",-0.0691,0.1356,0.2743,0.3744,0.7906,1.1803],[\"Channel Islands\",-0.1234,0.0426,0.1841,0.7815,1.0709,1.185],[\"Chile\",0.0182,-0.0046,0.2824,0.2051,0.1568,0.4292],[\"China\",-0.0243,0.0493,0.1923,0.6473,1.0905,1.1524],[\"China, Hong Kong SAR\",0.0409,-0.1157,0.0298,0.3677,0.7987,0.97],[\"China, Macao SAR\",0.0409,-0.1157,0.0298,0.3677,0.7987,0.97],[\"China, mainland\",-0.0241,0.0498,0.1928,0.6483,1.092,1.1541],[\"China, Taiwan Province of\",-0.062,-0.0497,0.0444,0.41,0.7003,0.732],[\"Christmas Island\",0,-0.0521428571,0.3648,0.4432857143,0.4638,0.6972222222],[\"Cocos (Keeling) Islands\",-0.016,-0.2063,0.0631,0.4664,0.4528,0.7618],[\"Colombia\",-0.0245,-0.0236,0.224,0.4041,0.5942,0.9467],[\"Comoros\",-0.0447,0.0025,0.19975,0.4132,0.6727,1.2444],[\"Congo\",-0.0385,0.0715,0.0301,0.2531111111,0.6491,1.0029],[\"Cook Islands\",-0.1477,0.0938,0.2997,0.5054444444,0.5429,0.6952857143],[\"Costa Rica\",-0.008,-0.0982,0.246,0.2954,0.5715,0.8186],[\"C�te d\\'Ivoire\",-0.0285,0.1307,0.4341,0.6154,0.8093,1.1065],[\"Cuba\",-0.0946,0.1025,0.3485,0.7883,0.7007,0.9592],[\"Cyprus\",0.0836,-0.1253,-0.159,0.2353,0.764,1.3317],[\"Democratic People\\'s Republic of Korea\",-0.0609,0.1364,0.2139,0.9341,1.0086,0.9511],[\"Democratic Republic of the Congo\",-0.0576,0.1006,0.1625,0.2431,0.6565,0.979],[\"Denmark\",-0.1033,0.117,0.1602,0.8516,1.4144,1.3958],[\"Djibouti\",-0.1554,0.1623,0.278,0.5993,1.0679,1.3142222222],[\"Dominica\",-0.0389,-0.1719,0.1168,0.3393,0.4647,0.8003],[\"Dominican Republic\",-0.0565,-0.0459,0.4364,0.7653,0.9023,1.1544],[\"Ecuador\",-0.1065,0.0254,0.3057,0.5973,0.7433,1.0528],[\"Egypt\",0.0747,-0.1419,-0.2838,0.1595,0.5897,1.1666],[\"El Salvador\",-0.0826,0.1464,0.3756,0.6276,0.7105,0.8464],[\"Equatorial Guinea\",-0.0004,0.0267,0.0915,0.454375,0.7193,1.0464],[\"Eswatini\",0.0457,0.0429,0.314,0.5017,0.5279,0.9406],[\"Faroe Islands\",-0.0893,-0.0078,0.068,0.3848,0.9946,0.8433],[\"Fiji\",-0.1057,0.1151,0.2916,0.3906,0.7796,1.0316],[\"Finland\",-0.155,0.1683,0.0774,0.8616,1.5804,1.7094],[\"France\",-0.0161,-0.0241,0.2902,0.8997,1.2327,1.4917],[\"French Guiana\",-0.048,-0.038,0.3047,0.6215,0.9498,1.3334],[\"French Polynesia\",-0.1286,0.0603,0.255,0.3823,0.6406,0.7084],[\"French Southern and Antarctic Territories\",-0.1824,0.1628,0.3886666667,0.4821111111,0.4325,0.6677],[\"Gabon\",-0.015,0.0513,-0.0142,0.282,0.6294,0.9462],[\"Gambia\",-0.0976,0.265,0.7739,1.0939,1.2911,1.519],[\"Germany\",-0.0617,0.0725,0.2519,0.8707,1.3964,1.5784],[\"Ghana\",-0.0313,0.1226,0.4835,0.5743,0.7955,1.0501],[\"Gibraltar\",0.1312,-0.2415,0.4725,0.8259,1.1361,1.3886],[\"Greece\",0.1458,-0.1734,-0.1226,0.1971,0.71,1.2725],[\"Greenland\",0.0821,-0.3326,-0.3431,-0.1139,1.3375,1.5844],[\"Grenada\",-0.0595,-0.1414,0.0879,0.433,0.7256,1.0262],[\"Guadeloupe\",-0.0086,-0.1871,0.1417,0.3578,0.4546,0.7526],[\"Guatemala\",-0.0998,0.1454,0.372,0.6562,0.7073,0.9191],[\"Guinea\",-0.0367,0.1323,0.4195,0.6454,1.051,1.2649],[\"Guinea-Bissau\",-0.0749,0.1988,0.6372,0.9817,1.2983,1.6879],[\"Guyana\",-0.0359,0.0017,0.2481,0.5776,0.9661,1.1654],[\"Haiti\",-0.0743,0.0282,0.4699,0.8537,0.9273,1.1442],[\"Holy See\",0.076,-0.1859,0.0963,0.5823,0.9998,1.4147],[\"Honduras\",-0.1001,0.1637,0.3816,0.6567,0.7005,0.9358],[\"Hungary\",0.0043,0.042,0.0592,0.5763,1.2214,1.7245],[\"Iceland\",-0.1447,-0.1575,-0.2034,0.1581,0.8797,1.0629],[\"India\",-0.075,-0.0161,0.1103,0.1137,0.5237,0.6215],[\"Indonesia\",-0.0386,0.0347,0.1509,0.3413,0.4715,0.7749],[\"Iran (Islamic Republic of)\",-0.0282,-0.005,0.2984,0.5276,1.2126,1.5989],[\"Iraq\",0.0308,-0.0416,-0.0203,0.4234,0.9616,1.6169],[\"Ireland\",-0.1856,0.0801,0.1108,0.5839,0.9104,0.782],[\"Isle of Man\",-0.1935,0.0687,0.0953,0.57,0.9373,0.815],[\"Israel\",0.0748,-0.1538,-0.2439,0.1432,0.5243,1.1969],[\"Italy\",0.0715,-0.1114,0.164,0.701,1.1286,1.4883],[\"Jamaica\",-0.0417,-0.055,0.5848,0.8106,0.891,1.1494],[\"Japan\",-0.0028,-0.0502,-0.1254,0.5936,0.661,0.8],[\"Jordan\",0.1172,-0.1604,-0.2222,0.1824,0.4954,1.3327],[\"Kenya\",-0.1106,0.0949,0.3418,0.3792,0.8269,1.1997],[\"Kiribati\",-0.0536,-0.0613,0.1285,0.2853,0.7155,1.1489],[\"Kuwait\",0.0459,-0.0156,0.2122,0.6594,1.4158,1.9247],[\"Lao People\\'s Democratic Republic\",-0.0258,0.017,0.3356,0.5244,0.5916,1.0846],[\"Lebanon\",0.0847,-0.1103,-0.1246,0.3016,0.7366,1.4212],[\"Lesotho\",0.1028,0.0841,0.4098,0.5998,0.5015,0.9709],[\"Liberia\",-0.0538,0.1285,0.3469,0.6121,0.9021,1.1412],[\"Libya\",0.0124,-0.1324,0.0409,0.5187,0.8827,1.2108],[\"Liechtenstein\",0.0008,0.0431,0.3135,0.9276,1.3332,1.7038],[\"Madagascar\",-0.0405,0.0413,0.1639,0.3429,0.6193,1.0212],[\"Malawi\",-0.0561,0.0294,0.1635,0.4099,0.8405,1.238],[\"Malaysia\",-0.0457,0.0513,0.3057,0.525,0.641,1.047],[\"Maldives\",0.0366666667,0.040125,0.3173,0.5883,0.5499,0.7572],[\"Mali\",-0.0391,0.1228,0.5694,0.7173,0.9957,1.1101],[\"Malta\",0.1127,-0.2008,0.2209,0.7587,1.1113,1.4078],[\"Martinique\",-0.0455,-0.1637,0.1157,0.3415,0.4866,0.8194],[\"Mauritania\",-0.026,0.1039,0.7625,1.0507,1.1832,1.4122],[\"Mauritius\",0.0299,0.0308,0.1403,0.3341,0.4687,1.078],[\"Mayotte\",-0.0322,0.004875,0.2335555556,0.4488,0.664,1.1953],[\"Mexico\",-0.069,-0.093,0.1972,0.4679,0.6498,1.0171],[\"Monaco\",0.0486,-0.0427,0.2134,0.7841,1.2305,1.5138],[\"Mongolia\",0.0183,0.3128,0.4358,1.2921,1.4989,1.4791],[\"Montserrat\",0.0095,-0.1839,0.1605,0.4217777778,0.438375,0.7456],[\"Morocco\",0.1561,-0.255,0.6624,0.9579,1.457,1.753],[\"Mozambique\",-0.0371,0.0232,0.1941,0.3774,0.5256,0.8603],[\"Myanmar\",-0.004,-0.0077,0.2112,0.424,0.5954,1.0522],[\"Namibia\",0.0034,0.0117,0.3354,0.5684,0.7005,1.0905],[\"Nepal\",-0.1083,-0.0276,0.0471,0.0353,0.5859,0.6835],[\"Netherlands\",-0.1188,0.0797,0.2524,0.8652,1.4189,1.4475],[\"Netherlands Antilles (former)\",-0.003,-0.1104,0.3101,0.4798,0.6037,0.8982],[\"New Caledonia\",-0.2051,0.1957,0.2264,0.3965,0.4275,0.8234],[\"New Zealand\",-0.1736,0.2238,0.2445,0.1802,0.3367,0.7599],[\"Nicaragua\",-0.1354,0.0874,0.3847,0.5528,0.7124,0.9576],[\"Niger\",-0.0225,0.129,0.3564,0.6174,0.9692,1.1707],[\"Nigeria\",-0.0599,0.1991,0.4081,0.614,0.907,1.1883],[\"Norfolk Island\",-0.0708,0.102125,0.2142,0.2842222222,0.172,0.6292222222],[\"Norway\",-0.1794,0.1359,0.0686,0.7736,1.3935,1.3132],[\"Oman\",0.014,0.1463,-0.1865,0.0431,0.6488,0.9099],[\"Pakistan\",-0.1308,-0.042,-0.0525,0.0188,0.625,0.757],[\"Palestine\",0.0738,-0.1467,-0.2376,0.1469,0.5259,1.1997],[\"Panama\",-0.0473333333,-0.0094,0.2262,0.3421,0.608,0.9445],[\"Papua New Guinea\",-0.093,0.0052,0.2874,0.464,0.4768,0.7464],[\"Paraguay\",0.1417,0.1384,0.2603,0.3528,0.636,0.9352],[\"Peru\",-0.0139,-0.0016,0.3946,0.6227,0.7505,1.0696],[\"Philippines\",-0.0777,0.0956,0.3633,0.4833,0.6112,0.9655],[\"Pitcairn Islands\",0.0904,-0.1707,0.0453,-0.2272222222,0.1161,0.059],[\"Poland\",-0.0104,0.084,0.1908,0.7207,1.2923,1.6197],[\"Portugal\",0.1504,-0.281,0.4647,0.87,1.0199,1.3586],[\"Puerto Rico\",-0.0172,-0.1342,0.206,0.4439,0.5499,0.7985],[\"Qatar\",-0.0056,0.0032,0.2395,0.4333,1.1847,1.7457],[\"Republic of Korea\",-0.0218,0.0476,0.0083,0.6736,0.7839,0.788],[\"R�union\",-0.0559,0.1109,0.2315555556,0.4044,0.6604,1.0785],[\"Romania\",0.065,-0.0279,-0.0663,0.3756,1.045,1.5449],[\"Rwanda\",-0.0704,0.1928333333,0.2688333333,0.14825,0.3684285714,0.687],[\"Saint Helena, Ascension and Tristan da Cunha\",0.01,0.0813,0.3899,0.8425,1.38,1.5251],[\"Saint Kitts and Nevis\",0.0095,-0.1839,0.1605,0.4217777778,0.438375,0.7456],[\"Saint Lucia\",-0.0498,-0.1507,0.1037,0.3816,0.6104,0.9316],[\"Saint Pierre and Miquelon\",-0.0306,-0.2753,-0.0863,-0.2062,0.6424,0.8885],[\"Saint Vincent and the Grenadines\",-0.0583,-0.1414,0.0879,0.433,0.7256,1.0262],[\"Samoa\",-0.0786,0.0063,0.2746,0.55125,0.799,1.0988],[\"San Marino\",0.0542,-0.0832,0.1283,0.6857,1.2198,1.5146],[\"Sao Tome and Principe\",0.0032,0.054,0.0838,0.5671666667,0.728,1.01],[\"Saudi Arabia\",0.0592,-0.0664,-0.0336,0.3292,0.9283,1.5727],[\"Senegal\",-0.0983,0.2623,0.7417,1.0007,1.1491,1.3053],[\"Seychelles\",-0.0463,0.0293,0.2726,0.459,0.6084,1.0703],[\"Sierra Leone\",-0.0411,0.1442,0.3177,0.5002,1.1031111111,1.2627],[\"Solomon Islands\",-0.0375,0.0512,0.2151,0.3821,0.7318571429,1.407],[\"Somalia\",-0.0738,0.152,0.4128,0.6163,1.0244,1.4988],[\"South Africa\",0.0709,0.0169,0.3265,0.5002,0.6792,1.0831],[\"South Georgia and the South Sandwich Islands\",-0.0172222222,0.066,0.095375,0.178625,0.345875,0.1718],[\"Spain\",0.1551,-0.253,0.4741,0.8457,1.0747,1.3331],[\"Sri Lanka\",-0.0217,0.0265,0.4547,0.6364,0.783,1.0232],[\"Sudan (former)\",-0.1169,0.1061,0.3362,0.427,0.9105,1.618],[\"Suriname\",-0.0382,-0.0184,0.2506,0.6568,1.0447,1.3564],[\"Svalbard and Jan Mayen Islands\",-1.1194,0.2179,-0.1139,0.7556,1.9692,3.2931],[\"Sweden\",-0.1428,0.1641,0.056,0.9134,1.5142,1.4802],[\"Switzerland\",0.0002,0.0132,0.2876,0.9262,1.3278,1.6562],[\"Syrian Arab Republic\",0.0586,-0.0612,-0.0829,0.3538,0.7537,1.5135],[\"Thailand\",-0.0191,0.0144,0.3161,0.5221,0.5274,1.0073],[\"Timor-Leste\",-0.1586,0.37325,0.3871428571,0.2751666667,0.6234285714,0.8954444444],[\"Togo\",-0.0184,0.0904,0.4399,0.553,0.9222,1.1623],[\"Tokelau\",-0.056,0.0186,0.2538,0.7945,0.8071666667,1.058],[\"Tonga\",-0.119,0.107,0.2456,0.4396,0.9305,1.2419],[\"Trinidad and Tobago\",-0.032,0.0052,0.1892222222,0.514,0.9312222222,1.1815],[\"Tunisia\",0.0769,-0.0889,0.5319,1.022,1.4756,1.6673],[\"Turkey\",0.1163,-0.0856,-0.0129,0.1922,0.7472,1.3837],[\"Turks and Caicos Islands\",0.0164,0.035,0.4118,1.0574,0.9898,1.2738888889],[\"Tuvalu\",-0.0246,-0.1639,0.0092,0.3718,0.6981,0.9454],[\"Uganda\",-0.1148,0.1058,0.4638,0.3526,0.8003,1.1849],[\"United Arab Emirates\",0.0087,-0.0536,-0.0494,0.1423,0.7294,1.1732],[\"United Kingdom\",-0.1831,0.0522,0.091,0.5849,0.9953,0.8925],[\"United Republic of Tanzania\",-0.0836,0.0235,0.2824,0.2639,0.7397,1.2379],[\"United States of America\",-0.0744,-0.0996,0.3522,0.5066,0.8433,1.1074],[\"United States Virgin Islands\",0.007,-0.2022,0.1592,0.3575,0.4724,0.7046],[\"Uruguay\",-0.0295,0.0708,0.3472,0.3573,0.5353,0.7325],[\"Vanuatu\",-0.0818,0.11,0.1859,0.4481,0.7791,0.9898],[\"Venezuela (Bolivarian Republic of)\",-0.0212,0.0277,0.2195,0.5061,0.7576,1.0031],[\"Viet Nam\",0.0139,-0.0449,0.1889,0.4114,0.6084,0.9981],[\"Wake Island\",0,-0.0583333333,0.3889,0.3646,0.1849,0.4018888889],[\"Wallis and Futuna Islands\",-0.038,0.0201,0.1207,0.3605,0.862,1.0411],[\"Western Sahara\",0.1967,-0.1965,0.6168,0.9863,1.182,1.5238],[\"Zambia\",-0.0612,0.0058,0.3629,0.5167,0.6354,1.2055],[\"Zimbabwe\",-0.0016,-0.0236,0.319,0.4194,0.2425,0.7237],[\"World\",-0.0202,0.0239,0.2889,0.5745,0.9606,1.2612],[\"Africa\",-0.0278,0.0414,0.3272,0.5243,0.8514,1.1832],[\"Eastern Africa\",-0.0772,0.0594,0.3144,0.4374,0.7423,1.163],[\"Middle Africa\",-0.0565,0.0943,0.2153,0.3521,0.6874,1.0387],[\"Northern Africa\",0.0198,-0.0706,0.2922,0.5752,1.0347,1.3818],[\"Southern Africa\",0.034,0.003,0.3221,0.5427,0.6109,1.059],[\"Western Africa\",-0.0394,0.1377,0.5107,0.7186,0.9902,1.1979],[\"Americas\",-0.0426,-0.0525,0.3537,0.5511,0.8594,1.1813],[\"Northern America\",-0.087,-0.121,0.4123,0.581,1.0017,1.2986],[\"Central America\",-0.0757,-0.0542,0.2289,0.4853,0.6558,0.9982],[\"Caribbean\",-0.074,0.038,0.3788,0.7546,0.7659,1.0203],[\"South America\",0.0117,0.0226,0.306,0.5236,0.73,1.0762],[\"Asia\",-0.0228,0.0307,0.1625,0.4994,0.9684,1.1525],[\"Eastern Asia\",-0.0182,0.082,0.2131,0.7345,1.1274,1.1793],[\"Southern Asia\",-0.0745,-0.0125,0.1499,0.2322,0.7574,0.9447],[\"South-Eastern Asia\",-0.0274,0.0234,0.223,0.4181,0.5367,0.9154],[\"Western Asia\",0.0466,-0.0285,-0.0062,0.2922,0.8591,1.4784],[\"Europe\",0.026,0.0938,0.2531,0.8045,1.3842,1.7555],[\"Eastern Europe\",0.0373,0.111,0.266,0.8117,1.4131,1.8298],[\"Northern Europe\",-0.161,0.1164,0.0574,0.7696,1.3706,1.3716],[\"Southern Europe\",0.1123,-0.1798,0.2523,0.6799,1.0515,1.4368],[\"Western Europe\",-0.0367,0.0227,0.2727,0.8877,1.3129,1.5487],[\"Oceania\",-0.0259,0.0781,0.3722,0.4706,0.6563,0.9369],[\"Australia and New Zealand\",-0.0213,0.0819,0.3788,0.4719,0.6667,0.9463],[\"Melanesia\",-0.0941,0.0203,0.2792,0.4545,0.5031,0.7996],[\"Micronesia\",-0.0299,-0.0674,0.1455,0.214,0.3812,0.7813],[\"Polynesia\",-0.1086,0.0465,0.2608,0.4461,0.7218,0.9114],[\"European Union\",-0.0149,-0.0048,0.1843,0.7555,1.2451,1.4831],[\"Least Developed Countries\",-0.0667,0.0878,0.3369,0.4778,0.8153,1.1344],[\"Land Locked Developing Countries\",-0.0117,0.1139,0.3576,0.6069,1.0241,1.1968],[\"Small Island Developing States\",-0.0736,0.0286,0.3051,0.5782,0.736,1.0121],[\"Low Income Food Deficit Countries\",-0.0717,0.0804,0.2952,0.4212,0.8018,1.0497],[\"Net Food Importing Developing Countries\",-0.0479,0.0715,0.3119,0.5197,0.8315,1.1437],[\"Annex I countries\",-0.0198,0.0134,0.3219,0.6626,1.1355,1.4384],[\"Non-Annex I countries\",-0.0211,0.0321,0.2639,0.5109,0.8382,1.132],[\"OECD\",-0.0596,-0.0524,0.3543,0.5646,0.9089,1.1993]]}');\n\n//# sourceURL=webpack:///./src/dataBG.json?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"resume\",\"img\":\"img/resume.svg\",\"text\":\"< Check out my resume\",\"link\":\"\",\"onclick\":\"window.open(\\'https://wllm.info/resume.pdf\\', \\'_blank\\').focus();\"},{\"name\":\"email\",\"img\":\"img/email.svg\",\"text\":\"< Copy my email\",\"link\":\"hello@wllm.info\",\"onclick\":\"copyEmail()\"},{\"name\":\"github\",\"img\":\"img/github.svg\",\"text\":\"< Source code\",\"link\":\"https://github.com/WillemPlusPlus/wllm\",\"onclick\":\"window.open(\\'https://github.com/WillemPlusPlus/wllm\\', \\'_blank\\').focus();\"},{\"name\":\"randomize\",\"img\":\"img/dice.svg\",\"text\":\"< Randomize!\",\"link\":\"\",\"onclick\":\"updateData()\"}]');\n\n//# sourceURL=webpack:///./src/menu.json?");

/***/ }),

/***/ "./src/offers.json":
/*!*************************!*\
  !*** ./src/offers.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"pricePreamble\":\"$\",\"pricePostamble\":\"/hour\",\"price\":\"25\",\"textPreamble\":\"starting at\",\"textMarkdown\":\"POPULAR\",\"textBody\":\"Need a position filled? I have diverse experience and am always looking to pick up skills in new industries. I\\'ll consider all offers from short-term and contract work to full-time and salary\",\"textHeading\":\"Casual & Parttime\",\"textFooter\":\"\"},{\"pricePreamble\":\"\",\"pricePostamble\":\"\",\"price\":\"Free*\",\"textPreamble\":\"Limited time offer\",\"textMarkdown\":\"GREAT VALUE\",\"textBody\":\"Does your organisation have a software focus? Paid and unpaid internship positions are exactly what I’m after! Upon graduation, I will be available to your organisation as a junior software engineer.\",\"textHeading\":\"Software Internships\",\"textFooter\":\"*First 450 hours\"},{\"pricePreamble\":\"$\",\"pricePostamble\":\"/hour\",\"price\":\"45\",\"textPreamble\":\"starting at\",\"textMarkdown\":\"DISCOUNT\",\"textBody\":\"Looking to commission? I can help in a wide range of areas including machine learning, data processing/analysis/visualisation, graphic design, and web design. Owing to my inexperience, my rate is heavily discounted as I build my portfolio!\",\"textHeading\":\"Freelance Commisions\",\"textFooter\":\"\"}]');\n\n//# sourceURL=webpack:///./src/offers.json?");

/***/ }),

/***/ "./src/quips.json":
/*!************************!*\
  !*** ./src/quips.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[\"Developer and Designer\",\"Work in Progress\",\"Designer in Development\",\"Programmer by day; asleep by night\",\"I let CoPilot write this one\",\"Shown to be better than placebo\",\"(under)graduate and masters student\",\"Looking for software internships\",\"Looking to learn from the best\",\"Hello World!\",\"Always trying to learn something new\",\"Connecting with people in the Perth software scene\",\"Setting a very low bar\",\"Inexperinced but learning all the time\",\"significantly less secure than my software\",\"Masters student seeking software mastery\"]');\n\n//# sourceURL=webpack:///./src/quips.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;