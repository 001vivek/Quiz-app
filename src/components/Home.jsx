import { useState } from "react";
import { cards } from "../questions";
import {
  reactQuestions,
  nextjsQuestions,
  javascriptQuestions,
  nodejsQuestions,
} from "../data/quiz-questions";
import Modal from "./Modal";
import Confirmation from "./Confirmation";
import Quiz from "./Quiz";
import Header from "./Header";
export default function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [IsQuizStarted, setIsQuizStarted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState(reactQuestions);

  const confirmQuiz = () => {
    setIsQuizStarted(true);
    setIsModelOpen(false);
  };

  function handleCloseModal() {
    setIsModelOpen(false);
  }

  function handleTakeQuiz(quiz) {
    setIsModelOpen(true);
    console.log("quiz name", quiz);
  }
  console.log("selected question parent", selectedQuestions);
  return (
    <>
      {isModelOpen ? (
        <Modal open={isModelOpen}>
          <Confirmation onConfirm={confirmQuiz} onCancel={handleCloseModal} />
        </Modal>
      ) : null}
      {IsQuizStarted ? (
        <Quiz selectedQuestions={selectedQuestions} />
      ) : (
        <main className=" container mx-auto">
          <Header />
          <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 ">
            {cards &&
              cards.map((card, index) => (
                <div
                  key={index}
                  className="border  hover:bg-purple-950 hover:cursor-pointer rounded hover:scale-105 transition-all ease-in-out p-4"
                >
                  <h2 className=" text-[20px] font-semibold mb-4">
                    {card.name}
                  </h2>
                  <p className="mb-2  ">{card.text}</p>

                  <p className="mb-2">Questions : {card.questions}</p>

                  <button
                    onClick={() => handleTakeQuiz(card.id)}
                    className="rounded bg-purple-500 px-4 py-2 hover:bg-purple-800"
                  >
                    Take Quiz
                  </button>
                </div>
              ))}
          </section>
        </main>
      )}
    </>
  );
}
