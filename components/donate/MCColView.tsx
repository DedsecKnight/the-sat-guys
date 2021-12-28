import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import TextAreaWithImage from "./TextAreaWithImage";

export default function MCColView() {
  const { name, defaultValue, defaultOption, options } =
    mockCorrectAnswerSelect;
  return (
    <div className="flex flex-row justify-between">
      <div className="w-full px-4">
        <TextAreaWithImage placeholder="Enter your question statement" />
      </div>
      <div className="w-full px-4 flex gap-y-6 flex-col">
        <TextAreaWithImage placeholder="Enter your question's option A" />
        <TextAreaWithImage placeholder="Enter your question's option B" />
        <TextAreaWithImage placeholder="Enter your question's option C" />
        <TextAreaWithImage placeholder="Enter your question's option D" />
        <CustomSelect
          name={name}
          defaultOption={defaultOption}
          defaultValue={defaultValue}
          options={options}
        ></CustomSelect>
      </div>
    </div>
  );
}
