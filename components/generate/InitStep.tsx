import { useState } from "react";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";
import CustomCheckbox, { CheckboxItemData } from "./CustomCheckbox";

interface InitStepProps {
  updateSectionList: (value: string[]) => void;
  onNextHandler: () => void;
}

const checkboxList: CheckboxItemData[] = [
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

export default function InitStep({
  updateSectionList,
  onNextHandler,
}: InitStepProps) {
  const { updateNotificationlist } = useNotificationContext();
  const [checkedSection, setCheckedSection] = useState(
    checkboxList.map(({ value }) => ({
      section: value,
      checked: false,
    }))
  );

  const stepCompleted = (): StepCompleted => {
    const errors = [];
    if (checkedSection.filter(({ checked }) => checked).length === 0) {
      errors.push("At least 1 section must be chosen");
    }

    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  return (
    <>
      <h1 className="text-xl">{`Choose all sections you'd like to work on`}</h1>
      <CustomCheckbox
        name="exam_section"
        options={checkboxList}
        checkedState={checkedSection.map(({ checked }) => checked)}
        updateCheckedState={(value) => {
          setCheckedSection((prev) =>
            prev.map((obj, idx) => ({
              ...obj,
              checked: value[idx],
            }))
          );
        }}
      />
      <div className="flex flex-row justify-end">
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            const { status, msg: errors } = stepCompleted();
            if (!status) {
              updateNotificationlist(
                errors.map((error) => ({
                  type: "error",
                  msg: error,
                }))
              );
              return;
            }
            updateSectionList(
              checkedSection
                .filter(({ checked }) => checked)
                .map(({ section }) => section)
            );
            onNextHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
