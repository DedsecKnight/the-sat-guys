import { useState } from "react";
import { useNavContext } from "../context-api/NavContext";
import FRColView from "./FRColView";
import FRRowView from "./FRRowView";
import InputWithImage from "./InputWithImage";

export default function StepTwoFR() {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([""]);
  const { showNavBar } = useNavContext();

  const deleteAnswer = (idx: number) => {
    const newCorrect = [...correctAnswers];
    newCorrect.splice(idx, 1);
    setCorrectAnswers(newCorrect);
  };

  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      {showNavBar ? (
        <FRRowView
          correctAnswers={correctAnswers}
          deleteAnswer={deleteAnswer}
        />
      ) : (
        <FRColView
          correctAnswers={correctAnswers}
          deleteAnswer={deleteAnswer}
        />
      )}
      <div className="flex flex-row justify-between">
        <button type="button" className="bg-gray-200 p-3 rounded-lg">
          Previous
        </button>
        <div className="flex flex-row gap-x-2">
          <button
            type="button"
            onClick={() => {
              setCorrectAnswers((prev) => [...prev, ""]);
            }}
            className="bg-green-400 p-3 rounded-lg text-white"
          >
            Add Answer
          </button>
          <button
            type="button"
            className="bg-green-400 p-3 rounded-lg text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
