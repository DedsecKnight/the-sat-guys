import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";

interface StepTwoTotalProps {
  totalQuestion: number;
  updateTotalQuestion: (value: number) => void;
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepTwoTotal({
  onNextHandler,
  onPrevHandler,
  totalQuestion,
  updateTotalQuestion,
}: StepTwoTotalProps) {
  const { updateNotificationlist } = useNotificationContext();

  const stepCompleted = (): StepCompleted => {
    const errors = [];
    if (totalQuestion <= 0) {
      errors.push("At least 1 question is required");
    }
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  return (
    <>
      <h1 className="text-xl">Step 3: Specify the number of questions</h1>
      <input
        type="number"
        value={totalQuestion}
        onChange={(e) => {
          updateTotalQuestion(parseInt(e.target.value) || 0);
        }}
        className="w-full rounded-xl p-2 border-2"
        placeholder="Enter number of questions"
      />
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
            if (status) onNextHandler();
            else
              updateNotificationlist(
                msg.map((err) => ({
                  type: "error",
                  msg: err,
                }))
              );
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
