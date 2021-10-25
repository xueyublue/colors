import React, { useState } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((item) => (
    <ColorBox background={item.hex} name={item.name} key={item.name} />
  ));

  return (
    <div className="Palette">
      <div className="slider">
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={(newLevel) => setLevel(newLevel)} />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
