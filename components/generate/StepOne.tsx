import { RadioItemData } from "./CustomRadio";
import CustomRadio from "./CustomRadio";

const radioList: RadioItemData[] = [
  {
    id: "specific_strategy",
    value: "Specific",
    option:
      "I want to specify the number of questions for each topic and sections",
  },
  {
    id: "total_strategy",
    value: "Total",
    option:
      "I just need a certain amount of question. I don't care how it is distributed among the sections.",
  },
  {
    id: "normal_strategy",
    value: "Normal",
    option: "I just need a normal SAT exam.",
  },
];

export default function StepOne() {
  return (
    <>
      <h1 className="text-xl">Step 1: Choose your exam style</h1>
      <CustomRadio name="exam_style" options={radioList} />
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
