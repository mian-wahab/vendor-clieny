"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/sign-in/page",{

/***/ "(app-pages-browser)/./src/service/axiosWrapper.ts":
/*!*************************************!*\
  !*** ./src/service/axiosWrapper.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   del: function() { return /* binding */ del; },\n/* harmony export */   get: function() { return /* binding */ get; },\n/* harmony export */   post: function() { return /* binding */ post; },\n/* harmony export */   put: function() { return /* binding */ put; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _contexts_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contexts/enums */ \"(app-pages-browser)/./src/contexts/enums.ts\");\n/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/user-context */ \"(app-pages-browser)/./src/contexts/user-context.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nvar _process_env, _process;\n\n\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n    baseURL: (_process = process) === null || process === void 0 ? void 0 : (_process_env = _process.env) === null || _process_env === void 0 ? void 0 : _process_env.NEXT_PUBLIC_API_URI,\n    timeout: 10000,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\naxiosInstance.interceptors.request.use((config)=>{\n    const token = localStorage.getItem(\"custom-auth-token\");\n    if (token) {\n        config.headers = {\n            ...config.headers,\n            Authorization: token\n        };\n    }\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\naxiosInstance.interceptors.response.use((response)=>{\n    return response;\n}, (error)=>{\n    if (error.response) {\n        var _error_response;\n        if (error.response.status === 401) {\n            localStorage.clear();\n            window.location.href = \"/\";\n        } else if ((error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 500) {\n            _contexts_user_context__WEBPACK_IMPORTED_MODULE_1__.responseToast.toast.setToast({\n                isOpen: true,\n                message: \"Internal server error\",\n                type: _contexts_enums__WEBPACK_IMPORTED_MODULE_0__.ToastType.ERROR\n            });\n        }\n    // You can add more custom error handling based on status codes here\n    }\n    return Promise.reject(error);\n});\nconst handleError = (error)=>{\n    var _error_response;\n    const response = error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;\n    return response;\n};\nconst get = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.get(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst post = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.post(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst put = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.put(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst del = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.delete(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F4aW9zV3JhcHBlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUthQSxjQUFBQTtBQUwrRTtBQUUvQztBQUNXO0FBQ3hELE1BQU1JLGdCQUErQkgsNkNBQUtBLENBQUNJLE1BQU0sQ0FBQztJQUM5Q0MsT0FBTyxHQUFFTixXQUFBQSxxQkFBQUEsT0FBQUEsd0JBQUFBLGVBQUFBLFNBQVNPLEdBQUcsY0FBWlAsbUNBQUFBLGFBQWNRLG1CQUFtQjtJQUMxQ0MsU0FBUztJQUNUQyxTQUFTO1FBQ0wsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQU4sY0FBY08sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDbEMsQ0FBQ0M7SUFDRyxNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7SUFDbkMsSUFBSUYsT0FBTztRQUNQRCxPQUFPSixPQUFPLEdBQUc7WUFDYixHQUFHSSxPQUFPSixPQUFPO1lBQ2pCUSxlQUFlSDtRQUNuQjtJQUNKO0lBQ0EsT0FBT0Q7QUFDWCxHQUNBLENBQUNLO0lBQ0csT0FBT0MsUUFBUUMsTUFBTSxDQUFDRjtBQUMxQjtBQUdKZixjQUFjTyxZQUFZLENBQUNXLFFBQVEsQ0FBQ1QsR0FBRyxDQUNuQyxDQUFDUztJQUNHLE9BQU9BO0FBQ1gsR0FDQSxDQUFDSDtJQUNHLElBQUlBLE1BQU1HLFFBQVEsRUFBRTtZQUlOSDtRQUhWLElBQUlBLE1BQU1HLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUs7WUFDL0JQLGFBQWFRLEtBQUs7WUFDbEJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1FBQzNCLE9BQU8sSUFBR1IsQ0FBQUEsa0JBQUFBLDZCQUFBQSxrQkFBQUEsTUFBT0csUUFBUSxjQUFmSCxzQ0FBQUEsZ0JBQWlCSSxNQUFNLE1BQUssS0FBSztZQUN2Q3BCLGlFQUFhQSxDQUFDeUIsS0FBSyxDQUFDQyxRQUFRLENBQUM7Z0JBQUVDLFFBQVE7Z0JBQU1DLFNBQVM7Z0JBQXlCQyxNQUFNOUIsc0RBQVNBLENBQUMrQixLQUFLO1lBQUM7UUFDekc7SUFDQSxvRUFBb0U7SUFDeEU7SUFDQSxPQUFPYixRQUFRQyxNQUFNLENBQUNGO0FBQzFCO0FBR0osTUFBTWUsY0FBYyxDQUFDZjtRQUNBQTtJQUFqQixNQUFNRyxXQUFXSCxrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPRyxRQUFRLGNBQWZILHNDQUFBQSxnQkFBaUJnQixJQUFJO0lBQ3RDLE9BQU9iO0FBQ1g7QUFFQSxNQUFNYyxNQUFNLGVBQU9DO1FBQWF2QiwwRUFBNkIsQ0FBQztJQUMxRCxJQUFJO1FBQ0EsTUFBTVEsV0FBd0IsTUFBTWxCLGNBQWNnQyxHQUFHLENBQUNDLEtBQUt2QjtRQUMzRCxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9lLFlBQVlmO0lBQ3ZCO0FBQ0o7QUFFQSxNQUFNbUIsT0FBTyxlQUFPRCxLQUFhRjtRQUFXckIsMEVBQTZCLENBQUM7SUFDdEUsSUFBSTtRQUNBLE1BQU1RLFdBQXdCLE1BQU1sQixjQUFja0MsSUFBSSxDQUFDRCxLQUFLRixNQUFNckI7UUFDbEUsT0FBT1E7SUFDWCxFQUFFLE9BQU9ILE9BQU87UUFDWixPQUFPZSxZQUFZZjtJQUN2QjtBQUNKO0FBRUEsTUFBTW9CLE1BQU0sZUFBT0YsS0FBYUY7UUFBV3JCLDBFQUE2QixDQUFDO0lBQ3JFLElBQUk7UUFDQSxNQUFNUSxXQUF3QixNQUFNbEIsY0FBY21DLEdBQUcsQ0FBQ0YsS0FBS0YsTUFBTXJCO1FBQ2pFLE9BQU9RO0lBQ1gsRUFBRSxPQUFPSCxPQUFPO1FBQ1osT0FBT2UsWUFBWWY7SUFDdkI7QUFDSjtBQUVBLE1BQU1xQixNQUFNLGVBQU9IO1FBQWF2QiwwRUFBNkIsQ0FBQztJQUMxRCxJQUFJO1FBQ0EsTUFBTVEsV0FBd0IsTUFBTWxCLGNBQWNxQyxNQUFNLENBQUNKLEtBQUt2QjtRQUM5RCxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9lLFlBQVlmO0lBQ3ZCO0FBQ0o7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvYXhpb3NXcmFwcGVyLnRzPzEyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICdAL2NvbnRleHRzL2VudW1zJztcbmltcG9ydCB7IHJlc3BvbnNlVG9hc3QgfSBmcm9tICdAL2NvbnRleHRzL3VzZXItY29udGV4dCc7XG5jb25zdCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBwcm9jZXNzPy5lbnY/Lk5FWFRfUFVCTElDX0FQSV9VUkkgYXMgc3RyaW5nLFxuICAgIHRpbWVvdXQ6IDEwMDAwLCAvLyBSZXF1ZXN0IHRpbWVvdXRcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG59KTtcblxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgKGNvbmZpZzogYW55KTogYW55ID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tLWF1dGgtdG9rZW4nKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAuLi5jb25maWcuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIChlcnJvcjogQXhpb3NFcnJvcik6IFByb21pc2U8QXhpb3NFcnJvcj4gPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbik7XG5cbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiBBeGlvc1Jlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG4gICAgKGVycm9yOiBBeGlvc0Vycm9yKTogUHJvbWlzZTxBeGlvc0Vycm9yPiA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYoZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVG9hc3QudG9hc3Quc2V0VG9hc3QoeyBpc09wZW46IHRydWUsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLCB0eXBlOiBUb2FzdFR5cGUuRVJST1IgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBZb3UgY2FuIGFkZCBtb3JlIGN1c3RvbSBlcnJvciBoYW5kbGluZyBiYXNlZCBvbiBzdGF0dXMgY29kZXMgaGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuKTtcblxuY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IEF4aW9zRXJyb3IpOiBBUElSZXNwb25zZSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGEgYXMgQVBJUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0ID0gYXN5bmMgKHVybDogc3RyaW5nLCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBUElSZXNwb25zZT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBUElSZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KHVybCwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvciBhcyBBeGlvc0Vycm9yKTtcbiAgICB9XG59O1xuXG5jb25zdCBwb3N0ID0gYXN5bmMgKHVybDogc3RyaW5nLCBkYXRhOiBhbnksIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge30pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvciBhcyBBeGlvc0Vycm9yKTtcbiAgICB9XG59O1xuXG5jb25zdCBwdXQgPSBhc3luYyAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QVBJUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnB1dCh1cmwsIGRhdGEsIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXJyb3IoZXJyb3IgYXMgQXhpb3NFcnJvcik7XG4gICAgfVxufTtcblxuY29uc3QgZGVsID0gYXN5bmMgKHVybDogc3RyaW5nLCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBUElSZXNwb25zZT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBUElSZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZGVsZXRlKHVybCwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yIGFzIEF4aW9zRXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdldCwgcG9zdCwgcHV0LCBkZWwgfTtcbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiYXhpb3MiLCJUb2FzdFR5cGUiLCJyZXNwb25zZVRvYXN0IiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJJIiwidGltZW91dCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0b2FzdCIsInNldFRvYXN0IiwiaXNPcGVuIiwibWVzc2FnZSIsInR5cGUiLCJFUlJPUiIsImhhbmRsZUVycm9yIiwiZGF0YSIsImdldCIsInVybCIsInBvc3QiLCJwdXQiLCJkZWwiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/axiosWrapper.ts\n"));

/***/ })

});