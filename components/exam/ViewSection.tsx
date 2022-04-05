import React from "react";
import { ExamQuestion } from "../../interfaces/ExamConfig";
import { MathJax } from "better-react-mathjax";

interface ViewSectionProps {
  questions: ExamQuestion[];
  backToMainView: () => void;
}

export default function ViewSection({
  questions,
  backToMainView,
}: ViewSectionProps) {
  console.log(questions);
  return (
    <>
      <div className="my-5">
        {questions.map(
          ({
            answer_statement,
            answer_image,
            question_statement,
            question_image,
            question_type,
          }) => (
            <div
              key={question_statement}
              className="border p-5 rounded-lg my-3"
            >
              <div>
                <h1 className="text-lg">{question_statement}</h1>
                {question_image !== "" && <img src={question_image} />}
              </div>
              {question_type === "mc" ? (
                answer_statement.map((answer, idx) => (
                  <div key={idx} className="my-6">
                    <h1 className="text-md flex items-center">
                      <span>{String.fromCharCode(idx + 65)}.</span>
                      <MathJax>{answer}</MathJax>
                    </h1>
                    {answer_image[idx] && <img src={answer_image[idx]} />}
                  </div>
                ))
              ) : (
                <h1 className="mt-7 text-xl">
                  Your answer: ___________________
                </h1>
              )}
            </div>
          )
        )}
      </div>
      <button
        className="bg-gray-200 p-3 rounded-lg"
        onClick={() => backToMainView()}
      >
        Go back to Section List
      </button>
    </>
  );
}
