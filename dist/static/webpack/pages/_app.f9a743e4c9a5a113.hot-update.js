"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/context */ \"./src/components/context/context.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { default: Link  } = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\nconst Navbar = ()=>{\n    _s();\n    const { items , setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    const quantity = items.reduce((acc, curr)=>{\n        return acc + curr.quantity;\n    }, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"linkItem\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                    href: \"/\",\n                    className: \"linkItem\",\n                    children: \"Henri Potier\"\n                }, void 0, false, {\n                    fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navBarItems\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/\",\n                        className: \"linkItem\",\n                        children: \"Books\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/cart\",\n                        className: \"linkItem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: faCart\n                            }, void 0, false, {\n                                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    paddingLeft: \"10px\"\n                                },\n                                children: [\n                                    quantity,\n                                    \" items\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Navbar.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"XZGJX0R7xmI/dTI7ZInOwzL7iO8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ1M7QUFDb0I7QUFDRjtBQUU5RCxNQUFNLEVBQUVJLFNBQVNDLEtBQUksRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyw4Q0FBVztBQUU3QyxNQUFNQyxTQUFTLElBQU07O0lBQ2pCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxTQUFRLEVBQUMsR0FBR1QsaURBQVVBLENBQUNDLHFEQUFPQTtJQUc5QyxNQUFNUyxXQUFXRixNQUFNRyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBUztRQUMzQyxPQUFPRCxNQUFNQyxLQUFLSCxRQUFRO0lBQzVCLEdBQUc7SUFDSCxxQkFFRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUViLDRFQUFDVjtvQkFBS1ksTUFBSztvQkFBSUYsV0FBVTs4QkFBVzs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNWO3dCQUFLWSxNQUFLO3dCQUFJRixXQUFVO2tDQUFXOzs7Ozs7a0NBR3BDLDhEQUFDVjt3QkFBS1ksTUFBSzt3QkFBUUYsV0FBVTs7MENBQzdCLDhEQUFDYiwyRUFBZUE7Z0NBQUNnQixNQUFNQzs7Ozs7OzBDQUNyQiw4REFBQ0M7Z0NBQUtDLE9BQU87b0NBQUNDLGFBQWE7Z0NBQU07O29DQUFJWjtvQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RDtHQTNCTUg7S0FBQUE7QUE0Qk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzPzNkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFDYXJ0UGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuY29uc3QgeyBkZWZhdWx0OiBMaW5rIH0gPSByZXF1aXJlKFwibmV4dC9saW5rXCIpO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge2l0ZW1zLCBzZXRJdGVtc30gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gICAgXG4gIGNvbnN0IHF1YW50aXR5ID0gaXRlbXMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICByZXR1cm4gYWNjICsgY3Vyci5xdWFudGl0eTtcbiAgfSwgMCk7XG4gIHJldHVybiAoXG4gICAgXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua0l0ZW1cIj5cbiAgICAgXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGlua0l0ZW1cIj5cbiAgICAgICAgICBIZW5yaSBQb3RpZXJcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkJhckl0ZW1zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGlua0l0ZW1cIj5cbiAgICAgICAgICBCb29rc1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cImxpbmtJdGVtXCI+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJ0fSAvPiBcbiAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMTBweCd9fT57cXVhbnRpdHl9IGl0ZW1zPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkNvbnRleHQiLCJGb250QXdlc29tZUljb24iLCJmYUNhcnRQbHVzIiwiZGVmYXVsdCIsIkxpbmsiLCJyZXF1aXJlIiwiTmF2YmFyIiwiaXRlbXMiLCJzZXRJdGVtcyIsInF1YW50aXR5IiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJpY29uIiwiZmFDYXJ0Iiwic3BhbiIsInN0eWxlIiwicGFkZGluZ0xlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});