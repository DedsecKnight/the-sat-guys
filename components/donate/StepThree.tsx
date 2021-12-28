import FRView from "./FRView";
import MCView from "./MCView";

export default function StepThree() {
  return (
    <>
      <div>
        <h1 className="text-xl">Step 3: Confirm your question</h1>
        <h1>Here is what your question will look like on an exam</h1>
        <FRView />
        <div className="flex flex-row justify-between">
          <button type="button" className="bg-gray-200 p-3 rounded-lg">
            Previous
          </button>
          <button
            type="button"
            className="bg-green-400 p-3 rounded-lg text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
