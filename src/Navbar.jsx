import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem, Select } from "@material-ui/core";

function Navbar({ level, onLevelChange, format, onFormatChange }) {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">LOGO</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={onLevelChange} />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={onFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default Navbar;
