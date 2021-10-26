import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { IconButton, MenuItem, Select, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ level, onLevelChange, onFormatChange }) {
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
    <header className="Navbar">
      <div className="logo">
        <a href="#">Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={onLevelChange} />
        </div>
      </div>
      <div className="select-container">
        <Select variant="standard" value={format} onChange={handleFormatChange}>
          <MenuItem value="hex" key="1">
            HEX - #ffffff
          </MenuItem>
          <MenuItem value="rgb" key="2">
            RGB - rgb(255,255,255)
          </MenuItem>
          <MenuItem value="rgba" key="3">
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

export default Navbar;
