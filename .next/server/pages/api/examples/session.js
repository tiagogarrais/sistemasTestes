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
exports.id = "pages/api/examples/session";
exports.ids = ["pages/api/examples/session"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/examples/session.ts":
/*!***************************************!*\
  !*** ./pages/api/examples/session.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n// This is an example of how to access a session from an API route\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    res.send(JSON.stringify(session, null, 2));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXMvc2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBa0U7QUFDdEI7QUFHNUMsaUVBQWUsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNsRSxNQUFNQyxPQUFPLEdBQUcsTUFBTUgsMkRBQVUsQ0FBQztRQUFFQyxHQUFHO0tBQUUsQ0FBQztJQUN6Q0MsR0FBRyxDQUFDRSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLWV4YW1wbGUvLi9wYWdlcy9hcGkvZXhhbXBsZXMvc2Vzc2lvbi50cz9hNGRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiBob3cgdG8gYWNjZXNzIGEgc2Vzc2lvbiBmcm9tIGFuIEFQSSByb3V0ZVxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcbiAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbiwgbnVsbCwgMikpXG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/examples/session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examples/session.ts"));
module.exports = __webpack_exports__;

})();