interface StepFourProps {
  difficulties: string[];
}

export default function StepFour({ difficulties }: StepFourProps) {
  return (
    <>
      <h1 className="text-xl">Step 4: Specify distribution in difficulty</h1>
      {difficulties.map((difficulty) => (
        <input
          type="text"
          className="rounded-lg p-3 border-2"
          placeholder={`Enter number of ${difficulty} questions`}
        />
      ))}
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
