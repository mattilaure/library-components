"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CrossButton(props) {
  var handleClick = function handleClick() {
    if (props.callback) {
      props.callback(props.label);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: handleClick,
    style: props.style
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      color: 'white'
    }
  }, props.label));
}
var _default = CrossButton;
exports.default = _default;