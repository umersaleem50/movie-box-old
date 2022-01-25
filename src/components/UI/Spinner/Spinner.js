import React from "react";
import classes from "./Spinner.module.scss";
const Spinner = (props) => {
  return (
    <div className={classes["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
