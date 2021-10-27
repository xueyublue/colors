import React from "react";
import { useHistory } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    //border: "1px solid black",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

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
            <MiniPalette {...palette} onClick={() => history.push(`/palette/${palette.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
