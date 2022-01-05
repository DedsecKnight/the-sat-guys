import { useEffect, useState } from "react";
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
  isCondition: boolean;
  updateIsCondition: (value: boolean) => void;
}

export default function StepTwoFR({
  questionConfig,
  onNextHandler,
  onPrevHandler,
  setQuestionConfig,
  isCondition,
  updateIsCondition,
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
        { answer: "", isCorrect: true, image: null, isCondition },
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
    if (
      questionConfig.question.question === "" &&
      questionConfig.question.image === null
    ) {
      errors.push("Question must have either a statement or an image");
    }

    if (questionConfig.answers.length === 0) {
      errors.push("There must be at least 1 answer");
    }

    if (questionConfig.question.image?.type.indexOf("image") === -1) {
      errors.push("Uploaded file must be an image");
    }

    if (
      questionConfig.answers.filter(
        ({ answer, image }) => answer.length === 0 && image === null
      ).length > 0
    ) {
      errors.push("Answer must either be a statement or an image");
    }

    if (
      questionConfig.answers.filter(
        ({ image }) => image && image.type.indexOf("image") === -1
      ).length > 0
    ) {
      errors.push("Uploaded file must be an image");
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
          isCondition={isCondition}
          updateIsCondition={(value) => {
            updateIsCondition(value);
          }}
        />
      ) : (
        <FRColView
          questionConfig={questionConfig}
          setQuestionConfig={(value) => {
            setQuestionConfig(value);
          }}
          deleteAnswer={deleteAnswer}
          updateAnswer={updateAnswer}
          isCondition={isCondition}
          updateIsCondition={(value) => {
            updateIsCondition(value);
          }}
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
