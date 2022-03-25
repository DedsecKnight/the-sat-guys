import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";

interface ExamSectionListProps {
  examConfig: ExamConfig;
  setExamState: (o: { section: string; action: string }) => void;
}

export default function ExamSectionList({
  examConfig,
  setExamState,
}: ExamSectionListProps) {
  return (
    <div>
      {Object.keys(examConfig.sections).map((section) => (
        <div
          key={section}
          className="flex justify-between items-center border p-3 rounded-lg"
        >
          <h1 className="text-lg">{section}</h1>
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
    </div>
  );
}
