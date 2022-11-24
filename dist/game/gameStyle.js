"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeWeb = require("react-native-web");
var _default = _reactNativeWeb.StyleSheet.create({
  gameContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'column'
  },
  buttonsCoiceContainer: {
    flexDirection: 'row'
  },
  buttonStyle: {
    width: 100,
    height: 'auto',
    padding: 5,
    backgroundColor: 'red',
    margin: 2
  },
  buttonPlayStyle: {
    alignSelf: 'center'
  }
});
exports.default = _default;