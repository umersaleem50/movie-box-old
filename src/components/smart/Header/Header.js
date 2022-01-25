import React, { Component } from "react";
import classes from "./Header.module.scss";
import VideoBox from "../../dumb/VideoBox/VideoBox";
import video from "../../../assets/yourname.mp4";
import SideMenu from "../../dumb/SideMenu/SideMenu";
import Navigation from "../../dumb/Navigation/Navigation";
class Header extends Component {
  state = {
    movies: [
      {
        src: video,
        heading: "Arcane:2021",
        detail:
          "Arcane is an animated action-adventure series created by Christian Linke and Alex Yee for Netflix. Produced by Fortiche Production and Riot Games",
      },
    ],
    toggleSideMenu: false,
  };

  toggleSideBar = () => {
    this.setState((prevState, prevProps) => ({
      toggleSideMenu: !prevState.toggleSideMenu,
    }));
    console.log("clicked", this.state.toggleSideMenu);
  };

  render() {
    return (
      <header className={classes.Header}>
        <Navigation data={this.state.movies} toggleSide={this.toggleSideBar} />
        <SideMenu
          activeLink="Home"
          toggle={this.state.toggleSideMenu}
          closeSideBar={this.toggleSideBar}
        />
        <VideoBox
          src={this.state.movies[0].src}
          background={true}
          overlay={0.5}
        />
      </header>
    );
  }
}

export default Header;
