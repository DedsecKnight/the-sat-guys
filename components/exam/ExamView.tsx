import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import ExamSectionList from "./ExamSectionList";
import StartSection from "./StartSection";
import ViewSection from "./ViewSection";

interface ExamViewProps {
  exam: ExamConfig;
}

export default function ExamView({ exam }: ExamViewProps) {
  const [examState, setExamState] = React.useState<{
    section: string;
    action: string;
  } | null>(null);
  const [userResponse, setUserResponse] = React.useState<
    Record<string, string[]>
  >({});

  React.useEffect(() => {
    setUserResponse(
      Object.entries(exam.sections).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: new Array<string>(value.length).fill(""),
        };
      }, {} as typeof userResponse)
    );
  }, []);

  const submitExam = () => {
    const userData = {
      ...userResponse,
      exam_id: exam.exam_id,
    };
    console.log(userData);
  };

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
    <StartSection
      sectionName={examState.section}
      questions={exam.sections[examState.section]}
      onSubmitHandler={() => {
        submitExam();
      }}
      responses={userResponse[examState.section]}
      backToMainView={() => setExamState(null)}
      onChangeResponse={(questionIdx, newResponse) => {
        const newResponseArr = userResponse[examState.section].map(
          (response, idx) => {
            if (idx === questionIdx) return newResponse;
            return response;
          }
        );
        setUserResponse((prev) => ({
          ...prev,
          [examState.section]: newResponseArr,
        }));
      }}
    />
  );
}
