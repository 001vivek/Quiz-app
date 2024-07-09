import { useCallback, useState } from "react";
// import QUESTIONS from "../questions";
import Question from "./Question";
import Summery from "./Summery";

export default function Quiz({ selectedQuestions }) {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizcomplted = activeQuestionIndex === selectedQuestions.length;

  console.log("active question index", activeQuestionIndex);
  console.log("selectionQuestions lenght", selectedQuestions.length);
  console.log("selection question", selectedQuestions);

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
  console.log(isQuizcomplted, "status");
  if (isQuizcomplted) {
    return (
      <Summery
        selectedQuestions={selectedQuestions}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <div id="quiz">
      <Question
        selectedQuestions={selectedQuestions}
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={hanldeSkipAnswer}
      />
    </div>
  );
}
