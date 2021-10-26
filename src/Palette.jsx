import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map((item) => (
    <ColorBox background={item[format]} name={item.name} key={item.name} />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        onLevelChange={(newLevel) => setLevel(newLevel)}
        onFormatChange={(format) => {
          setFormat(format);
        }}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
