import React from "react";
import classes from "./Logo.module.scss";
import LogoFull from "../../../assets/logo/logoFull.svg";
import LogoMobile from "../../../assets/logo/logoMobile.svg";
const Logo = (props) => {
  return (
    <img
      className={classes.Logo}
      srcSet={(`${LogoFull} 2x 900w`, `${LogoMobile} 1x`)}
      src={LogoFull}
      alt="Logo"
    ></img>
  );
};

export default Logo;
