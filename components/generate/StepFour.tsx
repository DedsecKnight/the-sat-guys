import { GenerateConfig } from "../../interfaces/GenerateConfig";
import CustomRadio from "./CustomRadio";

const radioData = {
  name: "final_action",
  options: [
    {
      id: "view_exam",
      value: "view_exam",
      option: "View Exam",
    },
    {
      id: "start_exam",
      value: "start_exam",
      option: "Start Exam",
    },
  ],
};

interface StepFourProps {
  generateConfig: GenerateConfig;
}

export default function StepFour({ generateConfig }: StepFourProps) {
  console.log(generateConfig);
  return (
    <div></div>
    // <>
    //   <h1 className="text-xl">Step 5: Choose an action</h1>
    //   <div className="border-2 rounded-lg p-4">
    //     <CustomRadio name="final_action" options={radioData.options} />
    //   </div>
    //   <div className="flex flex-row justify-between">
    //     <button type="button" className="bg-gray-200 p-3 rounded-lg">
    //       Previous
    //     </button>
    //     <button
    //       type="button"
    //       className="bg-green-400 p-3 rounded-lg text-white"
    //     >
    //       Confirm
    //     </button>
    //   </div>
    // </>
  );
}
