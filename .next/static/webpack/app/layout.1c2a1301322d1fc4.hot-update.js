"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("// This file must be bundled in the app's client layer, it shouldn't be directly\n// imported by the server.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"createServerReference\", ({\n    enumerable: true,\n    get: function() {\n        return createServerReference;\n    }\n}));\nconst _appcallserver = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\nfunction createServerReference(id) {\n    // Since we're using the Edge build of Flight client for SSR [1], here we need to\n    // also use the same Edge build to create the reference. For the client bundle,\n    // we use the default and let Webpack to resolve it to the correct version.\n    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26\n    const { createServerReference: createServerReferenceImpl } =  false ? 0 : __webpack_require__(/*! react-server-dom-webpack/client */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-server-dom-webpack/client.js\");\n    return createServerReferenceImpl(id, _appcallserver.callServer);\n}\n\n//# sourceMappingURL=action-client-wrapper.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRCxFQUFFLE1BQTBCLEdBQUcsQ0FBK0MsR0FBRyxtQkFBTyxDQUFDLGlJQUFpQztBQUN6TDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanM/YWE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgbXVzdCBiZSBidW5kbGVkIGluIHRoZSBhcHAncyBjbGllbnQgbGF5ZXIsIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseVxuLy8gaW1wb3J0ZWQgYnkgdGhlIHNlcnZlci5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlU2VydmVyUmVmZXJlbmNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJSZWZlcmVuY2U7XG4gICAgfVxufSk7XG5jb25zdCBfYXBwY2FsbHNlcnZlciA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L2FwcC1jYWxsLXNlcnZlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlclJlZmVyZW5jZShpZCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIHRoZSBFZGdlIGJ1aWxkIG9mIEZsaWdodCBjbGllbnQgZm9yIFNTUiBbMV0sIGhlcmUgd2UgbmVlZCB0b1xuICAgIC8vIGFsc28gdXNlIHRoZSBzYW1lIEVkZ2UgYnVpbGQgdG8gY3JlYXRlIHRoZSByZWZlcmVuY2UuIEZvciB0aGUgY2xpZW50IGJ1bmRsZSxcbiAgICAvLyB3ZSB1c2UgdGhlIGRlZmF1bHQgYW5kIGxldCBXZWJwYWNrIHRvIHJlc29sdmUgaXQgdG8gdGhlIGNvcnJlY3QgdmVyc2lvbi5cbiAgICAvLyAxOiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi8xNmViODBiMGIwYmUxM2YwNGE2NDA3OTQzNjY0YjVlZmQ4ZjNkN2QwL3BhY2thZ2VzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL3VzZS1mbGlnaHQtcmVzcG9uc2UudHN4I0wyNC1MMjZcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlclJlZmVyZW5jZTogY3JlYXRlU2VydmVyUmVmZXJlbmNlSW1wbCB9ID0gISFwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPyByZXF1aXJlKFwicmVhY3Qtc2VydmVyLWRvbS13ZWJwYWNrL2NsaWVudC5lZGdlXCIpIDogcmVxdWlyZShcInJlYWN0LXNlcnZlci1kb20td2VicGFjay9jbGllbnRcIik7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJlZmVyZW5jZUltcGwoaWQsIF9hcHBjYWxsc2VydmVyLmNhbGxTZXJ2ZXIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0fc66dfc3ea4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBmYzY2ZGZjM2VhNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/actions/authActions.ts":
/*!****************************************!*\
  !*** ./src/app/actions/authActions.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserByEmail: function() { return /* binding */ getUserByEmail; },
/* harmony export */   getUserById: function() { return /* binding */ getUserById; },
/* harmony export */   registerUser: function() { return /* binding */ registerUser; },
/* harmony export */   signInUser: function() { return /* binding */ signInUser; },
/* harmony export */   signOutUser: function() { return /* binding */ signOutUser; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"1be3c4042f95ee8362b464d4fd61a45207c21aa9":"signOutUser","41f09e8dffc0020d63a47c23d0df6a56a23808ac":"getUserByEmail","575226a09bca9415f2acbbeaf9c3755dca83d342":"signInUser","a7d1ec90ff72b56358f177c3488817696d351386":"getUserById","b95a27d18aa37bfb34c4ac398f24d31ca6d68d06":"registerUser"} */ var getUserById = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("a7d1ec90ff72b56358f177c3488817696d351386");

var signInUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("575226a09bca9415f2acbbeaf9c3755dca83d342");
var signOutUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("1be3c4042f95ee8362b464d4fd61a45207c21aa9");
var registerUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("b95a27d18aa37bfb34c4ac398f24d31ca6d68d06");
var getUserByEmail = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("41f09e8dffc0020d63a47c23d0df6a56a23808ac");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/components/navbar/UserMenu.tsx":
/*!************************************************!*\
  !*** ./src/app/components/navbar/UserMenu.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-3YEK3JGC.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/avatar/dist/chunk-QXREVWCS.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/menu/dist/chunk-EEKZGUSR.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/authActions */ \"(app-pages-browser)/./src/app/actions/authActions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction UserMenu(param) {\n    let { user } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.dropdown_default, {\n        placement: \"bottom-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.dropdown_trigger_default, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.avatar_default, {\n                    isBordered: true,\n                    as: \"button\",\n                    className: \"transition-transform\",\n                    name: (user === null || user === void 0 ? void 0 : user.name) || \"user avatar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.dropdown_menu_default, {\n                variant: \"flat\",\n                \"aria-label\": \"User Actions Menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.menu_section_base_default, {\n                        showDivider: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.menu_item_base_default, {\n                            isReadOnly: true,\n                            as: \"span\",\n                            className: \"h-14 flex flex-row\",\n                            \"aria-label\": \"username\",\n                            children: [\n                                \"Sign in as \",\n                                user === null || user === void 0 ? void 0 : user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.menu_item_base_default, {\n                        as: next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                        href: \"members/edit\",\n                        children: \"Edit Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.menu_item_base_default, {\n                        color: \"danger\",\n                        onClick: async ()=>(0,_actions_authActions__WEBPACK_IMPORTED_MODULE_3__.signOutUser)(),\n                        children: \"Log Out\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Codepolitan\\\\nextmatch\\\\src\\\\app\\\\components\\\\navbar\\\\UserMenu.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = UserMenu;\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvVXNlck1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMkI7QUFHRTtBQUNIO0FBQzhCO0FBS3pDLFNBQVNTLFNBQVMsS0FBZTtRQUFmLEVBQUVDLElBQUksRUFBUyxHQUFmO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBUUE7UUFBQ1UsV0FBVTs7MEJBQ2xCLDhEQUFDTix1RUFBZUE7MEJBQ2QsNEVBQUNMLDZEQUFNQTtvQkFDTFksVUFBVTtvQkFDVkMsSUFBRztvQkFDSEMsV0FBVTtvQkFDVkMsTUFBTUwsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNSyxJQUFJLEtBQUk7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ1osb0VBQVlBO2dCQUFDYSxTQUFRO2dCQUFPQyxjQUFXOztrQ0FDdEMsOERBQUNiLHdFQUFlQTt3QkFBQ2MsV0FBVztrQ0FDMUIsNEVBQUNoQixxRUFBWUE7NEJBQ1hpQixVQUFVOzRCQUNWTixJQUFHOzRCQUNIQyxXQUFVOzRCQUNWRyxjQUFXOztnQ0FBVztnQ0FDVlAsaUJBQUFBLDJCQUFBQSxLQUFNSyxJQUFJOzs7Ozs7Ozs7Ozs7a0NBRzFCLDhEQUFDYixxRUFBWUE7d0JBQUNXLElBQUlQLGlEQUFJQTt3QkFBRWMsTUFBSztrQ0FBZTs7Ozs7O2tDQUc1Qyw4REFBQ2xCLHFFQUFZQTt3QkFBQ21CLE9BQU07d0JBQVNDLFNBQVMsVUFBWWQsaUVBQVdBO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekU7S0E5QndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL1VzZXJNZW51LnRzeD8zOGU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEF2YXRhcixcclxuICBEcm9wZG93bixcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duU2VjdGlvbixcclxuICBEcm9wZG93blRyaWdnZXIsXHJcbn0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzaWduT3V0VXNlciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgdXNlcjogU2Vzc2lvbltcInVzZXJcIl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTWVudSh7IHVzZXIgfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duIHBsYWNlbWVudD1cImJvdHRvbS1lbmRcIj5cclxuICAgICAgPERyb3Bkb3duVHJpZ2dlcj5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBpc0JvcmRlcmVkXHJcbiAgICAgICAgICBhcz1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXHJcbiAgICAgICAgICBuYW1lPXt1c2VyPy5uYW1lIHx8IFwidXNlciBhdmF0YXJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Ryb3Bkb3duVHJpZ2dlcj5cclxuICAgICAgPERyb3Bkb3duTWVudSB2YXJpYW50PVwiZmxhdFwiIGFyaWEtbGFiZWw9XCJVc2VyIEFjdGlvbnMgTWVudVwiPlxyXG4gICAgICAgIDxEcm9wZG93blNlY3Rpb24gc2hvd0RpdmlkZXI+XHJcbiAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgIGlzUmVhZE9ubHlcclxuICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCBmbGV4IGZsZXgtcm93XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgIFNpZ24gaW4gYXMge3VzZXI/Lm5hbWV9XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICA8L0Ryb3Bkb3duU2VjdGlvbj5cclxuICAgICAgICA8RHJvcGRvd25JdGVtIGFzPXtMaW5rfSBocmVmPVwibWVtYmVycy9lZGl0XCI+XHJcbiAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICA8RHJvcGRvd25JdGVtIGNvbG9yPVwiZGFuZ2VyXCIgb25DbGljaz17YXN5bmMgKCkgPT4gc2lnbk91dFVzZXIoKX0+XHJcbiAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJEcm9wZG93biIsIkRyb3Bkb3duSXRlbSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duU2VjdGlvbiIsIkRyb3Bkb3duVHJpZ2dlciIsIkxpbmsiLCJSZWFjdCIsInNpZ25PdXRVc2VyIiwiVXNlck1lbnUiLCJ1c2VyIiwicGxhY2VtZW50IiwiaXNCb3JkZXJlZCIsImFzIiwiY2xhc3NOYW1lIiwibmFtZSIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIiwic2hvd0RpdmlkZXIiLCJpc1JlYWRPbmx5IiwiaHJlZiIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/navbar/UserMenu.tsx\n"));

/***/ })

});