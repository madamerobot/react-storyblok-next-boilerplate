webpackHotUpdate("styles",{

/***/ "./components/modules/Hackathon/index.scss":
/*!*************************************************!*\
  !*** ./components/modules/Hackathon/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"gif":"gif___hf-B7","giff":"giff___1Cp9e","gifff":"gifff___LLvhl","copy":"copy___1SH6b"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1585817101060");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1a7cef58344aab6513ea.hot-update.js.map