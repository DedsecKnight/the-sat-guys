import MCRowView from "./MCRowView";
import MCColView from "./MCColView";
import { useNavContext } from "../context-api/NavContext";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { useEffect, useState } from "react";
import { StepCompleted } from "../../interfaces/StepCompleted";

interface StepTwoMCProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepTwoMC({
  questionConfig,
  setQuestionConfig,
  onNextHandler,
  onPrevHandler,
}: StepTwoMCProps) {
  const { showNavBar } = useNavContext();
  const [correctValue, setCorrectValue] = useState("a");
  const [loading, setLoading] = useState(true);

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

  const updateCorrectAnswer = (idx: number) => {
    const newAnswers = [...questionConfig.answers];
    newAnswers[idx].isCorrect = true;
    setQuestionConfig({
      ...questionConfig,
      answers: newAnswers,
    });
  };

  const stepCompleted = (): StepCompleted => {
    const errors: string[] = [];

    if (questionConfig.question.question.length === 0) {
      errors.push("Question statement must not be empty");
    }

    if (
      questionConfig.answers.filter(
        ({ answer, image }) => answer.length === 0 && image === null
      ).length > 0
    ) {
      errors.push(
        "Answer statement must have either an image or text statement or both"
      );
    }

    const correctIdx = correctValue.charCodeAt(0) - 97;
    if (correctIdx < 0 || correctIdx >= 4) {
      errors.push("Invalid correct answer option value found. ");
    } else {
      updateCorrectAnswer(correctIdx);
    }

    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  useEffect(() => {
    if (questionConfig.answers.length === 0)
      setQuestionConfig({
        ...questionConfig,
        answers: [
          { answer: "", isCorrect: false, image: null },
          { answer: "", isCorrect: false, image: null },
          { answer: "", isCorrect: false, image: null },
          { answer: "", isCorrect: false, image: null },
        ],
      });
    setLoading(false);
  }, []);

  if (loading) return <div></div>;

  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      {showNavBar ? (
        <MCRowView
          questionConfig={questionConfig}
          setQuestionConfig={(value) => {
            setQuestionConfig(value);
          }}
          correctValue={correctValue}
          setCorrectValue={(value) => {
            setCorrectValue(value);
          }}
        />
      ) : (
        <MCColView
          questionConfig={questionConfig}
          setQuestionConfig={(value) => {
            setQuestionConfig(value);
          }}
          correctValue={correctValue}
          setCorrectValue={(value) => {
            setCorrectValue(value);
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
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            const completed = stepCompleted();
            if (completed.status) {
              onNextHandler();
            } else console.log(completed.msg);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
