/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/contexts/user-context.tsx":
/*!***************************************!*\
  !*** ./src/contexts/user-context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserConsumer: function() { return /* binding */ UserConsumer; },\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth/client */ \"(app-pages-browser)/./src/lib/auth/client.ts\");\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/default-logger */ \"(app-pages-browser)/./src/lib/default-logger.ts\");\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider,UserConsumer auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(undefined);\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        user: null,\n        error: null,\n        isLoading: true\n    });\n    const checkSession = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{\n        try {\n            const { data, error } = await _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__.authClient.getUser();\n            if (error) {\n                _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(error);\n                setState((prev)=>({\n                        ...prev,\n                        user: null,\n                        error: \"Something went wrong\",\n                        isLoading: false\n                    }));\n                return;\n            }\n            setState((prev)=>({\n                    ...prev,\n                    user: data !== null && data !== void 0 ? data : null,\n                    error: null,\n                    isLoading: false\n                }));\n        } catch (err) {\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n            setState((prev)=>({\n                    ...prev,\n                    user: null,\n                    error: \"Something went wrong\",\n                    isLoading: false\n                }));\n        }\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        checkSession().catch((err)=>{\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n        // noop\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            ...state,\n            checkSession\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aliusama/Documents/ropstam/practice/back/Vendor-client/src/contexts/user-context.tsx\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, this);\n}\n_s(UserProvider, \"pzFb2+DliD+vM4gB3eT7HXtYV+Q=\");\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy91c2VyLWNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBR2dCO0FBQ0Q7QUFTdkMsTUFBTUcsNEJBQWNILGdEQUFtQixDQUErQkssV0FBVztBQU1qRixTQUFTQyxhQUFhLEtBQStCO1FBQS9CLEVBQUVDLFFBQVEsRUFBcUIsR0FBL0I7O0lBQzNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwyQ0FBYyxDQUFrRTtRQUN4R1csTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUVBLE1BQU1DLGVBQWVkLDhDQUFpQixDQUFDO1FBQ3JDLElBQUk7WUFDRixNQUFNLEVBQUVnQixJQUFJLEVBQUVKLEtBQUssRUFBRSxHQUFHLE1BQU1YLHdEQUFVQSxDQUFDZ0IsT0FBTztZQUVoRCxJQUFJTCxPQUFPO2dCQUNUVix1REFBTUEsQ0FBQ1UsS0FBSyxDQUFDQTtnQkFDYkgsU0FBUyxDQUFDUyxPQUFVO3dCQUFFLEdBQUdBLElBQUk7d0JBQUVQLE1BQU07d0JBQU1DLE9BQU87d0JBQXdCQyxXQUFXO29CQUFNO2dCQUMzRjtZQUNGO1lBQ0FKLFNBQVMsQ0FBQ1MsT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFUCxNQUFNSyxpQkFBQUEsa0JBQUFBLE9BQVE7b0JBQU1KLE9BQU87b0JBQU1DLFdBQVc7Z0JBQU07UUFDbkYsRUFBRSxPQUFPTSxLQUFLO1lBQ1pqQix1REFBTUEsQ0FBQ1UsS0FBSyxDQUFDTztZQUNiVixTQUFTLENBQUNTLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRVAsTUFBTTtvQkFBTUMsT0FBTztvQkFBd0JDLFdBQVc7Z0JBQU07UUFDN0Y7SUFDRixHQUFHLEVBQUU7SUFFTGIsNENBQWUsQ0FBQztRQUNkYyxlQUFlTyxLQUFLLENBQUMsQ0FBQ0Y7WUFDcEJqQix1REFBTUEsQ0FBQ1UsS0FBSyxDQUFDTztRQUNiLE9BQU87UUFDVDtJQUNBLG1FQUFtRTtJQUNyRSxHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ2hCLFlBQVltQixRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHZixLQUFLO1lBQUVNO1FBQWE7a0JBQUlQOzs7Ozs7QUFDbkU7R0FoQ2dCRDtLQUFBQTtBQWtDVCxNQUFNa0IsZUFBZXJCLFlBQVlzQixRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL3VzZXItY29udGV4dC50c3g/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnQC90eXBlcy91c2VyJztcbmltcG9ydCB7IGF1dGhDbGllbnQgfSBmcm9tICdAL2xpYi9hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAL2xpYi9kZWZhdWx0LWxvZ2dlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNvbnRleHRWYWx1ZSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBjaGVja1Nlc3Npb24/OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VmFsdWUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlclByb3ZpZGVyKHsgY2hpbGRyZW4gfTogVXNlclByb3ZpZGVyUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyB1c2VyOiBVc2VyIHwgbnVsbDsgZXJyb3I6IHN0cmluZyB8IG51bGw7IGlzTG9hZGluZzogYm9vbGVhbiB9Pih7XG4gICAgdXNlcjogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrU2Vzc2lvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgYXV0aENsaWVudC5nZXRVc2VyKCk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogbnVsbCwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsIGlzTG9hZGluZzogZmFsc2UgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogZGF0YSA/PyBudWxsLCBlcnJvcjogbnVsbCwgaXNMb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VyOiBudWxsLCBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgaXNMb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Nlc3Npb24oKS5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgIC8vIG5vb3BcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIEV4cGVjdGVkXG4gIH0sIFtdKTtcblxuICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBjaGVja1Nlc3Npb24gfX0+e2NoaWxkcmVufTwvVXNlckNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgY29uc3QgVXNlckNvbnN1bWVyID0gVXNlckNvbnRleHQuQ29uc3VtZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhdXRoQ2xpZW50IiwibG9nZ2VyIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjaGVja1Nlc3Npb24iLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJnZXRVc2VyIiwicHJldiIsImVyciIsInVzZUVmZmVjdCIsImNhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlVzZXJDb25zdW1lciIsIkNvbnN1bWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/user-context.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/auth/client.ts":
/*!********************************!*\
  !*** ./src/lib/auth/client.ts ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});