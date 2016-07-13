"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = persistEventWithCallback;
function persistEventWithCallback(callback) {
  return function (event) {
    if (event && event.persist) {
      event.persist();
    }

    callback(event);
    return event;
  };
}