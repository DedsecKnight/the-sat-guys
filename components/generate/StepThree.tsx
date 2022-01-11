import { DistItem } from "../../interfaces/GenerateConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";

interface StepThreeProps {
  getTotalQuestion: () => number;
  difficulties: DistItem[];
  onNextHandler: () => void;
  onPrevHandler: () => void;
  updateDistItem: (idx: number, value: number) => void;
}

export default function StepThree({
  getTotalQuestion,
  difficulties,
  onNextHandler,
  onPrevHandler,
  updateDistItem,
}: StepThreeProps) {
  const { updateNotificationlist } = useNotificationContext();

  const stepCompleted = (): StepCompleted => {
    const errors = [];
    let currTotalQuestions = 0;
    const expectedTotalQuestion = getTotalQuestion();
    for (let { count } of difficulties) {
      currTotalQuestions += count;
    }
    if (currTotalQuestions !== expectedTotalQuestion) {
      errors.push(
        `Total number of questions do not match. Expected ${expectedTotalQuestion}, found ${currTotalQuestions}`
      );
    }
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  return (
    <>
      <h1 className="text-xl">Step 4: Specify distribution in difficulty</h1>
      {difficulties.map(({ value: difficulty, count }, idx) => (
        <input
          key={idx}
          type="number"
          className="rounded-lg p-3 border-2"
          placeholder={`Enter number of ${difficulty} questions`}
          value={count}
          onChange={(e) => {
            updateDistItem(idx, parseInt(e.target.value));
          }}
        />
      ))}
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
