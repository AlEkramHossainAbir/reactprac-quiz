import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answer}>
      <Checkbox className="answer" text="A New Hope 1" />
    </div>
  );
}
