import { DistItem } from "../../interfaces/GenerateConfig";

interface StepThreeProps {
  difficulties: DistItem[];
  onNextHandler: () => void;
  onPrevHandler: () => void;
  updateDistItem: (idx: number, value: number) => void;
}

export default function StepThree({
  difficulties,
  onNextHandler,
  onPrevHandler,
  updateDistItem,
}: StepThreeProps) {
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
            onNextHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
