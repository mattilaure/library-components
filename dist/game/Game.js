"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CrossButton = _interopRequireDefault(require("../button/CrossButton"));
var _CrossText = _interopRequireDefault(require("../text/CrossText"));
var _gameStyle = _interopRequireDefault(require("./gameStyle"));
var _play = require("../utils/play");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var playerPoints = 0;
var cpuPoints = 0;
function Game(props) {
  var _useState = (0, _react.useState)({
      choice: null,
      cpuChoice: null,
      playerNameResult: "",
      playerTempChoice: "",
      winner: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var handleClick = function handleClick() {
    var result = (0, _play.play)(state.choice);
    switch (result.resultGame) {
      case 'w':
        playerPoints++;
        setState(_objectSpread(_objectSpread({}, state), {}, {
          cpuChoice: result.cpu,
          playerNameResult: 'Round vinto dal giocatore'
        }));
        break;
      case 'p':
        setState(_objectSpread(_objectSpread({}, state), {}, {
          cpuChoice: result.cpu,
          playerNameResult: 'Pareggio! Rigioca'
        }));
        break;
      case 'l':
        cpuPoints++;
        setState(_objectSpread(_objectSpread({}, state), {}, {
          cpuChoice: result.cpu,
          playerNameResult: 'Round vinto dalla CPU'
        }));
        break;
    }
    checkWinner();
  };
  function checkWinner() {
    if (playerPoints >= 2) {
      localStorage.setItem("navigate", true);
      playerPoints = 0;
      cpuPoints = 0;
      setState(_objectSpread(_objectSpread({}, state), {}, {
        winner: props.name
      }));
    } else if (cpuPoints >= 2) {
      localStorage.setItem("navigate", true);
      playerPoints = 0;
      cpuPoints = 0;
      setState(_objectSpread(_objectSpread({}, state), {}, {
        winner: "CPU"
      }));
    }
  }
  function reset() {
    playerPoints = 0;
    cpuPoints = 0;
    setState({
      choice: null,
      cpuChoice: null,
      playerNameResult: "",
      playerTempChoice: "",
      winner: ""
    });
  }

  //Setto la scelta del player
  var setChoice = function setChoice(text) {
    var pChoose = null;
    switch (text) {
      case "Carta":
        pChoose = 0;
        break;
      case "Forbice":
        pChoose = 1;
        break;
      case "Sasso":
        pChoose = 2;
        break;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      playerTempChoice: text,
      choice: pChoose
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameStyle.default.gameContainer
  }, /*#__PURE__*/_react.default.createElement(_CrossText.default, null, props.name, " sta giocando contro la CPU"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameStyle.default.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _gameStyle.default.buttonsCoiceContainer
  }, /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    callback: setChoice,
    style: _gameStyle.default.buttonStyle,
    label: "Carta"
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    callback: setChoice,
    style: _gameStyle.default.buttonStyle,
    label: "Forbice"
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    callback: setChoice,
    style: _gameStyle.default.buttonStyle,
    label: "Sasso"
  })), /*#__PURE__*/_react.default.createElement(_CrossText.default, null, "Hai scelto: ", state.playerTempChoice), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    callback: handleClick,
    style: [_gameStyle.default.buttonStyle, _gameStyle.default.buttonPlayStyle],
    label: "Gioca"
  }), /*#__PURE__*/_react.default.createElement(_CrossText.default, null, "La CPU ha scelto: ", state.cpuChoice), /*#__PURE__*/_react.default.createElement(_CrossText.default, null, state.playerNameResult), /*#__PURE__*/_react.default.createElement(_CrossText.default, null, "Ha vinto: ", state.winner)), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    callback: reset,
    style: _gameStyle.default.buttonStyle,
    label: "Reset"
  }));
}
var _default = Game;
exports.default = _default;