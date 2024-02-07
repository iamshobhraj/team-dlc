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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n                setPlayers(response.data);\n                console.log(\"Player data fetched\", response.data);\n            } catch (error) {\n                console.error(\"Error fetching player data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addPlayer = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"username\", username);\n        formData.append(\"photo\", photo);\n        const image_path = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", formData, {\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        console.log(image_path.data);\n        const newuser = {\n            name: username,\n            image_path: image_path.data\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/users\");\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n        }\n    };\n    // const addPlayer = async () => {\n    //   let newPlayers;\n    //   if (editIndex >= 0) {\n    //     newPlayers = [...players];\n    //     newPlayers[editIndex] = playerData;\n    //     setPlayers(newPlayers);\n    //     setEditIndex(-1);\n    //   } else {\n    //     newPlayers = [...players, playerData];\n    //     setPlayers(newPlayers);\n    //   }\n    //   setPlayerData({ name: \"\", image: \"\" });\n    //   setShowPopup(false);\n    //   try {\n    //     await axios.post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n    //   } catch (error) {\n    //     console.error(\"Error saving player data\", error);\n    //   }\n    // };\n    const removePlayer = async (username)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/users\", {\n                data: {\n                    username\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    className: \"rounded-lg shadow-lg w-full border-2 border-black\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(player.name),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 145,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 175,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"photo\",\n                                    accept: \"image/*\",\n                                    onChange: (e)=>{\n                                        var _e_target_files;\n                                        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                                        setPhoto(file || null);\n                                    },\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: addPlayer,\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 196,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 202,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"gZGQ25TgL+fLQ6CG+iSd/ZhYJ20=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRjtBQUNuQztBQUVkO0FBRWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3VCLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFjO0lBRWhEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU13QixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNdkIsNkNBQUtBLENBQUN3QixHQUFHLENBQUM7Z0JBQ2pDZCxXQUFXYSxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkosU0FBU0UsSUFBSTtZQUNsRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNTyxZQUFZLE9BQU9DO1FBQ3ZCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNB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Q2YsOERBQUNQLGtEQUFLQTtvQ0FDSjBELEtBQUt0RCxXQUFXRyxLQUFLO29DQUNyQm9ELEtBQUt2RCxXQUFXRSxJQUFJO29DQUNwQnNELE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JkLFdBQVU7Ozs7Ozs4Q0FHZCw4REFBQ2U7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU9oRDtvQ0FDUGlELFVBQVUsQ0FBQ0MsSUFDVGpELFlBQVlpRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBRTVCbEIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZTtvQ0FDQ0MsTUFBSztvQ0FDTE0sSUFBRztvQ0FDSEMsUUFBTztvQ0FDUEosVUFBVSxDQUFDQzs0Q0FFTUE7d0NBQWIsTUFBTUksUUFBT0osa0JBQUFBLEVBQUVDLE1BQU0sQ0FBQ0ksS0FBSyxjQUFkTCxzQ0FBQUEsZUFBZ0IsQ0FBQyxFQUFFO3dDQUNoQy9DLFNBQVNtRCxRQUFRO29DQUNuQjtvQ0FFRnhCLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1E7b0NBQ0NSLFdBQVU7b0NBQ1ZTLFNBQVM1Qjs4Q0FDVjs7Ozs7OzhDQUdELDhEQUFDMkI7b0NBQ0NSLFdBQVU7b0NBQ1ZTLFNBQVMsSUFBTXJELGFBQWE7OENBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBL013QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4P2M0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgQ2hhbmdlRXZlbnQsIEZDLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtkZXRlY3RlZFBsYXllckluZGljZXMsIHNldERldGVjdGVkUGxheWVySW5kaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzUGxheWVyRGV0ZWN0ZWQsIHNldFBsYXllckRldGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICAgICAgICBzZXRQbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGRhdGEgZmV0Y2hlZFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGFkZFBsYXllciA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInBob3RvXCIsIHBob3RvISk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VfcGF0aCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiL2FwaS91cGxvYWRcIixcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGltYWdlX3BhdGguZGF0YSk7XHJcblxyXG4gICAgY29uc3QgbmV3dXNlciA9IHtcclxuICAgICAgbmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGltYWdlX3BhdGg6IGltYWdlX3BhdGguZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9hcGkvdXNlcnNcIixcclxuICAgICAgICBcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVXBsb2FkIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvLyBjb25zdCBhZGRQbGF5ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBsZXQgbmV3UGxheWVycztcclxuICAvLyAgIGlmIChlZGl0SW5kZXggPj0gMCkge1xyXG4gIC8vICAgICBuZXdQbGF5ZXJzID0gWy4uLnBsYXllcnNdO1xyXG4gIC8vICAgICBuZXdQbGF5ZXJzW2VkaXRJbmRleF0gPSBwbGF5ZXJEYXRhO1xyXG4gIC8vICAgICBzZXRQbGF5ZXJzKG5ld1BsYXllcnMpO1xyXG4gIC8vICAgICBzZXRFZGl0SW5kZXgoLTEpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgbmV3UGxheWVycyA9IFsuLi5wbGF5ZXJzLCBwbGF5ZXJEYXRhXTtcclxuICAvLyAgICAgc2V0UGxheWVycyhuZXdQbGF5ZXJzKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHNldFBsYXllckRhdGEoeyBuYW1lOiBcIlwiLCBpbWFnZTogXCJcIiB9KTtcclxuICAvLyAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcblxyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvc2F2ZVBsYXllckRhdGFcIiwgcGxheWVyRGF0YSk7IC8vIFNlbmQgb25seSB0aGUgbmV3IHBsYXllciBkYXRhIHRvIHRoZSBzZXJ2ZXJcclxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG5cclxuICBjb25zdCByZW1vdmVQbGF5ZXIgPSBhc3luYyAodXNlcm5hbWU6IFN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoJy9hcGkvdXNlcnMnLCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlcm5hbWUgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBsYXllckRldGVjdGVkID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldERldGVjdGVkUGxheWVySW5kaWNlcygocHJldkluZGljZXMpID0+IHtcclxuICAgICAgaWYgKHByZXZJbmRpY2VzLmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2SW5kaWNlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWy4uLnByZXZJbmRpY2VzLCBpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1pbi1oLXNjcmVlbiBweS0yIGJnLWdyYXktMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOnctMi8zIG0tMlwiPlxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgcmVmPXt2aWRlb1JlZn1cclxuICAgICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDp3LTEvMyBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgbXQtNCBtZDptdC0wXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrLTYwMFwiPlBsYXllciBEYXRhPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgb3ZlcmZsb3ctYXV0byBoLTY0IHctMy80XCI+XHJcbiAgICAgICAgICB7cGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIG1iLTIgcC0yIHJvdW5kZWQtbGcgJHtcclxuICAgICAgICAgICAgICAgIGRldGVjdGVkUGxheWVySW5kaWNlcy5pbmNsdWRlcyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57aW5kZXggKyAxfS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3BsYXllci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHctNiBoLTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVBsYXllcihwbGF5ZXIubmFtZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdy02IGgtNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGxheWVyRGV0ZWN0ZWQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDinJNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiByb3VuZGVkIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQbGF5ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkFkZCBQbGF5ZXI8L2gyPlxyXG4gICAgICAgICAgICAgIHtwbGF5ZXJEYXRhLmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3BsYXllckRhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cGxheWVyRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGF5ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItMlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQaG90byhmaWxlIHx8IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtYi00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRQbGF5ZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIHJvdW5kZWQgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiYXhpb3MiLCJJbWFnZSIsIlVzZXJQcm9maWxlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJuYW1lIiwiaW1hZ2UiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImVkaXRJbmRleCIsInNldEVkaXRJbmRleCIsImRldGVjdGVkUGxheWVySW5kaWNlcyIsInNldERldGVjdGVkUGxheWVySW5kaWNlcyIsImlzUGxheWVyRGV0ZWN0ZWQiLCJzZXRQbGF5ZXJEZXRlY3RlZCIsInZpZGVvUmVmIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBob3RvIiwic2V0UGhvdG8iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRQbGF5ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImltYWdlX3BhdGgiLCJwb3N0IiwiaGVhZGVycyIsIm5ld3VzZXIiLCJyZW1vdmVQbGF5ZXIiLCJkZWxldGUiLCJ0b2dnbGVQbGF5ZXJEZXRlY3RlZCIsImluZGV4IiwicHJldkluZGljZXMiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJ2aWRlbyIsInJlZiIsImF1dG9QbGF5IiwiaDEiLCJtYXAiLCJwbGF5ZXIiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJhY2NlcHQiLCJmaWxlIiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});