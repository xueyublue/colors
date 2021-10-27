import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { IconButton, MenuItem, Select, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

function Navbar({ classes, level, onLevelChange, onFormatChange }) {
  const [format, setFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    onFormatChange(e.target.value);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <Link to="/">Color Picker</Link>
      </div>
      {level && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={onLevelChange} />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select variant="standard" value={format} onChange={handleFormatChange}>
          <MenuItem value="hex" key="hex">
            HEX - #ffffff
          </MenuItem>
          <MenuItem value="rgb" key="rgb">
            RGB - rgb(255,255,255)
          </MenuItem>
          <MenuItem value="rgba" key="rgba">
            RGBA - rgba(255,255,255,1.0)
          </MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={<span id="message-id">Format changed to {format.toUpperCase()}.</span>}
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={handleSnackbarClose}
        action={[
          <IconButton onClick={handleSnackbarClose} color="inherit" key="close" aria-label="close">
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default withStyles(styles)(Navbar);
