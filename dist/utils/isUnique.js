"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnique = void 0;
var isUnique = function isUnique(ranking, username) {
  var object = {
    username: username,
    wins: 0
  };
  var isUnique = true;
  var index = null;
  ranking.forEach(function (element, i) {
    if (element.username === username) {
      isUnique = false;
      index = i;
    }
  });
  if (isUnique) {
    return object;
  } else {
    return index;
  }
};
exports.isUnique = isUnique;