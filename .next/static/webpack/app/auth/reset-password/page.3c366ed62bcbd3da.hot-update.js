"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/reset-password/page",{

/***/ "(app-pages-browser)/./src/lib/logger.ts":
/*!***************************!*\
  !*** ./src/lib/logger.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogLevel: function() { return /* binding */ LogLevel; },\n/* harmony export */   Logger: function() { return /* binding */ Logger; },\n/* harmony export */   createLogger: function() { return /* binding */ createLogger; }\n/* harmony export */ });\n/* eslint-disable no-console -- Allow */ // NOTE: A tracking system such as Sentry should replace the console\nconst LogLevel = {\n    NONE: \"NONE\",\n    ERROR: \"ERROR\",\n    WARN: \"WARN\",\n    DEBUG: \"DEBUG\",\n    ALL: \"ALL\"\n};\nconst LogLevelNumber = {\n    NONE: 0,\n    ERROR: 1,\n    WARN: 2,\n    DEBUG: 3,\n    ALL: 4\n};\nclass Logger {\n    canWrite(level) {\n        return this.levelNumber >= LogLevelNumber[level];\n    }\n    write(level) {\n        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n            args[_key - 1] = arguments[_key];\n        }\n        let prefix = this.prefix;\n        if (this.showLevel) {\n            prefix = \"- \".concat(level, \" \").concat(prefix);\n        }\n        if (level === LogLevel.ERROR) {\n            console.error(prefix, ...args);\n        } else {\n            console.log(prefix, ...args);\n        }\n    }\n    constructor({ prefix = \"\", level = LogLevel.ALL, showLevel = true }){\n        var _this = this;\n        this.debug = function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            if (_this.canWrite(LogLevel.DEBUG)) {\n                _this.write(LogLevel.DEBUG, ...args);\n            }\n        };\n        this.warn = function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            if (_this.canWrite(LogLevel.WARN)) {\n                _this.write(LogLevel.WARN, ...args);\n            }\n        };\n        this.error = function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            if (_this.canWrite(LogLevel.ERROR)) {\n                _this.write(LogLevel.ERROR, ...args);\n            }\n        };\n        this.prefix = prefix;\n        this.level = level;\n        this.levelNumber = LogLevelNumber[this.level];\n        this.showLevel = showLevel;\n    }\n}\n// This can be extended to create context specific logger (Server Action, Router Handler, etc.)\n// to add context information (IP, User-Agent, timestamp, etc.)\nfunction createLogger() {\n    let { prefix, level } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    return new Logger({\n        prefix,\n        level\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbG9nZ2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFzQyxHQUV0QyxvRUFBb0U7QUFFN0QsTUFBTUEsV0FBVztJQUFFQyxNQUFNO0lBQVFDLE9BQU87SUFBU0MsTUFBTTtJQUFRQyxPQUFPO0lBQVNDLEtBQUs7QUFBTSxFQUFXO0FBRTVHLE1BQU1DLGlCQUFpQjtJQUFFTCxNQUFNO0lBQUdDLE9BQU87SUFBR0MsTUFBTTtJQUFHQyxPQUFPO0lBQUdDLEtBQUs7QUFBRTtBQVEvRCxNQUFNRTtJQWdDSEMsU0FBU0MsS0FBNEIsRUFBVztRQUN0RCxPQUFPLElBQUksQ0FBQ0MsV0FBVyxJQUFJSixjQUFjLENBQUNHLE1BQU07SUFDbEQ7SUFFUUUsTUFBTUYsS0FBNEIsRUFBNEI7UUFBMUI7WUFBR0csS0FBSCwyQkFBa0I7O1FBQzVELElBQUlDLFNBQVMsSUFBSSxDQUFDQSxNQUFNO1FBRXhCLElBQUksSUFBSSxDQUFDQyxTQUFTLEVBQUU7WUFDbEJELFNBQVMsS0FBY0EsT0FBVEosT0FBTSxLQUFVLE9BQVBJO1FBQ3pCO1FBRUEsSUFBSUosVUFBVVQsU0FBU0UsS0FBSyxFQUFFO1lBQzVCYSxRQUFRQyxLQUFLLENBQUNILFdBQVdEO1FBQzNCLE9BQU87WUFDTEcsUUFBUUUsR0FBRyxDQUFDSixXQUFXRDtRQUN6QjtJQUNGO0lBekNBTSxZQUFZLEVBQUVMLFNBQVMsRUFBRSxFQUFFSixRQUFRVCxTQUFTSyxHQUFHLEVBQUVTLFlBQVksSUFBSSxFQUFpQixDQUFFOzthQU9wRkssUUFBUTs2Q0FBSVA7Z0JBQUFBOztZQUNWLElBQUksTUFBS0osUUFBUSxDQUFDUixTQUFTSSxLQUFLLEdBQUc7Z0JBQ2pDLE1BQUtPLEtBQUssQ0FBQ1gsU0FBU0ksS0FBSyxLQUFLUTtZQUNoQztRQUNGO2FBRUFRLE9BQU87NkNBQUlSO2dCQUFBQTs7WUFDVCxJQUFJLE1BQUtKLFFBQVEsQ0FBQ1IsU0FBU0csSUFBSSxHQUFHO2dCQUNoQyxNQUFLUSxLQUFLLENBQUNYLFNBQVNHLElBQUksS0FBS1M7WUFDL0I7UUFDRjthQUVBSSxRQUFROzZDQUFJSjtnQkFBQUE7O1lBQ1YsSUFBSSxNQUFLSixRQUFRLENBQUNSLFNBQVNFLEtBQUssR0FBRztnQkFDakMsTUFBS1MsS0FBSyxDQUFDWCxTQUFTRSxLQUFLLEtBQUtVO1lBQ2hDO1FBQ0Y7UUF0QkUsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdKLGNBQWMsQ0FBQyxJQUFJLENBQUNHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUNLLFNBQVMsR0FBR0E7SUFDbkI7QUFxQ0Y7QUFFQSwrRkFBK0Y7QUFDL0YsK0RBQStEO0FBRXhELFNBQVNPO1FBQWEsRUFBRVIsTUFBTSxFQUFFSixLQUFLLEVBQWlCLEdBQWhDLGlFQUFtQyxDQUFDO0lBQy9ELE9BQU8sSUFBSUYsT0FBTztRQUFFTTtRQUFRSjtJQUFNO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvbG9nZ2VyLnRzP2I0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAtLSBBbGxvdyAqL1xuXG4vLyBOT1RFOiBBIHRyYWNraW5nIHN5c3RlbSBzdWNoIGFzIFNlbnRyeSBzaG91bGQgcmVwbGFjZSB0aGUgY29uc29sZVxuXG5leHBvcnQgY29uc3QgTG9nTGV2ZWwgPSB7IE5PTkU6ICdOT05FJywgRVJST1I6ICdFUlJPUicsIFdBUk46ICdXQVJOJywgREVCVUc6ICdERUJVRycsIEFMTDogJ0FMTCcgfSBhcyBjb25zdDtcblxuY29uc3QgTG9nTGV2ZWxOdW1iZXIgPSB7IE5PTkU6IDAsIEVSUk9SOiAxLCBXQVJOOiAyLCBERUJVRzogMywgQUxMOiA0IH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VyT3B0aW9ucyB7XG4gIHByZWZpeD86IHN0cmluZztcbiAgbGV2ZWw/OiBrZXlvZiB0eXBlb2YgTG9nTGV2ZWw7XG4gIHNob3dMZXZlbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBwcm90ZWN0ZWQgcHJlZml4OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBsZXZlbDoga2V5b2YgdHlwZW9mIExvZ0xldmVsO1xuICBwcm90ZWN0ZWQgc2hvd0xldmVsOiBib29sZWFuO1xuXG4gIHByaXZhdGUgbGV2ZWxOdW1iZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7IHByZWZpeCA9ICcnLCBsZXZlbCA9IExvZ0xldmVsLkFMTCwgc2hvd0xldmVsID0gdHJ1ZSB9OiBMb2dnZXJPcHRpb25zKSB7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMubGV2ZWxOdW1iZXIgPSBMb2dMZXZlbE51bWJlclt0aGlzLmxldmVsXTtcbiAgICB0aGlzLnNob3dMZXZlbCA9IHNob3dMZXZlbDtcbiAgfVxuXG4gIGRlYnVnID0gKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmNhbldyaXRlKExvZ0xldmVsLkRFQlVHKSkge1xuICAgICAgdGhpcy53cml0ZShMb2dMZXZlbC5ERUJVRywgLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHdhcm4gPSAoLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuY2FuV3JpdGUoTG9nTGV2ZWwuV0FSTikpIHtcbiAgICAgIHRoaXMud3JpdGUoTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIGVycm9yID0gKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmNhbldyaXRlKExvZ0xldmVsLkVSUk9SKSkge1xuICAgICAgdGhpcy53cml0ZShMb2dMZXZlbC5FUlJPUiwgLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY2FuV3JpdGUobGV2ZWw6IGtleW9mIHR5cGVvZiBMb2dMZXZlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxldmVsTnVtYmVyID49IExvZ0xldmVsTnVtYmVyW2xldmVsXTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGUobGV2ZWw6IGtleW9mIHR5cGVvZiBMb2dMZXZlbCwgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbGV0IHByZWZpeCA9IHRoaXMucHJlZml4O1xuXG4gICAgaWYgKHRoaXMuc2hvd0xldmVsKSB7XG4gICAgICBwcmVmaXggPSBgLSAke2xldmVsfSAke3ByZWZpeH1gO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gTG9nTGV2ZWwuRVJST1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocHJlZml4LCAuLi5hcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2cocHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBjYW4gYmUgZXh0ZW5kZWQgdG8gY3JlYXRlIGNvbnRleHQgc3BlY2lmaWMgbG9nZ2VyIChTZXJ2ZXIgQWN0aW9uLCBSb3V0ZXIgSGFuZGxlciwgZXRjLilcbi8vIHRvIGFkZCBjb250ZXh0IGluZm9ybWF0aW9uIChJUCwgVXNlci1BZ2VudCwgdGltZXN0YW1wLCBldGMuKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKHsgcHJlZml4LCBsZXZlbCB9OiBMb2dnZXJPcHRpb25zID0ge30pOiBMb2dnZXIge1xuICByZXR1cm4gbmV3IExvZ2dlcih7IHByZWZpeCwgbGV2ZWwgfSk7XG59XG4iXSwibmFtZXMiOlsiTG9nTGV2ZWwiLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiREVCVUciLCJBTEwiLCJMb2dMZXZlbE51bWJlciIsIkxvZ2dlciIsImNhbldyaXRlIiwibGV2ZWwiLCJsZXZlbE51bWJlciIsIndyaXRlIiwiYXJncyIsInByZWZpeCIsInNob3dMZXZlbCIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImNvbnN0cnVjdG9yIiwiZGVidWciLCJ3YXJuIiwiY3JlYXRlTG9nZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/logger.ts\n"));

/***/ })

});