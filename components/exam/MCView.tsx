import React from "react";
import { ExamQuestion } from "../../interfaces/ExamConfig";

interface MCViewProps {
  question: ExamQuestion;
  onNextQuestion: () => void;
  onNextActionName: string;
  onPrevActionName: string;
  onPrevQuestion: (() => void) | null;
  currentResponse: string;
  onChangeResponse: (newResponse: string) => void;
}

export default function MCView({
  question,
  onNextQuestion,
  onPrevQuestion,
  currentResponse,
  onChangeResponse,
  onNextActionName,
  onPrevActionName,
}: MCViewProps) {
  return (
    <>
      <h1 className="text-2xl">{question.question_statement}</h1>
      {question.question_image !== "" && <img src={question.question_image} />}

      {question.answer_statement.map((answer, idx) => (
        <div
          key={idx}
          className={`flex flex-col p-3 rounded-lg my-4 ${
            answer === currentResponse
              ? "bg-green-500 text-white"
              : "border-2 hover:bg-gray-200"
          } cursor-pointer`}
          onClick={() => {
            onChangeResponse(answer);
          }}
        >
          <h1 className="text-lg">
            {String.fromCharCode(idx + 65)}. {answer}
          </h1>
          {question.answer_image[idx] !== "" && (
            <img src={question.answer_image[idx]} />
          )}
        </div>
      ))}

      <div className="flex justify-between my-6">
        <button
          className="bg-green-400 p-3 text-white rounded-lg"
          onClick={() => onNextQuestion()}
        >
          {onNextActionName}
        </button>

        {onPrevQuestion && (
          <button
            className="bg-gray-200 p-3 rounded-lg"
            onClick={() => onPrevQuestion()}
          >
            {onPrevActionName}
          </button>
        )}
      </div>
    </>
  );
}
