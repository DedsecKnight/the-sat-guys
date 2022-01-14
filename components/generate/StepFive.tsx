import { useState } from "react";
import { GenerateConfig } from "../../interfaces/GenerateConfig";
import { actionList } from "../../lib/generate";
import CustomRadio from "./CustomRadio";

interface StepFiveProps {
  generateConfig: GenerateConfig;
}

export default function StepFive({ generateConfig }: StepFiveProps) {
  const [action, setAction] = useState("");
  return (
    <>
      <h1 className="text-xl">Step 5: Choose an action</h1>
      <div className="border-2 rounded-lg p-4">
        <CustomRadio
          name={actionList.name}
          options={actionList.options}
          onChangeHandler={(value) => {
            setAction(value);
          }}
          currentValue={action}
        />
      </div>
      <div className="flex flex-row justify-between">
        <button type="button" className="bg-gray-200 p-3 rounded-lg">
          Previous
        </button>
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            console.log(action);
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
