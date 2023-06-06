import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        <h1>Test</h1>
      </div>
      <Answers />
    </div>
  );
  //  answers.map((answer, index) => (
  //   <div className={classes.question} key={index}>
  //     <div className={classes.qtitle}>
  //       <span className="material-icons-outlined"> help_outline </span>
  //       {answer.title}
  //     </div>
  //     <Answers input={false} options={answer.options} />
  //   </div>
  // ));
}
