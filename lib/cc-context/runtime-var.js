"use strict";

exports.__esModule = true;
exports["default"] = void 0;
// 后续在逐步迁移其他的
var _default = {
  // if isStrict is true, every error will be throw out instead of console.error, 
  // but this may crash your app, make sure you have a nice error handling way,
  // like componentDidCatch in react 16.*
  isStrict: false,
  isDebug: false,
  computedCompare: true,
  watchCompare: true,
  watchImmediate: false,
  bindCtxToMethod: false,
  computedRetKeyDep: true,
  watchRetKeyDep: true
};
exports["default"] = _default;