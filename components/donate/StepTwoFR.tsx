import { useEffect } from "react";
import { useNavContext } from "../context-api/NavContext";
import FRColView from "./FRColView";
import FRRowView from "./FRRowView";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";

interface StepTwoFRProps {
  questionConfig: QuestionConfig;
  onNextHandler: () => void;
  onPrevHandler: () => void;
  setQuestionConfig: (value: QuestionConfig) => void;
}

export default function StepTwoFR({
  questionConfig,
  onNextHandler,
  onPrevHandler,
  setQuestionConfig,
}: StepTwoFRProps) {
  const { showNavBar } = useNavContext();

  const deleteAnswer = (idx: number) => {
    const newCorrect = [...questionConfig.answers];
    newCorrect.splice(idx, 1);
    const newQuestionConfig: QuestionConfig = {
      ...questionConfig,
      answers: newCorrect,
    };
    setQuestionConfig(newQuestionConfig);
  };

  const addAnswer = () => {
    setQuestionConfig({
      ...questionConfig,
      answers: [
        ...questionConfig.answers,
        { answer: "", isCorrect: true, image: null },
      ],
    });
  };

  const updateAnswer = (idx: number, value: string) => {
    const newAnswers = [...questionConfig.answers];
    newAnswers[idx].answer = value;
    setQuestionConfig({
      ...questionConfig,
      answers: newAnswers,
    });
  };

  const resetData = () => {
    setQuestionConfig({
      ...questionConfig,
      question: {
        question: "",
        image: null,
      },
      answers: [],
    });
  };

  const stepCompleted = (): StepCompleted => {
    const errors: string[] = [];
    if (questionConfig.question.question === "") {
      errors.push("Question statement must not be empty");
    }

    if (questionConfig.answers.length === 0) {
      errors.push("There must be at least 1 answer");
    }

    if (
      questionConfig.answers.filter(({ answer }) => answer.length === 0)
        .length > 0
    ) {
      errors.push("Answer statements must not be empty");
    }

    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  useEffect(() => {
    if (questionConfig.answers.length === 0) {
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
          questionConfig={questionConfig}
          setQuestionConfig={(value) => {
            setQuestionConfig(value);
          }}
          deleteAnswer={deleteAnswer}
          updateAnswer={updateAnswer}
        />
      ) : (
        <FRColView
          questionConfig={questionConfig}
          setQuestionConfig={(value) => {
            setQuestionConfig(value);
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
