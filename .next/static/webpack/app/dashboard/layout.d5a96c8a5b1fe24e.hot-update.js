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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserConsumer: function() { return /* binding */ UserConsumer; },\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth/client */ \"(app-pages-browser)/./src/lib/auth/client.ts\");\n/* harmony import */ var _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/default-logger */ \"(app-pages-browser)/./src/lib/default-logger.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ \"(app-pages-browser)/./src/contexts/enums.ts\");\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider,UserConsumer auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(undefined);\nlet toast = {\n    isOpen: false,\n    message: \"\",\n    type: _enums__WEBPACK_IMPORTED_MODULE_4__.ToastType.INFO\n};\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const [toast, setToast] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        isOpen: false,\n        message: \"\",\n        type: _enums__WEBPACK_IMPORTED_MODULE_4__.ToastType.INFO\n    });\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        user: null,\n        error: null,\n        isLoading: true\n    });\n    const setUser = (user)=>{\n        setState((prev)=>({\n                ...prev,\n                user\n            }));\n    };\n    const checkSession = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{\n        try {\n            const { data, error } = await _lib_auth_client__WEBPACK_IMPORTED_MODULE_2__.authClient.getUser();\n            if (error) {\n                _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(error);\n                setState((prev)=>({\n                        ...prev,\n                        user: null,\n                        error: \"Something went wrong\",\n                        isLoading: false\n                    }));\n                return;\n            }\n            setState((prev)=>({\n                    ...prev,\n                    user: data !== null && data !== void 0 ? data : null,\n                    error: null,\n                    isLoading: false\n                }));\n        } catch (err) {\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n            setState((prev)=>({\n                    ...prev,\n                    user: null,\n                    error: \"Something went wrong\",\n                    isLoading: false\n                }));\n        }\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        checkSession().catch((err)=>{\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);\n        // noop\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            ...state,\n            checkSession,\n            setUser,\n            toast: {\n                toast,\n                setToast\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aliusama/Documents/ropstam/practice/back/Vendor-client/src/contexts/user-context.tsx\",\n        lineNumber: 65,\n        columnNumber: 10\n    }, this);\n}\n_s(UserProvider, \"KrGiebxjELgscCgfPReDYloiadg=\");\n_c = UserProvider;\nconst UserConsumer = UserContext.Consumer;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy91c2VyLWNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBR2dCO0FBQ0Q7QUFDVjtBQVc3QixNQUFNSSw0QkFBY0osZ0RBQW1CLENBQStCTSxXQUFXO0FBS3hGLElBQUlDLFFBQVE7SUFBRUMsUUFBUTtJQUFPQyxTQUFTO0lBQUlDLE1BQU1QLDZDQUFTQSxDQUFDUSxJQUFJO0FBQUM7QUFDeEQsU0FBU0MsYUFBYSxLQUErQjtRQUEvQixFQUFFQyxRQUFRLEVBQXFCLEdBQS9COztJQUMzQixNQUFNLENBQUNOLE9BQU9PLFNBQVMsR0FBR2QsMkNBQWMsQ0FBK0Q7UUFDckdRLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxNQUFNUCw2Q0FBU0EsQ0FBQ1EsSUFBSTtJQUN0QjtJQUNBLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHakIsMkNBQWMsQ0FBa0U7UUFDeEdrQixNQUFNO1FBQ05DLE9BQU87UUFDUEMsV0FBVztJQUNiO0lBRUEsTUFBTUMsVUFBVSxDQUFDSDtRQUNmRCxTQUFTLENBQUNLLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRUo7WUFBSztJQUN0QztJQUVBLE1BQU1LLGVBQWV2Qiw4Q0FBaUIsQ0FBQztRQUNyQyxJQUFJO1lBQ0YsTUFBTSxFQUFFeUIsSUFBSSxFQUFFTixLQUFLLEVBQUUsR0FBRyxNQUFNbEIsd0RBQVVBLENBQUN5QixPQUFPO1lBRWhELElBQUlQLE9BQU87Z0JBQ1RqQix1REFBTUEsQ0FBQ2lCLEtBQUssQ0FBQ0E7Z0JBQ2JGLFNBQVMsQ0FBQ0ssT0FBVTt3QkFBRSxHQUFHQSxJQUFJO3dCQUFFSixNQUFNO3dCQUFNQyxPQUFPO3dCQUF3QkMsV0FBVztvQkFBTTtnQkFDM0Y7WUFDRjtZQUNBSCxTQUFTLENBQUNLLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRUosTUFBTU8saUJBQUFBLGtCQUFBQSxPQUFRO29CQUFNTixPQUFPO29CQUFNQyxXQUFXO2dCQUFNO1FBQ25GLEVBQUUsT0FBT08sS0FBSztZQUNaekIsdURBQU1BLENBQUNpQixLQUFLLENBQUNRO1lBQ2JWLFNBQVMsQ0FBQ0ssT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFSixNQUFNO29CQUFNQyxPQUFPO29CQUF3QkMsV0FBVztnQkFBTTtRQUM3RjtJQUNGLEdBQUcsRUFBRTtJQUVMcEIsNENBQWUsQ0FBQztRQUNkdUIsZUFBZU0sS0FBSyxDQUFDLENBQUNGO1lBQ3BCekIsdURBQU1BLENBQUNpQixLQUFLLENBQUNRO1FBQ2IsT0FBTztRQUNUO0lBQ0EsbUVBQW1FO0lBQ3JFLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDdkIsWUFBWTBCLFFBQVE7UUFBQ0MsT0FBTztZQUFFLEdBQUdmLEtBQUs7WUFBRU87WUFBY0Y7WUFBU2QsT0FBTTtnQkFBQ0E7Z0JBQU9PO1lBQVE7UUFBRTtrQkFBSUQ7Ozs7OztBQUNyRztHQXpDZ0JEO0tBQUFBO0FBMkNULE1BQU1vQixlQUFlNUIsWUFBWTZCLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvdXNlci1jb250ZXh0LnRzeD85OGFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICdAL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgYXV0aENsaWVudCB9IGZyb20gJ0AvbGliL2F1dGgvY2xpZW50JztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0AvbGliL2RlZmF1bHQtbG9nZ2VyJztcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4vZW51bXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDb250ZXh0VmFsdWUge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgY2hlY2tTZXNzaW9uPzogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgc2V0VXNlcj86ICh1c2VyOiBVc2VyKSA9PiB2b2lkO1xuICB0b2FzdDogeyB0b2FzdDogeyBpc09wZW46IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7IHR5cGU6IFRvYXN0VHlwZSB9OyBzZXRUb2FzdDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248eyBpc09wZW46IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7IHR5cGU6IFRvYXN0VHlwZSB9Pj4gfTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFZhbHVlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cbmxldCB0b2FzdCA9IHsgaXNPcGVuOiBmYWxzZSwgbWVzc2FnZTogJycsIHR5cGU6IFRvYXN0VHlwZS5JTkZPIH07XG5leHBvcnQgZnVuY3Rpb24gVXNlclByb3ZpZGVyKHsgY2hpbGRyZW4gfTogVXNlclByb3ZpZGVyUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IFt0b2FzdCwgc2V0VG9hc3RdID0gUmVhY3QudXNlU3RhdGU8eyBpc09wZW46IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7IHR5cGU6IFRvYXN0VHlwZSB9Pih7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICB0eXBlOiBUb2FzdFR5cGUuSU5GTyxcbiAgfSk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyB1c2VyOiBVc2VyIHwgbnVsbDsgZXJyb3I6IHN0cmluZyB8IG51bGw7IGlzTG9hZGluZzogYm9vbGVhbiB9Pih7XG4gICAgdXNlcjogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHNldFVzZXIgPSAodXNlcjogVXNlcikgPT4ge1xuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VyIH0pKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrU2Vzc2lvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgYXV0aENsaWVudC5nZXRVc2VyKCk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogbnVsbCwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsIGlzTG9hZGluZzogZmFsc2UgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogZGF0YSA/PyBudWxsLCBlcnJvcjogbnVsbCwgaXNMb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VyOiBudWxsLCBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgaXNMb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Nlc3Npb24oKS5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgIC8vIG5vb3BcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIEV4cGVjdGVkXG4gIH0sIFtdKTtcblxuICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBjaGVja1Nlc3Npb24sIHNldFVzZXIsIHRvYXN0Ont0b2FzdCwgc2V0VG9hc3R9IH19PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJDb25zdW1lciA9IFVzZXJDb250ZXh0LkNvbnN1bWVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXV0aENsaWVudCIsImxvZ2dlciIsIlRvYXN0VHlwZSIsIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsInRvYXN0IiwiaXNPcGVuIiwibWVzc2FnZSIsInR5cGUiLCJJTkZPIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRUb2FzdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsInNldFVzZXIiLCJwcmV2IiwiY2hlY2tTZXNzaW9uIiwidXNlQ2FsbGJhY2siLCJkYXRhIiwiZ2V0VXNlciIsImVyciIsInVzZUVmZmVjdCIsImNhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlVzZXJDb25zdW1lciIsIkNvbnN1bWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/user-context.tsx\n"));

/***/ })

});