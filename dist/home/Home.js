"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _homeStyle = _interopRequireDefault(require("./homeStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _homeStyle.default.homeContainer
  });
}
var _default = Home;
exports.default = _default;