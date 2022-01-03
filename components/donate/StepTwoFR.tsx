import { useEffect } from "react";
import { useNavContext } from "../context-api/NavContext";
import FRColView from "./FRColView";
import FRRowView from "./FRRowView";
import { ExamConfig } from "../../interfaces/ExamConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";

interface StepTwoFRProps {
  examConfig: ExamConfig;
  onNextHandler: () => void;
  onPrevHandler: () => void;
  setExamConfig: (value: ExamConfig) => void;
}

export default function StepTwoFR({
  examConfig,
  onNextHandler,
  onPrevHandler,
  setExamConfig,
}: StepTwoFRProps) {
  const { showNavBar } = useNavContext();

  const deleteAnswer = (idx: number) => {
    const newCorrect = [...examConfig.answers];
    newCorrect.splice(idx, 1);
    const newExamConfig: ExamConfig = {
      ...examConfig,
      answers: newCorrect,
    };
    setExamConfig(newExamConfig);
  };

  const addAnswer = () => {
    setExamConfig({
      ...examConfig,
      answers: [
        ...examConfig.answers,
        { answer: "", isCorrect: true, image: null },
      ],
    });
  };

  const updateAnswer = (idx: number, value: string) => {
    const newAnswers = [...examConfig.answers];
    newAnswers[idx].answer = value;
    setExamConfig({
      ...examConfig,
      answers: newAnswers,
    });
  };

  const resetData = () => {
    setExamConfig({
      ...examConfig,
      question: {
        question: "",
        image: null,
      },
      answers: [],
    });
  };

  const stepCompleted = (): StepCompleted => {
    const errors: string[] = [];
    if (examConfig.question.question === "") {
      errors.push("Question statement must not be empty");
    }

    if (examConfig.answers.length === 0) {
      errors.push("There must be at least 1 answer");
    }

    if (
      examConfig.answers.filter(({ answer }) => answer.length === 0).length > 0
    ) {
      errors.push("Answer statements must not be empty");
    }

    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  useEffect(() => {
    if (examConfig.answers.length === 0) {
      addAnswer();
    }
  }, []);

  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      {showNavBar ? (
        <FRRowView
          examConfig={examConfig}
          setExamConfig={(value) => {
            setExamConfig(value);
          }}
          deleteAnswer={deleteAnswer}
          updateAnswer={updateAnswer}
        />
      ) : (
        <FRColView
          examConfig={examConfig}
          setExamConfig={(value) => {
            setExamConfig(value);
          }}
          deleteAnswer={deleteAnswer}
          updateAnswer={updateAnswer}
        />
      )}
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="bg-gray-200 p-3 rounded-lg"
          onClick={() => {
            resetData();
            onPrevHandler();
          }}
        >
          Previous
        </button>
        <div className="flex flex-row gap-x-2">
          <button
            type="button"
            onClick={() => {
              addAnswer();
            }}
            className="bg-green-400 p-3 rounded-lg text-white"
          >
            Add Answer
          </button>
          <button
            type="button"
            className="bg-green-400 p-3 rounded-lg text-white"
            onClick={() => {
              // TODO: Implement function to check if step is completed
              const completed = stepCompleted();
              if (completed.status) onNextHandler();
              else console.log(completed.msg);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
