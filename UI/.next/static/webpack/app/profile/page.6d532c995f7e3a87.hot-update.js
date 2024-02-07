"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/components/camera.tsx":
/*!***********************************************!*\
  !*** ./src/app/profile/components/camera.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CameraComponent = (param)=>{\n    let { onImageCaptured, startCapture, stopCapture } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intervalId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (startCapture && !intervalId.current) {\n            startCapturing();\n        } else if (!startCapture && intervalId.current) {\n            stopCapturing();\n        }\n        return ()=>{\n            if (intervalId.current) {\n                clearInterval(intervalId.current);\n            }\n        };\n    }, [\n        startCapture,\n        stopCapture\n    ]);\n    const startCapturing = ()=>{\n        intervalId.current = setInterval(()=>{\n            capturePhoto();\n        }, 3000);\n    };\n    const stopCapturing = ()=>{\n        if (intervalId.current) {\n            clearInterval(intervalId.current);\n            intervalId.current = null;\n        }\n        stopCapture();\n    };\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = videoRef.current.videoWidth;\n        canvas.height = videoRef.current.videoHeight;\n        const ctx = canvas.getContext(\"2d\");\n        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);\n        canvas.toBlob((blob)=>{\n            if (blob) {\n                onImageCaptured(blob);\n            }\n        }, \"image/jpeg\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        ref: videoRef,\n        autoPlay: true,\n        playsInline: true\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\components\\\\camera.tsx\",\n        lineNumber: 55,\n        columnNumber: 10\n    }, undefined);\n};\n_s(CameraComponent, \"QYbBxu4eNcvklvwwQ48tAEmD6jk=\");\n_c = CameraComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraComponent);\nvar _c;\n$RefreshReg$(_c, \"CameraComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2NhbWVyYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBUTNELE1BQU1HLGtCQUF5QztRQUFDLEVBQUVDLGVBQWUsRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUU7O0lBQzVGLE1BQU1DLFdBQVdMLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNTSxhQUFhTiw2Q0FBTUEsQ0FBd0I7SUFFakRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUksZ0JBQWdCLENBQUNHLFdBQVdDLE9BQU8sRUFBRTtZQUN2Q0M7UUFDRixPQUFPLElBQUksQ0FBQ0wsZ0JBQWdCRyxXQUFXQyxPQUFPLEVBQUU7WUFDOUNFO1FBQ0Y7UUFFQSxPQUFPO1lBQ0wsSUFBSUgsV0FBV0MsT0FBTyxFQUFFO2dCQUN0QkcsY0FBY0osV0FBV0MsT0FBTztZQUNsQztRQUNGO0lBQ0YsR0FBRztRQUFDSjtRQUFjQztLQUFZO0lBRTlCLE1BQU1JLGlCQUFpQjtRQUNyQkYsV0FBV0MsT0FBTyxHQUFHSSxZQUFZO1lBQy9CQztRQUNGLEdBQUk7SUFDTjtJQUVBLE1BQU1ILGdCQUFnQjtRQUNwQixJQUFJSCxXQUFXQyxPQUFPLEVBQUU7WUFDdEJHLGNBQWNKLFdBQVdDLE9BQU87WUFDaENELFdBQVdDLE9BQU8sR0FBRztRQUN2QjtRQUNBSDtJQUNGO0lBRUEsTUFBTVEsZUFBZTtRQUNuQixNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdENGLE9BQU9HLEtBQUssR0FBR1gsU0FBU0UsT0FBTyxDQUFFVSxVQUFVO1FBQzNDSixPQUFPSyxNQUFNLEdBQUdiLFNBQVNFLE9BQU8sQ0FBRVksV0FBVztRQUM3QyxNQUFNQyxNQUFNUCxPQUFPUSxVQUFVLENBQUM7UUFDOUJELGdCQUFBQSwwQkFBQUEsSUFBS0UsU0FBUyxDQUFDakIsU0FBU0UsT0FBTyxFQUFJLEdBQUksR0FBR00sT0FBT0csS0FBSyxFQUFFSCxPQUFPSyxNQUFNO1FBRXJFTCxPQUFPVSxNQUFNLENBQUMsQ0FBQ0M7WUFDYixJQUFJQSxNQUFNO2dCQUNSdEIsZ0JBQWdCc0I7WUFDbEI7UUFDRixHQUFHO0lBQ0w7SUFFQSxxQkFBTyw4REFBQ0M7UUFBTUMsS0FBS3JCO1FBQVVzQixRQUFRO1FBQUVDLFdBQVc7Ozs7OztBQUNwRDtHQS9DTTNCO0tBQUFBO0FBaUROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2NhbWVyYS50c3g/NGJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIENhbWVyYVByb3BzIHtcclxuICBvbkltYWdlQ2FwdHVyZWQ6IChibG9iOiBCbG9iKSA9PiB2b2lkO1xyXG4gIHN0YXJ0Q2FwdHVyZTogYm9vbGVhbjtcclxuICBzdG9wQ2FwdHVyZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ2FtZXJhQ29tcG9uZW50OiBSZWFjdC5GQzxDYW1lcmFQcm9wcz4gPSAoeyBvbkltYWdlQ2FwdHVyZWQsIHN0YXJ0Q2FwdHVyZSwgc3RvcENhcHR1cmUgfSkgPT4ge1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGludGVydmFsSWQgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGFydENhcHR1cmUgJiYgIWludGVydmFsSWQuY3VycmVudCkge1xyXG4gICAgICBzdGFydENhcHR1cmluZygpO1xyXG4gICAgfSBlbHNlIGlmICghc3RhcnRDYXB0dXJlICYmIGludGVydmFsSWQuY3VycmVudCkge1xyXG4gICAgICBzdG9wQ2FwdHVyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGludGVydmFsSWQuY3VycmVudCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZC5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbc3RhcnRDYXB0dXJlLCBzdG9wQ2FwdHVyZV0pO1xyXG5cclxuICBjb25zdCBzdGFydENhcHR1cmluZyA9ICgpID0+IHtcclxuICAgIGludGVydmFsSWQuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY2FwdHVyZVBob3RvKCk7XHJcbiAgICB9LCAgMzAwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcENhcHR1cmluZyA9ICgpID0+IHtcclxuICAgIGlmIChpbnRlcnZhbElkLmN1cnJlbnQpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkLmN1cnJlbnQpO1xyXG4gICAgICBpbnRlcnZhbElkLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc3RvcENhcHR1cmUoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXB0dXJlUGhvdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvUmVmLmN1cnJlbnQhLnZpZGVvV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW9SZWYuY3VycmVudCEudmlkZW9IZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGN0eD8uZHJhd0ltYWdlKHZpZGVvUmVmLmN1cnJlbnQhLCAgMCwgIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xyXG4gICAgICBpZiAoYmxvYikge1xyXG4gICAgICAgIG9uSW1hZ2VDYXB0dXJlZChibG9iKTtcclxuICAgICAgfVxyXG4gICAgfSwgJ2ltYWdlL2pwZWcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPHZpZGVvIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5ICBwbGF5c0lubGluZSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbWVyYUNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2FtZXJhQ29tcG9uZW50Iiwib25JbWFnZUNhcHR1cmVkIiwic3RhcnRDYXB0dXJlIiwic3RvcENhcHR1cmUiLCJ2aWRlb1JlZiIsImludGVydmFsSWQiLCJjdXJyZW50Iiwic3RhcnRDYXB0dXJpbmciLCJzdG9wQ2FwdHVyaW5nIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2FwdHVyZVBob3RvIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9CbG9iIiwiYmxvYiIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/components/camera.tsx\n"));

/***/ })

});