'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFieldForm;

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFieldForm(state, path) {
  var formPath = path.slice(0, -1);

  if (!formPath.length) return state;

  return (0, _get2.default)(state, formPath);
}