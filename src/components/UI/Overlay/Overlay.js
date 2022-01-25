import React from "react";
import classes from "./Overlay.module.scss";

const Overlay = (props) => {
  return (
    <div
      className={classes.Overlay}
      onClick={props.clicked}
      style={{
        opacity: props.opacity.toString(),
        display: props.show ? "inline-block" : "none",
        zIndex: props.index || "10",
      }}
    ></div>
  );
};

export default Overlay;
