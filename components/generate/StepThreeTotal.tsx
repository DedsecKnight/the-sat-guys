export default function StepThreeTotal() {
  return (
    <>
      <h1 className="text-xl">Step 3: Specify the number of questions</h1>
      <input
        type="text"
        className="w-full rounded-xl p-2 border-2"
        placeholder="Enter number of questions"
      />
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
