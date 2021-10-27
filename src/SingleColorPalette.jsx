import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";
import { getShades } from "./colorHelpers";

function SingleColorPalette({ palette, colorId }) {
  const [format, setFormat] = useState("hex");
  const colorBoxes = getShades(palette, colorId).map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.name} />
  ));

  return (
    <div className="Palette">
      <Navbar
        onFormatChange={(format) => {
          setFormat(format);
        }}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}

export default SingleColorPalette;
