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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserProfile() {\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [detectedPlayerIndices, setDetectedPlayerIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isPlayerDetected, setPlayerDetected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchData = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\");\n            setPlayers(response.data);\n            console.log(\"Player data fetched\", response.data);\n        } catch (error) {\n            console.error(\"Error fetching player data\", error);\n        }\n        setTrigger(!trigger);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        [],\n        trigger\n    ]);\n    const addPlayer = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"username\", username);\n        formData.append(\"photo\", photo);\n        const image_path = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", formData, {\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        console.log(image_path.data);\n        const newuser = {\n            name: username,\n            image_path: image_path.data\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/users\", newuser);\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n        }\n    };\n    // const addPlayer = async () => {\n    //   let newPlayers;\n    //   if (editIndex >= 0) {\n    //     newPlayers = [...players];\n    //     newPlayers[editIndex] = playerData;\n    //     setPlayers(newPlayers);\n    //     setEditIndex(-1);\n    //   } else {\n    //     newPlayers = [...players, playerData];\n    //     setPlayers(newPlayers);\n    //   }\n    //   setPlayerData({ name: \"\", image: \"\" });\n    //   setShowPopup(false);\n    //   try {\n    //     await axios.post(\"/api/savePlayerData\", playerData); // Send only the new player data to the server\n    //   } catch (error) {\n    //     console.error(\"Error saving player data\", error);\n    //   }\n    // };\n    const removePlayer = async (username)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/users\", {\n                data: {\n                    username\n                }\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const togglePlayerDetected = (index)=>{\n        setDetectedPlayerIndices((prevIndices)=>{\n            if (prevIndices.includes(index)) {\n                return prevIndices.filter((i)=>i !== index);\n            } else {\n                return [\n                    ...prevIndices,\n                    index\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row justify-between min-h-screen py-2 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-2/3 m-2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-center text-black-600\",\n                        children: \"Player Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 overflow-auto h-64 w-3/4\",\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 mb-2 p-2 rounded-lg \".concat(detectedPlayerIndices.includes(index) ? \"bg-green-500\" : \"bg-gray-300\"),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-red-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>removePlayer(player.name),\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"ml-2 bg-orange-500 text-white rounded-full w-6 h-6 transition duration-200 ease-in-out transform hover:scale-105\",\n                                                onClick: ()=>togglePlayerDetected(index),\n                                                children: \"✓\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                                lineNumber: 144,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 rounded bg-green-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                        onClick: ()=>setShowPopup(true),\n                        children: \"Add Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, this),\n                    showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 rounded-lg shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: \"Add Player\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 15\n                                }, this),\n                                playerData.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: playerData.image,\n                                    alt: playerData.name,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"rounded-full mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Player Name\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 174,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"photo\",\n                                    accept: \"image/*\",\n                                    onChange: (e)=>{\n                                        var _e_target_files;\n                                        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                                        setPhoto(file || null);\n                                    },\n                                    className: \"w-full px-2 py-1 rounded border border-gray-300 mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 rounded bg-blue-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: (e)=>{\n                                        addPlayer(e);\n                                        setShowPopup(false);\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 195,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ml-2 px-4 py-2 rounded bg-red-500 text-white transition duration-200 ease-in-out transform hover:scale-105\",\n                                    onClick: ()=>setShowPopup(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                                    lineNumber: 201,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamsh\\\\OneDrive\\\\Desktop\\\\DLC-main\\\\UI\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"qfRV0J+D/vNvwzkSt6BEQaxAyuo=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRjtBQUNuQztBQUVkO0FBSWhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE1BQU07UUFBSUMsT0FBTztJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2dCLHVCQUF1QkMseUJBQXlCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ2tCLGtCQUFrQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNb0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3VCLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFjO0lBQ2hELE1BQU0sQ0FBQ3lCLFNBQVNDLFdBQVcsR0FBRzFCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0yQixZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU16Qiw2Q0FBS0EsQ0FBQzBCLEdBQUcsQ0FBQztZQUNqQ2hCLFdBQVdlLFNBQVNFLElBQUk7WUFDeEJDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJKLFNBQVNFLElBQUk7UUFDbEQsRUFBRSxPQUFPRyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO1FBQ0FQLFdBQVcsQ0FBQ0Q7SUFDZDtJQUdBeEIsZ0RBQVNBLENBQUM7UUFDUjBCO0lBQ0YsR0FBRztRQUFDLEVBQUU7UUFB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MEI7Ozs7OztnQ0FDdkM3QyxXQUFXRyxLQUFLLGtCQUNmLDhEQUFDUCxrREFBS0E7b0NBQ0p5RCxLQUFLckQsV0FBV0csS0FBSztvQ0FDckJtRCxLQUFLdEQsV0FBV0UsSUFBSTtvQ0FDcEJxRCxPQUFPO29DQUNQQyxRQUFRO29DQUNSWCxXQUFVOzs7Ozs7OENBR2QsOERBQUNZO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPL0M7b0NBQ1BnRCxVQUFVLENBQUNDLElBQ1RoRCxZQUFZZ0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUU1QmYsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDWTtvQ0FDQ0MsTUFBSztvQ0FDTE0sSUFBRztvQ0FDSEMsUUFBTztvQ0FDUEosVUFBVSxDQUFDQzs0Q0FFTUE7d0NBQWIsTUFBTUksUUFBT0osa0JBQUFBLEVBQUVDLE1BQU0sQ0FBQ0ksS0FBSyxjQUFkTCxzQ0FBQUEsZUFBZ0IsQ0FBQyxFQUFFO3dDQUNoQzlDLFNBQVNrRCxRQUFRO29DQUNuQjtvQ0FFRnJCLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0s7b0NBQ0NMLFdBQVU7b0NBQ1ZNLFNBQVMsQ0FBQ1c7d0NBQU9wQyxVQUFVb0M7d0NBQUkvRCxhQUFhO29DQUFNOzhDQUNuRDs7Ozs7OzhDQUdELDhEQUFDbUQ7b0NBQ0NMLFdBQVU7b0NBQ1ZNLFNBQVMsSUFBTXBELGFBQWE7OENBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBNU13QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4P2M0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgQ2hhbmdlRXZlbnQsIEZDLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FtZXJhQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jYW1lcmEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtkZXRlY3RlZFBsYXllckluZGljZXMsIHNldERldGVjdGVkUGxheWVySW5kaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzUGxheWVyRGV0ZWN0ZWQsIHNldFBsYXllckRldGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt0cmlnZ2VyLCBzZXRUcmlnZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gICAgICBzZXRQbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBkYXRhIGZldGNoZWRcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWVyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0VHJpZ2dlcighdHJpZ2dlcik7XHJcbiAgfTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbW10sIHRyaWdnZXJdKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBhZGRQbGF5ZXIgPSBhc3luYyAoZXZlbnQ6IEZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaG90b1wiLCBwaG90byEpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlX3BhdGggPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBcIi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgIGZvcm1EYXRhLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZV9wYXRoLmRhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5ld3VzZXIgPSB7XHJcbiAgICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBpbWFnZV9wYXRoOiBpbWFnZV9wYXRoLmRhdGFcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3VzZXJzXCIsIG5ld3VzZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IGFkZFBsYXllciA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGxldCBuZXdQbGF5ZXJzO1xyXG4gIC8vICAgaWYgKGVkaXRJbmRleCA+PSAwKSB7XHJcbiAgLy8gICAgIG5ld1BsYXllcnMgPSBbLi4ucGxheWVyc107XHJcbiAgLy8gICAgIG5ld1BsYXllcnNbZWRpdEluZGV4XSA9IHBsYXllckRhdGE7XHJcbiAgLy8gICAgIHNldFBsYXllcnMobmV3UGxheWVycyk7XHJcbiAgLy8gICAgIHNldEVkaXRJbmRleCgtMSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBuZXdQbGF5ZXJzID0gWy4uLnBsYXllcnMsIHBsYXllckRhdGFdO1xyXG4gIC8vICAgICBzZXRQbGF5ZXJzKG5ld1BsYXllcnMpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc2V0UGxheWVyRGF0YSh7IG5hbWU6IFwiXCIsIGltYWdlOiBcIlwiIH0pO1xyXG4gIC8vICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuXHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9zYXZlUGxheWVyRGF0YVwiLCBwbGF5ZXJEYXRhKTsgLy8gU2VuZCBvbmx5IHRoZSBuZXcgcGxheWVyIGRhdGEgdG8gdGhlIHNlcnZlclxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBwbGF5ZXIgZGF0YVwiLCBlcnJvcik7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcblxyXG4gIGNvbnN0IHJlbW92ZVBsYXllciA9IGFzeW5jICh1c2VybmFtZTogU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZSgnL2FwaS91c2VycycsIHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VybmFtZSBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGxheWVyRGV0ZWN0ZWQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RGV0ZWN0ZWRQbGF5ZXJJbmRpY2VzKChwcmV2SW5kaWNlcykgPT4ge1xyXG4gICAgICBpZiAocHJldkluZGljZXMuaW5jbHVkZXMoaW5kZXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRpY2VzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbLi4ucHJldkluZGljZXMsIGluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWluLWgtc2NyZWVuIHB5LTIgYmctZ3JheS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy0yLzMgbS0yXCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy0xLzMgYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIG10LTQgbWQ6bXQtMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ibGFjay02MDBcIj5QbGF5ZXIgRGF0YTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG92ZXJmbG93LWF1dG8gaC02NCB3LTMvNFwiPlxyXG4gICAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtYi0yIHAtMiByb3VuZGVkLWxnICR7XHJcbiAgICAgICAgICAgICAgICBkZXRlY3RlZFBsYXllckluZGljZXMuaW5jbHVkZXMoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e2luZGV4ICsgMX0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwbGF5ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LTYgaC02IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVQbGF5ZXIocGxheWVyLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHctNiBoLTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBsYXllckRldGVjdGVkKGluZGV4KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg4pyTXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgUGxheWVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5BZGQgUGxheWVyPC9oMj5cclxuICAgICAgICAgICAgICB7cGxheWVyRGF0YS5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3BsYXllckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1iLTJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8oZmlsZSB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHthZGRQbGF5ZXIoZSk7IHNldFNob3dQb3B1cChmYWxzZSl9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHB4LTQgcHktMiByb3VuZGVkIGJnLXJlZC01MDAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF4aW9zIiwiSW1hZ2UiLCJVc2VyUHJvZmlsZSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwibmFtZSIsImltYWdlIiwicGxheWVycyIsInNldFBsYXllcnMiLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJkZXRlY3RlZFBsYXllckluZGljZXMiLCJzZXREZXRlY3RlZFBsYXllckluZGljZXMiLCJpc1BsYXllckRldGVjdGVkIiwic2V0UGxheWVyRGV0ZWN0ZWQiLCJ2aWRlb1JlZiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwaG90byIsInNldFBob3RvIiwidHJpZ2dlciIsInNldFRyaWdnZXIiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRQbGF5ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImltYWdlX3BhdGgiLCJwb3N0IiwiaGVhZGVycyIsIm5ld3VzZXIiLCJyZW1vdmVQbGF5ZXIiLCJkZWxldGUiLCJ0b2dnbGVQbGF5ZXJEZXRlY3RlZCIsImluZGV4IiwicHJldkluZGljZXMiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInBsYXllciIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsImFjY2VwdCIsImZpbGUiLCJmaWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});