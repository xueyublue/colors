import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.1rem",
    margin: "0 1rem",
  },
};

function Footer({ classes, paletteName, emoji }) {
  return (
    <footer className={classes.root}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
