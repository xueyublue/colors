import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
};

function Palette({ classes, palette }) {
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
    <div className={classes.root}>
      <Navbar
        level={level}
        onLevelChange={(newLevel) => setLevel(newLevel)}
        onFormatChange={(format) => {
          setFormat(format);
        }}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
