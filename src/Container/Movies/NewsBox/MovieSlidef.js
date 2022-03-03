import React, { setState } from "react";

const MovieSliderf = (BoxComponent, data) => {
  const singleCompRef = React.createRef();
  const propsTemplate = { ...BoxComponent.props }.keys();
  console.log(propsTemplate);

  const [currentPosition, setCurrentPosition] = setState(0);
  const [btnLeftDisable, setBtnLeftDisable] = setState(false);
  const [btnRightDisable, setBtnRightDisable] = setState(false);

  state = {
    currentPosition: 0,
    numberOfMovies: 7,
    btnLeftDisable: false,
    btnRightDisable: false,
  };

  const slideRightHandler = () => {
    if (this.props.numberOfMovies === currentPosition + 4) {
      setCurrentPosition(0);
      setBtnLeftDisable(true);
      return;
    }

    setBtnLeftDisable(false);
    setCurrentPosition(currentPosition + 1);

    // console.log(this.state.currentPosition);
  };

  const slideLeftHandler = () => {
    if (currentPosition === 0) {
      setBtnLeftDisable(true);

      return;
    }

    setCurrentPosition(currentPosition - 1);
    // console.log(this.state.currentPosition);
  };

  const generateChildComps = (dataArray) => {
    return dataArray.map((movie, i) => {
      <BoxComponent
        key={i}
        ref={i === 0 ? singleCompRef : null}
        imgSrc={movie[Object.keys(movie)[0]].image || imgs}
        showType="TV SERIES"
        releaseDate="USA, 2016"
        title={movie[Object.keys(movie)[0]].name}
        rating={70}
        catagories={movie[Object.keys(movie)[0]].tags}
      />;
    });
  };

  return (
    <div className={classes.MovieSlide}>
      <div className={classes.TopBar}>
        <Typography type="sub-heading" style={{ color: "var(--color-black)" }}>
          {props.title}
        </Typography>

        <div className={classes.controls}>
          <Button
            clicked={this.slideLeftHandler}
            disabled={this.state.btnLeftDisable}
            style={{
              color: "var(--color-gray)",
              fontSize: "3.5rem",
              fontWeight: "400",
              padding: ".5rem 1.5rem",
            }}
            type="text"
          >
            &#8249;
          </Button>
          <Button
            clicked={this.slideRightHandler}
            disabled={this.state.btnRightDisable}
            style={{
              color: "var(--color-gray)",
              fontSize: "3.5rem",
              fontWeight: "400",
              padding: ".5rem 1.5rem",
              transfrom: "rotate(180deg)",
            }}
            type="text"
          >
            &#8250;
          </Button>
        </div>
        <Button type="textLight">See more &#8250;</Button>
      </div>

      <div
        className={classes.Slide}
        style={{
          transform: `translateX(calc((-${36}rem * ${
            this.state.currentPosition
          }) ))`,
        }}
      >
        {this.props.children}
      </div>
    </div>
  );
};
