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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svgDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgDraw */ \"./src/svgDraw.js\");\n\r\n\r\nlet vh = window.innerHeight\r\nlet vw = window.innerWidth\r\nconst vMax = Math.max(vh,vw)/100\r\nconst vMin = Math.min(vh,vw)/100\r\nconst bannerSize = vMax*25\r\n\r\n\r\nconst svgBG = d3.select(\"#background\")\r\nconst svgLogo = d3.select(\"#logo\")\r\nconst svgBanner = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBannerBackground)(svgBG,bannerSize,d3.schemeDark2[0])\r\nsvgBanner.attr(\"mask\", \"url(#logoClip)\")\r\nconst svgMask = svgBG.append(\"mask\")\r\n    .attr(\"id\", \"logoClip\")\r\nsvgMask.append(\"rect\")\r\n    .attr(\"width\", bannerSize)\r\n    .attr(\"height\", bannerSize)\r\n    .attr(\"fill\", \"#fff\")\r\n    \r\nlet svgLines = svgBG.append(\"svg\").attr(\"id\", \"lines\")\r\nlet dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(svgBG,6,d3.schemeDark2,vMax, vw, 0, [])\r\n;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines, vMax)\r\n\r\n;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createLogo)(svgMask,vMax*5,vMax*0.5,vMax*0.5)\r\n\r\n\r\n\r\nlet lastKnownScrollPosition = 0;\r\nlet ticking = false;\r\n\r\nconst scrollAnimation = (scrollPos,) => {\r\n    const yBuffTop = 50\r\n    const yBuffBot = 2500\r\n    let yPos = Math.max(Math.min(scrollPos,yBuffBot), yBuffTop)\r\n    dataLines = (0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackgroundData)(svgBG,6,d3.schemeAccent,vMax, vw, yPos, dataLines)\r\n    ;(0,_svgDraw__WEBPACK_IMPORTED_MODULE_0__.createBackground)(svgLines, dataLines)\r\n\r\n}\r\n\r\n\r\n\r\nconst openAbout = (e) => {\r\n\r\n    // Get all elements with class=\"tabcontent\" and hide them\r\n    const id = e.currentTarget.id+\"Content\"\r\n    let tabContent = document.getElementsByClassName(\"tabcontent\");\r\n    for(let i = 0; i<tabContent.length; i++){\r\n        if(tabContent[i].id == id){\r\n            tabContent[i].style.display = \"block\";\r\n        }else{\r\n            tabContent[i].style.display = \"none\";\r\n        }\r\n    }\r\n    let tabs = document.getElementsByClassName(\"tab\");\r\n    for(let i = 0; i<tabs.length; i++){tabs[i].className.replace(\" active\", \"\");}\r\n    // Show the current tab, and add an \"active\" class to the button that opened the tab\r\n    e.currentTarget.className += \" active\";\r\n}\r\n\r\nlet tabs = document.getElementsByClassName(\"tab\");\r\nfor(let i = 0; i<tabs.length; i++){\r\n    tabs[i].addEventListener(\"click\",openAbout);\r\n}\r\n\r\ndocument.addEventListener('scroll', (e) => {\r\n  lastKnownScrollPosition = window.scrollY;\r\n\r\n  if (!ticking) {\r\n    window.requestAnimationFrame(() => {\r\n        scrollAnimation(lastKnownScrollPosition);\r\n      ticking = false;\r\n    });\r\n\r\n    ticking = true;\r\n  }\r\n});\r\nopenAbout({\"currentTarget\":document.getElementById(\"about\")})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svgDraw.js":
/*!************************!*\
  !*** ./src/svgDraw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBackground\": () => (/* binding */ createBackground),\n/* harmony export */   \"createBackgroundData\": () => (/* binding */ createBackgroundData),\n/* harmony export */   \"createBannerBackground\": () => (/* binding */ createBannerBackground),\n/* harmony export */   \"createLine\": () => (/* binding */ createLine),\n/* harmony export */   \"createLogo\": () => (/* binding */ createLogo)\n/* harmony export */ });\nconst createLine = (e,d,c,s) => {\r\n    e.append(\"path\")\r\n      .attr(\"d\", d)\r\n      .attr(\"stroke\", c)\r\n      .attr(\"stroke-width\", s)\r\n      .attr(\"stroke-linecap\",\"round\")\r\n  }\r\n\r\n  const createLogo = (e,height, offsetX, offsetY) =>{\r\n    console.log(offsetX,offsetY)\r\n    const createText = (e, text,x,y) => {\r\n      e.append(\"text\")\r\n        .attr(\"class\", \"bannerText\")\r\n        .attr(\"x\",x)\r\n        .attr(\"y\",y + height)\r\n        .text(text)\r\n    }\r\n\r\n    const h = height/2;\r\n    const w = height*3/8;\r\n    const sx = height/4;\r\n    const sx2 = sx*0.75;\r\n    const h1 = 0.5*h\r\n    const hl = [h,0];\r\n    const hs = [[0,h1],[h1,0],[0,0],hl,hl,hl,hl,hl,hl,[h,h-h1],[h-h1,h],[h,h]]\r\n    const ws = [[0,w/2],[w/2,w],[w,0],[w,2*w],[2*w,3*w],[3*w,4*w],[4*w,5*w],[5*w,6*w],[6*w,7*w],[7*w,7.5*w],[7.5*w,8*w],[8*w,7*w]]\r\n    const cs = [0,0,0,0,0,1,1,0,0,0,0,0]\r\n    let d, colour;\r\n    const colourMap = [\"black\", \"white\"]\r\n    hs.forEach((d,i)=>{\r\n        colour = colourMap[cs[i]]\r\n        d = d3.line()([\r\n        [ws[i][0]+sx+offsetX,d[0]+sx+offsetY],[ws[i][1]+sx+offsetX,d[1]+sx+offsetY]\r\n    ]);\r\n\r\n        createLine(e,d,colourMap[0],sx);\r\n        if(cs[i]){\r\n            createLine(e,d,colourMap[1],sx2);\r\n        }\r\n    })\r\n\r\n    createText(e,\"// WILLEM MEYER\",7*offsetX,2.25*offsetY)\r\n    createText(e, \"// Perth, WA\",7*offsetX,4.5*offsetY)\r\n    \r\n}\r\n\r\nconst createBackgroundData = (e, n, colours, vMax, vw, yPos, dataLines) => {\r\n  const spacing = vMax*5\r\n  const sinC = 0.707//0.866\r\n  const lenMin = vMax*15\r\n  const lenRange = vMax*15\r\n  const startMax = vMax*5\r\n  const offsetX = vw-startMax*0.5*n*0.5 - yPos\r\n  const offestY = -startMax*sinC*n*0.5 + yPos\r\n\r\n  return d3.range(n).map(i => {\r\n    let len, start\r\n    if(dataLines.length){\r\n      len = dataLines[i].len\r\n      start = dataLines[i].start\r\n    }else{\r\n      len = Math.random()*lenRange+lenMin\r\n      start = i*spacing + Math.random()*startMax\r\n    }\r\n    const x = start*sinC + offsetX\r\n    const y = start*sinC + offestY\r\n\r\n    return {\"x\":x,\"y\":y,\"len\":len,\"start\":start, \"colour\":d3.schemeAccent[i]}\r\n  });\r\n}\r\n\r\nconst createBannerBackground = (e,s,c) => {\r\n    const triangle  = \"0,0 \" + s.toString() + \",0 0,\" + s.toString()\r\n\r\n    return e.append(\"polygon\")\r\n    .data([triangle])\r\n    .attr(\"stroke\" , \"none\")\r\n    .attr(\"fill\" , c)\r\n    .attr(\"points\", triangle)\r\n}\r\n\r\nconst createBackground = (e, dataLines, vMax) =>{\r\n\r\n  const stroke = vMax*10\r\n\r\n  e.selectAll(\"path\")\r\n      .data(dataLines)\r\n      .join(enter => enter.append(\"path\")\r\n          .attr(\"d\", (d)=>{return d3.line()([[d.x,d.y],[d.x-d.len,d.y+d.len]])})\r\n          .attr(\"stroke\", (d) => {return d.colour})\r\n          .attr(\"stroke-width\", stroke)\r\n          .attr(\"stroke-linecap\",\"round\"),\r\n          update => update.attr(\"d\", (d)=>{return d3.line()([[d.x,d.y],[d.x-d.len,d.y+d.len]])})\r\n      )\r\n}\n\n//# sourceURL=webpack:///./src/svgDraw.js?");

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