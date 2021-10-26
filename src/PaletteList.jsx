import React from "react";
import { Link } from "react-router-dom";

function PaletteList({ palettes }) {
  return (
    <div>
      <h1>React Colors App</h1>
      {palettes.map((palette) => (
        <p key={palette.id}>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}

export default PaletteList;
