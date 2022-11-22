"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CrossInputBox(props) {
  var handleChange = function handleChange(e) {
    if (props.callback) {
      props.callback(e.target.value);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: props.placeholder,
    onChange: handleChange
  });
}
var _default = CrossInputBox;
exports.default = _default;