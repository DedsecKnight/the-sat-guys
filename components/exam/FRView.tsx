import React from "react";
import { ExamQuestion } from "../../interfaces/ExamConfig";
import { Textarea } from "@mantine/core";

interface FRViewProps {
  question: ExamQuestion;
  onNextQuestion: () => void;
  onNextActionName: string;
  onPrevActionName: string;
  onPrevQuestion: (() => void) | null;
  currentResponse: string;
  onChangeResponse: (newResponse: string) => void;
}

export default function FRView({
  question,
  onNextQuestion,
  onPrevQuestion,
  currentResponse,
  onChangeResponse,
  onNextActionName,
  onPrevActionName,
}: FRViewProps) {
  return (
    <>
      <h1 className="text-2xl">{question.question_statement}</h1>
      {question.question_image !== "" && <img src={question.question_image} />}

      <Textarea
        placeholder="Enter your response here"
        label="Your response"
        required
        value={currentResponse}
        className="my-5"
        onChange={(e) => onChangeResponse(e.target.value)}
      />

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
    </>
  );
}
