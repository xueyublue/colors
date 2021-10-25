import React from "react";
import "./ColorBox.css";

function ColorBox({ background, name }) {
  return (
    <div style={{ background }} className="Colorbox">
      <span>{name}</span>
      <span>MORE</span>
    </div>
  );
}

export default ColorBox;
