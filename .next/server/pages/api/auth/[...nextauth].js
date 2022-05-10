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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n      \n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDSTtBQUNKO0FBQ0U7QUFDSjtBQUNyRCx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBRXhELHlFQUF5RTtBQUN6RSxpREFBaUQ7QUFDakQsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEIseURBQXlEO0lBQ3pETSxTQUFTLEVBQUU7UUFDVDs7Ozs7Ozs7Ozs7Ozs7OztNQWdCRSxDQUNGSixtRUFBZ0IsQ0FBQztZQUNmSyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO1lBQ2pDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlO1NBQzFDLENBQUM7UUFDRlQsaUVBQWMsQ0FBQztZQUNiSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxTQUFTO1lBQy9CRixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhO1NBQ3hDLENBQUM7UUFDRmIsaUVBQWMsQ0FBQztZQUNiTSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxTQUFTO1lBQy9CSixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxhQUFhO1NBQ3hDLENBQUM7UUFDRlosa0VBQWUsQ0FBQztZQUNkRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxVQUFVO1lBQ2hDTixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxjQUFjO1NBQ3pDLENBQUM7UUFDRmIsZ0VBQWEsQ0FBQztZQUNaRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxRQUFRO1lBQzlCUixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxZQUFZO1lBQ3RDQyxNQUFNLEVBQUViLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxZQUFZO1NBQ2pDLENBQUM7S0FDSDtJQUNEQyxLQUFLLEVBQUU7UUFDTEMsV0FBVyxFQUFFLE9BQU87S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO1lBQ25CQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxPQUFPO1lBQ3hCLE9BQU9ELEtBQUs7U0FDYjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1leGFtcGxlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IEZhY2Vib29rUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZmFjZWJvb2tcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3R3aXR0ZXJcIlxuaW1wb3J0IEF1dGgwUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXV0aDBcIlxuLy8gaW1wb3J0IEFwcGxlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXBwbGVcIlxuLy8gaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIlxuXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3Byb3ZpZGVycy9vYXV0aFxuICBwcm92aWRlcnM6IFtcbiAgICAvKiBFbWFpbFByb3ZpZGVyKHtcbiAgICAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSLFxuICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICAgICB9KSxcbiAgICAvLyBUZW1wb3JhcmlseSByZW1vdmluZyB0aGUgQXBwbGUgcHJvdmlkZXIgZnJvbSB0aGUgZGVtbyBzaXRlIGFzIHRoZVxuICAgIC8vIGNhbGxiYWNrIFVSTCBmb3IgaXQgbmVlZHMgdXBkYXRpbmcgZHVlIHRvIFZlcmNlbCBjaGFuZ2luZyBkb21haW5zXG4gICAgICBcbiAgICBQcm92aWRlcnMuQXBwbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiB7XG4gICAgICAgIGFwcGxlSWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgICB0ZWFtSWQ6IHByb2Nlc3MuZW52LkFQUExFX1RFQU1fSUQsXG4gICAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LkFQUExFX1BSSVZBVEVfS0VZLFxuICAgICAgICBrZXlJZDogcHJvY2Vzcy5lbnYuQVBQTEVfS0VZX0lELFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAqL1xuICAgIEZhY2Vib29rUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19TRUNSRVQsXG4gICAgfSksXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICAgIFR3aXR0ZXJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9TRUNSRVQsXG4gICAgfSksXG4gICAgQXV0aDBQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcbiAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuQVVUSDBfSVNTVUVSLFxuICAgIH0pLFxuICBdLFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImxpZ2h0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuIH0pIHtcbiAgICAgIHRva2VuLnVzZXJSb2xlID0gXCJhZG1pblwiXG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiQXV0aDBQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkZBQ0VCT09LX0lEIiwiY2xpZW50U2VjcmV0IiwiRkFDRUJPT0tfU0VDUkVUIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJUV0lUVEVSX0lEIiwiVFdJVFRFUl9TRUNSRVQiLCJBVVRIMF9JRCIsIkFVVEgwX1NFQ1JFVCIsImlzc3VlciIsIkFVVEgwX0lTU1VFUiIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();