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
exports.id = "pages/api/examples/jwt";
exports.ids = ["pages/api/examples/jwt"];
exports.modules = {

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./pages/api/examples/jwt.ts":
/*!***********************************!*\
  !*** ./pages/api/examples/jwt.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n// This is an example of how to read a JSON Web Token from an API route\n\nconst secret = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req,\n        secret\n    });\n    res.send(JSON.stringify(token, null, 2));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXMvand0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVFQUF1RTtBQUMvQjtBQUd4QyxNQUFNQyxNQUFNLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0FBRTFDLGlFQUFlLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLE1BQU1QLHVEQUFRLENBQUM7UUFBRUssR0FBRztRQUFFSixNQUFNO0tBQUUsQ0FBQztJQUM3Q0ssR0FBRyxDQUFDRSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLWV4YW1wbGUvLi9wYWdlcy9hcGkvZXhhbXBsZXMvand0LnRzPzUwZDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBhbiBleGFtcGxlIG9mIGhvdyB0byByZWFkIGEgSlNPTiBXZWIgVG9rZW4gZnJvbSBhbiBBUEkgcm91dGVcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIlxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5jb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEsIHNlY3JldCB9KVxuICByZXMuc2VuZChKU09OLnN0cmluZ2lmeSh0b2tlbiwgbnVsbCwgMikpXG59XG4iXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicmVxIiwicmVzIiwidG9rZW4iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/examples/jwt.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examples/jwt.ts"));
module.exports = __webpack_exports__;

})();