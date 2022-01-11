import { CheckboxItemData } from "../components/generate/CustomCheckbox";
import { RadioItemData } from "../components/generate/CustomRadio";

export const sectionList: CheckboxItemData[] = [
  {
    id: "reading",
    value: "reading",
    option: "Reading",
  },
  {
    id: "writing",
    value: "writing",
    option: "Writing",
  },
  {
    id: "math_cal",
    value: "cal",
    option: "Math (with Calculator)",
  },
  {
    id: "math_no_cal",
    value: "no_cal",
    option: "Math (no Calculator)",
  },
];

export const strategyList: RadioItemData[] = [
  {
    id: "specific_strategy",
    value: "specific",
    option:
      "I want to specify the number of questions for each topic and sections",
  },
  {
    id: "total_strategy",
    value: "total",
    option:
      "I just need a certain amount of question. I don't care how it is distributed among the sections.",
  },
  {
    id: "normal_strategy",
    value: "normal",
    option: "I just need a normal SAT exam.",
  },
];

export const diffList = ["easy", "normal", "hard"];

export const actionList = {
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
