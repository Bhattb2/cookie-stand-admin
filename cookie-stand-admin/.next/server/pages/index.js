module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/budbhatt/401-Python/cookie_stand/cookie-stand-admin/pages/index.js";
 // import { hours } from '../data'


function Home() {
  const {
    0: location,
    1: setLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Location Here');
  const {
    0: minCust,
    1: setMinCust
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Min Customers Here');
  const {
    0: maxCust,
    1: setMaxCust
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Max Customers Here');
  const {
    0: avgCookies,
    1: setAvgCookies
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Average Cookies Sold Here');
  const {
    0: noTable,
    1: setNoTable
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('No Cookie Stands Aailable');
  const {
    0: on,
    1: setOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: tableLocation,
    1: setTableLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: tableTotals,
    1: setTabelTotals
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: allHours,
    1: setHours
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: hardcodedCookieData,
    1: setHardCoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: cookieData,
    1: setCookieData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);

  function formHandler(event) {
    event.preventDefault();
    const savedLocation = event.target.location.value;
    const minCust = event.target.min_cust.value;
    const maxCust = event.target.max_cust.value;
    const avgCookies = event.target.avg_per.value; // setLocation(event.target.location.value)
    // setMinCust(event.target.min_cust.value)
    // setMaxCust(event.target.max_cust.value)
    // setAvgCookies(event.target.avg_per.value)

    setOn(true);
    setHours(hours);
    setTableLocation('location');
    setTabelTotals('Totals');
    setNoTable('');
    setHardCoded(['Calexico', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]);
    const newCookieData = {
      newLocation: savedLocation,
      min: minCust,
      max: maxCust,
      avg: avgCookies,
      count: cookieData.length
    };
    setCookieData([...cookieData, newCookieData]);
    console.log('set cookie data: ', newCookieData);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cookie Stand"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "flex-1 text-2xl text-left bg-green-500 p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Cookie Stand Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "m-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Table, {
        allHours: allHours,
        cookieData: cookieData,
        hardcoded: hardcodedCookieData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center mb-4",
        children: noTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);

  function Header(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "flex-1 text-3xl text-left bg-green-400 p-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this);
  }

  function Form(props) {}
}
{
  /* <form onSubmit={formHandler} className=" grid gap-1 bg-green-200 rounded-lg grid-cols-8 mb-4">
   <legend className='col-start-4 col-span-2 text-xl m-2'>Create Cookie Stand</legend>
   <label className='row-start-2 col-start-1 col-span-1 ml-8' for='location'>Location</label>
   <input className='row-start-2 col-start-2 col-span-7 text-sm mr-4' name='location'></input>
   <label className='row-start-3 col-start-1 col-span-2 text-sm text-center' for='min_cust'>Minimum Customers Per Hour</label>
   <input className='row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4' name='min_cust'></input>
   <label className='row-start-3 col-start-3 col-span-2 text-sm text-center' for='max_cust'>Maximum Customers Per Hour</label>
   <input className='row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4' name='max_cust'></input>
   <label className='row-start-3 col-start-5 col-span-2 text-sm text-center' for='avg_per'>Average Cookies Per Sale</label>
   <input className='row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4' name='avg_per'></input>
   <button className='row-start-3 col-start-7 col-span-2 row-span-2 bg-green-400 mr-4 ml-2 mb-3 mt-4'>Create</button>
  </form> */
} //       <h2 className='text-center mb-4'>Report Table Coming Soon...</h2>
//       <p className="my-3 text-center"> "location":"{location}", "minCustomers":{minCust}, "maxCustomers":{maxCust}, "avgCookies":{avgCookies} </p>
//       {/* </main> */}
//       <footer className="p-4 pt-2 bg-green-500 text-xs">
//         <p className='ml-6 pt-1'>&copy; || Code Fellows || 2021</p>
//       </footer>
// }

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZVN0YXRlIiwibWluQ3VzdCIsInNldE1pbkN1c3QiLCJtYXhDdXN0Iiwic2V0TWF4Q3VzdCIsImF2Z0Nvb2tpZXMiLCJzZXRBdmdDb29raWVzIiwibm9UYWJsZSIsInNldE5vVGFibGUiLCJvbiIsInNldE9uIiwidGFibGVMb2NhdGlvbiIsInNldFRhYmxlTG9jYXRpb24iLCJ0YWJsZVRvdGFscyIsInNldFRhYmVsVG90YWxzIiwiYWxsSG91cnMiLCJzZXRIb3VycyIsImhhcmRjb2RlZENvb2tpZURhdGEiLCJzZXRIYXJkQ29kZWQiLCJjb29raWVEYXRhIiwic2V0Q29va2llRGF0YSIsImZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVkTG9jYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbl9jdXN0IiwibWF4X2N1c3QiLCJhdmdfcGVyIiwiaG91cnMiLCJuZXdDb29raWVEYXRhIiwibmV3TG9jYXRpb24iLCJtaW4iLCJtYXgiLCJhdmciLCJjb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJIZWFkZXIiLCJwcm9wcyIsInRpdGxlIiwiRm9ybSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWdCRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBc0JBLFdBQVNpQyxNQUFULENBQWdCQyxLQUFoQixFQUFzQjtBQUNwQix3QkFDRTtBQUFRLGVBQVMsRUFBQyw0Q0FBbEI7QUFBQSw2QkFDQTtBQUFBLGtCQUFLQSxLQUFLLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU1EOztBQUVELFdBQVNDLElBQVQsQ0FBY0YsS0FBZCxFQUFvQixDQUFFO0FBQ3JCO0FBSUc7QUFBQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUIsQyxDQUVqQjtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQSxJOzs7Ozs7Ozs7OztBQ2pIQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuLy8gaW1wb3J0IHsgaG91cnMgfSBmcm9tICcuLi9kYXRhJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3RbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCdMb2NhdGlvbiBIZXJlJylcbiAgY29uc3RbbWluQ3VzdCwgc2V0TWluQ3VzdF0gPSB1c2VTdGF0ZSgnTWluIEN1c3RvbWVycyBIZXJlJylcbiAgY29uc3RbbWF4Q3VzdCwgc2V0TWF4Q3VzdF0gPSB1c2VTdGF0ZSgnTWF4IEN1c3RvbWVycyBIZXJlJylcbiAgY29uc3RbYXZnQ29va2llcywgc2V0QXZnQ29va2llc10gPSB1c2VTdGF0ZSgnQXZlcmFnZSBDb29raWVzIFNvbGQgSGVyZScpXG4gIGNvbnN0W25vVGFibGUsIHNldE5vVGFibGVdID0gdXNlU3RhdGUoJ05vIENvb2tpZSBTdGFuZHMgQWFpbGFibGUnKTtcbiAgY29uc3Rbb24sIHNldE9uXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdFt0YWJsZUxvY2F0aW9uLCBzZXRUYWJsZUxvY2F0aW9uXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbdGFibGVUb3RhbHMsIHNldFRhYmVsVG90YWxzXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbYWxsSG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbaGFyZGNvZGVkQ29va2llRGF0YSwgc2V0SGFyZENvZGVkXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdFtjb29raWVEYXRhLCBzZXRDb29raWVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBmb3JtSGFuZGxlcihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzYXZlZExvY2F0aW9uID0gZXZlbnQudGFyZ2V0LmxvY2F0aW9uLnZhbHVlXG4gICAgY29uc3QgbWluQ3VzdCA9IGV2ZW50LnRhcmdldC5taW5fY3VzdC52YWx1ZVxuICAgIGNvbnN0IG1heEN1c3QgPSBldmVudC50YXJnZXQubWF4X2N1c3QudmFsdWVcbiAgICBjb25zdCBhdmdDb29raWVzID0gZXZlbnQudGFyZ2V0LmF2Z19wZXIudmFsdWVcblxuICAgIC8vIHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC5sb2NhdGlvbi52YWx1ZSlcbiAgICAvLyBzZXRNaW5DdXN0KGV2ZW50LnRhcmdldC5taW5fY3VzdC52YWx1ZSlcbiAgICAvLyBzZXRNYXhDdXN0KGV2ZW50LnRhcmdldC5tYXhfY3VzdC52YWx1ZSlcbiAgICAvLyBzZXRBdmdDb29raWVzKGV2ZW50LnRhcmdldC5hdmdfcGVyLnZhbHVlKVxuXG4gICAgc2V0T24odHJ1ZSlcbiAgICBzZXRIb3Vycyhob3VycylcbiAgICBzZXRUYWJsZUxvY2F0aW9uKCdsb2NhdGlvbicpXG4gICAgc2V0VGFiZWxUb3RhbHMoJ1RvdGFscycpXG4gICAgc2V0Tm9UYWJsZSgnJylcbiAgICBzZXRIYXJkQ29kZWQoWydDYWxleGljbycsIDQ4LCA0MiwgMzAsIDI0LCA0MiwgMjQsIDM2LCA0MiwgNDIsIDQ4LCAzNiwgNDIsIDI0LCAzNiwgNTE2XSlcblxuICAgIGNvbnN0IG5ld0Nvb2tpZURhdGEgPSB7XG4gICAgICBuZXdMb2NhdGlvbjogc2F2ZWRMb2NhdGlvbixcbiAgICAgIG1pbjogbWluQ3VzdCxcbiAgICAgIG1heDogbWF4Q3VzdCxcbiAgICAgIGF2ZzogYXZnQ29va2llcyxcbiAgICAgIGNvdW50OiBjb29raWVEYXRhLmxlbmd0aCxcbiAgICB9XG5cbiAgICBzZXRDb29raWVEYXRhKFsuLi5jb29raWVEYXRhLCBuZXdDb29raWVEYXRhXSlcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvb2tpZSBkYXRhOiAnLCBuZXdDb29raWVEYXRhKVxuICB9XG5cblxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29va2llIFN0YW5kPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtMnhsIHRleHQtbGVmdCBiZy1ncmVlbi01MDAgcC00XCI+XG4gICAgICAgIDxoMT5Db29raWUgU3RhbmQgQWRtaW48L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm0tOFwiPlxuICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8VGFibGUgYWxsSG91cnMgPXsgYWxsSG91cnMgfSBjb29raWVEYXRhPXsgY29va2llRGF0YSB9IGhhcmRjb2RlZD17IGhhcmRjb2RlZENvb2tpZURhdGEgfSAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi00Jz57bm9UYWJsZX08L2gyPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgICBcbiAgICA8L3NlY3Rpb24+XG4gIClcblxuICBmdW5jdGlvbiBIZWFkZXIocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmbGV4LTEgdGV4dC0zeGwgdGV4dC1sZWZ0IGJnLWdyZWVuLTQwMCBwLTInPlxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBGb3JtKHByb3BzKXt9XG4gIH1cblxuXG5cbiAgICAgIHsvKiA8Zm9ybSBvblN1Ym1pdD17Zm9ybUhhbmRsZXJ9IGNsYXNzTmFtZT1cIiBncmlkIGdhcC0xIGJnLWdyZWVuLTIwMCByb3VuZGVkLWxnIGdyaWQtY29scy04IG1iLTRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J2NvbC1zdGFydC00IGNvbC1zcGFuLTIgdGV4dC14bCBtLTInPkNyZWF0ZSBDb29raWUgU3RhbmQ8L2xlZ2VuZD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTIgY29sLXN0YXJ0LTEgY29sLXNwYW4tMSBtbC04JyBmb3I9J2xvY2F0aW9uJz5Mb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC0yIGNvbC1zdGFydC0yIGNvbC1zcGFuLTcgdGV4dC1zbSBtci00JyBuYW1lPSdsb2NhdGlvbic+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTEgY29sLXNwYW4tMiB0ZXh0LXNtIHRleHQtY2VudGVyJyBmb3I9J21pbl9jdXN0Jz5NaW5pbXVtIEN1c3RvbWVycyBQZXIgSG91cjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC00IGNvbC1zdGFydC0xIGNvbC1zcGFuLTIgdGV4dC1zbSBtci00IG1sLTQgbWItNCcgbmFtZT0nbWluX2N1c3QnPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC0zIGNvbC1zcGFuLTIgdGV4dC1zbSB0ZXh0LWNlbnRlcicgZm9yPSdtYXhfY3VzdCc+TWF4aW11bSBDdXN0b21lcnMgUGVyIEhvdXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtNCBjb2wtc3RhcnQtMyBjb2wtc3Bhbi0yIHRleHQtc20gbXItNCBtbC00IG1iLTQnIG5hbWU9J21heF9jdXN0Jz48L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMyBjb2wtc3RhcnQtNSBjb2wtc3Bhbi0yIHRleHQtc20gdGV4dC1jZW50ZXInIGZvcj0nYXZnX3Blcic+QXZlcmFnZSBDb29raWVzIFBlciBTYWxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTQgY29sLXN0YXJ0LTUgY29sLXNwYW4tMiB0ZXh0LXNtIG1yLTQgbWwtNCBtYi00JyBuYW1lPSdhdmdfcGVyJz48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTcgY29sLXNwYW4tMiByb3ctc3Bhbi0yIGJnLWdyZWVuLTQwMCBtci00IG1sLTIgbWItMyBtdC00Jz5DcmVhdGU8L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPiAqL31cbiAgICAgIFxuLy8gICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNCc+UmVwb3J0IFRhYmxlIENvbWluZyBTb29uLi4uPC9oMj5cbi8vICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTMgdGV4dC1jZW50ZXJcIj4gXCJsb2NhdGlvblwiOlwie2xvY2F0aW9ufVwiLCBcIm1pbkN1c3RvbWVyc1wiOnttaW5DdXN0fSwgXCJtYXhDdXN0b21lcnNcIjp7bWF4Q3VzdH0sIFwiYXZnQ29va2llc1wiOnthdmdDb29raWVzfSA8L3A+XG4gICAgXG4vLyAgICAgICB7LyogPC9tYWluPiAqL31cblxuXG4vLyAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNCBwdC0yIGJnLWdyZWVuLTUwMCB0ZXh0LXhzXCI+XG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtNiBwdC0xJz4mY29weTsgfHwgQ29kZSBGZWxsb3dzIHx8IDIwMjE8L3A+XG5cbi8vICAgICAgIDwvZm9vdGVyPlxuLy8gfVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9