import React from "react";
import ColorSquare2 from './colorSquare2';

const ColorSquare = props => {
  const { color, size } = props;

  const getColor = (color) => {
    if(color === "red" || color === "green" || color === "yellow") {
      return color;
    }

    return "papayawhip";
  };

  return <div style={{
    height: `${size}`,
    width: `${size}`,
    backgroundColor: getColor(color)
  }}></div>;
};

// export default ColorSquare;
export default ColorSquare2;
