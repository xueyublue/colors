import React from "react";
import { useHistory } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteListStyles";

function PaletteList({ classes, palettes }) {
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color App</h1>
          <span>Create Palette</span>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette {...palette} onClick={() => history.push(`/palette/${palette.id}`)} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
