module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/page/[slug].js":
/*!**********************************!*\
  !*** ./pages/api/page/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* 🌈 Welcome to the server side, where all the fun happens! 🌈 */

/* dependencies */
const StoryblokClient = __webpack_require__(/*! storyblok-js-client */ "storyblok-js-client");
/* Initiating Storyblok client, so that we are 
connected to our Storyblok account and space.
Please replace this accessToken with your own one.*/


const Storyblok = new StoryblokClient({
  accessToken: "CHB0sYueXEekH1ghh8iifQtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  /* 
  Here we are extracting the slug from the request,
  so that we can later fetch the right data from Storyblok
  */

  /* 
  The assignment below is the same as:
  const slug = req.query.slug
  I am using an ES6 feature called Object Destructuring,
  you can read up about it here: https://wesbos.com/destructuring-objects/
  */
  const {
    query: {
      slug
    }
  } = req;
  /* We are making a request to Storybloks API, using
    the Storyblok Client that we've set up before */

  Storyblok.get(`cdn/stories/${slug}`, {}).then(response => {
    const {
      data: {
        story: {
          content
        }
      }
    } = response;
    /* Same as: const content = data.story.content */

    const data = {
      content
    };
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }).catch(error => {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(JSON.stringify(`${error.name}: ${error.message}`));
  });
});

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/api/page/[slug].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victoriatholerus/Documents/cool-prdject/react-storyblok-next-boilerplate/pages/api/page/[slug].js */"./pages/api/page/[slug].js");


/***/ }),

/***/ "storyblok-js-client":
/*!**************************************!*\
  !*** external "storyblok-js-client" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("storyblok-js-client");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map