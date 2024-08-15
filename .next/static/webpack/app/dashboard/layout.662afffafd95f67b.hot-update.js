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

/***/ "(app-pages-browser)/./src/contexts/user-context.tsx":
/*!***************************************!*\
  !*** ./src/contexts/user-context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserConsumer: function() { return /* binding */ UserConsumer; },\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth/client */ \"(app-pages-browser)/./src/lib/auth/client.ts\");\n/* harmony import */ var _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/default-logger */ \"(app-pages-browser)/./src/lib/default-logger.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ \"(app-pages-browser)/./src/contexts/enums.ts\");\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider,UserConsumer auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(undefined);\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const [toast, setToast] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        isOpen: false,\n        message: \"\",\n        type: _enums__WEBPACK_IMPORTED_MODULE_4__.ToastType.INFO\n    });\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        user: null,\n        error: null,\n        isLoading: true\n    });\n    const setUser = (user)=>{\n        setState((prev)=>({\n                ...prev,\n                user\n            }));\n    };\n    const checkSession = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{\n        try {\n            const { data, error } = await _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__.authClient.getUser();\n            if (error) {\n                _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(error);\n                setState((prev)=>({\n                        ...prev,\n                        user: null,\n                        error: \"Something went wrong\",\n                        isLoading: false\n                    }));\n                return;\n            }\n            setState((prev)=>({\n                    ...prev,\n                    user: data !== null && data !== void 0 ? data : null,\n                    error: null,\n                    isLoading: false\n                }));\n        } catch (err) {\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n            setState((prev)=>({\n                    ...prev,\n                    user: null,\n                    error: \"Something went wrong\",\n                    isLoading: false\n                }));\n        }\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        checkSession().catch((err)=>{\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n        // noop\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            ...state,\n            checkSession,\n            setUser,\n            toast: {\n                toast,\n                setToast\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aliusama/Documents/ropstam/practice/back/Vendor-client/src/contexts/user-context.tsx\",\n        lineNumber: 65,\n        columnNumber: 10\n    }, this);\n}\n_s(UserProvider, \"KrGiebxjELgscCgfPReDYloiadg=\");\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy91c2VyLWNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBR2dCO0FBQ0Q7QUFDVjtBQVc3QixNQUFNSSw0QkFBY0osZ0RBQW1CLENBQStCTSxXQUFXO0FBTWpGLFNBQVNDLGFBQWEsS0FBK0I7UUFBL0IsRUFBRUMsUUFBUSxFQUFxQixHQUEvQjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLDJDQUFjLENBQStEO1FBQ3JHWSxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsTUFBTVgsNkNBQVNBLENBQUNZLElBQUk7SUFDdEI7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2pCLDJDQUFjLENBQWtFO1FBQ3hHa0IsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUVBLE1BQU1DLFVBQVUsQ0FBQ0g7UUFDZkQsU0FBUyxDQUFDSyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVKO1lBQUs7SUFDdEM7SUFFQSxNQUFNSyxlQUFldkIsOENBQWlCLENBQUM7UUFDckMsSUFBSTtZQUNGLE1BQU0sRUFBRXlCLElBQUksRUFBRU4sS0FBSyxFQUFFLEdBQUcsTUFBTWxCLHdEQUFVQSxDQUFDeUIsT0FBTztZQUVoRCxJQUFJUCxPQUFPO2dCQUNUakIsdURBQU1BLENBQUNpQixLQUFLLENBQUNBO2dCQUNiRixTQUFTLENBQUNLLE9BQVU7d0JBQUUsR0FBR0EsSUFBSTt3QkFBRUosTUFBTTt3QkFBTUMsT0FBTzt3QkFBd0JDLFdBQVc7b0JBQU07Z0JBQzNGO1lBQ0Y7WUFDQUgsU0FBUyxDQUFDSyxPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUVKLE1BQU1PLGlCQUFBQSxrQkFBQUEsT0FBUTtvQkFBTU4sT0FBTztvQkFBTUMsV0FBVztnQkFBTTtRQUNuRixFQUFFLE9BQU9PLEtBQUs7WUFDWnpCLHVEQUFNQSxDQUFDaUIsS0FBSyxDQUFDUTtZQUNiVixTQUFTLENBQUNLLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRUosTUFBTTtvQkFBTUMsT0FBTztvQkFBd0JDLFdBQVc7Z0JBQU07UUFDN0Y7SUFDRixHQUFHLEVBQUU7SUFFTHBCLDRDQUFlLENBQUM7UUFDZHVCLGVBQWVNLEtBQUssQ0FBQyxDQUFDRjtZQUNwQnpCLHVEQUFNQSxDQUFDaUIsS0FBSyxDQUFDUTtRQUNiLE9BQU87UUFDVDtJQUNBLG1FQUFtRTtJQUNyRSxHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ3ZCLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHZixLQUFLO1lBQUVPO1lBQWNGO1lBQVNaLE9BQU07Z0JBQUNBO2dCQUFPQztZQUFRO1FBQUU7a0JBQUlGOzs7Ozs7QUFDckc7R0F6Q2dCRDtLQUFBQTtBQTJDVCxNQUFNeUIsZUFBZTVCLFlBQVk2QixRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL3VzZXItY29udGV4dC50c3g/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnQC90eXBlcy91c2VyJztcbmltcG9ydCB7IGF1dGhDbGllbnQgfSBmcm9tICdAL2xpYi9hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAL2xpYi9kZWZhdWx0LWxvZ2dlcic7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL2VudW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ29udGV4dFZhbHVlIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGNoZWNrU2Vzc2lvbj86ICgpID0+IFByb21pc2U8dm9pZD47XG4gIHNldFVzZXI/OiAodXNlcjogVXNlcikgPT4gdm9pZDtcbiAgdG9hc3Q6IHsgdG9hc3Q6IHsgaXNPcGVuOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfCBudWxsOyB0eXBlOiBUb2FzdFR5cGUgfTsgc2V0VG9hc3Q6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHsgaXNPcGVuOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfCBudWxsOyB0eXBlOiBUb2FzdFR5cGUgfT4+IH07XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRWYWx1ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBVc2VyUHJvdmlkZXJQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3QgW3RvYXN0LCBzZXRUb2FzdF0gPSBSZWFjdC51c2VTdGF0ZTx7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH0+KHtcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHR5cGU6IFRvYXN0VHlwZS5JTkZPLFxuICB9KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7IHVzZXI6IFVzZXIgfCBudWxsOyBlcnJvcjogc3RyaW5nIHwgbnVsbDsgaXNMb2FkaW5nOiBib29sZWFuIH0+KHtcbiAgICB1c2VyOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgc2V0VXNlciA9ICh1c2VyOiBVc2VyKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXIgfSkpO1xuICB9XG5cbiAgY29uc3QgY2hlY2tTZXNzaW9uID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBhdXRoQ2xpZW50LmdldFVzZXIoKTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VyOiBudWxsLCBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgaXNMb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VyOiBkYXRhID8/IG51bGwsIGVycm9yOiBudWxsLCBpc0xvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXI6IG51bGwsIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBpc0xvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2Vzc2lvbigpLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcbiAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgLy8gbm9vcFxuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgLS0gRXhwZWN0ZWRcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIGNoZWNrU2Vzc2lvbiwgc2V0VXNlciwgdG9hc3Q6e3RvYXN0LCBzZXRUb2FzdH0gfX0+e2NoaWxkcmVufTwvVXNlckNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgY29uc3QgVXNlckNvbnN1bWVyID0gVXNlckNvbnRleHQuQ29uc3VtZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhdXRoQ2xpZW50IiwibG9nZ2VyIiwiVG9hc3RUeXBlIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0b2FzdCIsInNldFRvYXN0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJtZXNzYWdlIiwidHlwZSIsIklORk8iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwic2V0VXNlciIsInByZXYiLCJjaGVja1Nlc3Npb24iLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJnZXRVc2VyIiwiZXJyIiwidXNlRWZmZWN0IiwiY2F0Y2giLCJQcm92aWRlciIsInZhbHVlIiwiVXNlckNvbnN1bWVyIiwiQ29uc3VtZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/user-context.tsx\n"));

/***/ })

});