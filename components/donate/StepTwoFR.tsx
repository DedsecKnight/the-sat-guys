import { useState } from "react";
import InputWithImage from "./InputWithImage";

export default function StepTwoFR() {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([""]);
  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      <InputWithImage placeholder="Enter your question statement"></InputWithImage>
      <input
        type="text"
        className="p-3 rounded-lg border-2 w-full"
        placeholder="Enter your answer statement"
      />
      {correctAnswers.map((answer, idx) => (
        <div>
          <input
            type="text"
            value={answer}
            className="p-3 rounded-lg border-2 w-full"
            placeholder="Enter your correct answer"
          />
          <button
            type="button"
            className="my-2 bg-red-500 py-1 px-2 rounded-lg text-white"
            onClick={() => {
              const newCorrect = [...correctAnswers];
              newCorrect.splice(idx, 1);
              setCorrectAnswers(newCorrect);
            }}
          >
            Delete Answer
          </button>
        </div>
      ))}
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
            Add Question
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
