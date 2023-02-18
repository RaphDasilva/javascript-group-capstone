/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --ash-color: #8d99ae;\r\n  --black: #2b2d42;\r\n  --milk-color: #edf2f4;\r\n  --red: #ef233c;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 50px;\r\n  align-items: center;\r\n  background-color: var(--ash-color);\r\n  color: var(--black);\r\n  padding: 20px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/* .logo {\r\n  width: 10%;\r\n} */\r\n\r\nul.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  gap: 20px;\r\n  list-style: none;\r\n  margin: 20px auto auto;\r\n}\r\n\r\n.movie-img {\r\n  width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n.container li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--milk-color);\r\n  padding: 20px;\r\n  width: 300px;\r\n  height: 550px;\r\n}\r\n\r\n.movie-name {\r\n  font-size: 30px;\r\n  font-weight: 400;\r\n  color: var(--black);\r\n}\r\n\r\nbutton {\r\n  padding: 10px;\r\n  background-color: var(--black);\r\n  color: var(--milk-color);\r\n  border: none;\r\n  font-size: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n  color: var(--black);\r\n}\r\n\r\nfooter {\r\n  background-color: var(--black);\r\n  color: var(--milk-color);\r\n  text-align: center;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\nfooter p {\r\n  color: var(--milk-color);\r\n}\r\n\r\n/* POP-UP CSS */\r\n.close-btn {\r\n  font-weight: 800;\r\n  font-size: 2.5rem;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  align-self: flex-end;\r\n  text-align: right;\r\n  float: right;\r\n  cursor: pointer;\r\n  margin: 10px 30px 0 0;\r\n}\r\n\r\n.movie-image {\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 70px auto 0 auto;\r\n  object-fit: contain;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.pop-img {\r\n  width: 100%;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  margin-top: 20px;\r\n  color: var(--black);\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 60%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh5 {\r\n  font-size: 25px;\r\n  color: var(--black);\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 70%;\r\n}\r\n\r\n.comments-list li {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  background-color: var(--black);\r\n  color: var(--milk-color);\r\n  width: 100%;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  gap: 10px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.form-info {\r\n  padding: 20px;\r\n  border: 2px solid var(--black);\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 20%;\r\n  align-self: flex-end;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: var(--black);\r\n}\r\n\r\n/** POP UP SECTION */\r\n.popUpContainer {\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  position: fixed;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(255, 255, 255, 0.84);\r\n  backdrop-filter: blur(3px);\r\n}\r\n\r\n.popup-section {\r\n  width: 60vw;\r\n  height: 70vh;\r\n  background-color: var(--milk-color);\r\n  overflow-y: scroll;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    width: 60%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    margin: 10px;\r\n    color: var(--black);\r\n    text-align: center;\r\n  }\r\n\r\n  .popup-section {\r\n    width: 90vw;\r\n    height: 70vh;\r\n    background-color: var(--milk-color);\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .close-btn {\r\n    font-weight: 800;\r\n    font-size: 2rem;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    align-self: flex-end;\r\n    text-align: right;\r\n    float: right;\r\n    cursor: pointer;\r\n    margin: 10px 10px 0 0;\r\n  }\r\n\r\n  .comment-btn {\r\n    width: 100%;\r\n    align-self: flex-end;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _display_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* eslint-disable */




const showMovies = async () => {
  _project_const_js__WEBPACK_IMPORTED_MODULE_0__.popUpContainer.style.display = 'none';
  _project_const_js__WEBPACK_IMPORTED_MODULE_0__.movieContainer.innerHTML = '';
  const movieArr = await (0,_display_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  movieArr.forEach((element) => {
    _project_const_js__WEBPACK_IMPORTED_MODULE_0__.movieContainer.innerHTML += `
     <li class = "movie-${element.id} each-movie">
                <img class = "movie-img" src="${element.img}" alt="${element.name}" width="200px">
                <div>
                    <p class="movie-name">${element.name}</p>
                    <span class = "likes"><i data-id="${element.id}" class="fa-regular fa-thumbs-up like-icon"></i><p data-id = "${element.id}" class = "like-counter"></p></span>
                </div>
                <button class="display-btn" 
                id="${element.id}">Comments
                </button>
            </li>
     `;
  });
  for (let i = 0; i < _project_const_js__WEBPACK_IMPORTED_MODULE_0__.displayButtons.length; i += 1) {
    _project_const_js__WEBPACK_IMPORTED_MODULE_0__.displayButtons[i].onclick = _popup_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButtons": () => (/* binding */ closeButtons),
/* harmony export */   "displayButtons": () => (/* binding */ displayButtons),
/* harmony export */   "movieContainer": () => (/* binding */ movieContainer),
/* harmony export */   "movieCount": () => (/* binding */ movieCount),
/* harmony export */   "popUpContainer": () => (/* binding */ popUpContainer)
/* harmony export */ });
const movieContainer = document.querySelector('.container');
const movieCount = document.querySelector('.movie-count');
const displayButtons = document.getElementsByClassName('display-btn');
const closeButtons = document.getElementsByClassName('close-btn');
const popUpContainer = document.querySelector('.popUpContainer');



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_movie_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const createMovies = async () => {
  const moviesArr = [];
  const movieItems = await (0,_get_movie_list_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  movieItems.forEach((element) => {
    const movieObj = {
      id: element.id,
      name: element.name,
      img: element.image.original,
      altTitle: element.name,
      description: element.summary,
      language: element.language,
      genres: element.genres,

    };
    moviesArr.push(movieObj);
  });
  return moviesArr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMovies);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movies = async () => {
  const lists = await fetch('https://api.tvmaze.com/shows');
  const result = await lists.json();
  const data = result.slice(16, 32);
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movies);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _display_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _show_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _commentcounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* eslint-disable */





const showPopup = async (e) => {
  const movieId = e.target.id;
  _project_const_js__WEBPACK_IMPORTED_MODULE_0__.popUpContainer.style.display = 'flex';
  _project_const_js__WEBPACK_IMPORTED_MODULE_0__.popUpContainer.innerHTML = '';
  const movieArr = await (0,_display_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const movie = movieArr.find((m) => m.id === +movieId);
  if (!movie) {
    return;
  }
  _project_const_js__WEBPACK_IMPORTED_MODULE_0__.popUpContainer.innerHTML += `
        <section class="popup-section">
        <span class="close-btn">X</span>
        <div class="movie-image">
        <img src="${movie.img}" alt="${movie.name}" class = "pop-img">
        </div>
        <div class = "info">
        <h2>${movie.name}</h2>
        <div class="details">
            <div><h5>Language:</h5><p>${movie.language}</p></div>
            <div><h5>Genres:<h5>
            <p>${movie.genres[0]}</p>
            <p>${movie.genres[1]}</p>
            <p>${movie.genres[2]}</p>
            </div>
        </div>
        <h3>Comments(<span id="comments-count"></span>)</h3>
        <ul class="comments-list">
        </ul>
        <h3>Add a comment</h3>
        <form>
            <input type="text" name="username" id="name" placeholder="Your name" class = "form-info">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Insights" class = "form-info"></textarea>
            <button class="comment-btn">Comment</button>
        </form>
      </div>
    </section>
    `;
  for (let i = 0; i < _project_const_js__WEBPACK_IMPORTED_MODULE_0__.closeButtons.length; i += 1) {
    _project_const_js__WEBPACK_IMPORTED_MODULE_0__.closeButtons[i].onclick = _show_movies_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  const inputName = document.querySelector('#name');
  const inputMsg = document.querySelector('#message');
  const commentList = document.querySelector('.comments-list');
  const commentCount = document.querySelector('#comments-count');
  const commentBtn = document.querySelector('.comment-btn');
  const commentFunction = async() => {
     const commentObj =  {
      item_id: movieId,
      username: inputName.value,
      comment: inputMsg.value
      };
      await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_3__.addComment)(commentObj);
      const commentArr = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_3__.getComments)(movieId);
      commentList.innerHTML = '';
      commentArr.forEach(comm => {
        commentList.innerHTML += `
         <li>
         <div class = "comment-info">
         <span> <i class="fa-solid fa-user"></i> ${comm.username}   </span>
         <span> <i class="fa-solid fa-calendar-check"></i> ${comm.creation_date}  </span>
         </div>
         <hr>
         <span>  ${comm.comment}</span>
         </li>
        `
      });
      inputName.value = '';
      inputMsg.value = '';
  };
  
  commentBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    commentCount.innerHTML = (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentList)
    if(inputName.value === '' || inputMsg.value === '') return;
    commentFunction();
  });
 const commentLoader = async() => {
    const commentArr = await (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_3__.getComments)(movieId);
      commentList.innerHTML = '';
      commentArr.forEach(comm => {
        commentList.innerHTML += `
         <li>
         <div class = "comment-info">
         <span> <i class="fa-solid fa-user"></i> ${comm.username}   </span>
         <span> <i class="fa-solid fa-calendar-check"></i> ${comm.creation_date}  </span>
         </div>
         <hr>
         <span>  ${comm.comment}</span>
         </li>
        `
        commentCount.innerHTML = (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentList) - 1;

      });

  }
  await commentLoader();
  
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const getComments = async (movieId) => {
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments?item_id=${movieId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const comments = await response.json();
  return comments;
};

const addComment = async (comment) => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  const response = await fetch(URL, options);
  return response.status;
};




/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (list) => list.childElementCount + 1;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const showLike = async (textLike) => {
  const movieId = textLike.getAttribute('data-id');
  const likesList = await (0,_get_like_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const numberLikes = likesList.filter((likeObj) => likeObj.item_id === movieId);
  if (numberLikes.length > 0) {
    textLike.textContent = `${numberLikes[0].likes} Likes`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLike);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/likes');
  const myLikes = response.json();
  return myLikes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLike);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const AddLike = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLike);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movieCounter = (e) => e.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_show_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_showLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _modules_add_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _modules_project_const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);






// import commentCounter from './modules/commentcounter.js'

document.addEventListener('DOMContentLoaded', async () => {
  await (0,_modules_show_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const textLikes = document.querySelectorAll('.like-counter');
  textLikes.forEach(async (textLike) => {
    await (0,_modules_showLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(textLike);
  });

  const movieContent = document.querySelectorAll('.each-movie');
  _modules_project_const_js__WEBPACK_IMPORTED_MODULE_4__.movieCount.innerHTML = (0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_5__["default"])(movieContent);
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('like-icon')) {
    const movieId = likeBtn.getAttribute('data-id');
    await (0,_modules_add_like_js__WEBPACK_IMPORTED_MODULE_3__["default"])(movieId);
    const textLike = likeBtn.parentElement.firstElementChild.nextElementSibling;
    await (0,_modules_showLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(textLike);
  }
});

})();

/******/ })()
;