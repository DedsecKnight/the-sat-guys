import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import ExamSectionList from "./ExamSectionList";
import ViewSection from "./ViewSection";

interface ExamViewProps {
  exam: ExamConfig;
}

export default function ExamView({ exam }: ExamViewProps) {
  const [examState, setExamState] = React.useState<{
    section: string;
    action: string;
  } | null>(null);

  if (!examState) {
    return (
      <ExamSectionList
        examConfig={exam}
        setExamState={(o) => setExamState(o)}
      />
    );
  }

  if (examState.action === "view") {
    return (
      <ViewSection
        questions={exam.sections[examState.section]}
        backToMainView={() => setExamState(null)}
      />
    );
  }

  return (
    <div>
      <h1>Hello there</h1>
      <button
        className="bg-gray-200 p-3 rounded-lg"
        onClick={() => setExamState(null)}
      >
        Go back to Section List
      </button>
    </div>
  );
}
