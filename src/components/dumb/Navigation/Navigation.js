import React from "react";
import classes from "./Navigation.module.scss";
import Logo from "../../UI/Logo/Logo";
import { params } from "../../../Axios/Config";
import SearchInput from "../../UI/Input/searchInput";
import Axios from "../../../Axios/seachInputaxios";
import Button from "../../UI/Button/Button";
const Navigation = (props) => {
  //You need to fatch the server here for Movies;
  // Currently data is passed by props.data;

  return (
    <nav className={classes.Navigation}>
      <Logo />
      {/* <SearchInput data={props.data} /> */}
      {SearchInput(Axios, params)}

      <Button clicked={props.toggleSide} type="round"></Button>
    </nav>
  );
};
export default Navigation;
