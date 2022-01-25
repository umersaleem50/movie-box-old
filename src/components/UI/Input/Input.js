import React, { Component } from "react";
import axios from "axios";
import classes from "./Input.module.scss";
import MovieBoxSmall from "../../dumb/MovieBox/Small/MovieBoxSmall";
import Button from "../Button/Button";
class SearchInput extends Component {
  state = {
    searchResult: [],
    searchType: "movie",
    toggleResults: null,
    toggleFilter: false,
  };

  arrCopy = [...this.props.data];
  inputRef = React.createRef();
  buttonMovieRef = React.createRef();
  buttonTvRef = React.createRef();
  searchRef = React.createRef();

  assignClassResult = [
    classes.Results,
    this.state.toggleResults ? classes.ToggleResult : "",
  ];

  findMovie = (word) => {
    let BASE_URL = `https://api.themoviedb.org/3/search/${this.state.searchType}?api_key=9bafd59e89eb76ccdff3c1ef06563c45&language=en-US&page=1&query=${word}&include_adult=true`;

    if (word.length === 0) {
      this.setState({ searchResult: [] });
      // this.filter = null;
      return;
    }

    axios
      .get(
        // `https://api.themoviedb.org/3/search/tv?api_key=9bafd59e89eb76ccdff3c1ef06563c45&language=en-US&page=1&query=${word}&include_adult=true`
        BASE_URL
      )
      .then((res) =>
        this.setState({
          searchResult:
            res.data.results.length >= 5
              ? [...res.data.results].slice(0, 5)
              : res.data.results,
        })
      );

    if (this.state.searchResult.length !== 0) {
      this.setState({ toggleResults: true });
    }

    console.log(this.state.searchResult);
  };

  generateFilter = () => {
    if (!this.state.toggleFilter) return;
    return (
      <div className={classes.Filter}>
        <Button
          type="outline"
          text={"Movies"}
          active={this.state.searchType === "movie"}
          clicked={() =>
            this.setState({ searchType: "movie", searchResult: [] })
          }
        />
        <Button
          type="outline"
          text={"Tv Show"}
          active={this.state.searchType === "tv"}
          clicked={() => {
            this.setState({ searchType: "tv", searchResult: [] });
          }}
        />
      </div>
    );
  };

  generateResults = () => {
    if (this.state.searchResult.length !== 0) {
      return this.state.searchResult.map((movie, i) => {
        return (
          <MovieBoxSmall
            key={movie.id}
            heading={
              this.state.searchType === "movie" ? movie.title : movie.name
            }
            details={movie.overview}
            imgURL={movie.poster_path}
            // releaseDate={movie.first_air_date}
            // type={this.props.genre_ids}
          />
        );
      });
    }
  };

  generateBox = () => {
    if (this.state.searchResult.length !== 0) {
      return (
        <div className={this.assignClassResult.join(" ")}>
          {this.generateResults()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className={classes.SearchInput}
        ref={this.searchRef}
        // onFocus={() => this.setState({ toggleResults: true })}
      >
        <div className={classes.Search}>
          <input
            className={classes.Input}
            ref={this.inputRef}
            type="text"
            onChange={() => this.findMovie(this.inputRef.current.value)}
            onFocus={() => this.setState({ toggleResults: true })}
            onBlur={() => this.setState({ toggleResults: false })}
          />
          <button
            className={classes.btnToggle}
            onClick={() =>
              this.setState({
                searchResult: [],
                toggleResults: !this.state.toggleResults,
              })
            }
          >
            toggle
          </button>
          {/* {this.generateFilter()} */}
        </div>
        {this.generateBox()}
      </div>
    );
  }
}

export default SearchInput;
