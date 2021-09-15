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

/***/ "./client/components/ProductDetail/ImageGallery/ThumbnailList.jsx":
/*!************************************************************************!*\
  !*** ./client/components/ProductDetail/ImageGallery/ThumbnailList.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction ThumbnailList(_ref) {\n  var list = _ref.list,\n      changeCurrImg = _ref.changeCurrImg;\n\n  function handleOnClick(index) {\n    changeCurrImg(index);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"thumbnail-list\"\n  }, list === null || list === void 0 ? void 0 : list.map(function (item, index) {\n    console.log(index);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      key: item.url,\n      src: item.thumbnail_url,\n      onClick: function onClick() {\n        return handleOnClick(item.url);\n      }\n    });\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailList);\n\n//# sourceURL=webpack://project-catwalk1/./client/components/ProductDetail/ImageGallery/ThumbnailList.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c732f4b02febc21baf14")
/******/ })();
/******/ 
/******/ }
);