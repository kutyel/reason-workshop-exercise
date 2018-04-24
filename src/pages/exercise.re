let component = ReasonReact.statelessComponent("HelloWorld");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      (ReasonReact.stringToElement("HelloWorld"))
      <ColorSquare2 color="red" size="100px" />
      <ColorSquare2 color="green" size="200px" />
    </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));
