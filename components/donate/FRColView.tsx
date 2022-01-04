import { QuestionConfig } from "../../interfaces/QuestionConfig";
import ConditionComponent from "./ConditionComponent";
import CustomSelect from "./CustomSelect";
import TextAreaWithImage from "./TextAreaWithImage";

interface FRColViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  deleteAnswer: (idx: number) => void;
  updateAnswer: (idx: number, value: string) => void;
  isCondition: boolean;
  updateIsCondition: (value: boolean) => void;
}

export default function FRColView({
  questionConfig,
  setQuestionConfig,
  deleteAnswer,
  updateAnswer,
  isCondition,
  updateIsCondition,
}: FRColViewProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-y-3 w-full px-4">
        <TextAreaWithImage
          placeholder="Enter your question statement"
          textValue={questionConfig.question.question}
          imageValue={questionConfig.question.image}
          onChangeText={(value) => {
            setQuestionConfig({
              ...questionConfig,
              question: {
                ...questionConfig.question,
                question: value,
              },
            });
          }}
          onChangeImage={(value) => {
            setQuestionConfig({
              ...questionConfig,
              question: {
                ...questionConfig.question,
                image: value,
              },
            });
          }}
        />
        <CustomSelect
          name="isCondition"
          value={isCondition ? "condition" : "value"}
          defaultOption="Select your answer type"
          options={[
            { option: "Value", value: "value" },
            { option: "Condition", value: "condition" },
          ]}
          onChangeHandler={(e) => {
            updateIsCondition(e.target.value === "condition");
          }}
        />
      </div>
      <div className="w-full px-4 flex flex-col gap-y-6">
        {questionConfig.answers.map(({ answer }, idx) => (
          <div key={idx}>
            {isCondition ? (
              <ConditionComponent
                updateAnswer={(value) => {
                  updateAnswer(idx, value);
                }}
              />
            ) : (
              <textarea
                rows={5}
                value={answer}
                onChange={(e) => {
                  updateAnswer(idx, e.target.value as string);
                }}
                className="p-3 rounded-lg border-2 w-full"
                placeholder="Enter your correct answer"
              ></textarea>
            )}
            <button
              type="button"
              className="my-2 bg-red-500 py-1 px-2 rounded-lg text-white"
              onClick={() => {
                deleteAnswer(idx);
              }}
            >
              Delete Answer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
