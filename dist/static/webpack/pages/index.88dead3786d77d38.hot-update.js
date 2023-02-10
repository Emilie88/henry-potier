"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/context */ \"./src/components/context/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\nconst { default: Image  } = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n\n\n\n\nconst Card = (param)=>{\n    let { title , price , cover , synopsis , isbn  } = param;\n    _s();\n    const { items , setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_1__.Context);\n    const addToCart = ()=>{\n        setItems((items)=>{\n            const isItemsFound = !!items.length && items.find((item)=>item.isbn === isbn);\n            if (isItemsFound) {\n                return items.map((item)=>{\n                    if (item.isbn === isbn) {\n                        return {\n                            ...item,\n                            quantity: item.quantity + 1,\n                            price,\n                            title,\n                            cover\n                        };\n                    } else {\n                        return item;\n                    }\n                });\n            } else {\n                return [\n                    ...items,\n                    {\n                        isbn,\n                        quantity: 1,\n                        price,\n                        title,\n                        cover\n                    }\n                ];\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cardContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hideCardDescription\",\n                children: synopsis\n            }, void 0, false, {\n                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                lineNumber: 28,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            width: \"100%\",\n                            height: \"100%\"\n                        },\n                        src: cover,\n                        alt: \"book\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"titleCard\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"addToCartContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    price,\n                                    \" €\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"addToCartBtn\",\n                                onClick: ()=>addToCart(),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCartPlus\n                                }, void 0, false, {\n                                    fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 70\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emiboghi/myProjects/henry-potier/src/components/Card.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"REN8+zzrZ9N+FZtvgcacb10rtbk=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUVBLFNBQVNDLE1BQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxnREFBWTtBQUNIO0FBQ1Q7QUFDNkI7QUFDRjtBQUU5RCxNQUFNSyxPQUFPLFNBQTZDO1FBQTVDLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFFOztJQUNuRCxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdWLGlEQUFVQSxDQUFDRCxxREFBT0E7SUFFOUMsTUFBTVksWUFBWSxJQUFNO1FBQ3RCRCxTQUFTLENBQUNELFFBQVU7WUFDbEIsTUFBTUcsZUFBZSxDQUFDLENBQUNILE1BQU1JLE1BQU0sSUFBSUosTUFBTUssSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtQLElBQUksS0FBS0E7WUFDMUUsSUFBSUksY0FBYztnQkFDaEIsT0FBT0gsTUFBTU8sR0FBRyxDQUFDLENBQUNELE9BQVM7b0JBQ3pCLElBQUlBLEtBQUtQLElBQUksS0FBS0EsTUFBTTt3QkFDdEIsT0FBTzs0QkFBRSxHQUFHTyxJQUFJOzRCQUFFRSxVQUFVRixLQUFLRSxRQUFRLEdBQUc7NEJBQUVaOzRCQUFNRDs0QkFBTUU7d0JBQU07b0JBQ2xFLE9BQU87d0JBQ0wsT0FBT1M7b0JBQ1QsQ0FBQztnQkFDSDtZQUNGLE9BQU87Z0JBQ0wsT0FBTzt1QkFBSU47b0JBQU87d0JBQUVEO3dCQUFNUyxVQUFVO3dCQUFHWjt3QkFBT0Q7d0JBQU1FO29CQUFLO2lCQUFFO1lBQzdELENBQUM7UUFDSDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNaLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBdUJaOzs7Ozs7MEJBQ3ZDLDhEQUFDVzs7b0JBQUk7a0NBQUMsOERBQUNFO3dCQUFJQyxPQUFPOzRCQUFDQyxPQUFPOzRCQUFPQyxRQUFRO3dCQUFNO3dCQUFHQyxLQUFLbEI7d0JBQU9tQixLQUFJOzs7Ozs7a0NBQ2xFLDhEQUFDQzt3QkFBR1AsV0FBVTtrQ0FBYWY7Ozs7OztrQ0FDM0IsOERBQUNjO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7O29DQUFJdEI7b0NBQU07Ozs7Ozs7MENBQ1gsOERBQUN1QjtnQ0FBT1QsV0FBVTtnQ0FBZVUsU0FBUyxJQUFNbEI7MENBQWEsNEVBQUNWLDJFQUFlQTtvQ0FBQzZCLE1BQU01Qix5RUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RHO0dBakNNQztLQUFBQTtBQW1DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzPzM4MTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZWZhdWx0OiBJbWFnZSB9ID0gcmVxdWlyZShcIm5leHQvaW1hZ2VcIik7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYUNhcnRQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jb25zdCBDYXJkID0gKHsgdGl0bGUsIHByaWNlLCBjb3Zlciwgc3lub3BzaXMsIGlzYm4gfSkgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCBzZXRJdGVtcyB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBhZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgc2V0SXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgICBjb25zdCBpc0l0ZW1zRm91bmQgPSAhIWl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlzYm4gPT09IGlzYm4pO1xuICAgICAgaWYgKGlzSXRlbXNGb3VuZCkge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXNibiA9PT0gaXNibikge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxLHByaWNlLHRpdGxlLGNvdmVyIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gWy4uLml0ZW1zLCB7IGlzYm4sIHF1YW50aXR5OiAxLCBwcmljZSAsdGl0bGUsY292ZXJ9XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250YWluZXJcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVDYXJkRGVzY3JpcHRpb25cIj57c3lub3BzaXN9PC9kaXY+XG4gICAgICA8ZGl2PiA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLGhlaWdodDogXCIxMDAlXCJ9fSBzcmM9e2NvdmVyfSBhbHQ9XCJib29rXCIgLz5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZUNhcmRcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkVG9DYXJ0Q29udGVudFwiPlxuICAgICAgICA8aDQ+e3ByaWNlfSDigqw8L2g0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZFRvQ2FydEJ0blwiIG9uQ2xpY2s9eygpID0+IGFkZFRvQ2FydCgpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FydFBsdXN9IC8+PC9idXR0b24+XG4gICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgXG5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJJbWFnZSIsInJlcXVpcmUiLCJDb250ZXh0IiwidXNlQ29udGV4dCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2FydFBsdXMiLCJDYXJkIiwidGl0bGUiLCJwcmljZSIsImNvdmVyIiwic3lub3BzaXMiLCJpc2JuIiwiaXRlbXMiLCJzZXRJdGVtcyIsImFkZFRvQ2FydCIsImlzSXRlbXNGb3VuZCIsImxlbmd0aCIsImZpbmQiLCJpdGVtIiwibWFwIiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDMiLCJoNCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card.js\n"));

/***/ })

});