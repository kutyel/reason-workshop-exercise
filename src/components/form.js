'use strict';

var Util         = require("../util.js");
var Block        = require("bs-platform/lib/js/block.js");
var Curry        = require("bs-platform/lib/js/curry.js");
var React        = require("react");
var ReasonReact  = require("reason-react/src/ReasonReact.js");
var ColorSquare2 = require("./colorSquare2.js");

var component = ReasonReact.reducerComponent("Form");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      var color = self[/* state */2][/* count */0] > 2 ? /* Green */1 : /* Red */0;
      var onClick = function () {
        return Curry._1(self[/* send */4], /* CountUp */[1]);
      };
      var onReset = function () {
        return Curry._1(self[/* send */4], /* Reset */0);
      };
      return React.createElement("div", undefined, React.createElement("button", {
                      onClick: onClick
                    }, Util.s("UP")), React.createElement("button", {
                      onClick: onReset
                    }, Util.s("RESET")), ReasonReact.element(/* None */0, /* None */0, ColorSquare2.make(/* Some */[color], 100, /* array */[])));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[/* count */0];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (action) {
        return /* Update */Block.__(0, [/* record */[/* count */state[/* count */0] + action[0] | 0]]);
      } else {
        return /* Update */Block.__(0, [/* record */[/* count */0]]);
      }
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
