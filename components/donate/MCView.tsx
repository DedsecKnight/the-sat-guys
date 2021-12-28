export default function MCView() {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <h1 className="text-xl">Question Statement</h1>
      <div className="p-4 flex flex-col">
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">A. Option A</h1>
          <h1 className="text-lg">B. Option B</h1>
        </div>
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">C. Option C</h1>
          <h1 className="text-lg">D. Option D</h1>
        </div>
      </div>
    </div>
  );
}
