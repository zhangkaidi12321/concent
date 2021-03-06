"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = _default;

var _ccContext = _interopRequireDefault(require("../../cc-context"));

var _constant = require("../../support/constant");

/****
 * pick one ccInstance ref randomly
 */
function _default(module, mustBelongToModule) {
  if (mustBelongToModule === void 0) {
    mustBelongToModule = false;
  }

  var ccKey_ref_ = _ccContext["default"].ccKey_ref_,
      moduleName_ccClassKeys_ = _ccContext["default"].moduleName_ccClassKeys_,
      ccClassKey_ccClassContext_ = _ccContext["default"].ccClassKey_ccClassContext_;
  var ccKeys = [];

  if (module === _constant.MODULE_DEFAULT) {}

  if (module) {
    if (_ccContext["default"].store._state[module]) {
      var ccClassKeys = moduleName_ccClassKeys_[module];

      if (ccClassKeys && ccClassKeys.length !== 0) {
        var oneCcClassKey = ccClassKeys[0];
        var ccClassContext = ccClassKey_ccClassContext_[oneCcClassKey];

        if (!ccClassContext) {
          throw new Error("no ccClassContext found for ccClassKey " + oneCcClassKey + "!");
        }

        ccKeys = ccClassContext.ccKeys;
      } else {// find one cc ref later
      }
    } else {
      throw new Error("sorry, module: " + module + " is invalid, cc don't know this module!");
    }

    ccKeys = ccKeys.filter(function (key) {
      return !key.startsWith(_constant.CC_FRAGMENT_PREFIX);
    });

    if (ccKeys.length === 0) {
      if (mustBelongToModule === false) ccKeys = [_constant.CC_DISPATCHER];else {
        var ignoreIt = "if this message doesn't matter, you can ignore it";
        throw new Error("[[pick-one-ref]]: no any ccInstance founded for module:" + module + "!," + ignoreIt);
      }
    }
  } else {
    ccKeys = [_constant.CC_DISPATCHER];
  }

  var oneRef = ccKey_ref_[ccKeys[0]];

  if (!oneRef) {
    throw new Error('cc found no ref!');
  }

  return oneRef;
}