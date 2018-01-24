open Util;
let component = ReasonReact.statelessComponent("ColorSquare2");

module Link = Gatsby.Link;

type color =
  | Red
  | Green
  | Yellow
  | Papaya;

let stringToColor = str =>
  switch str {
  | "red" => Red
  | "green" => Green
  | "yellow" => Yellow
  | _ => Papaya
  };

let colorToString = color =>
  switch color {
  | Red => "red"
  | Green => "green"
  | Yellow => "yellow"
  | Papaya => "papayawhip"
  };

let onlyPositive = num =>
  if (num < 0) {
    0;
  } else {
    num;
  };

let make = (~color: color=Papaya, ~size: int, _children) => {
  ...component,
  render: _self => {
    let sizeStr =
      size |> onlyPositive |> string_of_int |> Js.String.concat("px");
    let colorStr = colorToString(color);
    let style =
      ReactDOMRe.Style.make(
        ~backgroundColor=colorStr,
        ~height=sizeStr,
        ~width=sizeStr,
        ()
      );
    <div style> <Link to_="/"> ("Back" |> s) </Link> </div>;
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~color=stringToColor(jsProps##color), ~size=jsProps##size, [||])
  );
