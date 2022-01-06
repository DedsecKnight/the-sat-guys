import { useEffect } from "react";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { API_URL } from "../../lib/constants";
import { RequestHelper } from "../../lib/request-helper";
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
  const { updateNotificationlist, emptyNotificationList } =
    useNotificationContext();

  useEffect(() => {
    emptyNotificationList();
  }, []);

  const submitQuestion = async () => {
    return RequestHelper.post<
      {
        action: string;
        questionConfig: QuestionConfig;
      },
      string
    >(
      `${API_URL}/donate`,
      { "Content-Type": "application/json" },
      {
        action: "donate",
        questionConfig,
      }
    );
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
              const { status, data } = await submitQuestion();
              updateNotificationlist([
                { type: status ? "success" : "error", msg: data },
              ]);
              if (status) {
                onNextHandler();
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
