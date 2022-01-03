import { ExamConfig } from "../../interfaces/ExamConfig";
import FRView from "./FRView";
import MCView from "./MCView";

interface StepThreeProps {
  examConfig: ExamConfig;
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepThree({
  examConfig,
  onNextHandler,
  onPrevHandler,
}: StepThreeProps) {
  return (
    <>
      <div>
        <h1 className="text-xl">Step 3: Confirm your question</h1>
        <h1>Here is what your question will look like on an exam</h1>
        {examConfig.qtype === "mc" ? (
          <MCView examConfig={examConfig} />
        ) : (
          <FRView examConfig={examConfig} />
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
            onClick={() => {
              onNextHandler();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
