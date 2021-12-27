import MCRowView from "./MCRowView";
import MCColView from "./MCColView";
import { useNavContext } from "../context-api/NavContext";

export default function StepTwoMC() {
  const { showNavBar } = useNavContext();

  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      {showNavBar ? <MCRowView /> : <MCColView />}
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
    </>
  );
}
