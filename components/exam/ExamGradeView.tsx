import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import { sectionMapping } from "../../lib/constants";

interface ExamGradeViewProps {
  gradeStatus: Record<string, boolean>;
  examData: ExamConfig;
  onGoBackToExamHandler: () => void;
  onGenerateNewExam: () => void;
}

export default function ExamGradeView({
  gradeStatus,
  examData,
  onGenerateNewExam,
  onGoBackToExamHandler,
}: ExamGradeViewProps) {
  return (
    <div className="my-3">
      <h1 className="text-xl font-bold">Grade Report</h1>
      {Object.entries(examData.sections).map(([sectionName, sectionData]) => (
        <div key={sectionName} className="flex flex-col gap-y-4 my-3">
          <h1 className="text-lg">{sectionMapping[sectionName]}</h1>
          {sectionData.map((question) => (
            <div
              className="flex items-center gap-x-2 border-2 p-3 rounded-lg"
              key={question.question_id}
            >
              <div className="h-full">
                {gradeStatus[question.question_id] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <h1
                className={`${
                  gradeStatus[question.question_id]
                    ? "text-green-400"
                    : "text-red-500"
                } text-md`}
              >
                {question.question_statement}
              </h1>
            </div>
          ))}
        </div>
      ))}
      <div className="flex gap-x-3">
        <button
          onClick={() => onGoBackToExamHandler()}
          className="rounded-lg bg-gray-200 p-3"
        >
          Back to current exam
        </button>
        <button
          onClick={() => onGenerateNewExam()}
          className="rounded-lg bg-gray-200 p-3"
        >
          Generate new exam
        </button>
      </div>
    </div>
  );
}
