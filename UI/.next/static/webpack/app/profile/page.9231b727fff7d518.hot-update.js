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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n                setPlayers(response.data);\n                console.log(\"Player data fetched\", response.data);\n            } catch (error) {\n                console.error(\"Error fetching player data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addPlayer = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"username\", username);\n        formData.append(\"photo\", photo);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n        }\n    };\n    // const addPlayer = async () => {\n    //   let newPlayers;\n    //   if (editIndex >= 0) {\n    //     newPlayers = [...players];\n    //     newPlayers[editIndex] = playerData;\n    //     setPlayers(newPlayers);\n    //     setEditIndex(-1);\n    //   } else {\n    //     newPlayers = [...players, playerData];\n    //     setPlayers(newPlayers);\n    //   }\n    //   setPlayerData({ name: \"\", image: \"\" });\n    //   setShowPopup(false);\n    //   try {\n    //     await axios.post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n    //   } catch (error) {\n    //     console.error(\"Error saving player data\", error);\n    //   }\n    // };\n    const removePlayer = async (username)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/users\", {\n                data: {\n                    username\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    className: \"rounded-lg shadow-lg w-full border-2 border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(player.name),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 133,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            onSubmit: addPlayer,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"photo\",\n                                    accept: \"image/*\",\n                                    onChange: (e)=>{\n                                        var _e_target_files;\n                                        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                                        setPhoto(file || null);\n                                    },\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    type: \"submit\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 190,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"gZGQ25TgL+fLQ6CG+iSd/ZhYJ20=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRjtBQUNuQztBQUVkO0FBRWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3VCLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFjO0lBRWhEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU13QixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNdkIsNkNBQUtBLENBQUN3QixHQUFHLENBQUM7Z0JBQ2pDZCxXQUFXYSxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkosU0FBU0UsSUFBSTtZQUNsRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNTyxZQUFZLE9BQU9DO1FBQ3ZCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNB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Q2dCO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPL0M7b0NBQ1BnRCxVQUFVLENBQUNDLElBQ1RoRCxZQUFZZ0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUU1Qm5CLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2dCO29DQUNDQyxNQUFLO29DQUNMTSxJQUFHO29DQUNIQyxRQUFPO29DQUNQSixVQUFVLENBQUNDOzRDQUVNQTt3Q0FBYixNQUFNSSxRQUFPSixrQkFBQUEsRUFBRUMsTUFBTSxDQUFDSSxLQUFLLGNBQWRMLHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7d0NBQ2hDOUMsU0FBU2tELFFBQVE7b0NBQ25CO29DQUVGekIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDUTtvQ0FDQ1IsV0FBVTtvQ0FDVmlCLE1BQUs7OENBQ047Ozs7Ozs4Q0FHRCw4REFBQ1Q7b0NBQ0NSLFdBQVU7b0NBQ1ZTLFNBQVMsSUFBTW5ELGFBQWE7OENBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBbk13QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4P2M0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgQ2hhbmdlRXZlbnQsIEZDLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtkZXRlY3RlZFBsYXllckluZGljZXMsIHNldERldGVjdGVkUGxheWVySW5kaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzUGxheWVyRGV0ZWN0ZWQsIHNldFBsYXllckRldGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICAgICAgICBzZXRQbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGRhdGEgZmV0Y2hlZFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGFkZFBsYXllciA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInBob3RvXCIsIHBob3RvISk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2FwaS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLy8gY29uc3QgYWRkUGxheWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgbGV0IG5ld1BsYXllcnM7XHJcbiAgLy8gICBpZiAoZWRpdEluZGV4ID49IDApIHtcclxuICAvLyAgICAgbmV3UGxheWVycyA9IFsuLi5wbGF5ZXJzXTtcclxuICAvLyAgICAgbmV3UGxheWVyc1tlZGl0SW5kZXhdID0gcGxheWVyRGF0YTtcclxuICAvLyAgICAgc2V0UGxheWVycyhuZXdQbGF5ZXJzKTtcclxuICAvLyAgICAgc2V0RWRpdEluZGV4KC0xKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIG5ld1BsYXllcnMgPSBbLi4ucGxheWVycywgcGxheWVyRGF0YV07XHJcbiAgLy8gICAgIHNldFBsYXllcnMobmV3UGxheWVycyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBzZXRQbGF5ZXJEYXRhKHsgbmFtZTogXCJcIiwgaW1hZ2U6IFwiXCIgfSk7XHJcbiAgLy8gICBzZXRTaG93UG9wdXAoZmFsc2UpO1xyXG5cclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3NhdmVQbGF5ZXJEYXRhXCIsIHBsYXllckRhdGEpOyAvLyBTZW5kIG9ubHkgdGhlIG5ldyBwbGF5ZXIgZGF0YSB0byB0aGUgc2VydmVyXHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHBsYXllciBkYXRhXCIsIGVycm9yKTtcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuXHJcbiAgY29uc3QgcmVtb3ZlUGxheWVyID0gYXN5bmMgKHVzZXJuYW1lOiBTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKCcvYXBpL3VzZXJzJywge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJuYW1lIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpOyBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQbGF5ZXJEZXRlY3RlZCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXREZXRlY3RlZFBsYXllckluZGljZXMoKHByZXZJbmRpY2VzKSA9PiB7XHJcbiAgICAgIGlmIChwcmV2SW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpIHtcclxuICAgICAgICByZXR1cm4gcHJldkluZGljZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2SW5kaWNlcywgaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC1zY3JlZW4gcHktMiBiZy1ncmF5LTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDp3LTIvMyBtLTJcIj5cclxuICAgICAgICA8dmlkZW9cclxuICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XHJcbiAgICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2tcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy0xLzMgYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIG10LTQgbWQ6bXQtMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ibGFjay02MDBcIj5QbGF5ZXIgRGF0YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG92ZXJmbG93LWF1dG8gaC02NCB3LTMvNFwiPlxyXG4gICAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtYi0yIHAtMiByb3VuZGVkLWxnICR7XHJcbiAgICAgICAgICAgICAgICBkZXRlY3RlZFBsYXllckluZGljZXMuaW5jbHVkZXMoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e2luZGV4ICsgMX0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwbGF5ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LTYgaC02IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVQbGF5ZXIocGxheWVyLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHctNiBoLTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBsYXllckRldGVjdGVkKGluZGV4KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg4pyTXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgUGxheWVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGdcIiBvblN1Ym1pdD17YWRkUGxheWVyfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5BZGQgUGxheWVyPC9oMj5cclxuICAgICAgICAgICAgICB7cGxheWVyRGF0YS5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1iLTJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8oZmlsZSB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIHJvdW5kZWQgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiYXhpb3MiLCJJbWFnZSIsIlVzZXJQcm9maWxlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJuYW1lIiwiaW1hZ2UiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImVkaXRJbmRleCIsInNldEVkaXRJbmRleCIsImRldGVjdGVkUGxheWVySW5kaWNlcyIsInNldERldGVjdGVkUGxheWVySW5kaWNlcyIsImlzUGxheWVyRGV0ZWN0ZWQiLCJzZXRQbGF5ZXJEZXRlY3RlZCIsInZpZGVvUmVmIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBob3RvIiwic2V0UGhvdG8iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRQbGF5ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwicmVtb3ZlUGxheWVyIiwiZGVsZXRlIiwidG9nZ2xlUGxheWVyRGV0ZWN0ZWQiLCJpbmRleCIsInByZXZJbmRpY2VzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJyZWYiLCJhdXRvUGxheSIsImgxIiwibWFwIiwicGxheWVyIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJhY2NlcHQiLCJmaWxlIiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});