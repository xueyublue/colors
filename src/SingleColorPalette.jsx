import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { getShades } from "./colorHelpers";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
  goBack: {
    backgroundColor: "black",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
};

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
