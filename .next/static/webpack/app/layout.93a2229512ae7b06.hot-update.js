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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   del: function() { return /* binding */ del; },\n/* harmony export */   get: function() { return /* binding */ get; },\n/* harmony export */   post: function() { return /* binding */ post; },\n/* harmony export */   put: function() { return /* binding */ put; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nvar _process_env, _process;\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: (_process = process) === null || process === void 0 ? void 0 : (_process_env = _process.env) === null || _process_env === void 0 ? void 0 : _process_env.NEXT_PUBLIC_API_URI,\n    timeout: 10000,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\naxiosInstance.interceptors.request.use((config)=>{\n    const token = localStorage.getItem(\"custom-auth-token\");\n    if (token) {\n        config.headers = {\n            ...config.headers,\n            Authorization: token\n        };\n    }\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\naxiosInstance.interceptors.response.use((response)=>{\n    return response;\n}, (error)=>{\n    if (error.response) {\n        var _error_response;\n        if (error.response.status === 401) {\n            localStorage.clear();\n            window.location.href = \"/\";\n        } else if ((error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 500) {\n        // You can add more custom error handling based on status codes here\n        }\n    // You can add more custom error handling based on status codes here\n    }\n    return Promise.reject(error);\n});\nconst handleError = (error)=>{\n    var _error_response;\n    const response = error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;\n    return response;\n};\nconst get = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.get(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst post = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.post(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst put = async function(url, data) {\n    let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    try {\n        const response = await axiosInstance.put(url, data, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\nconst del = async function(url) {\n    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await axiosInstance.delete(url, config);\n        return response;\n    } catch (error) {\n        return handleError(error);\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL2F4aW9zV3JhcHBlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJYUEsY0FBQUE7QUFKK0U7QUFHNUYsTUFBTUUsZ0JBQStCRCw2Q0FBS0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQzlDQyxPQUFPLEdBQUVKLFdBQUFBLHFCQUFBQSxPQUFBQSx3QkFBQUEsZUFBQUEsU0FBU0ssR0FBRyxjQUFaTCxtQ0FBQUEsYUFBY00sbUJBQW1CO0lBQzFDQyxTQUFTO0lBQ1RDLFNBQVM7UUFDTCxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBTixjQUFjTyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNsQyxDQUFDQztJQUNHLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJRixPQUFPO1FBQ1BELE9BQU9KLE9BQU8sR0FBRztZQUNiLEdBQUdJLE9BQU9KLE9BQU87WUFDakJRLGVBQWVIO1FBQ25CO0lBQ0o7SUFDQSxPQUFPRDtBQUNYLEdBQ0EsQ0FBQ0s7SUFDRyxPQUFPQyxRQUFRQyxNQUFNLENBQUNGO0FBQzFCO0FBR0pmLGNBQWNPLFlBQVksQ0FBQ1csUUFBUSxDQUFDVCxHQUFHLENBQ25DLENBQUNTO0lBQ0csT0FBT0E7QUFDWCxHQUNBLENBQUNIO0lBQ0csSUFBSUEsTUFBTUcsUUFBUSxFQUFFO1lBSU5IO1FBSFYsSUFBSUEsTUFBTUcsUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSztZQUMvQlAsYUFBYVEsS0FBSztZQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFDM0IsT0FBTyxJQUFHUixDQUFBQSxrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPRyxRQUFRLGNBQWZILHNDQUFBQSxnQkFBaUJJLE1BQU0sTUFBSyxLQUFLO1FBQ3ZDLG9FQUFvRTtRQUN4RTtJQUNBLG9FQUFvRTtJQUN4RTtJQUNBLE9BQU9ILFFBQVFDLE1BQU0sQ0FBQ0Y7QUFDMUI7QUFHSixNQUFNUyxjQUFjLENBQUNUO1FBQ0FBO0lBQWpCLE1BQU1HLFdBQVdILGtCQUFBQSw2QkFBQUEsa0JBQUFBLE1BQU9HLFFBQVEsY0FBZkgsc0NBQUFBLGdCQUFpQlUsSUFBSTtJQUN0QyxPQUFPUDtBQUNYO0FBRUEsTUFBTVEsTUFBTSxlQUFPQztRQUFhakIsMEVBQTZCLENBQUM7SUFDMUQsSUFBSTtRQUNBLE1BQU1RLFdBQXdCLE1BQU1sQixjQUFjMEIsR0FBRyxDQUFDQyxLQUFLakI7UUFDM0QsT0FBT1E7SUFDWCxFQUFFLE9BQU9ILE9BQU87UUFDWixPQUFPUyxZQUFZVDtJQUN2QjtBQUNKO0FBRUEsTUFBTWEsT0FBTyxlQUFPRCxLQUFhRjtRQUFXZiwwRUFBNkIsQ0FBQztJQUN0RSxJQUFJO1FBQ0EsTUFBTVEsV0FBd0IsTUFBTWxCLGNBQWM0QixJQUFJLENBQUNELEtBQUtGLE1BQU1mO1FBQ2xFLE9BQU9RO0lBQ1gsRUFBRSxPQUFPSCxPQUFPO1FBQ1osT0FBT1MsWUFBWVQ7SUFDdkI7QUFDSjtBQUVBLE1BQU1jLE1BQU0sZUFBT0YsS0FBYUY7UUFBV2YsMEVBQTZCLENBQUM7SUFDckUsSUFBSTtRQUNBLE1BQU1RLFdBQXdCLE1BQU1sQixjQUFjNkIsR0FBRyxDQUFDRixLQUFLRixNQUFNZjtRQUNqRSxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9TLFlBQVlUO0lBQ3ZCO0FBQ0o7QUFFQSxNQUFNZSxNQUFNLGVBQU9IO1FBQWFqQiwwRUFBNkIsQ0FBQztJQUMxRCxJQUFJO1FBQ0EsTUFBTVEsV0FBd0IsTUFBTWxCLGNBQWMrQixNQUFNLENBQUNKLEtBQUtqQjtRQUM5RCxPQUFPUTtJQUNYLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9TLFlBQVlUO0lBQ3ZCO0FBQ0o7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2UvYXhpb3NXcmFwcGVyLnRzPzEyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfQVBJX1VSSSBhcyBzdHJpbmcsXG4gICAgdGltZW91dDogMTAwMDAsIC8vIFJlcXVlc3QgdGltZW91dFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbn0pO1xuXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgICAoY29uZmlnOiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXN0b20tYXV0aC10b2tlbicpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH0sXG4gICAgKGVycm9yOiBBeGlvc0Vycm9yKTogUHJvbWlzZTxBeGlvc0Vycm9yPiA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuKTtcblxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIChyZXNwb25zZTogQXhpb3NSZXNwb25zZSk6IEF4aW9zUmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbiAgICAoZXJyb3I6IEF4aW9zRXJyb3IpOiBQcm9taXNlPEF4aW9zRXJyb3I+ID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgIH0gZWxzZSBpZihlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhZGQgbW9yZSBjdXN0b20gZXJyb3IgaGFuZGxpbmcgYmFzZWQgb24gc3RhdHVzIGNvZGVzIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gYWRkIG1vcmUgY3VzdG9tIGVycm9yIGhhbmRsaW5nIGJhc2VkIG9uIHN0YXR1cyBjb2RlcyBoZXJlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4pO1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogQXhpb3NFcnJvcik6IEFQSVJlc3BvbnNlID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGVycm9yPy5yZXNwb25zZT8uZGF0YSBhcyBBUElSZXNwb25zZTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXQgPSBhc3luYyAodXJsOiBzdHJpbmcsIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge30pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQodXJsLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yIGFzIEF4aW9zRXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IHBvc3QgPSBhc3luYyAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QVBJUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yIGFzIEF4aW9zRXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IHB1dCA9IGFzeW5jICh1cmw6IHN0cmluZywgZGF0YTogYW55LCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBUElSZXNwb25zZT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBUElSZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucHV0KHVybCwgZGF0YSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvciBhcyBBeGlvc0Vycm9yKTtcbiAgICB9XG59O1xuXG5jb25zdCBkZWwgPSBhc3luYyAodXJsOiBzdHJpbmcsIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge30pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5kZWxldGUodXJsLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXJyb3IoZXJyb3IgYXMgQXhpb3NFcnJvcik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2V0LCBwb3N0LCBwdXQsIGRlbCB9O1xuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJheGlvcyIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSSSIsInRpbWVvdXQiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsInN0YXR1cyIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlRXJyb3IiLCJkYXRhIiwiZ2V0IiwidXJsIiwicG9zdCIsInB1dCIsImRlbCIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/axiosWrapper.ts\n"));

/***/ })

});