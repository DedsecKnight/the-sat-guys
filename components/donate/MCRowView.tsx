import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import InputWithImage from "./InputWithImage";

export default function MCRowView() {
  const { name, defaultValue, defaultOption, options } =
    mockCorrectAnswerSelect;
  return (
    <>
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
    </>
  );
}
