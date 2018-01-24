'use strict';

var Util        = require("../util.js");
var React       = require("react");
var Gatsby      = require("../gatsby.js");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("ColorSquare2");

function stringToColor(str) {
  switch (str) {
    case "green" : 
        return /* Green */1;
    case "red" : 
        return /* Red */0;
    case "yellow" : 
        return /* Yellow */2;
    default:
      return /* Papaya */3;
  }
}

function colorToString(color) {
  switch (color) {
    case 0 : 
        return "red";
    case 1 : 
        return "green";
    case 2 : 
        return "yellow";
    case 3 : 
        return "papayawhip";
    
  }
}

function onlyPositive(num) {
  if (num < 0) {
    return 0;
  } else {
    return num;
  }
}

function make($staropt$star, size, _) {
  var color = $staropt$star ? $staropt$star[0] : /* Papaya */3;
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var sizeStr = Pervasives.string_of_int(onlyPositive(size)).concat("px");
      var colorStr = colorToString(color);
      var style = {
        backgroundColor: colorStr,
        height: sizeStr,
        width: sizeStr
      };
      return React.createElement("div", {
                  style: style
                }, ReasonReact.element(/* None */0, /* None */0, Gatsby.Link[/* make */0]("/", /* array */[Util.s("Back")])));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(/* Some */[stringToColor(jsProps.color)], jsProps.size, /* array */[]);
      }));

var Link = 0;

exports.component     = component;
exports.Link          = Link;
exports.stringToColor = stringToColor;
exports.colorToString = colorToString;
exports.onlyPositive  = onlyPositive;
exports.make          = make;
exports.$$default     = $$default;
exports.default       = $$default;
exports.__esModule    = true;
/* component Not a pure module */
