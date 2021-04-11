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
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "flex-1 text-2xl text-left bg-green-500 p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Cookie Stand Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-2 col-start-1 col-span-1 ml-8",
          "for": "location",
          children: "Location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-2 col-start-2 col-span-7 text-sm mr-4",
          name: "location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-1 col-span-2 text-sm text-center",
          "for": "min_cust",
          children: "Minimum Customers Per Hour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "min_cust"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-3 col-span-2 text-sm text-center",
          "for": "max_cust",
          children: "Maximum Customers Per Hour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "max_cust"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "row-start-3 col-start-5 col-span-2 text-sm text-center",
          "for": "avg_per",
          children: "Average Cookies Per Sale"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4",
          name: "avg_per"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "row-start-3 col-start-7 col-span-2 row-span-2 bg-green-400 mr-4 ml-2 mb-3 mt-4",
          children: "Create"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center mb-4",
        children: "Report Table Coming Soon..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "my-3 text-center",
        children: [" \"location\":\"", location, "\", \"minCustomers\":", minCust, ", \"maxCustomers\":", maxCust, ", \"avgCookies\":", avgCookies, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "p-4 pt-2 bg-green-500 text-xs",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-6 pt-1",
        children: "\xA9 || Code Fellows || 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIm1pbkN1c3QiLCJzZXRNaW5DdXN0IiwibWF4Q3VzdCIsInNldE1heEN1c3QiLCJhdmdDb29raWVzIiwic2V0QXZnQ29va2llcyIsImZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibWluX2N1c3QiLCJtYXhfY3VzdCIsImF2Z19wZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFRUMsc0RBQVEsQ0FBQyxlQUFELENBRlY7QUFBQSxNQUV2QkMsUUFGdUI7QUFBQSxNQUViQyxXQUZhOztBQUFBLG1CQUdBRixzREFBUSxDQUFDLG9CQUFELENBSFI7QUFBQSxNQUd2QkcsT0FIdUI7QUFBQSxNQUdkQyxVQUhjOztBQUFBLG1CQUlBSixzREFBUSxDQUFDLG9CQUFELENBSlI7QUFBQSxNQUl2QkssT0FKdUI7QUFBQSxNQUlkQyxVQUpjOztBQUFBLG1CQUtNTixzREFBUSxDQUFDLDJCQUFELENBTGQ7QUFBQSxNQUt2Qk8sVUFMdUI7QUFBQSxNQUtYQyxhQUxXOztBQU83QixXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUN6QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FULGVBQVcsQ0FBQ1EsS0FBSyxDQUFDRSxNQUFOLENBQWFYLFFBQWIsQ0FBc0JZLEtBQXZCLENBQVg7QUFDQVQsY0FBVSxDQUFDTSxLQUFLLENBQUNFLE1BQU4sQ0FBYUUsUUFBYixDQUFzQkQsS0FBdkIsQ0FBVjtBQUNBUCxjQUFVLENBQUNJLEtBQUssQ0FBQ0UsTUFBTixDQUFhRyxRQUFiLENBQXNCRixLQUF2QixDQUFWO0FBQ0FMLGlCQUFhLENBQUNFLEtBQUssQ0FBQ0UsTUFBTixDQUFhSSxPQUFiLENBQXFCSCxLQUF0QixDQUFiO0FBQ0Q7O0FBR0Qsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsRUFBbkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFRLGVBQVMsRUFBQyw0Q0FBbEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVdFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQUEsOEJBQ0E7QUFBTSxnQkFBUSxFQUFFSixXQUFoQjtBQUE2QixpQkFBUyxFQUFDLHNEQUF2QztBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxvQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLG1CQUFTLEVBQUMseUNBQWpCO0FBQTJELGlCQUFJLFVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBTyxtQkFBUyxFQUFDLGlEQUFqQjtBQUFtRSxjQUFJLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQU8sbUJBQVMsRUFBQyx3REFBakI7QUFBMEUsaUJBQUksVUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFPLG1CQUFTLEVBQUMsMkRBQWpCO0FBQTZFLGNBQUksRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBTyxtQkFBUyxFQUFDLHdEQUFqQjtBQUEwRSxpQkFBSSxVQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQU9FO0FBQU8sbUJBQVMsRUFBQywyREFBakI7QUFBNkUsY0FBSSxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFRRTtBQUFPLG1CQUFTLEVBQUMsd0RBQWpCO0FBQTBFLGlCQUFJLFNBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBU0U7QUFBTyxtQkFBUyxFQUFDLDJEQUFqQjtBQUE2RSxjQUFJLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFO0FBQVEsbUJBQVMsRUFBQyxnRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFlQTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmQSxlQWdCQTtBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBQSx1Q0FBOENSLFFBQTlDLDJCQUEwRUUsT0FBMUUseUJBQW9HRSxPQUFwRyx1QkFBNEhFLFVBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWdDRTtBQUFRLGVBQVMsRUFBQywrQkFBbEI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7O0dBdkR1QlIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YWVjZjE0MWE5ODE1MDlkMjI1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0W2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnTG9jYXRpb24gSGVyZScpXG4gIGNvbnN0W21pbkN1c3QsIHNldE1pbkN1c3RdID0gdXNlU3RhdGUoJ01pbiBDdXN0b21lcnMgSGVyZScpXG4gIGNvbnN0W21heEN1c3QsIHNldE1heEN1c3RdID0gdXNlU3RhdGUoJ01heCBDdXN0b21lcnMgSGVyZScpXG4gIGNvbnN0W2F2Z0Nvb2tpZXMsIHNldEF2Z0Nvb2tpZXNdID0gdXNlU3RhdGUoJ0F2ZXJhZ2UgQ29va2llcyBTb2xkIEhlcmUnKVxuXG4gIGZ1bmN0aW9uIGZvcm1IYW5kbGVyKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC5sb2NhdGlvbi52YWx1ZSlcbiAgICBzZXRNaW5DdXN0KGV2ZW50LnRhcmdldC5taW5fY3VzdC52YWx1ZSlcbiAgICBzZXRNYXhDdXN0KGV2ZW50LnRhcmdldC5tYXhfY3VzdC52YWx1ZSlcbiAgICBzZXRBdmdDb29raWVzKGV2ZW50LnRhcmdldC5hdmdfcGVyLnZhbHVlKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db29raWUgU3RhbmQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC0yeGwgdGV4dC1sZWZ0IGJnLWdyZWVuLTUwMCBwLTRcIj5cbiAgICAgICAgPGgxPkNvb2tpZSBTdGFuZCBBZG1pbjwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibS04XCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybUhhbmRsZXJ9IGNsYXNzTmFtZT1cIiBncmlkIGdhcC0xIGJnLWdyZWVuLTIwMCByb3VuZGVkLWxnIGdyaWQtY29scy04IG1iLTRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J2NvbC1zdGFydC00IGNvbC1zcGFuLTIgdGV4dC14bCBtLTInPkNyZWF0ZSBDb29raWUgU3RhbmQ8L2xlZ2VuZD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTIgY29sLXN0YXJ0LTEgY29sLXNwYW4tMSBtbC04JyBmb3I9J2xvY2F0aW9uJz5Mb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC0yIGNvbC1zdGFydC0yIGNvbC1zcGFuLTcgdGV4dC1zbSBtci00JyBuYW1lPSdsb2NhdGlvbic+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTEgY29sLXNwYW4tMiB0ZXh0LXNtIHRleHQtY2VudGVyJyBmb3I9J21pbl9jdXN0Jz5NaW5pbXVtIEN1c3RvbWVycyBQZXIgSG91cjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC00IGNvbC1zdGFydC0xIGNvbC1zcGFuLTIgdGV4dC1zbSBtci00IG1sLTQgbWItNCcgbmFtZT0nbWluX2N1c3QnPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC0zIGNvbC1zcGFuLTIgdGV4dC1zbSB0ZXh0LWNlbnRlcicgZm9yPSdtYXhfY3VzdCc+TWF4aW11bSBDdXN0b21lcnMgUGVyIEhvdXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtNCBjb2wtc3RhcnQtMyBjb2wtc3Bhbi0yIHRleHQtc20gbXItNCBtbC00IG1iLTQnIG5hbWU9J21heF9jdXN0Jz48L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMyBjb2wtc3RhcnQtNSBjb2wtc3Bhbi0yIHRleHQtc20gdGV4dC1jZW50ZXInIGZvcj0nYXZnX3Blcic+QXZlcmFnZSBDb29raWVzIFBlciBTYWxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTQgY29sLXN0YXJ0LTUgY29sLXNwYW4tMiB0ZXh0LXNtIG1yLTQgbWwtNCBtYi00JyBuYW1lPSdhdmdfcGVyJz48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTcgY29sLXNwYW4tMiByb3ctc3Bhbi0yIGJnLWdyZWVuLTQwMCBtci00IG1sLTIgbWItMyBtdC00Jz5DcmVhdGU8L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuICAgICAgXG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi00Jz5SZXBvcnQgVGFibGUgQ29taW5nIFNvb24uLi48L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LWNlbnRlclwiPiBcImxvY2F0aW9uXCI6XCJ7bG9jYXRpb259XCIsIFwibWluQ3VzdG9tZXJzXCI6e21pbkN1c3R9LCBcIm1heEN1c3RvbWVyc1wiOnttYXhDdXN0fSwgXCJhdmdDb29raWVzXCI6e2F2Z0Nvb2tpZXN9IDwvcD5cbiAgICBcbiAgICAgIDwvbWFpbj5cblxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNCBwdC0yIGJnLWdyZWVuLTUwMCB0ZXh0LXhzXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtNiBwdC0xJz4mY29weTsgfHwgQ29kZSBGZWxsb3dzIHx8IDIwMjE8L3A+XG5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==