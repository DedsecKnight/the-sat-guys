import { useState } from "react";
import { GenerateConfig } from "../../interfaces/GenerateConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { actionList } from "../../lib/generate";
import { useNotificationContext } from "../context-api/NotificationContext";
import CustomRadio from "./CustomRadio";

interface StepFiveProps {
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepFive({
  onPrevHandler,
  onNextHandler,
}: StepFiveProps) {
  const [action, setAction] = useState("");
  const { updateNotificationlist } = useNotificationContext();

  const stepCompleted = (): StepCompleted => {
    const errors = [];
    if (action === "") errors.push("An action is required");
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  return (
    <>
      <h1 className="text-xl">Step 5: Choose an action</h1>
      <div className="border-2 rounded-lg p-4">
        <CustomRadio
          name={actionList.name}
          options={actionList.options}
          onChangeHandler={(value) => {
            setAction(value);
          }}
          currentValue={action}
        />
      </div>
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
          onClick={() => {
            const { status, msg } = stepCompleted();
            if (status) {
              console.log(action);
              onNextHandler();
            } else {
              updateNotificationlist(
                msg.map((err) => ({
                  msg: err,
                  type: "error",
                }))
              );
            }
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
