import reactLogo from "../assets/react.png";
import jsLogo from "../assets/javascript.png";
import nextJsLogo from "../assets/nextjs.png";
import nodeLogo from "../assets/node-js.png";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function Confirmation({ onCancel, onConfirm, quizName }) {
  console.log(quizName, "quiz name ");
  return (
    <div className="relative min-w-96 overflow-hidden min-h-56 border p-6 rounded bg-white shadow-lg">
      <button
        onClick={onCancel}
        className="absolute hover:scale-105 top-2 right-2  "
      >
        <IconSquareRoundedX size={30} />
      </button>
      <div className="flex justify-center mb-4">
        <img
          src={
            quizName === "react_quiz"
              ? reactLogo
              : quizName === "javascript_quiz"
              ? jsLogo
              : quizName === "next_quiz"
              ? nextJsLogo
              : quizName === "node_quiz"
              ? nodeLogo
              : ""
          }
          alt="React Logo"
          className="h-[80px] w-[80px]"
        />
      </div>
      <h2 className=" text-center text-2xl font-semibold mb-2">
        Quiz Instructions
      </h2>
      <ul className=" list-disc px-4">
        <li className=" mb-2">Each question has 30 seconds to answer.</li>
        <li className=" mb-2">Once the test starts, do not reload the page.</li>
        <li className=" mb-4">
          Make sure you are ready before starting the quiz.
        </li>
      </ul>

      <div className="flex justify-center">
        <button
          onClick={onConfirm}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Start the Quiz
        </button>
      </div>
    </div>
  );
}
