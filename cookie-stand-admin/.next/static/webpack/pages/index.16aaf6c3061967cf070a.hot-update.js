webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/budbhatt/401-Python/cookie_stand/cookie-stand-admin/pages/index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Location Here'),
      location = _useState[0],
      setLocation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Min Customers Here'),
      minCust = _useState2[0],
      setMinCust = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Max Customers Here'),
      maxCust = _useState3[0],
      setMaxCust = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Average Cookies Sold Here'),
      avgCookies = _useState4[0],
      setAvgCookies = _useState4[1];

  function formHandler(event) {
    event.preventDefault();
    setLocation(event.target.location.value);
    setMinCust(event.target.min_cust.value);
    setMaxCust(event.target.max_cust.value);
    setAvgCookies(event.target.avg_per.value);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cookie Stand"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "flex-1 text-2xl text-left bg-green-500 p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Cookie Stand Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "m-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formHandler,
        className: " grid gap-1 bg-green-200 rounded-lg grid-cols-8 mb-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          className: "col-start-4 col-span-2 text-xl m-2",
          children: "Create Cookie Stand"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-2 col-start-1 col-span-1 ml-8",
          "for": "location",
          children: "Location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-2 col-start-2 col-span-7 text-sm mr-4",
          name: "location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-1 col-span-2 text-sm text-center",
          "for": "min_cust",
          children: "Minimum Customers Per Hour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "min_cust"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-3 col-span-2 text-sm text-center",
          "for": "max_cust",
          children: "Maximum Customers Per Hour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "max_cust"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-5 col-span-2 text-sm text-center",
          "for": "avg_per",
          children: "Average Cookies Per Sale"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "avg_per"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "row-start-3 col-start-7 col-span-2 row-span-2 bg-green-400 mr-4 ml-2 mb-3 mt-4",
          children: "Create"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center mb-4",
        children: "Report Table Coming Soon..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "my-3 text-center",
        children: [" \"location\":\"", location, "\", \"minCustomers\":", minCust, ", \"maxCustomers\":", maxCust, ", \"avgCookies\":", avgCookies, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "p-4 pt-2 bg-green-500 text-xs",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-6 pt-1",
        children: "\xA9 || Code Fellows || 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Home, "7GN9s2XGNI9qEhs7LlhL4omusFQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIm1pbkN1c3QiLCJzZXRNaW5DdXN0IiwibWF4Q3VzdCIsInNldE1heEN1c3QiLCJhdmdDb29raWVzIiwic2V0QXZnQ29va2llcyIsImZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibWluX2N1c3QiLCJtYXhfY3VzdCIsImF2Z19wZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLGVBQUQsQ0FGVjtBQUFBLE1BRXZCQyxRQUZ1QjtBQUFBLE1BRWJDLFdBRmE7O0FBQUEsbUJBR0FGLHNEQUFRLENBQUMsb0JBQUQsQ0FIUjtBQUFBLE1BR3ZCRyxPQUh1QjtBQUFBLE1BR2RDLFVBSGM7O0FBQUEsbUJBSUFKLHNEQUFRLENBQUMsb0JBQUQsQ0FKUjtBQUFBLE1BSXZCSyxPQUp1QjtBQUFBLE1BSWRDLFVBSmM7O0FBQUEsbUJBS01OLHNEQUFRLENBQUMsMkJBQUQsQ0FMZDtBQUFBLE1BS3ZCTyxVQUx1QjtBQUFBLE1BS1hDLGFBTFc7O0FBTzdCLFdBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQ3pCQSxTQUFLLENBQUNDLGNBQU47QUFDQVQsZUFBVyxDQUFDUSxLQUFLLENBQUNFLE1BQU4sQ0FBYVgsUUFBYixDQUFzQlksS0FBdkIsQ0FBWDtBQUNBVCxjQUFVLENBQUNNLEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxRQUFiLENBQXNCRCxLQUF2QixDQUFWO0FBQ0FQLGNBQVUsQ0FBQ0ksS0FBSyxDQUFDRSxNQUFOLENBQWFHLFFBQWIsQ0FBc0JGLEtBQXZCLENBQVY7QUFDQUwsaUJBQWEsQ0FBQ0UsS0FBSyxDQUFDRSxNQUFOLENBQWFJLE9BQWIsQ0FBcUJILEtBQXRCLENBQWI7QUFDRDs7QUFHRCxzQkFDRTtBQUFTLGFBQVMsRUFBQyxFQUFuQjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQVEsZUFBUyxFQUFDLDRDQUFsQjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBV0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFBQSw4QkFDQTtBQUFNLGdCQUFRLEVBQUVKLFdBQWhCO0FBQTZCLGlCQUFTLEVBQUMsc0RBQXZDO0FBQUEsZ0NBQ0U7QUFBUSxtQkFBUyxFQUFDLG9DQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sbUJBQVMsRUFBQyx5Q0FBakI7QUFBMkQsaUJBQUksVUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFPLG1CQUFTLEVBQUMsaURBQWpCO0FBQW1FLGNBQUksRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBTyxtQkFBUyxFQUFDLHdEQUFqQjtBQUEwRSxpQkFBSSxVQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQU8sbUJBQVMsRUFBQywyREFBakI7QUFBNkUsY0FBSSxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRTtBQUFPLG1CQUFTLEVBQUMsd0RBQWpCO0FBQTBFLGlCQUFJLFVBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0U7QUFBTyxtQkFBUyxFQUFDLDJEQUFqQjtBQUE2RSxjQUFJLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFFO0FBQU8sbUJBQVMsRUFBQyx3REFBakI7QUFBMEUsaUJBQUksU0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFTRTtBQUFPLG1CQUFTLEVBQUMsMkRBQWpCO0FBQTZFLGNBQUksRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUU7QUFBUSxtQkFBUyxFQUFDLGdGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQWVBO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZBLGVBZ0JBO0FBQUcsaUJBQVMsRUFBQyxrQkFBYjtBQUFBLHVDQUE4Q1IsUUFBOUMsMkJBQTBFRSxPQUExRSx5QkFBb0dFLE9BQXBHLHVCQUE0SEUsVUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBZ0NFO0FBQVEsZUFBUyxFQUFDLCtCQUFsQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDs7R0F2RHVCUixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2YWFmNmMzMDYxOTY3Y2YwNzBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydHsgaG91cnMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJ0xvY2F0aW9uIEhlcmUnKVxuICBjb25zdFttaW5DdXN0LCBzZXRNaW5DdXN0XSA9IHVzZVN0YXRlKCdNaW4gQ3VzdG9tZXJzIEhlcmUnKVxuICBjb25zdFttYXhDdXN0LCBzZXRNYXhDdXN0XSA9IHVzZVN0YXRlKCdNYXggQ3VzdG9tZXJzIEhlcmUnKVxuICBjb25zdFthdmdDb29raWVzLCBzZXRBdmdDb29raWVzXSA9IHVzZVN0YXRlKCdBdmVyYWdlIENvb2tpZXMgU29sZCBIZXJlJylcblxuICBmdW5jdGlvbiBmb3JtSGFuZGxlcihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2NhdGlvbihldmVudC50YXJnZXQubG9jYXRpb24udmFsdWUpXG4gICAgc2V0TWluQ3VzdChldmVudC50YXJnZXQubWluX2N1c3QudmFsdWUpXG4gICAgc2V0TWF4Q3VzdChldmVudC50YXJnZXQubWF4X2N1c3QudmFsdWUpXG4gICAgc2V0QXZnQ29va2llcyhldmVudC50YXJnZXQuYXZnX3Blci52YWx1ZSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29va2llIFN0YW5kPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtMnhsIHRleHQtbGVmdCBiZy1ncmVlbi01MDAgcC00XCI+XG4gICAgICAgIDxoMT5Db29raWUgU3RhbmQgQWRtaW48L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm0tOFwiPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1IYW5kbGVyfSBjbGFzc05hbWU9XCIgZ3JpZCBnYXAtMSBiZy1ncmVlbi0yMDAgcm91bmRlZC1sZyBncmlkLWNvbHMtOCBtYi00XCI+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdjb2wtc3RhcnQtNCBjb2wtc3Bhbi0yIHRleHQteGwgbS0yJz5DcmVhdGUgQ29va2llIFN0YW5kPC9sZWdlbmQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0yIGNvbC1zdGFydC0xIGNvbC1zcGFuLTEgbWwtOCcgZm9yPSdsb2NhdGlvbic+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMiBjb2wtc3RhcnQtMiBjb2wtc3Bhbi03IHRleHQtc20gbXItNCcgbmFtZT0nbG9jYXRpb24nPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC0xIGNvbC1zcGFuLTIgdGV4dC1zbSB0ZXh0LWNlbnRlcicgZm9yPSdtaW5fY3VzdCc+TWluaW11bSBDdXN0b21lcnMgUGVyIEhvdXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtNCBjb2wtc3RhcnQtMSBjb2wtc3Bhbi0yIHRleHQtc20gbXItNCBtbC00IG1iLTQnIG5hbWU9J21pbl9jdXN0Jz48L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMyBjb2wtc3RhcnQtMyBjb2wtc3Bhbi0yIHRleHQtc20gdGV4dC1jZW50ZXInIGZvcj0nbWF4X2N1c3QnPk1heGltdW0gQ3VzdG9tZXJzIFBlciBIb3VyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTQgY29sLXN0YXJ0LTMgY29sLXNwYW4tMiB0ZXh0LXNtIG1yLTQgbWwtNCBtYi00JyBuYW1lPSdtYXhfY3VzdCc+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTUgY29sLXNwYW4tMiB0ZXh0LXNtIHRleHQtY2VudGVyJyBmb3I9J2F2Z19wZXInPkF2ZXJhZ2UgQ29va2llcyBQZXIgU2FsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC00IGNvbC1zdGFydC01IGNvbC1zcGFuLTIgdGV4dC1zbSBtci00IG1sLTQgbWItNCcgbmFtZT0nYXZnX3Blcic+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC03IGNvbC1zcGFuLTIgcm93LXNwYW4tMiBiZy1ncmVlbi00MDAgbXItNCBtbC0yIG1iLTMgbXQtNCc+Q3JlYXRlPC9idXR0b24+XG5cbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNCc+UmVwb3J0IFRhYmxlIENvbWluZyBTb29uLi4uPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTMgdGV4dC1jZW50ZXJcIj4gXCJsb2NhdGlvblwiOlwie2xvY2F0aW9ufVwiLCBcIm1pbkN1c3RvbWVyc1wiOnttaW5DdXN0fSwgXCJtYXhDdXN0b21lcnNcIjp7bWF4Q3VzdH0sIFwiYXZnQ29va2llc1wiOnthdmdDb29raWVzfSA8L3A+XG4gICAgXG4gICAgICA8L21haW4+XG5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwLTQgcHQtMiBiZy1ncmVlbi01MDAgdGV4dC14c1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9J21sLTYgcHQtMSc+JmNvcHk7IHx8IENvZGUgRmVsbG93cyB8fCAyMDIxPC9wPlxuXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=