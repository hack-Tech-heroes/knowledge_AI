"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_app_create-course__components_levels_jsx";
exports.ids = ["_ssr_app_create-course__components_levels_jsx"];
exports.modules = {

/***/ "(ssr)/./app/create-course/_components/levels.jsx":
/*!**************************************************!*\
  !*** ./app/create-course/_components/levels.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst categories = [\n    {\n        name: \"Beginner\",\n        image: \"https://via.placeholder.com/40\"\n    },\n    {\n        name: \"Intermediate\",\n        image: \"https://via.placeholder.com/40\"\n    },\n    {\n        name: \"Advance\",\n        image: \"https://via.placeholder.com/40\"\n    }\n];\nconst Levels = ({ onCategorySelect, onLevelSelect })=>{\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedLevel, setSelectedLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleCategoryClick = (categoryName)=>{\n        setSelectedCategory(categoryName);\n        setSelectedLevel(null); // Reset level selection when category changes\n        onCategorySelect(categoryName);\n    };\n    const handleLevelClick = (levelName)=>{\n        setSelectedLevel(levelName);\n        onLevelSelect(levelName); // Notify parent about the selected level\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg font-bold mb-4\",\n                children: \"Select Level:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-6\",\n                children: categories.map((level)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `p-2 rounded-lg flex flex-col items-center justify-center border-2 transition-all cursor-pointer border-black bg-white hover:border-blue-500 hover:bg-blue-100 w-64 h-48 ${selectedLevel === level.name ? \"border-blue-600 bg-gray-900 text-white\" : \"\"}`,\n                        onClick: ()=>handleLevelClick(level.name),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: level.image,\n                                alt: level.name,\n                                className: \"rounded-full mb-2 w-20 h-20\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-black\",\n                                children: level.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, level.name, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Documents\\\\GitHub\\\\knowledge_AI\\\\app\\\\create-course\\\\_components\\\\levels.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Levels);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9hcHAvY3JlYXRlLWNvdXJzZS9fY29tcG9uZW50cy9sZXZlbHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxhQUFhO0lBQ2pCO1FBQUVDLE1BQU07UUFBWUMsT0FBTztJQUFpQztJQUM1RDtRQUFFRCxNQUFNO1FBQWdCQyxPQUFPO0lBQWlDO0lBQ2hFO1FBQUVELE1BQU07UUFBV0MsT0FBTztJQUFpQztDQUM1RDtBQUVELE1BQU1DLFNBQVMsQ0FBQyxFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO0lBQ2pELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkQsTUFBTVcsc0JBQXNCLENBQUNDO1FBQzNCSixvQkFBb0JJO1FBQ3BCRixpQkFBaUIsT0FBTyw4Q0FBOEM7UUFDdEVMLGlCQUFpQk87SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJKLGlCQUFpQkk7UUFDakJSLGNBQWNRLFlBQVkseUNBQXlDO0lBQ3JFO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUI7Ozs7OzswQkFDdkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaZixXQUFXaUIsR0FBRyxDQUFDLENBQUNDLHNCQUNmLDhEQUFDSjt3QkFFQ0MsV0FBVyxDQUFDLHdLQUF3SyxFQUNsTFAsa0JBQWtCVSxNQUFNakIsSUFBSSxHQUN4QiwyQ0FDQSxHQUNMLENBQUM7d0JBQ0ZrQixTQUFTLElBQU1QLGlCQUFpQk0sTUFBTWpCLElBQUk7OzBDQUcxQyw4REFBQ21CO2dDQUNDQyxLQUFLSCxNQUFNaEIsS0FBSztnQ0FDaEJvQixLQUFLSixNQUFNakIsSUFBSTtnQ0FDZmMsV0FBVTs7Ozs7OzBDQUdaLDhEQUFDUTtnQ0FBS1IsV0FBVTswQ0FBY0csTUFBTWpCLElBQUk7Ozs7Ozs7dUJBZm5DaUIsTUFBTWpCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjNCO0FBRUEsaUVBQWVFLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VfZ3Jvd3RoLy4vYXBwL2NyZWF0ZS1jb3Vyc2UvX2NvbXBvbmVudHMvbGV2ZWxzLmpzeD84MGNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICB7IG5hbWU6IFwiQmVnaW5uZXJcIiwgaW1hZ2U6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJtZWRpYXRlXCIsIGltYWdlOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmFuY2VcIiwgaW1hZ2U6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IExldmVscyA9ICh7IG9uQ2F0ZWdvcnlTZWxlY3QsIG9uTGV2ZWxTZWxlY3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExldmVsLCBzZXRTZWxlY3RlZExldmVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xyXG4gICAgc2V0U2VsZWN0ZWRMZXZlbChudWxsKTsgLy8gUmVzZXQgbGV2ZWwgc2VsZWN0aW9uIHdoZW4gY2F0ZWdvcnkgY2hhbmdlc1xyXG4gICAgb25DYXRlZ29yeVNlbGVjdChjYXRlZ29yeU5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxldmVsQ2xpY2sgPSAobGV2ZWxOYW1lKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZExldmVsKGxldmVsTmFtZSk7XHJcbiAgICBvbkxldmVsU2VsZWN0KGxldmVsTmFtZSk7IC8vIE5vdGlmeSBwYXJlbnQgYWJvdXQgdGhlIHNlbGVjdGVkIGxldmVsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMjBcIj5cclxuICAgICAgey8qIExldmVsIFNlbGVjdGlvbiAqL31cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTRcIj5TZWxlY3QgTGV2ZWw6PC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgobGV2ZWwpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtsZXZlbC5uYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBib3JkZXItYmxhY2sgYmctd2hpdGUgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtMTAwIHctNjQgaC00OCAke1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkTGV2ZWwgPT09IGxldmVsLm5hbWVcclxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItYmx1ZS02MDAgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxldmVsQ2xpY2sobGV2ZWwubmFtZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17bGV2ZWwuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtsZXZlbC5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi0yIHctMjAgaC0yMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiBMYWJlbCAqL31cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPntsZXZlbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXZlbHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJpbWFnZSIsIkxldmVscyIsIm9uQ2F0ZWdvcnlTZWxlY3QiLCJvbkxldmVsU2VsZWN0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZExldmVsIiwic2V0U2VsZWN0ZWRMZXZlbCIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeU5hbWUiLCJoYW5kbGVMZXZlbENsaWNrIiwibGV2ZWxOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJsZXZlbCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./app/create-course/_components/levels.jsx\n");

/***/ })

};
;