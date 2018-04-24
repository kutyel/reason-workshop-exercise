let component = ReasonReact.statelessComponent("ColorSquare2");

let make = (~color, ~size, _children) => {
  ...component,
  render: _self =>
    <div
      style=(
        ReactDOMRe.Style.make(
          ~backgroundColor=color,
          ~width=size,
          ~height=size,
          (),
        )
      )
    />,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~color=jsProps##color, ~size=jsProps##size, [||])
  );
