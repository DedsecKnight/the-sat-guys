import { RadioItemData } from "./CustomRadio";
import CustomCheckbox from "./CustomCheckbox";

const radioList: RadioItemData[] = [
  {
    id: "reading",
    value: "Reading",
    option: "Reading",
  },
  {
    id: "writing",
    value: "Writing",
    option: "Writing",
  },
  {
    id: "math_cal",
    value: "MathCal",
    option: "Math (with Calculator)",
  },
  {
    id: "math_no_cal",
    value: "MathNoCal",
    option: "Math (no Calculator)",
  },
];

export default function StepTwo() {
  return (
    <>
      <h1 className="text-xl">
        {`Step 2: Choose all sections you'd like to work on`}
      </h1>
      <CustomCheckbox name="exam_section" options={radioList} />
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
