import { useEffect, useState } from "react";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";

interface StepThreeProps {
  getTotalQuestion: () => number;
  difficulties: Record<string, number>;
  onNextHandler: () => void;
  onPrevHandler: () => void;
  updateDistItem: (key: string, value: number) => void;
}

export default function StepThree({
  getTotalQuestion,
  difficulties,
  onNextHandler,
  onPrevHandler,
  updateDistItem,
}: StepThreeProps) {
  const { updateNotificationlist } = useNotificationContext();
  const [totalQuestions, _] = useState(getTotalQuestion());
  const [remainQuestions, setRemainQuestions] = useState(totalQuestions);

  const stepCompleted = (): StepCompleted => {
    const errors = [];
    if (remainQuestions !== 0) {
      errors.push(
        `Total number of questions do not match. Expected ${totalQuestions}, found ${
          totalQuestions - remainQuestions
        }`
      );
    }
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setTimeout(() => {
      setRemainQuestions(
        totalQuestions -
          Object.values(difficulties).reduce((acc, curr) => acc + curr, 0)
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [difficulties]);

  return (
    <>
      <h1 className="text-xl">Step 4: Specify distribution in difficulty</h1>
      <h1 className="text-xl">Remain number of questions: {remainQuestions}</h1>
      {Object.entries(difficulties).map(([difficulty, count]) => (
        <input
          key={difficulty}
          type="number"
          className="rounded-lg p-3 border-2"
          placeholder={`Enter number of ${difficulty} questions`}
          value={count === 0 ? "" : count}
          onChange={(e) => {
            updateDistItem(difficulty, parseInt(e.target.value) || 0);
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
