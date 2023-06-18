import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
export default function ProgressBar({
  prevQuestion,
  nextQuestion,
  progress,
  submit,
}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prevQuestion}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress} Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : nextQuestion}
      >
        {progress === 100 ? (
          <>
            <span>Submit Answer</span>
            <span className="material-icons-outlined"> publish </span>
          </>
        ) : (
          <>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </>
        )}
      </Button>
    </div>
  );
}
