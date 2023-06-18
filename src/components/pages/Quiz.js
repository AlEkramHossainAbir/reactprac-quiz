import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialstate = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialstate);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  //handle when user clicks the next button to get the next question

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  //handle when user clicks the prev button to get the prev question

  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  //calculate percantage of progressbar

  const percantage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  //submit quiz

  async function submitQuiz() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  return (
    <div>
      {loading && <div>loading......</div>}
      {error && <div>There was an error! </div>}
      {!loading && !error && qna && qna.length > 0 && (
        <div>
          <h1>{`${qna[currentQuestion].title}`}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            progress={percantage}
            submit={submitQuiz}
          />
          <MiniPlayer />
        </div>
      )}
    </div>
  );
}
