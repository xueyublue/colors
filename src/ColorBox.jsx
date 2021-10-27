import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

function ColorBox({ moreButtonUrl, background, name }) {
  const [copied, setCopied] = useState(false);
  const isBackgrounDarkColor = chroma(background).luminance() <= 0.08;
  const isBackgrounLightColor = chroma(background).luminance() >= 0.6;

  return (
    <CopyToClipboard
      text={background}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
    >
      <div style={{ background }} className="Colorbox">
        <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p className={isBackgrounLightColor && "dark-text"}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isBackgrounDarkColor && "light-text"}>{name}</span>
          </div>
          <button className={`copy-button ${isBackgrounLightColor && "dark-text"}`}>Copy</button>
        </div>
        {moreButtonUrl && (
          <Link to={moreButtonUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isBackgrounLightColor && "dark-text"}`}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
