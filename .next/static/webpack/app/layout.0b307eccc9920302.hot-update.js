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

/***/ "(app-pages-browser)/./src/service/axiosWrapper.ts":
/*!*************************************!*\
  !*** ./src/service/axiosWrapper.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   del: function() { return /* binding */ del; },\n/* harmony export */   get: function() { return /* binding */ get; },\n/* harmony export */   post: function() { return /* binding */ post; },\n/* harmony export */   put: function() { return /* binding */ put; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nvar _process_env, _process;\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: (_process = process) === null || process === void 0 ? void 0 : (_process_env = _process.env) === null || _process_env === void 0 ? void 0 : _process_env.NEXT_PUBLIC_API_URI,\n    timeout: 10000,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Request interceptor to add token to headers\naxiosInstance.interceptors.request.use((config)=>{\n    const token = localStorage.getItem(\"custom-auth-token\");\n    if (token) {\n        config.headers = {\n            ...config.headers,\n            Authorization: token\n        };\n    }\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\n// Response interceptor to handle responses and errors\naxiosInstance.interceptors.response.use((response)=>{\n    return response;\n}, (error)=>{\n    if (error.response) {\n        if (error.response.status === 401) {\n            localStorage.clear();\n        // window.location.href = '/login';\n        }\n    // You can add more custom error handling based on status codes here\n    }\n    return Promise.reject(error);\n});\nconst handleError = (error)=>{\n    var _error_response;\n    const response = error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;\n    return response;\n};\nconst get = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.get(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst post = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.post(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst put = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.put(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst del = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.delete(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F4aW9zV3JhcHBlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFRYUEsY0FBQUE7QUFSK0U7QUFPNUYsTUFBTUUsZ0JBQStCRCw2Q0FBS0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQzlDQyxPQUFPLEdBQUVKLFdBQUFBLHFCQUFBQSxPQUFBQSx3QkFBQUEsZUFBQUEsU0FBU0ssR0FBRyxjQUFaTCxtQ0FBQUEsYUFBY00sbUJBQW1CO0lBQzFDQyxTQUFTO0lBQ1RDLFNBQVM7UUFDTCxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBLDhDQUE4QztBQUM5Q04sY0FBY08sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDbEMsQ0FBQ0M7SUFDRyxNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7SUFDbkMsSUFBSUYsT0FBTztRQUNQRCxPQUFPSixPQUFPLEdBQUc7WUFDYixHQUFHSSxPQUFPSixPQUFPO1lBQ2pCUSxlQUFlSDtRQUNuQjtJQUNKO0lBQ0EsT0FBT0Q7QUFDWCxHQUNBLENBQUNLO0lBQ0csT0FBT0MsUUFBUUMsTUFBTSxDQUFDRjtBQUMxQjtBQUdKLHNEQUFzRDtBQUN0RGYsY0FBY08sWUFBWSxDQUFDVyxRQUFRLENBQUNULEdBQUcsQ0FDbkMsQ0FBQ1M7SUFDRyxPQUFPQTtBQUNYLEdBQ0EsQ0FBQ0g7SUFDRyxJQUFJQSxNQUFNRyxRQUFRLEVBQUU7UUFDaEIsSUFBSUgsTUFBTUcsUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSztZQUNqQ1AsYUFBYVEsS0FBSztRQUNoQixtQ0FBbUM7UUFDdkM7SUFDQSxvRUFBb0U7SUFDeEU7SUFDQSxPQUFPSixRQUFRQyxNQUFNLENBQUNGO0FBQzFCO0FBR0osTUFBTU0sY0FBYyxDQUFDTjtRQUNBQTtJQUFqQixNQUFNRyxXQUFXSCxrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPRyxRQUFRLGNBQWZILHNDQUFBQSxnQkFBaUJPLElBQUk7SUFDdEMsT0FBT0o7QUFDWDtBQUVBLE1BQU1LLE1BQU0sZUFBT0M7UUFBYWQsMEVBQTZCLENBQUM7SUFDMUQsSUFBSTtRQUNBLE1BQU1RLFdBQXdCLE1BQU1sQixjQUFjdUIsR0FBRyxDQUFDQyxLQUFLZDtRQUMzRCxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9NLFlBQVlOO0lBQ3ZCO0FBQ0o7QUFFQSxNQUFNVSxPQUFPLGVBQU1ELEtBQWFGO1FBQVdaLDBFQUE2QixDQUFDO0lBQ3JFLElBQUk7UUFDQSxNQUFNUSxXQUF3QixNQUFNbEIsY0FBY3lCLElBQUksQ0FBQ0QsS0FBS0YsTUFBTVo7UUFDbEUsT0FBT1E7SUFDWCxFQUFFLE9BQU9ILE9BQU87UUFDWixPQUFPTSxZQUFZTjtJQUN2QjtBQUNKO0FBRUEsTUFBTVcsTUFBTSxlQUFNRixLQUFhRjtRQUFXWiwwRUFBNkIsQ0FBQztJQUNwRSxJQUFJO1FBQ0EsTUFBTVEsV0FBd0IsTUFBTWxCLGNBQWMwQixHQUFHLENBQUNGLEtBQUtGLE1BQU1aO1FBQ2pFLE9BQU9RO0lBQ1gsRUFBRSxPQUFPSCxPQUFPO1FBQ1osT0FBT00sWUFBWU47SUFDdkI7QUFDSjtBQUVBLE1BQU1ZLE1BQU0sZUFBT0g7UUFBYWQsMEVBQTZCLENBQUM7SUFDMUQsSUFBSTtRQUNBLE1BQU1RLFdBQXdCLE1BQU1sQixjQUFjNEIsTUFBTSxDQUFDSixLQUFLZDtRQUM5RCxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9NLFlBQVlOO0lBQ3ZCO0FBQ0o7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvYXhpb3NXcmFwcGVyLnRzPzEyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cblxuXG5cblxuY29uc3QgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcz8uZW52Py5ORVhUX1BVQkxJQ19BUElfVVJJIGFzIHN0cmluZyxcbiAgICB0aW1lb3V0OiAxMDAwMCwgLy8gUmVxdWVzdCB0aW1lb3V0XG4gICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxufSk7XG5cbi8vIFJlcXVlc3QgaW50ZXJjZXB0b3IgdG8gYWRkIHRva2VuIHRvIGhlYWRlcnNcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgIChjb25maWc6IGFueSk6IGFueSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbS1hdXRoLXRva2VuJyk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSxcbiAgICAoZXJyb3I6IEF4aW9zRXJyb3IpOiBQcm9taXNlPEF4aW9zRXJyb3I+ID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4pO1xuXG4vLyBSZXNwb25zZSBpbnRlcmNlcHRvciB0byBoYW5kbGUgcmVzcG9uc2VzIGFuZCBlcnJvcnNcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiBBeGlvc1Jlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG4gICAgKGVycm9yOiBBeGlvc0Vycm9yKTogUHJvbWlzZTxBeGlvc0Vycm9yPiA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBZb3UgY2FuIGFkZCBtb3JlIGN1c3RvbSBlcnJvciBoYW5kbGluZyBiYXNlZCBvbiBzdGF0dXMgY29kZXMgaGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuKTtcblxuY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IEF4aW9zRXJyb3IpOiBBUElSZXNwb25zZSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGEgYXMgQVBJUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0ID0gYXN5bmMgKHVybDogc3RyaW5nLCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBUElSZXNwb25zZT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBUElSZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KHVybCwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvciBhcyBBeGlvc0Vycm9yKTtcbiAgICB9XG59O1xuXG5jb25zdCBwb3N0ID0gYXN5bmModXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QVBJUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yIGFzIEF4aW9zRXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IHB1dCA9IGFzeW5jKHVybDogc3RyaW5nLCBkYXRhOiBhbnksIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge30pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wdXQodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yIGFzIEF4aW9zRXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IGRlbCA9IGFzeW5jICh1cmw6IHN0cmluZywgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QVBJUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLmRlbGV0ZSh1cmwsIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvciBhcyBBeGlvc0Vycm9yKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnZXQsIHBvc3QsIHB1dCwgZGVsIH07XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsImF4aW9zIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJJIiwidGltZW91dCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY2xlYXIiLCJoYW5kbGVFcnJvciIsImRhdGEiLCJnZXQiLCJ1cmwiLCJwb3N0IiwicHV0IiwiZGVsIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/axiosWrapper.ts\n"));

/***/ })

});