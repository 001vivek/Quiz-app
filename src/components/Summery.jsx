import quizCompletImg from "../assets/quiz-complete.png";
// import QUESTIONS from "../questions";
export default function Summery({ userAnswers, selectedQuestions }) {
  console.log("user answers ::", userAnswers);

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === selectedQuestions[index].answers[0]
  );
  const incorrectAnswers = userAnswers.filter(
    (answer, index) => answer !== selectedQuestions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  // const wrongAnswerShare = Math.round(
  //   (incorrectAnswers.length / userAnswers.length) * 100
  // );

  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;

  function handleQuizOut() {
    window.location.reload();
  }

  return (
    <>
      <div id="summary">
        <img src={quizCompletImg} alt=" trophy icon" />
        <h2>Quiz completed</h2>

        <div id="summary-stats">
          <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">answered correctly</span>
          </p>
          <p>
            <span className="number">{wrongAnswerShare}%</span>
            <span className="text">answered incorrectly</span>
          </p>
        </div>

        <ol>
          {userAnswers.map((answer, index) => {
            let cssClass = "user-answer";
            if (answer === null) {
              cssClass += " skipped";
            } else if (answer === selectedQuestions[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }
            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{selectedQuestions[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>

        <div className=" flex justify-center">
          <button
            className="  rounded bg-purple-500 px-4 py-2 hover:bg-purple-800 text-white"
            onClick={handleQuizOut}
          >
            {" "}
            Go to Home page
          </button>
        </div>
      </div>
    </>
  );
}
