import React from "react";
import classes from "./Typography.module.scss";

const Typography = (props) => {
  let component = null;
  const style = { ...props.style };
  switch (props.type) {
    case "heading":
      component = (
        <h1 className={classes.Heading} style={style}>
          {props.text ? props.text : props.children}
        </h1>
      );
      break;
    case "sub-heading":
      component = (
        <h3 className={classes.Sub_heading} style={style}>
          {props.text ? props.text : props.children}
        </h3>
      );
      break;
    case "paragraph":
      component = (
        <p className={classes.Paragraph} style={style}>
          {props.text ? props.text : props.children}
        </p>
      );
      break;

    default:
      component = (
        <p className={classes.Paragraph} style={style}>
          {props.text ? props.text : props.children}
        </p>
      );
      break;
  }
  return component;
};
export default Typography;
