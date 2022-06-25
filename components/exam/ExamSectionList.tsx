import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import { sectionMapping } from "../../lib/constants";

interface ExamSectionListProps {
  examConfig: ExamConfig;
  setExamState: (o: { section: string; action: string }) => void;
  onSubmitHandler: () => void;
}

export default function ExamSectionList({
  examConfig,
  setExamState,
  onSubmitHandler,
}: ExamSectionListProps) {
  return (
    <div className="flex flex-col gap-y-3">
      {Object.keys(examConfig.sections).map((section) => (
        <div
          key={section}
          className="flex justify-between items-center border p-3 rounded-lg"
        >
          <h1 className="text-lg">{sectionMapping[section]}</h1>
          <div className="flex gap-x-2">
            <button
              onClick={() => setExamState({ section, action: "view" })}
              className="bg-green-400 p-3 text-white rounded-lg"
            >
              View Exam
            </button>
            <button
              onClick={() => setExamState({ section, action: "start" })}
              className="bg-green-400 p-3 text-white rounded-lg"
            >
              Start Exam
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => onSubmitHandler()}
        className="p-3 bg-green-400 rounded-lg text-white"
      >
        Submit
      </button>
    </div>
  );
}
