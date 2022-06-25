import React from "react";
import { ExamQuestion } from "../../interfaces/ExamConfig";
import FRView from "./FRView";
import MCView from "./MCView";

interface StartSectionProps {
  sectionName: string;
  questions: ExamQuestion[];
  onSubmitHandler: () => void;
  responses: string[];
  backToMainView: () => void;
  onChangeResponse: (questionIdx: number, newResponse: string) => void;
}

export default function StartSection({
  sectionName,
  questions,
  onSubmitHandler,
  responses,
  backToMainView,
  onChangeResponse,
}: StartSectionProps) {
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);

  if (questionIndex === 0) {
    return (
      <>
        <h1 className="text-2xl text-center">Section: {sectionName}</h1>
        <h1 className="text-lg text-center">
          Number of questions: {questions.length}
        </h1>
        <div className="flex justify-between">
          <button
            className="bg-green-400 p-3 text-white rounded-lg"
            onClick={() => setQuestionIndex((prev) => prev + 1)}
          >
            Click to begin
          </button>
          <button
            className="bg-gray-200 p-3 rounded-lg"
            onClick={() => backToMainView()}
          >
            Click to go back
          </button>
        </div>
      </>
    );
  }

  if (questions[questionIndex - 1].question_type === "fr") {
    return (
      <FRView
        question={questions[questionIndex - 1]}
        onNextQuestion={() => {
          if (questionIndex === questions.length) onSubmitHandler();
          else setQuestionIndex((prev) => prev + 1);
        }}
        onNextActionName={
          questionIndex === questions.length ? "Submit" : "Next Question"
        }
        onPrevActionName="Previous Question"
        onPrevQuestion={
          questionIndex === 1
            ? null
            : () => {
                setQuestionIndex((prev) => prev - 1);
              }
        }
        currentResponse={responses[questionIndex - 1]}
        onChangeResponse={(newResponse) =>
          onChangeResponse(questionIndex - 1, newResponse)
        }
      />
    );
  }

  return (
    <MCView
      question={questions[questionIndex - 1]}
      onNextQuestion={() => {
        if (questionIndex === questions.length) onSubmitHandler();
        else setQuestionIndex((prev) => prev + 1);
      }}
      onNextActionName={
        questionIndex === questions.length ? "Submit" : "Next Question"
      }
      onPrevActionName="Previous Question"
      onPrevQuestion={
        questionIndex === 1
          ? null
          : () => {
              setQuestionIndex((prev) => prev - 1);
            }
      }
      currentResponse={responses[questionIndex - 1]}
      onChangeResponse={(newResponse) =>
        onChangeResponse(questionIndex - 1, newResponse)
      }
    />
  );
}
