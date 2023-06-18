import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related

      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError("");
        setLoading(true);

        ///request firebase

        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
