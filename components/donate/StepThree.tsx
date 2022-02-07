import { useEffect } from "react";
import {
  QuestionConfig,
  SubmitQuestionConfig,
} from "../../interfaces/QuestionConfig";
import { convertFileToBase64 } from "../../lib/convert-base64";
import { RequestHelper } from "../../lib/request-helper";
import { useLoadingContext } from "../context-api/LoadingContext";
import { useNotificationContext } from "../context-api/NotificationContext";
import FRView from "./FRView";
import MCView from "./MCView";

interface StepThreeProps {
  questionConfig: QuestionConfig;
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepThree({
  questionConfig,
  onNextHandler,
  onPrevHandler,
}: StepThreeProps) {
  const { toggleLoading } = useLoadingContext();
  const { updateNotificationlist, emptyNotificationList } =
    useNotificationContext();

  useEffect(() => {
    emptyNotificationList();
  }, []);

  const processConfig = async (questionConfig: QuestionConfig) => {
    const submitConfig: SubmitQuestionConfig = {
      ...questionConfig,
      question: {
        question: questionConfig.question.question,
        image: "",
      },
      answers: [],
    };
    submitConfig.question.image = await convertFileToBase64(
      questionConfig.question.image
    );
    for (let answer of questionConfig.answers) {
      const newAnswer: typeof submitConfig.answers[0] = {
        ...answer,
        image: "",
      };
      newAnswer.image = await convertFileToBase64(answer.image);
      submitConfig.answers.push(newAnswer);
    }
    return submitConfig;
  };

  const submitQuestion = async () => {
    const submitConfig = await processConfig(questionConfig);

    try {
      const res = await RequestHelper.post<
        {
          action: string;
          questionConfig: SubmitQuestionConfig;
        },
        string
      >(
        "/api/donate",
        { "Content-Type": "application/json" },
        {
          action: "donate",
          questionConfig: submitConfig,
        }
      );
      return res;
    } catch (error) {
      console.error(error);
      return {
        status: false,
        data: "",
      };
    }
  };

  return (
    <>
      <div>
        <h1 className="text-xl">Step 3: Confirm your question</h1>
        <h1>Here is what your question will look like on an exam</h1>
        {questionConfig.qtype === "mc" ? (
          <MCView questionConfig={questionConfig} />
        ) : (
          <FRView questionConfig={questionConfig} />
        )}
        <div className="flex flex-row justify-between">
          <button
            type="button"
            className="bg-gray-200 p-3 rounded-lg"
            onClick={() => {
              onPrevHandler();
            }}
          >
            Previous
          </button>
          <button
            type="button"
            className="bg-green-400 p-3 rounded-lg text-white"
            onClick={async () => {
              toggleLoading();
              try {
                const { status, data } = await submitQuestion();
                updateNotificationlist([
                  { type: status ? "success" : "error", msg: data },
                ]);
                toggleLoading();
                if (status) {
                  onNextHandler();
                } else {
                  console.log(data);
                }
              } catch (error) {
                updateNotificationlist([
                  {
                    type: "error",
                    msg: "Unexpected error occurred, please try again later!",
                  },
                ]);
                toggleLoading();
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
