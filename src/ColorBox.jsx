import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/ColorboxStyles";

function ColorBox({ classes, moreButtonUrl, background, name }) {
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
      <div style={{ background }} className={classes.root}>
        <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showCopyOverlay}`} />
        <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
          <h1>Copied!</h1>
          <p className={classes.copiedColor}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {moreButtonUrl && (
          <Link to={moreButtonUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
