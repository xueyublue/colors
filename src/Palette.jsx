import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

function Palette({ colors }) {
  const colorBoxes = colors.map((item) => <ColorBox background={item.color} name={item.name} key={item.name} />);
  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
