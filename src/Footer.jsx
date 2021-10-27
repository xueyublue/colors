import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/FooterStyles";

function Footer({ classes, paletteName, emoji }) {
  return (
    <footer className={classes.root}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
