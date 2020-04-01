webpackHotUpdate("static/development/pages/[page].js",{

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/common/Head/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

var Head = function Head(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title || ''), __jsx("meta", {
    name: "description",
    content: description || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, inititial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/layouts/DefaultLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "/Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/components/layouts/DefaultLayout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


/* components */



var DefaultLayout = function DefaultLayout(props) {
  var title = "Hyper Island FED21";
  var description = "Kick-off template for FED21 students";
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

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
    copy: gameData.copy,
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
//# sourceMappingURL=[page].js.041c48725ede205f5084.hot-update.js.map