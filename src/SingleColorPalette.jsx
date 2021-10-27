import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { getShades } from "./colorHelpers";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteStyles";

function SingleColorPalette({ classes, palette, colorId }) {
  const [format, setFormat] = useState("hex");
  const colorBoxes = getShades(palette, colorId).map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.name} />
  ));

  return (
    <div className={classes.root}>
      <Navbar
        onFormatChange={(format) => {
          setFormat(format);
        }}
      />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>GO BACK</Link>
        </div>
      </div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
