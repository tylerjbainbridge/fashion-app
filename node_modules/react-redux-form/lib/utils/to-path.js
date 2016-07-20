'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPath;

var _toPath2 = require('lodash/toPath');

var _toPath3 = _interopRequireDefault(_toPath2);

var _endsWith = require('lodash/endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toPath(value) {
  var path = value;

  if ((0, _endsWith2.default)(path, '.')) {
    path = path.slice(0, -1);
  } else if ((0, _endsWith2.default)(path, '[]')) {
    path = path.slice(0, -2);
  }

  return (0, _toPath3.default)(path);
}