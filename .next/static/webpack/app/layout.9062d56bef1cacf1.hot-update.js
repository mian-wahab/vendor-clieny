"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lib/auth/client.ts":
/*!********************************!*\
  !*** ./src/lib/auth/client.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authClient: function() { return /* binding */ authClient; }\n/* harmony export */ });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service */ \"(app-pages-browser)/./src/service/index.ts\");\n/* __next_internal_client_entry_do_not_use__ authClient auto */ \nfunction generateToken() {\n    const arr = new Uint8Array(12);\n    window.crypto.getRandomValues(arr);\n    return Array.from(arr, (v)=>v.toString(16).padStart(2, \"0\")).join(\"\");\n}\nconst user = {\n    id: \"USR-000\",\n    avatar: \"/assets/avatar.png\",\n    firstName: \"Sofia\",\n    lastName: \"Rivers\",\n    email: \"sofia@devias.io\"\n};\nclass AuthClient {\n    async signUp(_) {\n        // Make API request\n        // We do not handle the API, so we'll just generate a token and store it in localStorage.\n        const token = generateToken();\n        localStorage.setItem(\"custom-auth-token\", token);\n        return {};\n    }\n    async signInWithOAuth(_) {\n        return {\n            error: \"Social authentication not implemented\"\n        };\n    }\n    async signInWithPassword(params) {\n        const user = await (0,_service__WEBPACK_IMPORTED_MODULE_0__.Login)(params);\n        if (!(user === null || user === void 0 ? void 0 : user.user)) {\n            return {\n                user: null,\n                error: user === null || user === void 0 ? void 0 : user.error\n            };\n        }\n        return {\n            user: user === null || user === void 0 ? void 0 : user.user,\n            error: null\n        };\n    }\n    async resetPassword(_) {\n        return {\n            error: \"Password reset not implemented\"\n        };\n    }\n    async updatePassword(_) {\n        return {\n            error: \"Update reset not implemented\"\n        };\n    }\n    async getUser() {\n        const token = localStorage.getItem(\"custom-auth-token\");\n        if (!token) {\n            return {\n                data: null\n            };\n        }\n        return {\n            data: user\n        };\n    }\n    async signOut() {\n        localStorage.removeItem(\"custom-auth-token\");\n        return {};\n    }\n}\nconst authClient = new AuthClient();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYXV0aC9jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Z0VBRWtDO0FBR2xDLFNBQVNDO0lBQ1AsTUFBTUMsTUFBTSxJQUFJQyxXQUFXO0lBQzNCQyxPQUFPQyxNQUFNLENBQUNDLGVBQWUsQ0FBQ0o7SUFDOUIsT0FBT0ssTUFBTUMsSUFBSSxDQUFDTixLQUFLLENBQUNPLElBQU1BLEVBQUVDLFFBQVEsQ0FBQyxJQUFJQyxRQUFRLENBQUMsR0FBRyxNQUFNQyxJQUFJLENBQUM7QUFDdEU7QUFFQSxNQUFNQyxPQUFPO0lBQ1hDLElBQUk7SUFDSkMsUUFBUTtJQUNSQyxXQUFXO0lBQ1hDLFVBQVU7SUFDVkMsT0FBTztBQUNUO0FBc0JBLE1BQU1DO0lBQ0osTUFBTUMsT0FBT0MsQ0FBZSxFQUErQjtRQUN6RCxtQkFBbUI7UUFFbkIseUZBQXlGO1FBQ3pGLE1BQU1DLFFBQVFyQjtRQUNkc0IsYUFBYUMsT0FBTyxDQUFDLHFCQUFxQkY7UUFFMUMsT0FBTyxDQUFDO0lBQ1Y7SUFFQSxNQUFNRyxnQkFBZ0JKLENBQXdCLEVBQStCO1FBQzNFLE9BQU87WUFBRUssT0FBTztRQUF3QztJQUMxRDtJQUVBLE1BQU1DLG1CQUFtQkMsTUFBZ0MsRUFBeUQ7UUFDaEgsTUFBTWYsT0FBTyxNQUFNYiwrQ0FBS0EsQ0FBQzRCO1FBQ3pCLElBQUksRUFBQ2YsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLEdBQUU7WUFDZixPQUFPO2dCQUFFQSxNQUFNO2dCQUFNYSxLQUFLLEVBQUViLGlCQUFBQSwyQkFBQUEsS0FBTWEsS0FBSztZQUFXO1FBQ3BEO1FBQ0EsT0FBTztZQUFFYixJQUFJLEVBQUVBLGlCQUFBQSwyQkFBQUEsS0FBTUEsSUFBSTtZQUFFYSxPQUFPO1FBQUs7SUFDekM7SUFFQSxNQUFNRyxjQUFjUixDQUFzQixFQUErQjtRQUN2RSxPQUFPO1lBQUVLLE9BQU87UUFBaUM7SUFDbkQ7SUFFQSxNQUFNSSxlQUFlVCxDQUFzQixFQUErQjtRQUN4RSxPQUFPO1lBQUVLLE9BQU87UUFBK0I7SUFDakQ7SUFFQSxNQUFNSyxVQUEyRDtRQUMvRCxNQUFNVCxRQUFRQyxhQUFhUyxPQUFPLENBQUM7UUFFbkMsSUFBSSxDQUFDVixPQUFPO1lBQ1YsT0FBTztnQkFBRVcsTUFBTTtZQUFLO1FBQ3RCO1FBRUEsT0FBTztZQUFFQSxNQUFNcEI7UUFBSztJQUN0QjtJQUVBLE1BQU1xQixVQUF1QztRQUMzQ1gsYUFBYVksVUFBVSxDQUFDO1FBRXhCLE9BQU8sQ0FBQztJQUNWO0FBQ0Y7QUFFTyxNQUFNQyxhQUFhLElBQUlqQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYXV0aC9jbGllbnQudHM/Y2QzMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnQC9zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJ0AvdHlwZXMvdXNlcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4oKTogc3RyaW5nIHtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTIpO1xuICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICByZXR1cm4gQXJyYXkuZnJvbShhcnIsICh2KSA9PiB2LnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbn1cblxuY29uc3QgdXNlciA9IHtcbiAgaWQ6ICdVU1ItMDAwJyxcbiAgYXZhdGFyOiAnL2Fzc2V0cy9hdmF0YXIucG5nJyxcbiAgZmlyc3ROYW1lOiAnU29maWEnLFxuICBsYXN0TmFtZTogJ1JpdmVycycsXG4gIGVtYWlsOiAnc29maWFAZGV2aWFzLmlvJyxcbn0gc2F0aXNmaWVzIFVzZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUGFyYW1zIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluV2l0aE9BdXRoUGFyYW1zIHtcbiAgcHJvdmlkZXI6ICdnb29nbGUnIHwgJ2Rpc2NvcmQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbldpdGhQYXNzd29yZFBhcmFtcyB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFBhcmFtcyB7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmNsYXNzIEF1dGhDbGllbnQge1xuICBhc3luYyBzaWduVXAoXzogU2lnblVwUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICAvLyBNYWtlIEFQSSByZXF1ZXN0XG5cbiAgICAvLyBXZSBkbyBub3QgaGFuZGxlIHRoZSBBUEksIHNvIHdlJ2xsIGp1c3QgZ2VuZXJhdGUgYSB0b2tlbiBhbmQgc3RvcmUgaXQgaW4gbG9jYWxTdG9yYWdlLlxuICAgIGNvbnN0IHRva2VuID0gZ2VuZXJhdGVUb2tlbigpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXN0b20tYXV0aC10b2tlbicsIHRva2VuKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbldpdGhPQXV0aChfOiBTaWduSW5XaXRoT0F1dGhQYXJhbXMpOiBQcm9taXNlPHsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB7IGVycm9yOiAnU29jaWFsIGF1dGhlbnRpY2F0aW9uIG5vdCBpbXBsZW1lbnRlZCcgfTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbldpdGhQYXNzd29yZChwYXJhbXM6IFNpZ25JbldpdGhQYXNzd29yZFBhcmFtcyk6IFByb21pc2U8eyB1c2VyOiBVc2VyIHwgbnVsbCwgZXJyb3I/OiBzdHJpbmcgfCBudWxsIH0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgTG9naW4ocGFyYW1zKTtcbiAgICBpZiAoIXVzZXI/LnVzZXIpIHtcbiAgICAgIHJldHVybiB7IHVzZXI6IG51bGwsIGVycm9yOiB1c2VyPy5lcnJvciBhcyBzdHJpbmcgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdXNlcjogdXNlcj8udXNlciwgZXJyb3I6IG51bGwgfTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoXzogUmVzZXRQYXNzd29yZFBhcmFtcyk6IFByb21pc2U8eyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdQYXNzd29yZCByZXNldCBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBhc3luYyB1cGRhdGVQYXNzd29yZChfOiBSZXNldFBhc3N3b3JkUGFyYW1zKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1VwZGF0ZSByZXNldCBub3QgaW1wbGVtZW50ZWQnIH07XG4gIH1cblxuICBhc3luYyBnZXRVc2VyKCk6IFByb21pc2U8eyBkYXRhPzogVXNlciB8IG51bGw7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXN0b20tYXV0aC10b2tlbicpO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHsgZGF0YTogbnVsbCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IGRhdGE6IHVzZXIgfTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VzdG9tLWF1dGgtdG9rZW4nKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aENsaWVudCA9IG5ldyBBdXRoQ2xpZW50KCk7XG4iXSwibmFtZXMiOlsiTG9naW4iLCJnZW5lcmF0ZVRva2VuIiwiYXJyIiwiVWludDhBcnJheSIsIndpbmRvdyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIkFycmF5IiwiZnJvbSIsInYiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInVzZXIiLCJpZCIsImF2YXRhciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJBdXRoQ2xpZW50Iiwic2lnblVwIiwiXyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNpZ25JbldpdGhPQXV0aCIsImVycm9yIiwic2lnbkluV2l0aFBhc3N3b3JkIiwicGFyYW1zIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkIiwiZ2V0VXNlciIsImdldEl0ZW0iLCJkYXRhIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJhdXRoQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/auth/client.ts\n"));

/***/ })

});