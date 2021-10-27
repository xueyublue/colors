import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";
import { getShades } from "./colorHelpers";
import Footer from "./Footer";

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
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColorPalette;
