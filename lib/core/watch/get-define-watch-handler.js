"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = _default;

var _configureDepFns = _interopRequireDefault(require("../base/configure-dep-fns"));

var _constant = require("../../support/constant");

function _default(refCtx) {
  return function (watchItem, watchHandler, depKeys, compare, immediate) {
    var confMeta = {
      type: 'watch',
      refCtx: refCtx,
      stateKeys: refCtx.stateKeys,
      retKeyFns: refCtx.watchRetKeyFns,
      module: refCtx.module,
      connect: refCtx.connect,
      dep: refCtx.watchDep
    };
    (0, _configureDepFns["default"])(_constant.CATE_REF, confMeta, watchItem, watchHandler, depKeys, compare, immediate);
  };
}