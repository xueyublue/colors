import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

function ColorBox({ moreButtonUrl, background, name }) {
  const [copied, setCopied] = useState(false);

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
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {moreButtonUrl && (
          <Link to={moreButtonUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
