open Util;

type action =
  | CountUp(int)
  | Reset;

type state = {count: int};

let component = ReasonReact.reducerComponent("Form");

let make = _children => {
  ...component,
  initialState: () => {count: 0},
  reducer: (action, state) =>
    switch action {
    | CountUp(n) => ReasonReact.Update({count: state.count + n})
    | Reset => ReasonReact.Update({count: 0})
    },
  render: self => {
    let color: ColorSquare2.color =
      if (self.state.count > 2) {
        Green;
      } else {
        Red;
      };
    let size = 100;
    let onClick = _event => self.send(CountUp(1));
    let onReset = _event => self.send(Reset);
    <div>
      <button onClick> ("UP" |> s) </button>
      <button onClick=onReset> ("RESET" |> s) </button>
      <ColorSquare2 color size />
    </div>;
  }
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));
