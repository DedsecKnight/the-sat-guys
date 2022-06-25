import { useRouter } from "next/router";
import React from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import { RequestHelper } from "../../lib/request-helper";
import ExamGradeView from "./ExamGradeView";
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
  const [gradeStatus, setGradeStatus] = React.useState<Record<
    string,
    boolean
  > | null>(null);
  const router = useRouter();

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

  const submitExam = async () => {
    const userSubmission = {
      action: "gradeExam",
      exam_id: exam.exam_id,
      answer: Object.entries(exam.sections).reduce(
        (acc: Record<string, string>, [section, examQuestions]) => {
          return {
            ...acc,
            ...examQuestions.reduce(
              (subAcc, curr, idx) => ({
                ...subAcc,
                [curr.question_id]: userResponse[section][idx],
              }),
              {} as Record<string, string>
            ),
          };
        },
        {} as Record<string, string>
      ),
    };
    try {
      console.log(userSubmission);
      const { data } = await RequestHelper.post<
        typeof userSubmission,
        Record<string, boolean>
      >(
        "/api/grade",
        {
          "Content-Type": "application/json",
        },
        userSubmission
      );
      setGradeStatus(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (gradeStatus) {
    return (
      <ExamGradeView
        gradeStatus={gradeStatus}
        examData={exam}
        onGenerateNewExam={() => {
          router.push("/generate");
        }}
        onGoBackToExamHandler={() => {
          setGradeStatus(null);
        }}
      />
    );
  }

  if (!examState) {
    return (
      <ExamSectionList
        examConfig={exam}
        setExamState={(o) => setExamState(o)}
        onSubmitHandler={() => {
          submitExam();
        }}
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
        setExamState(null);
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
