import { StepCompleted } from "../../interfaces/StepCompleted";
import { checkboxList } from "../../lib/generate";
import { useNotificationContext } from "../context-api/NotificationContext";
import CustomCheckbox from "./CustomCheckbox";

interface InitStepProps {
  checkedSection: Array<{
    section: string;
    checked: boolean;
  }>;
  updateCheckedSection: (
    value: Array<{
      section: string;
      checked: boolean;
    }>
  ) => void;
  updateSectionList: (value: string[]) => void;
  onNextHandler: () => void;
}

export default function InitStep({
  updateSectionList,
  onNextHandler,
  checkedSection,
  updateCheckedSection,
}: InitStepProps) {
  const { updateNotificationlist } = useNotificationContext();

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
          updateCheckedSection(
            checkedSection.map((obj, idx) => ({
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
