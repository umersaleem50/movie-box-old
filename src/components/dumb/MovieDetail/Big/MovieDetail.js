import Button from "../../../UI/Button/Button";
import Typography from "../../../UI/Typography/Typography";
import RatingBox from "../../RatingBox/RatingBox";
import classes from "./MovieDetail.module.scss";

const MovieDetail = (props) => {
  const generateHeading = (word) => {
    // const heading = props.heading;
    if (word.split(" ").length < 2 || !word.includes(":")) {
      console.log("nope");
      return word;
    }
    const splitArr = word.split(":");
    splitArr[0] = splitArr[0] + ":";
    splitArr[1] = splitArr[1].trim();
    return splitArr.join("\n");
  };

  return (
    <div className={classes.DetailBox}>
      <Typography
        type="hero"
        text={generateHeading(props.heading)}
        style={{
          whiteSpace: "pre-line",

          color: props.dark || "#fff",
        }}
      />
      <RatingBox rating={7.6} />
      <Typography
        type="regular"
        text={props.detail}
        style={{
          color: props.dark || "#fff",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      />
      <Button type="trailer">
        <div />
        Watch Trailer
      </Button>
    </div>
  );
};

export default MovieDetail;
