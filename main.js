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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tmin-height: 100%;\\n\\tbox-sizing: border-box;\\n\\tpadding-top: 0.5vw;\\n}\\n\\n.Title {\\n\\tfont-size: 1.75vw;\\n\\tcolor: white;\\n\\talign-self: center;\\n\\ttext-align: center;\\n\\tpadding-top: 5px;\\n\\tfont-family: Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n}\\n\\n.moveText {\\n\\tfont-size: 1.2vw;\\n\\tcolor: white;\\n\\talign-self: center;\\n\\ttext-align: center;\\n\\tpadding-bottom: 10px;\\n}\\n\\n.chessboard {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tborder: 1px solid white;\\n}\\n\\n.row {\\n\\tdisplay: flex;\\n}\\n\\n.square {\\n\\twidth: 5vw;\\n\\theight: 5vw;\\n\\tborder: 1px solid black;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tfont-size: 2vw;\\n\\tbox-sizing: border-box;\\n}\\n\\n.white {\\n\\tbackground-color: white;\\n}\\n\\n.black {\\n\\tbackground-color: #b58863;\\n}\\n.highlight-green,\\n.clicked {\\n\\tbackground-color: green;\\n}\\n.highlight-red {\\n\\tbackground-color: rgb(255, 45, 45);\\n}\\n.highlight,\\n.highlight-green,\\n.highlight-red {\\n\\tborder: 3px solid rgb(0, 140, 255);\\n\\tborder-radius: 20px;\\n\\tbox-sizing: border-box;\\n\\tbackground-clip: padding-box;\\n\\tborder-width: -3px;\\n\\tbox-shadow: 0px 0px 5px 3px rgb(0, 140, 255);\\n\\ttransition: box-shadow 0.3s ease-out;\\n}\\n\\nbody {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tmargin: 0;\\n\\theight: 100%;\\n\\tbox-sizing: border-box;\\n\\tbackground-color: #181818;\\n}\\n\\n.block {\\n\\tposition: absolute;\\n\\tleft: 0;\\n\\tright: 0;\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\tz-index: 999;\\n}\\n\\n.legend-row {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tpadding-right: 15px;\\n\\tcolor: white;\\n\\tgap: 2.7vw;\\n\\tfont-size: 2vw;\\n}\\n\\n.legend-col {\\n\\tdisplay: flex;\\n\\tflex-direction: row;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tcolor: white;\\n\\tpadding-top: 5px;\\n\\tfont-size: 2vw;\\n\\tgap: 4vw;\\n\\tmargin-left: 2vw;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_knightTravail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/knightTravail */ \"./src/modules/knightTravail.js\");\n/* harmony import */ var _modules_createChessBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createChessBoard */ \"./src/modules/createChessBoard.js\");\n\n\n\n(0,_modules_createChessBoard__WEBPACK_IMPORTED_MODULE_2__.createChessBoard)();\n// knightTravail([0, 0], [7, 7]);\n// knightTravail([4, 2], [1, 6]);\n// knightTravail([7, 5], [4, 2]);\n// knightTravail([0, 0], [0, 0]);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/createChessBoard.js":
/*!*****************************************!*\
  !*** ./src/modules/createChessBoard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createChessBoard\": () => (/* binding */ createChessBoard)\n/* harmony export */ });\n/* harmony import */ var _knightTravail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightTravail */ \"./src/modules/knightTravail.js\");\n\n\nfunction createChessBoard() {\n\tconst container = document.querySelector(\".container\");\n\tcontainer.className = \"container\";\n\tconst board = document.createElement(\"div\");\n\tboard.className = \"chessboard\";\n\tconst moveText = document.querySelector(\".moveText\");\n\tmoveText.className = \"moveText\";\n\tconst userOutput = document.createElement(\"div\");\n\tuserOutput.className = \"userOutput\";\n\n\tconst legendRow = document.createElement(\"div\");\n\tlegendRow.classList.add(\"legend-row\");\n\n\tfor (let i = 7; i >= 0; i--) {\n\t\tconst legendItem = document.createElement(\"div\");\n\t\tlegendItem.textContent = i;\n\t\tlegendRow.appendChild(legendItem);\n\t}\n\n\t// Add the legend row to the document\n\tcontainer.appendChild(legendRow);\n\n\tlet startPos = null;\n\tlet selectedSquares = [];\n\n\tfor (let i = 0; i < 8; i++) {\n\t\tconst row = document.createElement(\"div\");\n\t\trow.className = `row`;\n\n\t\tfor (let j = 0; j < 8; j++) {\n\t\t\tconst square = document.createElement(\"div\");\n\t\t\tif ((i + j) % 2 == 0) {\n\t\t\t\tsquare.className = \"square white\";\n\t\t\t} else {\n\t\t\t\tsquare.className = \"square black\";\n\t\t\t}\n\n\t\t\tsquare.addEventListener(\"click\", () => {\n\t\t\t\tconst squares = document.querySelectorAll(\".square\");\n\t\t\t\tsquares.forEach((square) => {\n\t\t\t\t\tsquare.classList.remove(\"highlight\", \"highlight-red\", \"highlight-green\");\n\n\t\t\t\t\tsquare.innerText = \"\";\n\t\t\t\t});\n\t\t\t\tsquare.classList.add(\"clicked\");\n\t\t\t\tselectedSquares.push(square);\n\t\t\t\tmoveText.innerText = \"\";\n\t\t\t\tif (startPos === null) {\n\t\t\t\t\tstartPos = [7 - i, j];\n\t\t\t\t} else {\n\t\t\t\t\tlet endPos = [7 - i, j];\n\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\t(0,_knightTravail__WEBPACK_IMPORTED_MODULE_0__.knightTravail)(startPos, endPos);\n\t\t\t\t\t\tselectedSquares.forEach((selectedSquare) => {\n\t\t\t\t\t\t\tselectedSquare.classList.remove(\"clicked\");\n\t\t\t\t\t\t});\n\t\t\t\t\t\tselectedSquares = [];\n\t\t\t\t\t\tstartPos = null;\n\t\t\t\t\t}, 10);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\trow.appendChild(square);\n\t\t}\n\t\tboard.appendChild(row);\n\t}\n\n\tcontainer.appendChild(board);\n\tconst columnLegendContainer = document.querySelector(\".columnLegend\");\n\tconst legendCol = document.createElement(\"div\");\n\tlegendCol.classList.add(\"legend-col\");\n\n\tfor (let i = 0; i < 8; i++) {\n\t\tconst legendItem = document.createElement(\"div\");\n\t\tlegendItem.classList.add(\"legend-item\");\n\t\tlegendItem.textContent = i;\n\t\tlegendCol.appendChild(legendItem);\n\t}\n\tcolumnLegendContainer.appendChild(legendCol);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/createChessBoard.js?");

/***/ }),

/***/ "./src/modules/getLegalMoves.js":
/*!**************************************!*\
  !*** ./src/modules/getLegalMoves.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLegalMoves\": () => (/* binding */ getLegalMoves)\n/* harmony export */ });\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ \"./src/modules/knight.js\");\n\n\nfunction getLegalMoves(knight) {\n\tconst offsets = [\n\t\t[-2, -1],\n\t\t[-2, 1],\n\t\t[2, -1],\n\t\t[2, 1],\n\t\t[-1, -2],\n\t\t[-1, 2],\n\t\t[1, -2],\n\t\t[1, 2],\n\t];\n\n\tconst moves = [];\n\n\tfor (const [dx, dy] of offsets) {\n\t\tconst x = knight.x + dx;\n\t\tconst y = knight.y + dy;\n\n\t\tif (x >= 0 && x < 8 && y >= 0 && y < 8) {\n\t\t\tmoves.push(new _knight__WEBPACK_IMPORTED_MODULE_0__.Knight(x, y));\n\t\t}\n\t}\n\n\treturn moves;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/getLegalMoves.js?");

/***/ }),

/***/ "./src/modules/highlightSquares.js":
/*!*****************************************!*\
  !*** ./src/modules/highlightSquares.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"highlightSquares\": () => (/* binding */ highlightSquares)\n/* harmony export */ });\nfunction highlightSquares(moves) {\n\tconst body = document.querySelector(\"body\");\n\tconst blockDiv = document.createElement(\"div\");\n\tblockDiv.className = \"block\";\n\tbody.appendChild(blockDiv);\n\n\tlet delay = 0;\n\tconst totalMoves = moves.length;\n\tmoves.forEach((move, index) => {\n\t\tsetTimeout(() => {\n\t\t\tconst square = document.querySelector(\n\t\t\t\t`.row:nth-child(${8 - move.x}) .square:nth-child(${move.y + 1})`\n\t\t\t);\n\t\t\tif (index === 0) {\n\t\t\t\tsquare.classList.add(\"highlight-green\");\n\t\t\t\tsquare.textContent = \"\";\n\t\t\t} else if (index === totalMoves - 1) {\n\t\t\t\tsquare.classList.add(\"highlight-red\");\n\t\t\t\tsquare.textContent = index;\n\t\t\t} else {\n\t\t\t\tsquare.classList.add(\"highlight\");\n\t\t\t\tsquare.textContent = index;\n\t\t\t}\n\t\t}, delay);\n\t\tdelay += 1000;\n\t});\n\n\t// remove the blockDiv after all the highlights have been applied\n\tsetTimeout(() => {\n\t\tblockDiv.remove();\n\t}, delay + 500); // add extra delay to ensure all highlights have been applied\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/highlightSquares.js?");

/***/ }),

/***/ "./src/modules/knight.js":
/*!*******************************!*\
  !*** ./src/modules/knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Knight\": () => (/* binding */ Knight)\n/* harmony export */ });\nclass Knight {\n\tconstructor(x, y) {\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/knight.js?");

/***/ }),

/***/ "./src/modules/knightTravail.js":
/*!**************************************!*\
  !*** ./src/modules/knightTravail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knightTravail\": () => (/* binding */ knightTravail)\n/* harmony export */ });\n/* harmony import */ var _getLegalMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLegalMoves */ \"./src/modules/getLegalMoves.js\");\n/* harmony import */ var _highlightSquares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlightSquares */ \"./src/modules/highlightSquares.js\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ \"./src/modules/knight.js\");\n\n\n\n\nfunction knightTravail(start, end) {\n\tconst startKnight = new _knight__WEBPACK_IMPORTED_MODULE_2__.Knight(start[0], start[1]);\n\tconst endKnight = new _knight__WEBPACK_IMPORTED_MODULE_2__.Knight(end[0], end[1]);\n\n\tconst queue = [];\n\tconst visited = new Set();\n\tconst movesMap = new Map();\n\n\tqueue.push([startKnight, 0]);\n\tvisited.add(startKnight.x + \",\" + startKnight.y);\n\tmovesMap.set(startKnight.x + \",\" + startKnight.y, null);\n\n\twhile (queue.length > 0) {\n\t\tconst [knight, depth] = queue.shift();\n\n\t\tif (knight.x === endKnight.x && knight.y === endKnight.y) {\n\t\t\tconst moves = [];\n\t\t\tlet current = endKnight;\n\n\t\t\twhile (current) {\n\t\t\t\tmoves.unshift(current);\n\t\t\t\tcurrent = movesMap.get(current.x + \",\" + current.y);\n\t\t\t}\n\n\t\t\t(0,_highlightSquares__WEBPACK_IMPORTED_MODULE_1__.highlightSquares)(moves);\n\n\t\t\tconst moveText = document.querySelector(\".moveText\");\n\t\t\tmoveText.innerHTML =\n\t\t\t\t`It took ${moves.length - 1} moves to go from [${startKnight.x},${\n\t\t\t\t\tstartKnight.y\n\t\t\t\t}] to [${endKnight.x},${endKnight.y}]<br>` +\n\t\t\t\tmoves.map((move) => `[${move.x},${move.y}]`).join(\" &#8594; \");\n\t\t}\n\n\t\tconst moves = (0,_getLegalMoves__WEBPACK_IMPORTED_MODULE_0__.getLegalMoves)(knight);\n\n\t\tfor (const move of moves) {\n\t\t\tconst key = move.x + \",\" + move.y;\n\n\t\t\tif (!visited.has(key)) {\n\t\t\t\tqueue.push([move, depth + 1]);\n\t\t\t\tvisited.add(key);\n\t\t\t\tmovesMap.set(key, knight);\n\t\t\t}\n\t\t}\n\t}\n\n\treturn null;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/knightTravail.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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