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
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "m-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Table, {
        allHours: allHours,
        cookieData: cookieData,
        hardcoded: hardcodedCookieData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center mb-4",
        children: noTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 78,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this);
  }

  function Form(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: formHandler,
      className: "grid gap-1 bg-green-200 rounded-lg grid-cols-8 mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
        className: "col-start-4 col-span-2 text-xl m-2",
        children: "Create Cookie Stand"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "row-start-2 col-start-1 col-span-1 ml-8",
        for: "location",
        children: "Location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "row-start-2 col-start-2 col-span-7 text-sm mr-4",
        name: "location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "row-start-3 col-start-1 col-span-2 text-sm text-center",
        for: "min_cust",
        children: "Minimum Customers Per Hour"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4",
        name: "min_cust"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "row-start-3 col-start-3 col-span-2 text-sm text-center",
        for: "max_cust",
        children: "Maximum Customers Per Hour"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4",
        name: "max_cust"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "row-start-3 col-start-5 col-span-2 text-sm text-center",
        for: "avg_per",
        children: "Average Cookies Per Sale"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4",
        name: "avg_per"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "row-start-3 col-start-7 col-span-2 row-span-2 bg-green-400 mr-4 ml-2 mb-3 mt-4",
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this);
  }

  function Table(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "w-1/2 mx-auto my-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TableOn, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), props.allHours.map(each => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "border border-black-900",
            children: each
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 17
          }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TotalOn, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: props.hardcoded.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "border border-black-900",
            children: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this), props.cookieData.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [console.log('data is', data.newLocation), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "border border-black-900",
            children: data.newLocation
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "border border-black-900",
            children: data.min
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "border border-black-900",
            children: data.max
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this);
  }

  function TableOn(props) {
    if (on) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
        className: "border border-black-900",
        children: tableLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this);
    } else {
      return '';
    }
  }

  function TotalOn(props) {
    if (on) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
        className: "border border-black-900",
        children: tabelTotals
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, this);
    } else {
      return '';
    }
  }

  function Footer(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "p-4 pt-2 bg-green-500 text-xs",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "ml-6 pt-1",
        children: "\xA9 || Code Fellows || 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this);
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZVN0YXRlIiwibWluQ3VzdCIsInNldE1pbkN1c3QiLCJtYXhDdXN0Iiwic2V0TWF4Q3VzdCIsImF2Z0Nvb2tpZXMiLCJzZXRBdmdDb29raWVzIiwibm9UYWJsZSIsInNldE5vVGFibGUiLCJvbiIsInNldE9uIiwidGFibGVMb2NhdGlvbiIsInNldFRhYmxlTG9jYXRpb24iLCJ0YWJsZVRvdGFscyIsInNldFRhYmVsVG90YWxzIiwiYWxsSG91cnMiLCJzZXRIb3VycyIsImhhcmRjb2RlZENvb2tpZURhdGEiLCJzZXRIYXJkQ29kZWQiLCJjb29raWVEYXRhIiwic2V0Q29va2llRGF0YSIsImZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVkTG9jYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbl9jdXN0IiwibWF4X2N1c3QiLCJhdmdfcGVyIiwiaG91cnMiLCJuZXdDb29raWVEYXRhIiwibmV3TG9jYXRpb24iLCJtaW4iLCJtYXgiLCJhdmciLCJjb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJIZWFkZXIiLCJwcm9wcyIsInRpdGxlIiwiRm9ybSIsIlRhYmxlIiwibWFwIiwiZWFjaCIsImhhcmRjb2RlZCIsImRhdGEiLCJUYWJsZU9uIiwiVG90YWxPbiIsInRhYmVsVG90YWxzIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QWxCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDaEtELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG4vLyBpbXBvcnQgeyBob3VycyB9IGZyb20gJy4uL2RhdGEnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3RbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCdMb2NhdGlvbiBIZXJlJylcbiAgY29uc3RbbWluQ3VzdCwgc2V0TWluQ3VzdF0gPSB1c2VTdGF0ZSgnTWluIEN1c3RvbWVycyBIZXJlJylcbiAgY29uc3RbbWF4Q3VzdCwgc2V0TWF4Q3VzdF0gPSB1c2VTdGF0ZSgnTWF4IEN1c3RvbWVycyBIZXJlJylcbiAgY29uc3RbYXZnQ29va2llcywgc2V0QXZnQ29va2llc10gPSB1c2VTdGF0ZSgnQXZlcmFnZSBDb29raWVzIFNvbGQgSGVyZScpXG4gIGNvbnN0W25vVGFibGUsIHNldE5vVGFibGVdID0gdXNlU3RhdGUoJ05vIENvb2tpZSBTdGFuZHMgQWFpbGFibGUnKTtcbiAgY29uc3Rbb24sIHNldE9uXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdFt0YWJsZUxvY2F0aW9uLCBzZXRUYWJsZUxvY2F0aW9uXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbdGFibGVUb3RhbHMsIHNldFRhYmVsVG90YWxzXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbYWxsSG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKClcbiAgY29uc3RbaGFyZGNvZGVkQ29va2llRGF0YSwgc2V0SGFyZENvZGVkXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdFtjb29raWVEYXRhLCBzZXRDb29raWVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBmb3JtSGFuZGxlcihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzYXZlZExvY2F0aW9uID0gZXZlbnQudGFyZ2V0LmxvY2F0aW9uLnZhbHVlXG4gICAgY29uc3QgbWluQ3VzdCA9IGV2ZW50LnRhcmdldC5taW5fY3VzdC52YWx1ZVxuICAgIGNvbnN0IG1heEN1c3QgPSBldmVudC50YXJnZXQubWF4X2N1c3QudmFsdWVcbiAgICBjb25zdCBhdmdDb29raWVzID0gZXZlbnQudGFyZ2V0LmF2Z19wZXIudmFsdWVcblxuICAgIC8vIHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC5sb2NhdGlvbi52YWx1ZSlcbiAgICAvLyBzZXRNaW5DdXN0KGV2ZW50LnRhcmdldC5taW5fY3VzdC52YWx1ZSlcbiAgICAvLyBzZXRNYXhDdXN0KGV2ZW50LnRhcmdldC5tYXhfY3VzdC52YWx1ZSlcbiAgICAvLyBzZXRBdmdDb29raWVzKGV2ZW50LnRhcmdldC5hdmdfcGVyLnZhbHVlKVxuXG4gICAgc2V0T24odHJ1ZSlcbiAgICBzZXRIb3Vycyhob3VycylcbiAgICBzZXRUYWJsZUxvY2F0aW9uKCdsb2NhdGlvbicpXG4gICAgc2V0VGFiZWxUb3RhbHMoJ1RvdGFscycpXG4gICAgc2V0Tm9UYWJsZSgnJylcbiAgICBzZXRIYXJkQ29kZWQoWydDYWxleGljbycsIDQ4LCA0MiwgMzAsIDI0LCA0MiwgMjQsIDM2LCA0MiwgNDIsIDQ4LCAzNiwgNDIsIDI0LCAzNiwgNTE2XSlcblxuICAgIGNvbnN0IG5ld0Nvb2tpZURhdGEgPSB7XG4gICAgICBuZXdMb2NhdGlvbjogc2F2ZWRMb2NhdGlvbixcbiAgICAgIG1pbjogbWluQ3VzdCxcbiAgICAgIG1heDogbWF4Q3VzdCxcbiAgICAgIGF2ZzogYXZnQ29va2llcyxcbiAgICAgIGNvdW50OiBjb29raWVEYXRhLmxlbmd0aCxcbiAgICB9XG5cbiAgICBzZXRDb29raWVEYXRhKFsuLi5jb29raWVEYXRhLCBuZXdDb29raWVEYXRhXSlcbiAgICBjb25zb2xlLmxvZygnc2V0IGNvb2tpZSBkYXRhOiAnLCBuZXdDb29raWVEYXRhKVxuICB9XG5cblxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29va2llIFN0YW5kPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LTJ4bCB0ZXh0LWxlZnQgYmctZ3JlZW4tNTAwIHAtNFwiPlxuICAgICAgICA8aDE+Q29va2llIFN0YW5kIEFkbWluPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtLThcIj5cbiAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgPFRhYmxlIGFsbEhvdXJzID17IGFsbEhvdXJzIH0gY29va2llRGF0YT17IGNvb2tpZURhdGEgfSBoYXJkY29kZWQ9eyBoYXJkY29kZWRDb29raWVEYXRhIH0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNCc+e25vVGFibGV9PC9oMj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgXG4gICAgPC9zZWN0aW9uPlxuICApXG5cbiAgZnVuY3Rpb24gSGVhZGVyKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZmxleC0xIHRleHQtM3hsIHRleHQtbGVmdCBiZy1ncmVlbi00MDAgcC0yJz5cbiAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gRm9ybShwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1IYW5kbGVyfSBjbGFzc05hbWU9J2dyaWQgZ2FwLTEgYmctZ3JlZW4tMjAwIHJvdW5kZWQtbGcgZ3JpZC1jb2xzLTggbWItNCc+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdjb2wtc3RhcnQtNCBjb2wtc3Bhbi0yIHRleHQteGwgbS0yJz5DcmVhdGUgQ29va2llIFN0YW5kPC9sZWdlbmQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0yIGNvbC1zdGFydC0xIGNvbC1zcGFuLTEgbWwtOCcgZm9yPSdsb2NhdGlvbic+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMiBjb2wtc3RhcnQtMiBjb2wtc3Bhbi03IHRleHQtc20gbXItNCcgbmFtZT0nbG9jYXRpb24nPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC0xIGNvbC1zcGFuLTIgdGV4dC1zbSB0ZXh0LWNlbnRlcicgZm9yPSdtaW5fY3VzdCc+TWluaW11bSBDdXN0b21lcnMgUGVyIEhvdXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtNCBjb2wtc3RhcnQtMSBjb2wtc3Bhbi0yIHRleHQtc20gbXItNCBtbC00IG1iLTQnIG5hbWU9J21pbl9jdXN0Jz48L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMyBjb2wtc3RhcnQtMyBjb2wtc3Bhbi0yIHRleHQtc20gdGV4dC1jZW50ZXInIGZvcj0nbWF4X2N1c3QnPk1heGltdW0gQ3VzdG9tZXJzIFBlciBIb3VyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTQgY29sLXN0YXJ0LTMgY29sLXNwYW4tMiB0ZXh0LXNtIG1yLTQgbWwtNCBtYi00JyBuYW1lPSdtYXhfY3VzdCc+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncm93LXN0YXJ0LTMgY29sLXN0YXJ0LTUgY29sLXNwYW4tMiB0ZXh0LXNtIHRleHQtY2VudGVyJyBmb3I9J2F2Z19wZXInPkF2ZXJhZ2UgQ29va2llcyBQZXIgU2FsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Jvdy1zdGFydC00IGNvbC1zdGFydC01IGNvbC1zcGFuLTIgdGV4dC1zbSBtci00IG1sLTQgbWItNCcgbmFtZT0nYXZnX3Blcic+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Jvdy1zdGFydC0zIGNvbC1zdGFydC03IGNvbC1zcGFuLTIgcm93LXNwYW4tMiBiZy1ncmVlbi00MDAgbXItNCBtbC0yIG1iLTMgbXQtNCc+Q3JlYXRlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG4gIFxuICBmdW5jdGlvbiBUYWJsZShwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndy0xLzIgbXgtYXV0byBteS00Jz5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8IFRhYmxlT24gLz5cbiAgICAgICAgICAgICAge3Byb3BzLmFsbEhvdXJzLm1hcChlYWNoID0+KFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItYmxhY2stOTAwJz57IGVhY2ggfTwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8IFRvdGFsT24gLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7cHJvcHMuaGFyZGNvZGVkLm1hcChkYXRhID0+KFxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ibGFjay05MDAnPntkYXRhfTwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAge3Byb3BzLmNvb2tpZURhdGEubWFwKGRhdGEgPT4oXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdkYXRhIGlzJywgZGF0YS5uZXdMb2NhdGlvbil9XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrLTkwMCc+e2RhdGEubmV3TG9jYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItYmxhY2stOTAwJz57ZGF0YS5taW59PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItYmxhY2stOTAwJz57ZGF0YS5tYXh9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gVGFibGVPbihwcm9wcyl7XG4gICAgaWYgKG9uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dGggY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrLTkwMCc+eyB0YWJsZUxvY2F0aW9uIH08L3RoPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCcnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIFRvdGFsT24ocHJvcHMpe1xuICAgIGlmIChvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrLTkwMCc+eyB0YWJlbFRvdGFscyB9PC90aD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgnJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBGb290ZXIocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdwLTQgcHQtMiBiZy1ncmVlbi01MDAgdGV4dC14cyc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtNiBwdC0xJz4mY29weTsgfHwgQ29kZSBGZWxsb3dzIHx8IDIwMjE8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==