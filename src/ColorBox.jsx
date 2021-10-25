import React from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorBox({ background, name }) {
  return (
    <CopyToClipboard text={background}>
      <div style={{ background }} className="Colorbox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
