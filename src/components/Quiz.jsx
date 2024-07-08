import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summery from "./Summery";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizcomplted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });
    },

    []
  );
  const hanldeSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);
  if (isQuizcomplted) {
    return <Summery userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={hanldeSkipAnswer}
      />
    </div>
  );
}
