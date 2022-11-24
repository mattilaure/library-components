"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webStyle = exports.mobileStyle = void 0;
var _reactNative = require("react-native");
var webStyle = _reactNative.StyleSheet.create({
  gameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#c85260'
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
exports.webStyle = webStyle;
var mobileStyle = _reactNative.StyleSheet.create({
  gameContainer: {
    padding: 5,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center'
  }
});
exports.mobileStyle = mobileStyle;