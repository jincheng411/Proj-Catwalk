"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateproject_catwalk1"]("main",{

/***/ "./client/components/ProductDetail/ImageGallery/ImageGallery.jsx":
/*!***********************************************************************!*\
  !*** ./client/components/ProductDetail/ImageGallery/ImageGallery.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ThumbnailList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbnailList */ \"./client/components/ProductDetail/ImageGallery/ThumbnailList.jsx\");\n/* harmony import */ var _MainImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainImg */ \"./client/components/ProductDetail/ImageGallery/MainImg.jsx\");\n/* harmony import */ var _ImageGallery_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageGallery.css */ \"./client/components/ProductDetail/ImageGallery/ImageGallery.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction ImageGallery(_ref) {\n  var style = _ref.style;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      currImg = _useState2[0],\n      setCurrImg = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      imgIndex = _useState4[0],\n      setImgIndex = _useState4[1];\n\n  function changeCurrImg(url) {\n    setCurrImg(url);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"image-gallery\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MainImg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    currImg: currImg,\n    defaultImg: style.name ? style.photos[0].url : ''\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThumbnailList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    list: style.photos,\n    changeCurrImg: changeCurrImg\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);\n\n//# sourceURL=webpack://project-catwalk1/./client/components/ProductDetail/ImageGallery/ImageGallery.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca00e1a2b9df02ad6871")
/******/ })();
/******/ 
/******/ }
);