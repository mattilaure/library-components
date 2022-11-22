"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CrossAnimation() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.image
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.img,
    source: require('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fwww.giacomocusano.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fcoastal-wash-web.jpg%3Ffit%3D1024%252C682%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.giacomocusano.com%2Fimmagini-ad-alta-risoluzione-gratis%2F&tbnid=hqwPGBF2l1kOmM&vet=12ahUKEwjs3dj5h8L7AhXTwAIHHSm7Ah0QMygAegUIARC6AQ..i&docid=oi8HLsCd2qa-OM&w=1024&h=682&q=immagini&ved=2ahUKEwjs3dj5h8L7AhXTwAIHHSm7Ah0QMygAegUIARC6AQ')
  }));
}
var styles = _reactNative.StyleSheet.create({
  image: {
    height: 400,
    width: 400
  },
  img: {
    height: '100%',
    width: '100%'
  }
});
var _default = CrossAnimation;
exports.default = _default;