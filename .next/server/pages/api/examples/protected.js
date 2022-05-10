"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/examples/protected";
exports.ids = ["pages/api/examples/protected"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/examples/protected.ts":
/*!*****************************************!*\
  !*** ./pages/api/examples/protected.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n// This is an example of to protect an API route\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (session) {\n        res.send({\n            content: \"This is protected content. You can access this content because you are signed in.\"\n        });\n    } else {\n        res.send({\n            error: \"You must be signed in to view the protected content on this page.\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXMvcHJvdGVjdGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUFnRDtBQUNKO0FBRzVDLGlFQUFlLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsTUFBTUMsT0FBTyxHQUFHLE1BQU1ILDJEQUFVLENBQUM7UUFBRUMsR0FBRztLQUFFLENBQUM7SUFFekMsSUFBSUUsT0FBTyxFQUFFO1FBQ1hELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1lBQ1BDLE9BQU8sRUFDTCxtRkFBbUY7U0FDdEYsQ0FBQztLQUNILE1BQU07UUFDTEgsR0FBRyxDQUFDRSxJQUFJLENBQUM7WUFDUEUsS0FBSyxFQUFFLG1FQUFtRTtTQUMzRSxDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1leGFtcGxlLy4vcGFnZXMvYXBpL2V4YW1wbGVzL3Byb3RlY3RlZC50cz84MzU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0byBwcm90ZWN0IGFuIEFQSSByb3V0ZVxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcblxuICBpZiAoc2Vzc2lvbikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiVGhpcyBpcyBwcm90ZWN0ZWQgY29udGVudC4gWW91IGNhbiBhY2Nlc3MgdGhpcyBjb250ZW50IGJlY2F1c2UgeW91IGFyZSBzaWduZWQgaW4uXCIsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBlcnJvcjogXCJZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gdmlldyB0aGUgcHJvdGVjdGVkIGNvbnRlbnQgb24gdGhpcyBwYWdlLlwiLFxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInNlbmQiLCJjb250ZW50IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/examples/protected.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examples/protected.ts"));
module.exports = __webpack_exports__;

})();