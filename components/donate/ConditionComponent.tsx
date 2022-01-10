import { useState, useEffect } from "react";
import CustomSelect from "./CustomSelect";

interface ConditionComponentProps {
  answer: string;
  updateAnswer: (value: string) => void;
}

export default function ConditionComponent({
  answer,
  updateAnswer,
}: ConditionComponentProps) {
  const [condition, setCondition] = useState("");
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (answer !== "") {
      const [currCondition, currValue] = answer.split(" ");
      setCondition(currCondition);
      setValue(currValue);
    }
  }, []);

  useEffect(() => {
    updateAnswer(`${condition} ${value !== "" ? value : "0"}`);
  }, [condition, value]);

  return (
    <div className="flex flex-col gap-y-2">
      <CustomSelect
        name="condition"
        value={condition}
        defaultOption="Select a comparison for this condition"
        options={[
          { option: "Greater than (>)", value: ">" },
          { option: "Less than (<)", value: "<" },
          { option: "Greater than or equal (>=)", value: ">=" },
          { option: "Less than or equal (<=)", value: "<=" },
        ]}
        onChangeHandler={(e) => {
          setCondition(e.target.value);
        }}
      />
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter a value here (0 if left empty)"
        className="p-3 rounded-lg w-full border-2"
      />
    </div>
  );
}
