'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var GatsbyLink  = require("gatsby-link");

function make(to_, children) {
  return ReasonReact.wrapJsForReason(GatsbyLink.default, {
              to: to_
            }, children);
}

var Link = /* module */[/* make */make];

exports.Link = Link;
/* ReasonReact Not a pure module */
