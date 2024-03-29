import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
          key={index}
        />
      ))}
    </div>
  );
}
