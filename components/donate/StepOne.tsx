import CustomSelect from "./CustomSelect";

const selectList = [
  {
    name: "topic",
    defaultValue: "",
    defaultOption: "Select your question's topic",
    options: [
      {
        value: "probability",
        option: "Probability",
      },
      {
        value: "algebra",
        option: "Algebra",
      },
      {
        value: "geometry",
        option: "Geometry",
      },
    ],
  },
  {
    name: "difficulty",
    defaultValue: "",
    defaultOption: "Select your question's difficulty",
    options: [
      {
        value: "easy",
        option: "Easy",
      },
      {
        value: "medium",
        option: "Medium",
      },
      {
        value: "hard",
        option: "Hard",
      },
    ],
  },
  {
    name: "category",
    defaultValue: "",
    defaultOption: "Select your question's category",
    options: [
      {
        value: "reading",
        option: "Reading",
      },
      {
        value: "writing",
        option: "Writing",
      },
      {
        value: "math",
        option: "Math",
      },
    ],
  },
  {
    name: "answerType",
    defaultValue: "",
    defaultOption: "Select your question's answer type",
    options: [
      {
        value: "mc",
        option: "Multiple Choice",
      },
      {
        value: "fr",
        option: "Free Response",
      },
    ],
  },
];

export default function StepOne() {
  return (
    <>
      <h1 className="text-xl">
        Step 1: Let's get started with some basic information
      </h1>
      <div className="flex flex-col gap-y-4">
        {selectList.map(({ name, defaultValue, defaultOption, options }) => (
          <CustomSelect
            key={name}
            name={name}
            defaultOption={defaultOption}
            defaultValue={defaultValue}
            options={options}
          />
        ))}
      </div>
      <div className="flex flex-row justify-end">
        <button
          type="button"
          className="rounded-lg bg-green-400 p-3 text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}
