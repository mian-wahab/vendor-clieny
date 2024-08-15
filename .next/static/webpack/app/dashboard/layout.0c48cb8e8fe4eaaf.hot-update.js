"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosWrapper */ \"(app-pages-browser)/./src/service/axiosWrapper.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"(app-pages-browser)/./src/service/routes.ts\");\n\n\nconst Login = async (data)=>{\n    const user = await (0,_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__.post)(_routes__WEBPACK_IMPORTED_MODULE_1__.routes.auth.signIn, data);\n    if (user.status) {\n        const userData = user.data;\n        localStorage.setItem(\"custom-auth-token\", userData === null || userData === void 0 ? void 0 : userData.token);\n        return {\n            user: userData,\n            error: null\n        };\n    }\n    return {\n        user: null,\n        error: user.message\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUNKO0FBRzNCLE1BQU1FLFFBQVEsT0FBT0M7SUFDeEIsTUFBTUMsT0FBTyxNQUFNSixtREFBSUEsQ0FBQ0MsMkNBQU1BLENBQUNJLElBQUksQ0FBQ0MsTUFBTSxFQUFFSDtJQUM1QyxJQUFJQyxLQUFLRyxNQUFNLEVBQUU7UUFDYixNQUFNQyxXQUFXSixLQUFLRCxJQUFJO1FBQzFCTSxhQUFhQyxPQUFPLENBQUMscUJBQXFCRixxQkFBQUEsK0JBQUFBLFNBQVVHLEtBQUs7UUFDekQsT0FBTztZQUFFUCxNQUFNSTtZQUFVSSxPQUFPO1FBQUs7SUFDekM7SUFDQSxPQUFPO1FBQUVSLE1BQU07UUFBTVEsT0FBT1IsS0FBS1MsT0FBTztJQUFXO0FBQ3ZELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvaW5kZXgudHM/ZWM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvdHlwZXMvdXNlclwiO1xuaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuL2F4aW9zV3JhcHBlclwiO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgeyBTaWduSW5XaXRoUGFzc3dvcmRQYXJhbXMgfSBmcm9tIFwiQC9saWIvYXV0aC9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IExvZ2luID0gYXN5bmMgKGRhdGE6IFNpZ25JbldpdGhQYXNzd29yZFBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwb3N0KHJvdXRlcy5hdXRoLnNpZ25JbiwgZGF0YSk7XG4gICAgaWYgKHVzZXIuc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlci5kYXRhIGFzIFVzZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXN0b20tYXV0aC10b2tlbicsIHVzZXJEYXRhPy50b2tlbiBhcyBzdHJpbmcpO1xuICAgICAgICByZXR1cm4geyB1c2VyOiB1c2VyRGF0YSwgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdXNlcjogbnVsbCwgZXJyb3I6IHVzZXIubWVzc2FnZSBhcyBzdHJpbmcgfTtcbn0iXSwibmFtZXMiOlsicG9zdCIsInJvdXRlcyIsIkxvZ2luIiwiZGF0YSIsInVzZXIiLCJhdXRoIiwic2lnbkluIiwic3RhdHVzIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/index.ts\n"));

/***/ })

});