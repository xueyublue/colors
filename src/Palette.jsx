import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Footer from "./Footer";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      moreButtonUrl={`/palette/${palette.id}/${color.id}`}
      background={color[format]}
      name={color.name}
      key={color.id}
    />
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
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default Palette;
