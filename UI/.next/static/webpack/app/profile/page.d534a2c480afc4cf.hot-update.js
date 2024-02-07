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

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n                setPlayers(response.data);\n                console.log(\"Player data fetched\", response.data);\n            } catch (error) {\n                console.error(\"Error fetching player data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addPlayer = async ()=>{\n        let newPlayers;\n        if (editIndex >= 0) {\n            newPlayers = [\n                ...players\n            ];\n            newPlayers[editIndex] = playerData;\n            setPlayers(newPlayers);\n            setEditIndex(-1);\n        } else {\n            newPlayers = [\n                ...players,\n                playerData\n            ];\n            setPlayers(newPlayers);\n        }\n        setPlayerData({\n            name: \"\",\n            image: \"\"\n        });\n        setShowPopup(false);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n        } catch (error) {\n            console.error(\"Error saving player data\", error);\n        }\n    };\n    const removePlayer = (index)=>{\n        setPlayers(players.filter((_, i)=>i !== index));\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    className: \"rounded-lg shadow-lg w-full border-2 border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(index),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: playerData.name,\n                                    onChange: (e)=>setPlayerData({\n                                            ...playerData,\n                                            name: e.target.value\n                                        }),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Image URL\",\n                                    value: playerData.image,\n                                    onChange: (e)=>setPlayerData({\n                                            ...playerData,\n                                            image: e.target.value\n                                        }),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: addPlayer,\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"0T6gryJDi7BUqOOflVKdFqE+tkM=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUMxQjtBQUVLO0FBRWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsNkNBQUtBLENBQUNvQixHQUFHLENBQUM7Z0JBQ2pDVixXQUFXUyxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkosU0FBU0UsSUFBSTtZQUNsRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNTyxZQUFZO1FBQ2hCLElBQUlDO1FBQ0osSUFBSWYsYUFBYSxHQUFHO1lBQ2xCZSxhQUFhO21CQUFJakI7YUFBUTtZQUN6QmlCLFVBQVUsQ0FBQ2YsVUFBVSxHQUFHTjtZQUN4QkssV0FBV2dCO1lBQ1hkLGFBQWEsQ0FBQztRQUNoQixPQUFPO1lBQ0xjLGFBQWE7bUJBQUlqQjtnQkFB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QUFhOzhDQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQTlKd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKHsgbmFtZTogXCJcIiwgaW1hZ2U6IFwiXCIgfSk7XHJcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0SW5kZXgsIHNldEVkaXRJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW2RldGVjdGVkUGxheWVySW5kaWNlcywgc2V0RGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNQbGF5ZXJEZXRlY3RlZCwgc2V0UGxheWVyRGV0ZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICAgICAgICBzZXRQbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGRhdGEgZmV0Y2hlZFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGFkZFBsYXllciA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBuZXdQbGF5ZXJzO1xyXG4gICAgaWYgKGVkaXRJbmRleCA+PSAwKSB7XHJcbiAgICAgIG5ld1BsYXllcnMgPSBbLi4ucGxheWVyc107XHJcbiAgICAgIG5ld1BsYXllcnNbZWRpdEluZGV4XSA9IHBsYXllckRhdGE7XHJcbiAgICAgIHNldFBsYXllcnMobmV3UGxheWVycyk7XHJcbiAgICAgIHNldEVkaXRJbmRleCgtMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdQbGF5ZXJzID0gWy4uLnBsYXllcnMsIHBsYXllckRhdGFdO1xyXG4gICAgICBzZXRQbGF5ZXJzKG5ld1BsYXllcnMpO1xyXG4gICAgfVxyXG4gICAgc2V0UGxheWVyRGF0YSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9zYXZlUGxheWVyRGF0YVwiLCBwbGF5ZXJEYXRhKTsgLy8gU2VuZCBvbmx5IHRoZSBuZXcgcGxheWVyIGRhdGEgdG8gdGhlIHNlcnZlclxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBwbGF5ZXIgZGF0YVwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHJlbW92ZVBsYXllciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRQbGF5ZXJzKHBsYXllcnMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBsYXllckRldGVjdGVkID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldERldGVjdGVkUGxheWVySW5kaWNlcygocHJldkluZGljZXMpID0+IHtcclxuICAgICAgaWYgKHByZXZJbmRpY2VzLmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2SW5kaWNlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWy4uLnByZXZJbmRpY2VzLCBpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1pbi1oLXNjcmVlbiBweS0yIGJnLWdyYXktMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOnctMi8zIG0tMlwiPlxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgcmVmPXt2aWRlb1JlZn1cclxuICAgICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDp3LTEvMyBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgbXQtNCBtZDptdC0wXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrLTYwMFwiPlBsYXllciBEYXRhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgb3ZlcmZsb3ctYXV0byBoLTY0IHctMy80XCI+XHJcbiAgICAgICAgICB7cGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIG1iLTIgcC0yIHJvdW5kZWQtbGcgJHtcclxuICAgICAgICAgICAgICAgIGRldGVjdGVkUGxheWVySW5kaWNlcy5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57aW5kZXggKyAxfS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3BsYXllci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHctNiBoLTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVBsYXllcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdy02IGgtNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGxheWVyRGV0ZWN0ZWQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDinJNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiByb3VuZGVkIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQbGF5ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5BZGQgUGxheWVyPC9oMj5cclxuICAgICAgICAgICAgICB7cGxheWVyRGF0YS5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0UGxheWVyRGF0YSh7IC4uLnBsYXllckRhdGEsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtYi0yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGF5ZXIgSW1hZ2UgVVJMXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRQbGF5ZXJEYXRhKHsgLi4ucGxheWVyRGF0YSwgaW1hZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtYi00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRQbGF5ZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIHJvdW5kZWQgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF4aW9zIiwiSW1hZ2UiLCJVc2VyUHJvZmlsZSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwibmFtZSIsImltYWdlIiwicGxheWVycyIsInNldFBsYXllcnMiLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJkZXRlY3RlZFBsYXllckluZGljZXMiLCJzZXREZXRlY3RlZFBsYXllckluZGljZXMiLCJpc1BsYXllckRldGVjdGVkIiwic2V0UGxheWVyRGV0ZWN0ZWQiLCJ2aWRlb1JlZiIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFkZFBsYXllciIsIm5ld1BsYXllcnMiLCJwb3N0IiwicmVtb3ZlUGxheWVyIiwiaW5kZXgiLCJmaWx0ZXIiLCJfIiwiaSIsInRvZ2dsZVBsYXllckRldGVjdGVkIiwicHJldkluZGljZXMiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJoMSIsIm1hcCIsInBsYXllciIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});