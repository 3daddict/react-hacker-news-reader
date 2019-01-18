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
        className: "jsx-336985459",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-336985459",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Latest News"), this.props.stories.map(function (story) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
          className: "jsx-336985459",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: story.url,
          className: "jsx-336985459",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, story.title));
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2311143315",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmlCIiwiZmlsZSI6IkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnIC8qIFNvIGZldGNoIHdvcmtzIGluIHRoZSBzZXJ2ZXIgYW5kIHRoZSBicm93c2VyICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHJcbiAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKVxyXG4gICBjb25zdCBzdG9yaWVzID0gYXdhaXQgcmVxLmpzb24oKVxyXG4gICByZXR1cm4geyBzdG9yaWVzIH1cclxuIH1cclxuIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7IC8qIEdldCB0aGUgTGF0ZXN0IFN0b3JpZXMgKi8gfVxyXG4gXHJcbiByZW5kZXIoKSB7XHJcbiAgIHJldHVybiA8ZGl2PlxyXG4gICAgIDxoMT5MYXRlc3QgTmV3czwvaDE+XHJcbiBcclxuICAgICB7IHRoaXMucHJvcHMuc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxyXG4gICAgICkpIH1cclxuIFxyXG4gICAgIDxzdHlsZSBqc3g+e2AgLyogWW91ciBQYWdl4oCZcyBDU1MgKi8gYH08L3N0eWxlPlxyXG4gICAgIDxzdHlsZSBnbG9iYWwganN4PntgIC8qIFlvdXIgR2xvYmFsIENTUyAqLyBgfTwvc3R5bGU+XHJcbiAgIDwvZGl2PlxyXG4gfVxyXG59XHJcblxyXG4gICAiXX0= */\n/*@ sourceURL=C:\\code\\react-hacker-news-reader\\pages\\index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1094381545",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQndCIiwiZmlsZSI6IkM6XFxjb2RlXFxyZWFjdC1oYWNrZXItbmV3cy1yZWFkZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnIC8qIFNvIGZldGNoIHdvcmtzIGluIHRoZSBzZXJ2ZXIgYW5kIHRoZSBicm93c2VyICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHJcbiAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKVxyXG4gICBjb25zdCBzdG9yaWVzID0gYXdhaXQgcmVxLmpzb24oKVxyXG4gICByZXR1cm4geyBzdG9yaWVzIH1cclxuIH1cclxuIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7IC8qIEdldCB0aGUgTGF0ZXN0IFN0b3JpZXMgKi8gfVxyXG4gXHJcbiByZW5kZXIoKSB7XHJcbiAgIHJldHVybiA8ZGl2PlxyXG4gICAgIDxoMT5MYXRlc3QgTmV3czwvaDE+XHJcbiBcclxuICAgICB7IHRoaXMucHJvcHMuc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxyXG4gICAgICkpIH1cclxuIFxyXG4gICAgIDxzdHlsZSBqc3g+e2AgLyogWW91ciBQYWdl4oCZcyBDU1MgKi8gYH08L3N0eWxlPlxyXG4gICAgIDxzdHlsZSBnbG9iYWwganN4PntgIC8qIFlvdXIgR2xvYmFsIENTUyAqLyBgfTwvc3R5bGU+XHJcbiAgIDwvZGl2PlxyXG4gfVxyXG59XHJcblxyXG4gICAiXX0= */\n/*@ sourceURL=C:\\code\\react-hacker-news-reader\\pages\\index.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, stories;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.hackerwebapp.com/news");

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                stories = _context.sent;
                return _context.abrupt("return", {
                  stories: stories
                });

              case 7:
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
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _getInitialProps2.apply(this, arguments);
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
//# sourceMappingURL=index.js.b9340800bb4e9b0a79bc.hot-update.js.map