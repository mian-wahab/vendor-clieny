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

/***/ "(app-pages-browser)/./src/contexts/user-context.tsx":
/*!***************************************!*\
  !*** ./src/contexts/user-context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserConsumer: function() { return /* binding */ UserConsumer; },\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; },\n/* harmony export */   responseToast: function() { return /* binding */ responseToast; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth/client */ \"(app-pages-browser)/./src/lib/auth/client.ts\");\n/* harmony import */ var _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/default-logger */ \"(app-pages-browser)/./src/lib/default-logger.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ \"(app-pages-browser)/./src/contexts/enums.ts\");\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider,UserConsumer,responseToast auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(undefined);\nlet responseToast;\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const [toast, setToast] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        isOpen: false,\n        message: \"\",\n        type: _enums__WEBPACK_IMPORTED_MODULE_4__.ToastType.INFO\n    });\n    responseToast = {\n        toast,\n        setToast\n    };\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        user: null,\n        error: null,\n        isLoading: true\n    });\n    const setUser = (user)=>{\n        setState((prev)=>({\n                ...prev,\n                user\n            }));\n    };\n    const checkSession = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{\n        try {\n            const { data, error } = await _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__.authClient.getUser();\n            if (error) {\n                _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(error);\n                setState((prev)=>({\n                        ...prev,\n                        user: null,\n                        error: \"Something went wrong\",\n                        isLoading: false\n                    }));\n                return;\n            }\n            setState((prev)=>({\n                    ...prev,\n                    user: data !== null && data !== void 0 ? data : null,\n                    error: null,\n                    isLoading: false\n                }));\n        } catch (err) {\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n            setState((prev)=>({\n                    ...prev,\n                    user: null,\n                    error: \"Something went wrong\",\n                    isLoading: false\n                }));\n        }\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        checkSession().catch((err)=>{\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n        // noop\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            ...state,\n            checkSession,\n            setUser,\n            toast: {\n                toast,\n                setToast\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aliusama/Documents/ropstam/practice/back/Vendor-client/src/contexts/user-context.tsx\",\n        lineNumber: 69,\n        columnNumber: 10\n    }, this);\n}\n_s(UserProvider, \"KrGiebxjELgscCgfPReDYloiadg=\");\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy91c2VyLWNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUdnQjtBQUNEO0FBQ1Y7QUFXN0IsTUFBTUksNEJBQWNKLGdEQUFtQixDQUErQk0sV0FBVztBQU14RixJQUFJQztBQUNHLFNBQVNDLGFBQWEsS0FBK0I7UUFBL0IsRUFBRUMsUUFBUSxFQUFxQixHQUEvQjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLDJDQUFjLENBQStEO1FBQ3JHYSxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsTUFBTVosNkNBQVNBLENBQUNhLElBQUk7SUFDdEI7SUFFQVQsZ0JBQWdCO1FBQUVHO1FBQU9DO0lBQVM7SUFFbEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdsQiwyQ0FBYyxDQUFrRTtRQUN4R21CLE1BQU07UUFDTkMsT0FBTztRQUNQQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxVQUFVLENBQUNIO1FBQ2ZELFNBQVMsQ0FBQ0ssT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFSjtZQUFLO0lBQ3RDO0lBRUEsTUFBTUssZUFBZXhCLDhDQUFpQixDQUFDO1FBQ3JDLElBQUk7WUFDRixNQUFNLEVBQUUwQixJQUFJLEVBQUVOLEtBQUssRUFBRSxHQUFHLE1BQU1uQix3REFBVUEsQ0FBQzBCLE9BQU87WUFFaEQsSUFBSVAsT0FBTztnQkFDVGxCLHVEQUFNQSxDQUFDa0IsS0FBSyxDQUFDQTtnQkFDYkYsU0FBUyxDQUFDSyxPQUFVO3dCQUFFLEdBQUdBLElBQUk7d0JBQUVKLE1BQU07d0JBQU1DLE9BQU87d0JBQXdCQyxXQUFXO29CQUFNO2dCQUMzRjtZQUNGO1lBQ0FILFNBQVMsQ0FBQ0ssT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFSixNQUFNTyxpQkFBQUEsa0JBQUFBLE9BQVE7b0JBQU1OLE9BQU87b0JBQU1DLFdBQVc7Z0JBQU07UUFDbkYsRUFBRSxPQUFPTyxLQUFLO1lBQ1oxQix1REFBTUEsQ0FBQ2tCLEtBQUssQ0FBQ1E7WUFDYlYsU0FBUyxDQUFDSyxPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUVKLE1BQU07b0JBQU1DLE9BQU87b0JBQXdCQyxXQUFXO2dCQUFNO1FBQzdGO0lBQ0YsR0FBRyxFQUFFO0lBRUxyQiw0Q0FBZSxDQUFDO1FBQ2R3QixlQUFlTSxLQUFLLENBQUMsQ0FBQ0Y7WUFDcEIxQix1REFBTUEsQ0FBQ2tCLEtBQUssQ0FBQ1E7UUFDYixPQUFPO1FBQ1Q7SUFDQSxtRUFBbUU7SUFDckUsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUN4QixZQUFZMkIsUUFBUTtRQUFDQyxPQUFPO1lBQUUsR0FBR2YsS0FBSztZQUFFTztZQUFjRjtZQUFTWixPQUFNO2dCQUFDQTtnQkFBT0M7WUFBUTtRQUFFO2tCQUFJRjs7Ozs7O0FBQ3JHO0dBNUNnQkQ7S0FBQUE7QUE4Q1QsTUFBTXlCLGVBQWU3QixZQUFZOEIsUUFBUSxDQUFDO0FBRXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy91c2VyLWNvbnRleHQudHN4Pzk4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJ0AvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBhdXRoQ2xpZW50IH0gZnJvbSAnQC9saWIvYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQC9saWIvZGVmYXVsdC1sb2dnZXInO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi9lbnVtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNvbnRleHRWYWx1ZSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBjaGVja1Nlc3Npb24/OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBzZXRVc2VyPzogKHVzZXI6IFVzZXIpID0+IHZvaWQ7XG4gIHRvYXN0OiB7IHRvYXN0OiB7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH07IHNldFRvYXN0OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH0+PiB9O1xufVxuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VmFsdWUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5sZXQgcmVzcG9uc2VUb2FzdDtcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBVc2VyUHJvdmlkZXJQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3QgW3RvYXN0LCBzZXRUb2FzdF0gPSBSZWFjdC51c2VTdGF0ZTx7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH0+KHtcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHR5cGU6IFRvYXN0VHlwZS5JTkZPLFxuICB9KTtcblxuICByZXNwb25zZVRvYXN0ID0geyB0b2FzdCwgc2V0VG9hc3QgfSBhcyB7IHRvYXN0OiB7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH07IHNldFRvYXN0OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7IGlzT3BlbjogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbDsgdHlwZTogVG9hc3RUeXBlIH0+PiB9OztcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHsgdXNlcjogVXNlciB8IG51bGw7IGVycm9yOiBzdHJpbmcgfCBudWxsOyBpc0xvYWRpbmc6IGJvb2xlYW4gfT4oe1xuICAgIHVzZXI6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBzZXRVc2VyID0gKHVzZXI6IFVzZXIpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlciB9KSk7XG4gIH1cblxuICBjb25zdCBjaGVja1Nlc3Npb24gPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGF1dGhDbGllbnQuZ2V0VXNlcigpO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXI6IG51bGwsIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBpc0xvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXI6IGRhdGEgPz8gbnVsbCwgZXJyb3I6IG51bGwsIGlzTG9hZGluZzogZmFsc2UgfSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogbnVsbCwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsIGlzTG9hZGluZzogZmFsc2UgfSkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tTZXNzaW9uKCkuY2F0Y2goKGVycjogdW5rbm93bikgPT4ge1xuICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAvLyBub29wXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAtLSBFeHBlY3RlZFxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdGF0ZSwgY2hlY2tTZXNzaW9uLCBzZXRVc2VyLCB0b2FzdDp7dG9hc3QsIHNldFRvYXN0fSB9fT57Y2hpbGRyZW59PC9Vc2VyQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29uc3VtZXIgPSBVc2VyQ29udGV4dC5Db25zdW1lcjtcblxuZXhwb3J0IHsgcmVzcG9uc2VUb2FzdCB9O1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhdXRoQ2xpZW50IiwibG9nZ2VyIiwiVG9hc3RUeXBlIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwicmVzcG9uc2VUb2FzdCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidG9hc3QiLCJzZXRUb2FzdCIsInVzZVN0YXRlIiwiaXNPcGVuIiwibWVzc2FnZSIsInR5cGUiLCJJTkZPIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsInNldFVzZXIiLCJwcmV2IiwiY2hlY2tTZXNzaW9uIiwidXNlQ2FsbGJhY2siLCJkYXRhIiwiZ2V0VXNlciIsImVyciIsInVzZUVmZmVjdCIsImNhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlVzZXJDb25zdW1lciIsIkNvbnN1bWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/user-context.tsx\n"));

/***/ })

});