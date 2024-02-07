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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n                setPlayers(response.data);\n                console.log(\"Player data fetched\", response.data);\n            } catch (error) {\n                console.error(\"Error fetching player data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addPlayer = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"username\", username);\n        formData.append(\"photo\", photo);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n        }\n    };\n    // const addPlayer = async () => {\n    //   let newPlayers;\n    //   if (editIndex >= 0) {\n    //     newPlayers = [...players];\n    //     newPlayers[editIndex] = playerData;\n    //     setPlayers(newPlayers);\n    //     setEditIndex(-1);\n    //   } else {\n    //     newPlayers = [...players, playerData];\n    //     setPlayers(newPlayers);\n    //   }\n    //   setPlayerData({ name: \"\", image: \"\" });\n    //   setShowPopup(false);\n    //   try {\n    //     await axios.post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n    //   } catch (error) {\n    //     console.error(\"Error saving player data\", error);\n    //   }\n    // };\n    const removePlayer = async (username)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/users\", {\n                data: {\n                    username\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    className: \"rounded-lg shadow-lg w-full border-2 border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 133,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            onSubmit: addPlayer,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: playerData.name,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"photo\",\n                                    accept: \"image/*\",\n                                    onChange: (e)=>{\n                                        var _e_target_files;\n                                        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                                        setPhoto(file || null);\n                                    },\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    type: \"submit\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 190,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"gZGQ25TgL+fLQ6CG+iSd/ZhYJ20=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRjtBQUNuQztBQUVkO0FBRWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3VCLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFjO0lBRWhEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU13QixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNdkIsNkNBQUtBLENBQUN3QixHQUFHLENBQUM7Z0JBQ2pDZCxXQUFXYSxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkosU0FBU0UsSUFBSTtZQUNsRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNTyxZQUFZLE9BQU9DO1FBQ3ZCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNB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Q0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzdELFdBQVdFLElBQUk7b0NBQ3RCNEQsVUFBVSxDQUFDQyxJQUNUakQsWUFBWWlELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FFNUJwQixXQUFVOzs7Ozs7OENBRVosOERBQUNpQjtvQ0FDQ0MsTUFBSztvQ0FDTE0sSUFBRztvQ0FDSEMsUUFBTztvQ0FDUEosVUFBVSxDQUFDQzs0Q0FFTUE7d0NBQWIsTUFBTUksUUFBT0osa0JBQUFBLEVBQUVDLE1BQU0sQ0FBQ0ksS0FBSyxjQUFkTCxzQ0FBQUEsZUFBZ0IsQ0FBQyxFQUFFO3dDQUNoQy9DLFNBQVNtRCxRQUFRO29DQUNuQjtvQ0FFRjFCLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1E7b0NBQ0NSLFdBQVU7b0NBQ1ZrQixNQUFLOzhDQUNOOzs7Ozs7OENBR0QsOERBQUNWO29DQUNDUixXQUFVO29DQUNWUyxTQUFTLElBQU1uRCxhQUFhOzhDQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQW5Nd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIENoYW5nZUV2ZW50LCBGQywgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm9maWxlKCkge1xyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBpbWFnZTogXCJcIiB9KTtcclxuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VkaXRJbmRleCwgc2V0RWRpdEluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzLCBzZXREZXRlY3RlZFBsYXllckluZGljZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1BsYXllckRldGVjdGVkLCBzZXRQbGF5ZXJEZXRlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvdG8sIHNldFBob3RvXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgICAgICAgc2V0UGxheWVycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBkYXRhIGZldGNoZWRcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXllciBkYXRhXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBhZGRQbGF5ZXIgPSBhc3luYyAoZXZlbnQ6IEZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaG90b1wiLCBwaG90byEpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IGFkZFBsYXllciA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGxldCBuZXdQbGF5ZXJzO1xyXG4gIC8vICAgaWYgKGVkaXRJbmRleCA+PSAwKSB7XHJcbiAgLy8gICAgIG5ld1BsYXllcnMgPSBbLi4ucGxheWVyc107XHJcbiAgLy8gICAgIG5ld1BsYXllcnNbZWRpdEluZGV4XSA9IHBsYXllckRhdGE7XHJcbiAgLy8gICAgIHNldFBsYXllcnMobmV3UGxheWVycyk7XHJcbiAgLy8gICAgIHNldEVkaXRJbmRleCgtMSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBuZXdQbGF5ZXJzID0gWy4uLnBsYXllcnMsIHBsYXllckRhdGFdO1xyXG4gIC8vICAgICBzZXRQbGF5ZXJzKG5ld1BsYXllcnMpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc2V0UGxheWVyRGF0YSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIC8vICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuXHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9zYXZlUGxheWVyRGF0YVwiLCBwbGF5ZXJEYXRhKTsgLy8gU2VuZCBvbmx5IHRoZSBuZXcgcGxheWVyIGRhdGEgdG8gdGhlIHNlcnZlclxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBwbGF5ZXIgZGF0YVwiLCBlcnJvcik7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcblxyXG4gIGNvbnN0IHJlbW92ZVBsYXllciA9IGFzeW5jICh1c2VybmFtZTogU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZSgnL2FwaS91c2VycycsIHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VybmFtZSBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGxheWVyRGV0ZWN0ZWQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzKChwcmV2SW5kaWNlcykgPT4ge1xyXG4gICAgICBpZiAocHJldkluZGljZXMuaW5jbHVkZXMoaW5kZXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRpY2VzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbLi4ucHJldkluZGljZXMsIGluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWluLWgtc2NyZWVuIHB5LTIgYmctZ3JheS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy0yLzMgbS0yXCI+XHJcbiAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxyXG4gICAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWJsYWNrXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOnctMS8zIGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1sZyBtdC00IG1kOm10LTBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtYmxhY2stNjAwXCI+UGxheWVyIERhdGE8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBvdmVyZmxvdy1hdXRvIGgtNjQgdy0zLzRcIj5cclxuICAgICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbWItMiBwLTIgcm91bmRlZC1sZyAke1xyXG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzLmluY2x1ZGVzKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntpbmRleCArIDF9Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57cGxheWVyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdy02IGgtNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlUGxheWVyKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdy02IGgtNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGxheWVyRGV0ZWN0ZWQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDinJNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiByb3VuZGVkIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQbGF5ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGdcIiBvblN1Ym1pdD17YWRkUGxheWVyfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5BZGQgUGxheWVyPC9oMj5cclxuICAgICAgICAgICAgICB7cGxheWVyRGF0YS5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtYi0yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBob3RvKGZpbGUgfHwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1iLTRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHB4LTQgcHktMiByb3VuZGVkIGJnLXJlZC01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJheGlvcyIsIkltYWdlIiwiVXNlclByb2ZpbGUiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsIm5hbWUiLCJpbWFnZSIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwiZWRpdEluZGV4Iiwic2V0RWRpdEluZGV4IiwiZGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzIiwic2V0RGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzIiwiaXNQbGF5ZXJEZXRlY3RlZCIsInNldFBsYXllckRldGVjdGVkIiwidmlkZW9SZWYiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGhvdG8iLCJzZXRQaG90byIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFkZFBsYXllciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImhlYWRlcnMiLCJyZW1vdmVQbGF5ZXIiLCJkZWxldGUiLCJ0b2dnbGVQbGF5ZXJEZXRlY3RlZCIsImluZGV4IiwicHJldkluZGljZXMiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJ2aWRlbyIsInJlZiIsImF1dG9QbGF5IiwiaDEiLCJtYXAiLCJwbGF5ZXIiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJhY2NlcHQiLCJmaWxlIiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});