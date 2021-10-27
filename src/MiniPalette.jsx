import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette({ classes, colors, paletteName, emoji, onClick }) {
  const miniColorBoxes = colors.map((color) => (
    <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
  ));

  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
