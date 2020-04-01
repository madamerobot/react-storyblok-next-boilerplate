webpackHotUpdate("static/development/pages/[page].js",{

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
/* harmony import */ var _components_modules_HmImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modules/HmImage */ "./components/modules/HmImage/index.jsx");
/* harmony import */ var _components_modules_HeadlineModule_SecondHeadline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modules/HeadlineModule/SecondHeadline */ "./components/modules/HeadlineModule/SecondHeadline/index.jsx");
/* harmony import */ var _components_modules_HeadlineModule_ThirdHeadline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modules/HeadlineModule/ThirdHeadline */ "./components/modules/HeadlineModule/ThirdHeadline/index.jsx");
/* harmony import */ var _components_modules_Sniph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/modules/Sniph */ "./components/modules/Sniph/index.jsx");
/* harmony import */ var _components_modules_BrickGame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/modules/BrickGame */ "./components/modules/BrickGame/index.jsx");


var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/pages/[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */

/* layout */


/* components */









/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */

function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (r) {
    return r.json();
  });
}
/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */


var SlugPage = function SlugPage(_ref) {
  var data = _ref.data;
  var content = data.content;
  var imageModuleData = content.components.find(function (item) {
    return item.component === "Image Module";
  });
  var gameData = content.components.find(function (item) {
    return item.component === "Brick Game";
  });
  var sniphData = content.components.find(function (item) {
    return item.component === "Sniph";
  });
  var headlineModuleData = content.components.find(function (item) {
    return item.component === "Headline Module";
  });
  var secondheadlineData = content.components.find(function (item) {
    return item.component === "Second Headline";
  });
  var thirdheadlineData = content.components.find(function (item) {
    return item.component === "Third Headline";
  });
  var paragraphModuleData = content.components.find(function (item) {
    return item.component === "Paragraph Module";
  });
  var hmimageData = content.components.find(function (item) {
    return item.component === "HM Image";
  });
  console.log(gameData);
  console.log("\uD83C\uDF08 I am getting this content from Storybok");
  console.log(content);

  var codeString = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(content);
  /* Now you need to map your own components, I just left the headline module as reference */


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, headlineModuleData ? __jsx(_components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: headlineModuleData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }) : null, secondheadlineData ? __jsx(_components_modules_HeadlineModule_SecondHeadline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: secondheadlineData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }) : null, thirdheadlineData ? __jsx(_components_modules_HeadlineModule_ThirdHeadline__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: thirdheadlineData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }) : null, paragraphModuleData ? __jsx(_components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_6__["default"], {
    copy: paragraphModuleData.copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }) : null, imageModuleData ? __jsx(_components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_7__["default"], {
    image: imageModuleData.ImageModule,
    copy: imageModuleData.Copy,
    link: imageModuleData.Link.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }) : null, gameData ? __jsx(_components_modules_BrickGame__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brickimage: gameData.BrickImage,
    copy: gameData.Copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }) : null, sniphData ? __jsx(_components_modules_Sniph__WEBPACK_IMPORTED_MODULE_11__["default"], {
    image1: sniphData.image1,
    image2: sniphData.image2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }) : null, hmimageData ? __jsx(_components_modules_HmImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
    images: hmimageData.images,
    image: hmimageData.images2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = function _callee(_ref2) {
  var query, page, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;

          /* {query} is an object we receive within this method from Next,
          so that we can retrieve the slug (e.g. '/welcome') coming with the route */
          page = query.page;
          /* Calling our internal api endpoint so that we can fetch Storyblok content
          server-side (we are on client-side here) */

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchUrl("http://localhost:3000/api/page/".concat(page)));

        case 4:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ })

})
//# sourceMappingURL=[page].js.d05a75b7f545b66ead67.hot-update.js.map