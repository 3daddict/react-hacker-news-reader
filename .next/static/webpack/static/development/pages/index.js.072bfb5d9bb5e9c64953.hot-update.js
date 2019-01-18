webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\code\\react-hacker-news-reader\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* So fetch works in the server and the browser */

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2049837645",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2049837645",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Latest News"), this.props.stories.map(function (story) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
          className: "jsx-2049837645",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: story.url,
          className: "jsx-2049837645",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, story.title));
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "180875693",
        css: "h2.jsx-2049837645{font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0IsQUFDNEIsc0JBQUMiLCJmaWxlIjoiQzpcXGNvZGVcXHJlYWN0LWhhY2tlci1uZXdzLXJlYWRlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCcgLyogU28gZmV0Y2ggd29ya3MgaW4gdGhlIHNlcnZlciBhbmQgdGhlIGJyb3dzZXIgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkgeyAvKiBHZXQgdGhlIExhdGVzdCBTdG9yaWVzICovIH1cclxuIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxyXG4gICAgXHJcbiAgICAgICAgeyB0aGlzLnByb3BzLnN0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG4gICAgICAgICAgPGgyPjxhIGhyZWY9eyBzdG9yeS51cmwgfT57IHN0b3J5LnRpdGxlIH08L2E+PC9oMj5cclxuICAgICAgICApKSB9XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgIGgyIHsgZm9udC1mYW1pbHk6IHN5c3RlbS11aTsgfSBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2AgLyogWW91ciBHbG9iYWwgQ1NTICovIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgIH0iXX0= */\n/*@ sourceURL=C:\\code\\react-hacker-news-reader\\pages\\index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1094381545",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjJCIiwiZmlsZSI6IkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnIC8qIFNvIGZldGNoIHdvcmtzIGluIHRoZSBzZXJ2ZXIgYW5kIHRoZSBicm93c2VyICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLyogR2V0IHRoZSBMYXRlc3QgU3RvcmllcyAqLyB9XHJcbiBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGgxPkxhdGVzdCBOZXdzPC9oMT5cclxuICAgIFxyXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcclxuICAgICAgICAgIDxoMj48YSBocmVmPXsgc3RvcnkudXJsIH0+eyBzdG9yeS50aXRsZSB9PC9hPjwvaDI+XHJcbiAgICAgICAgKSkgfVxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YCBoMiB7IGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7IH0gYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgIC8qIFlvdXIgR2xvYmFsIENTUyAqLyBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICB9Il19 */\n/*@ sourceURL=C:\\code\\react-hacker-news-reader\\pages\\index.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.072bfb5d9bb5e9c64953.hot-update.js.map