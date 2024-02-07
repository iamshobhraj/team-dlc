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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n                setPlayers(response.data);\n                console.log(\"Player data fetched\", response.data);\n            } catch (error) {\n                console.error(\"Error fetching player data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addPlayer = async ()=>{\n        let newPlayers;\n        if (editIndex >= 0) {\n            newPlayers = [\n                ...players\n            ];\n            newPlayers[editIndex] = playerData;\n            setPlayers(newPlayers);\n            setEditIndex(-1);\n        } else {\n            newPlayers = [\n                ...players,\n                playerData\n            ];\n            setPlayers(newPlayers);\n        }\n        setPlayerData({\n            name: \"\",\n            image: \"\"\n        });\n        setShowPopup(false);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n        } catch (error) {\n            console.error(\"Error saving player data\", error);\n        }\n    };\n    const removePlayer = (index)=>{\n        setPlayers(players.filter((_, i)=>i !== index));\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    className: \"rounded-lg shadow-lg w-full border-2 border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(index),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: playerData.name,\n                                    onChange: (e)=>setPlayerData({\n                                            ...playerData,\n                                            name: e.target.value\n                                        }),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"photo\",\n                                    accept: \"image/*\",\n                                    onChange: (e)=>{\n                                        var _event_target_files;\n                                        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n                                        setPhoto(file || null);\n                                    },\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    type: \"submit\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"0T6gryJDi7BUqOOflVKdFqE+tkM=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUMxQjtBQUVLO0FBRWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsNkNBQUtBLENBQUNvQixHQUFHLENBQUM7Z0JBQ2pDVixXQUFXUyxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkosU0FBU0UsSUFBSTtZQUNsRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNTyxZQUFZO1FBQ2hCLElBQUlDO1FBQ0osSUFBSWYsYUFBYSxHQUFHO1lBQ2xCZSxhQUFhO21CQUFJakI7YUFBUTtZQUN6QmlCLFVBQVUsQ0FBQ2YsVUFBVSxHQUFHTjtZQUN4QkssV0FBV2dCO1lBQ1hkLGFBQWEsQ0FBQztRQUNoQixPQUFPO1lBQ0xjLGFBQWE7bUJBQUlqQjtnQkFB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VTtvQ0FDVlMsU0FBUyxJQUFNMUMsYUFBYTs4Q0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0FqS3dCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvcGFnZS50c3g/YzRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtkZXRlY3RlZFBsYXllckluZGljZXMsIHNldERldGVjdGVkUGxheWVySW5kaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzUGxheWVyRGV0ZWN0ZWQsIHNldFBsYXllckRldGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgICAgICAgc2V0UGxheWVycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBkYXRhIGZldGNoZWRcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXllciBkYXRhXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBhZGRQbGF5ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgbmV3UGxheWVycztcclxuICAgIGlmIChlZGl0SW5kZXggPj0gMCkge1xyXG4gICAgICBuZXdQbGF5ZXJzID0gWy4uLnBsYXllcnNdO1xyXG4gICAgICBuZXdQbGF5ZXJzW2VkaXRJbmRleF0gPSBwbGF5ZXJEYXRhO1xyXG4gICAgICBzZXRQbGF5ZXJzKG5ld1BsYXllcnMpO1xyXG4gICAgICBzZXRFZGl0SW5kZXgoLTEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UGxheWVycyA9IFsuLi5wbGF5ZXJzLCBwbGF5ZXJEYXRhXTtcclxuICAgICAgc2V0UGxheWVycyhuZXdQbGF5ZXJzKTtcclxuICAgIH1cclxuICAgIHNldFBsYXllckRhdGEoeyBuYW1lOiBcIlwiLCBpbWFnZTogXCJcIiB9KTtcclxuICAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvc2F2ZVBsYXllckRhdGFcIiwgcGxheWVyRGF0YSk7IC8vIFNlbmQgb25seSB0aGUgbmV3IHBsYXllciBkYXRhIHRvIHRoZSBzZXJ2ZXJcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCByZW1vdmVQbGF5ZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UGxheWVycyhwbGF5ZXJzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQbGF5ZXJEZXRlY3RlZCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXREZXRlY3RlZFBsYXllckluZGljZXMoKHByZXZJbmRpY2VzKSA9PiB7XHJcbiAgICAgIGlmIChwcmV2SW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpIHtcclxuICAgICAgICByZXR1cm4gcHJldkluZGljZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2SW5kaWNlcywgaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC1zY3JlZW4gcHktMiBiZy1ncmF5LTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDp3LTIvMyBtLTJcIj5cclxuICAgICAgICA8dmlkZW9cclxuICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XHJcbiAgICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2tcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy0xLzMgYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIG10LTQgbWQ6bXQtMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ibGFjay02MDBcIj5QbGF5ZXIgRGF0YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG92ZXJmbG93LWF1dG8gaC02NCB3LTMvNFwiPlxyXG4gICAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtYi0yIHAtMiByb3VuZGVkLWxnICR7XHJcbiAgICAgICAgICAgICAgICBkZXRlY3RlZFBsYXllckluZGljZXMuaW5jbHVkZXMoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e2luZGV4ICsgMX0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwbGF5ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LTYgaC02IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVQbGF5ZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHctNiBoLTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBsYXllckRldGVjdGVkKGluZGV4KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg4pyTXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgUGxheWVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+QWRkIFBsYXllcjwvaDI+XHJcbiAgICAgICAgICAgICAge3BsYXllckRhdGEuaW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cGxheWVyRGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwbGF5ZXJEYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsYXllciBOYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJEYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFBsYXllckRhdGEoeyAuLi5wbGF5ZXJEYXRhLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItMlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8oZmlsZSB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIHJvdW5kZWQgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF4aW9zIiwiSW1hZ2UiLCJVc2VyUHJvZmlsZSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwibmFtZSIsImltYWdlIiwicGxheWVycyIsInNldFBsYXllcnMiLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJkZXRlY3RlZFBsYXllckluZGljZXMiLCJzZXREZXRlY3RlZFBsYXllckluZGljZXMiLCJpc1BsYXllckRldGVjdGVkIiwic2V0UGxheWVyRGV0ZWN0ZWQiLCJ2aWRlb1JlZiIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFkZFBsYXllciIsIm5ld1BsYXllcnMiLCJwb3N0IiwicmVtb3ZlUGxheWVyIiwiaW5kZXgiLCJmaWx0ZXIiLCJfIiwiaSIsInRvZ2dsZVBsYXllckRldGVjdGVkIiwicHJldkluZGljZXMiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJoMSIsIm1hcCIsInBsYXllciIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJhY2NlcHQiLCJldmVudCIsImZpbGUiLCJmaWxlcyIsInNldFBob3RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});