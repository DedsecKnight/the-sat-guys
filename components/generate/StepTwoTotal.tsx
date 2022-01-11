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
  return (
    <>
      <h1 className="text-xl">Step 3: Specify the number of questions</h1>
      <input
        type="number"
        value={totalQuestion}
        onChange={(e) => {
          updateTotalQuestion(parseInt(e.target.value));
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
            onNextHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
