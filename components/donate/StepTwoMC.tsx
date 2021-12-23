import CustomSelect from "./CustomSelect";
import InputWithImage from "./InputWithImage";

export default function StepTwoMC() {
  const { name, defaultValue, defaultOption, options } = {
    name: "correctAnswer",
    defaultValue: "",
    defaultOption: "Select your question's correct answer",
    options: [
      {
        value: "a",
        option: "A",
      },
      {
        value: "b",
        option: "B",
      },
      {
        value: "c",
        option: "C",
      },
      {
        value: "d",
        option: "D",
      },
    ],
  };

  return (
    <>
      <div>
        <h1 className="text-xl">Step 2: Please provide your question</h1>
        <h1>Click the keyboard icon to type math notation</h1>
      </div>
      <InputWithImage placeholder="Enter your question statement" />
      <InputWithImage placeholder="Enter your question's option A" />
      <InputWithImage placeholder="Enter your question's option B" />
      <InputWithImage placeholder="Enter your question's option C" />
      <InputWithImage placeholder="Enter your question's option D" />
      <CustomSelect
        name={name}
        defaultOption={defaultOption}
        defaultValue={defaultValue}
        options={options}
      ></CustomSelect>
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
