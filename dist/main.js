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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svgDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgDraw */ \"./src/svgDraw.js\");\n\r\nconst careers = __webpack_require__(/*! ./offers.json */ \"./src/offers.json\")\r\nlet vh = window.innerHeight\r\nlet vw = window.innerWidth\r\nconst vMax = Math.max(vh,vw)/100\r\nconst vMin = Math.min(vh,vw)/100\r\nconst bannerSize = vh*0.35\r\n\r\n\r\nconst svgBG = d3.select(\"#background\")\r\nconst svgLogo = d3.select(\"#banner\")\r\nconst svgBanner = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBannerBackground)(svgLogo,bannerSize,d3.schemeDark2[0])\r\nconst svgMask = svgLogo.append(\"mask\")\r\n    .attr(\"id\", \"logoClip\")\r\nsvgMask.append(\"rect\")\r\n    .attr(\"width\", bannerSize)\r\n    .attr(\"height\", bannerSize)\r\n    .attr(\"fill\", \"#fff\")\r\nsvgBanner.attr(\"mask\", \"url(#logoClip)\")\r\nlet svgLines = svgBG.append(\"svg\").attr(\"id\", \"lines\")\r\nlet dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(svgBG,6,d3.schemeDark2,vMax, vw, 0, [])\r\n;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines, vMax)\r\n\r\n;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createLogo)(svgMask,bannerSize/5,bannerSize/20,bannerSize/20)\r\n\r\n\r\n\r\nlet lastKnownScrollPosition = 0;\r\nlet ticking = false;\r\n\r\nconst scrollAnimation = (scrollPos) => {\r\n\r\n    const yBuffTop = 50\r\n    const yBuffBot = 5000\r\n    const yFac = 0.6\r\n    let yPos = Math.max(Math.min(scrollPos*yFac,yBuffBot), yBuffTop)\r\n    dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(svgBG,6,d3.schemeAccent, vw, vh, yPos, dataLines)\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines)\r\n\r\n}\r\n\r\n\r\n\r\nconst openAbout = (e) => {\r\n\r\n    // Get all elements with class=\"tabcontent\" and hide them\r\n    const id = e.currentTarget.id+\"Content\"\r\n    let tabContent = document.getElementsByClassName(\"tabcontent\");\r\n    for(let i = 0; i<tabContent.length; i++){\r\n        if(tabContent[i].id == id){\r\n            tabContent[i].style.display = \"block\";\r\n        }else{\r\n            tabContent[i].style.display = \"none\";\r\n        }\r\n    }\r\n    let tabs = document.getElementsByClassName(\"tab\");\r\n    for(let i = 0; i<tabs.length; i++){tabs[i].className = tabs[i].className.replace(\" active\", \"\");}\r\n    // Show the current tab, and add an \"active\" class to the button that opened the tab\r\n    e.currentTarget.className += \" active\";\r\n}\r\n\r\nlet tabs = document.getElementsByClassName(\"tab\");\r\nfor(let i = 0; i<tabs.length; i++){\r\n    tabs[i].addEventListener(\"click\",openAbout);\r\n}\r\n\r\ndocument.addEventListener('scroll', (e) => {\r\n  lastKnownScrollPosition = window.scrollY;\r\n\r\n  if (!ticking) {\r\n    window.requestAnimationFrame(() => {\r\n        scrollAnimation(lastKnownScrollPosition);\r\n      ticking = false;\r\n    });\r\n\r\n    ticking = true;\r\n  }\r\n});\r\nopenAbout({\"currentTarget\":document.getElementById(\"about\")})\r\nconst w = vh*0.2\r\nconst h = vh*0.05\r\n\r\nfor(const career of careers){\r\n    career.w = w\r\n    career.h = h\r\n}\r\n\r\nconst createOffer = (e,i,d) => {\r\n    const root = d3.select(d[i])\r\n    root.append(\"div\").attr(\"class\",\"workHeader\")\r\n    .text(e.textHeading)\r\n    root.append(\"div\").attr(\"class\",\"workStart\")\r\n    .text(e.textPreamble)\r\n    let rate = root.append(\"div\").attr(\"class\",\"workRate\")\r\n    rate.append(\"span\").attr(\"class\",\"pricePreamble\").text(e.pricePreamble)\r\n    rate.append(\"span\").attr(\"class\",\"price\").text(e.price)\r\n    rate.append(\"span\").attr(\"class\",\"pricePostamble\").text(e.pricePostamble)\r\n\r\n    root.append(\"button\").attr(\"class\", \"workButton\").attr(\"type\", \"button\")\r\n    .text(\"Email Me\")\r\n    \r\n    root.append(\"div\").attr(\"class\",\"workInfo\")\r\n    .text(e.textBody)\r\n    root.append(\"div\").attr(\"class\",\"workFooter\")\r\n    .text(e.textFooter)\r\n\r\n}\r\n\r\nlet divMarkdown = d3.select(\"#workWrapper\").selectAll(\".workOffer\")\r\n    .data(careers)\r\n    .join(\r\n        enter =>{\r\n\r\n        let offer = enter.append(\"div\")\r\n        .attr(\"class\",\"workOffer\");\r\n\r\n        offer.append(\"div\")\r\n        .attr(\"class\", \"markdown\")\r\n        .each(_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createMarkdown);\r\n\r\n        offer.each(createOffer);\r\n\r\n\r\n\r\n        return offer;}\r\n    )\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svgDraw.js":
/*!************************!*\
  !*** ./src/svgDraw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBackground\": () => (/* binding */ createBackground),\n/* harmony export */   \"createBackgroundData\": () => (/* binding */ createBackgroundData),\n/* harmony export */   \"createBannerBackground\": () => (/* binding */ createBannerBackground),\n/* harmony export */   \"createLine\": () => (/* binding */ createLine),\n/* harmony export */   \"createLogo\": () => (/* binding */ createLogo),\n/* harmony export */   \"createMarkdown\": () => (/* binding */ createMarkdown)\n/* harmony export */ });\nconst createLine = (e,d,c,s) => {\r\n    e.append(\"path\")\r\n      .attr(\"d\", d)\r\n      .attr(\"stroke\", c)\r\n      .attr(\"stroke-width\", s)\r\n      .attr(\"stroke-linecap\",\"round\")\r\n  }\r\n\r\n  const createLogo = (e,height, offsetX, offsetY) =>{\r\n    const createText = (e, text,x,y) => {\r\n      e.append(\"text\")\r\n        .attr(\"class\", \"bannerText\")\r\n        .attr(\"x\",x)\r\n        .attr(\"y\",y + height)\r\n        .text(text)\r\n    }\r\n\r\n    const h = height/2;\r\n    const w = height*3/8;\r\n    const sx = height/4;\r\n    const sx2 = sx*0.75;\r\n    const h1 = 0.5*h\r\n    const hl = [h,0];\r\n    const hs = [[0,h1],[h1,0],[0,0],hl,hl,hl,hl,hl,hl,[h,h-h1],[h-h1,h],[h,h]]\r\n    const ws = [[0,w/2],[w/2,w],[w,0],[w,2*w],[2*w,3*w],[3*w,4*w],[4*w,5*w],[5*w,6*w],[6*w,7*w],[7*w,7.5*w],[7.5*w,8*w],[8*w,7*w]]\r\n    const cs = [0,0,0,0,0,1,1,0,0,0,0,0]\r\n    let d, colour;\r\n    const colourMap = [\"black\", \"white\"]\r\n    hs.forEach((d,i)=>{\r\n        colour = colourMap[cs[i]]\r\n        d = d3.line()([\r\n        [ws[i][0]+sx+offsetX,d[0]+sx+offsetY],[ws[i][1]+sx+offsetX,d[1]+sx+offsetY]\r\n    ]);\r\n\r\n        createLine(e,d,colourMap[0],sx);\r\n        if(cs[i]){\r\n            createLine(e,d,colourMap[1],sx2);\r\n        }\r\n    })\r\n\r\n    createText(e,\"// WILLEM MEYER\",2*offsetX,2.25*offsetY)\r\n    createText(e, \"// Perth, WA\",2*offsetX,3.5*offsetY)\r\n    \r\n}\r\n\r\nconst createBackgroundData = (e, n, colours, vw, vh, yPos, dataLines) => {\r\n  const spacing = vh*0.05\r\n  const sinC = 0.707//0.866\r\n  const lenMin = vh*0.15\r\n  const lenRange = vh*0.15\r\n  const startMax = vh*0.05\r\n  const offsetX = vw-startMax*0.5*n*0.5 - yPos\r\n  const offestY = -startMax*sinC*n*0.5 + yPos\r\n\r\n  return d3.range(n).map(i => {\r\n    let len, start\r\n    if(dataLines.length){\r\n      len = dataLines[i].len\r\n      start = dataLines[i].start\r\n    }else{\r\n      len = Math.random()*lenRange+lenMin\r\n      start = i*spacing + Math.random()*startMax\r\n    }\r\n    const x = start*sinC + offsetX\r\n    const y = start*sinC + offestY\r\n\r\n    return {\"x\":x,\"y\":y,\"len\":len,\"start\":start, \"colour\":d3.schemeAccent[i]}\r\n  });\r\n}\r\n\r\nconst createBannerBackground = (e,s,c) => {\r\n    const triangle  = \"0,0 \" + s.toString() + \",0 0,\" + s.toString()\r\n\r\n    return e.append(\"polygon\")\r\n    .data([triangle])\r\n    .attr(\"stroke\" , \"none\")\r\n    .attr(\"fill\" , c)\r\n    .attr(\"points\", triangle)\r\n}\r\n\r\nconst createBackground = (e, dataLines, vMax) =>{\r\n\r\n  const stroke = vMax*10\r\n\r\n  e.selectAll(\"path\")\r\n      .data(dataLines)\r\n      .join(enter => enter.append(\"path\")\r\n          .attr(\"d\", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})\r\n          .attr(\"stroke\", (d) => {return d.colour})\r\n          .attr(\"stroke-width\", stroke)\r\n          .attr(\"stroke-linecap\",\"round\"),\r\n          update => update.attr(\"d\", (d)=>{return d3.line()([[d.x+d.len,d.y-d.len],[d.x-d.len,d.y+d.len]])})\r\n      )\r\n}\r\n\r\nconst createMarkdown = (e,i,d) => {\r\n  const root = d3.select(d[i])\r\n  console.log(root,e, i)\r\n  const toPoint = (x,y) => {return \" \" + x.toString() +\",\"+ y.toString() }\r\n  const poly = \"0,0\"+ toPoint(e.w+e.h,0) + toPoint(e.w,e.h) + toPoint(0,e.h)\r\n  root.append(\"svg\")\r\n    .attr(\"class\", \"svgMarkdown\")\r\n    .attr(\"width\",e.w+e.h)\r\n    .attr(\"height\",e.h)\r\n    .append(\"polygon\")\r\n      .data([poly])\r\n      .attr(\"stroke\" , \"none\")\r\n      .attr(\"fill\" , \"red\")\r\n      .attr(\"points\", poly)\r\n  root.append(\"p\")\r\n    .attr(\"class\",\"pMarkdown\")\r\n    .text(e.textMarkdown)\r\n\r\n}\n\n//# sourceURL=webpack:///./src/svgDraw.js?");

/***/ }),

/***/ "./src/offers.json":
/*!*************************!*\
  !*** ./src/offers.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"pricePreamble\":\"$\",\"pricePostamble\":\"/hour\",\"price\":\"25\",\"textPreamble\":\"starting at\",\"textMarkdown\":\"POPULAR\",\"textBody\":\"Need a position filled? I have diverse experience and am always looking to pick up skills in new industries. I\\'ll consider all offers from short-term and contract work to full-time and salary\",\"textHeading\":\"Casual & Parttime\",\"textFooter\":\"\"},{\"pricePreamble\":\"\",\"pricePostamble\":\"\",\"price\":\"Free*\",\"textPreamble\":\"Limited time offer\",\"textMarkdown\":\"GREAT VALUE\",\"textBody\":\"Does your organisation have a software focus? Paid and unpaid internship positions are exactly what I’m after! Upon graduation, I will be available to your organisation as a junior software engineer.\",\"textHeading\":\"Software Internships\",\"textFooter\":\"*First 450 hours\"},{\"pricePreamble\":\"$\",\"pricePostamble\":\"/hour\",\"price\":\"35\",\"textPreamble\":\"starting at\",\"textMarkdown\":\"DISCOUNT\",\"textBody\":\"Looking to commission? I can help in a wide range of areas including machine learning, data processing/analysis/visualisation, graphic design, and web design. Owing to my inexperience, my rate is heavily discounted as I build my portfolio!\",\"textHeading\":\"Freelance Commisions\",\"textFooter\":\"\"}]');\n\n//# sourceURL=webpack:///./src/offers.json?");

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