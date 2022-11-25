"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _default = _reactNative.StyleSheet.create({
  rankContainer: {
    backgroundColor: "#730e25",
    height: "auto",
    width: "50%",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20
  },
  headerTable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "white"
  },
  rowItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  cell: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  textColor: {
    color: "white"
  },
  headerRow: {
    borderRightWidth: 2,
    padding: 5,
    justifyContent: "center",
    width: "50%",
    borderColor: "white"
  }
});
exports.default = _default;