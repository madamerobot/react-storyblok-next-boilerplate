module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /* styles */
// import style from './index.scss';
// import resets from './styleReset.scss';
// /* components */
// import Head from '../../common/Head';
// const DefaultLayout = (props) => {
// 	const title = 'Hyper Island FED21';
// 	const description = 'Kick-off template for FED21 students';
// 	return (
// 		<div className={(resets, style.root)}>
// 			<div className={style.pageWrapper}>
// 				<Head title={title} description={description} />
// 				{props.children}
// 			</div>
// 		</div>
// 	);
// };
// export default DefaultLayout;

/***/ }),

/***/ "./components/modules/HeadlineModule/SecondHeadline/index.jsx":
/*!********************************************************************!*\
  !*** ./components/modules/HeadlineModule/SecondHeadline/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _second_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second.scss */ "./components/modules/HeadlineModule/SecondHeadline/second.scss");
/* harmony import */ var _second_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_second_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/HeadlineModule/SecondHeadline/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SecondHeadline = ({
  title
}) => {
  return __jsx("h2", {
    className: _second_scss__WEBPACK_IMPORTED_MODULE_1___default.a.second,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (SecondHeadline);

/***/ }),

/***/ "./components/modules/HeadlineModule/SecondHeadline/second.scss":
/*!**********************************************************************!*\
  !*** ./components/modules/HeadlineModule/SecondHeadline/second.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"second": "second___ndAyO"
};

/***/ }),

/***/ "./components/modules/HeadlineModule/ThirdHeadline/index.jsx":
/*!*******************************************************************!*\
  !*** ./components/modules/HeadlineModule/ThirdHeadline/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _third_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third.scss */ "./components/modules/HeadlineModule/ThirdHeadline/third.scss");
/* harmony import */ var _third_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_third_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/HeadlineModule/ThirdHeadline/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ThirdHeadline = ({
  title
}) => {
  return __jsx("h2", {
    className: _third_scss__WEBPACK_IMPORTED_MODULE_1___default.a.third,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (ThirdHeadline);

/***/ }),

/***/ "./components/modules/HeadlineModule/ThirdHeadline/third.scss":
/*!********************************************************************!*\
  !*** ./components/modules/HeadlineModule/ThirdHeadline/third.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"third": "third___2gi8E"
};

/***/ }),

/***/ "./components/modules/HeadlineModule/index.jsx":
/*!*****************************************************!*\
  !*** ./components/modules/HeadlineModule/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/HeadlineModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/HeadlineModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const HeadlineModule = ({
  title
}) => {
  return __jsx("h1", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/HeadlineModule/index.scss":
/*!******************************************************!*\
  !*** ./components/modules/HeadlineModule/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___1dRZh"
};

/***/ }),

/***/ "./components/modules/HmImage/index.jsx":
/*!**********************************************!*\
  !*** ./components/modules/HmImage/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/HmImage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/HmImage/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HmImage = ({
  images,
  image
}) => {
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    src: images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HmImage);

/***/ }),

/***/ "./components/modules/HmImage/index.scss":
/*!***********************************************!*\
  !*** ./components/modules/HmImage/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hm": "hm___2SLRS"
};

/***/ }),

/***/ "./components/modules/ImageModule/index.jsx":
/*!**************************************************!*\
  !*** ./components/modules/ImageModule/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/ImageModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/ImageModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImageModule = ({
  image,
  copy,
  link
}) => {
  console.log(image);
  console.log(copy);
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, copy), __jsx("link", {
    herf: "https://github.com/victholerus98/trainbrain.git",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModule);

/***/ }),

/***/ "./components/modules/ImageModule/index.scss":
/*!***************************************************!*\
  !*** ./components/modules/ImageModule/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___14P1J"
};

/***/ }),

/***/ "./components/modules/ParagraphModule/index.jsx":
/*!******************************************************!*\
  !*** ./components/modules/ParagraphModule/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/ParagraphModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/ParagraphModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const ParagraphModule = ({
  copy
}) => {
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, copy));
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphModule);

/***/ }),

/***/ "./components/modules/ParagraphModule/index.scss":
/*!*******************************************************!*\
  !*** ./components/modules/ParagraphModule/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___6SFYA"
};

/***/ }),

/***/ "./components/modules/Sniph/index.jsx":
/*!********************************************!*\
  !*** ./components/modules/Sniph/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/Sniph/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/modules/Sniph/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Sniph = ({
  image1,
  image2
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img1,
    src: image1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("img", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img2,
    src: image2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sniph);

/***/ }),

/***/ "./components/modules/Sniph/index.scss":
/*!*********************************************!*\
  !*** ./components/modules/Sniph/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"img1": "img1___1Hviv",
	"img2": "img2___17mpf"
};

/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
/* harmony import */ var _components_modules_HmImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modules/HmImage */ "./components/modules/HmImage/index.jsx");
/* harmony import */ var _components_modules_HeadlineModule_SecondHeadline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modules/HeadlineModule/SecondHeadline */ "./components/modules/HeadlineModule/SecondHeadline/index.jsx");
/* harmony import */ var _components_modules_HeadlineModule_ThirdHeadline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modules/HeadlineModule/ThirdHeadline */ "./components/modules/HeadlineModule/ThirdHeadline/index.jsx");
/* harmony import */ var _components_modules_Sniph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modules/Sniph */ "./components/modules/Sniph/index.jsx");
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/pages/[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */

/* layout */


/* components */








/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */

function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(r => r.json());
}
/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */


const SlugPage = ({
  data
}) => {
  const {
    content
  } = data;
  const imageModuleData = content.components.find(item => item.component === "Image Module");
  const sniphData = content.components.find(item => item.component === "Sniph");
  const headlineModuleData = content.components.find(item => item.component === "Headline Module");
  const secondheadlineData = content.components.find(item => item.component === "Second Headline");
  const thirdheadlineData = content.components.find(item => item.component === "Third Headline");
  const paragraphModuleData = content.components.find(item => item.component === "Paragraph Module");
  const hmimageData = content.components.find(item => item.component === "HM Image");
  console.log(sniphData);
  console.log(`🌈 I am getting this content from Storybok`);
  console.log(content);
  const codeString = JSON.stringify(content);
  /* Now you need to map your own components, I just left the headline module as reference */

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, headlineModuleData ? __jsx(_components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headlineModuleData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }) : null, secondheadlineData ? __jsx(_components_modules_HeadlineModule_SecondHeadline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: secondheadlineData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }) : null, thirdheadlineData ? __jsx(_components_modules_HeadlineModule_ThirdHeadline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: thirdheadlineData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }) : null, paragraphModuleData ? __jsx(_components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copy: paragraphModuleData.copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }) : null, imageModuleData ? __jsx(_components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: imageModuleData.ImageModule,
    copy: imageModuleData.Copy,
    link: imageModuleData.Link.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }) : null, sniphData ? __jsx(_components_modules_Sniph__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image1: sniphData.image1,
    image2: sniphData.image2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }) : null, hmimageData ? __jsx(_components_modules_HmImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: hmimageData.images,
    image: hmimageData.images2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = async ({
  query
}) => {
  /* {query} is an object we receive within this method from Next,
  so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const {
    page
  } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
  server-side (we are on client-side here) */

  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */

  return {
    data
  };
  /* This is the same as { data: data } */
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/[page].js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/pages/[page].js */"./pages/[page].js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[page].js.map