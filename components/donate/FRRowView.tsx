import { QuestionConfig } from "../../interfaces/QuestionConfig";
import ConditionComponent from "./ConditionComponent";
import CustomSelect from "./CustomSelect";
import InputWithImage from "./InputWithImage";

interface FRRowViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  deleteAnswer: (idx: number) => void;
  updateAnswer: (idx: number, value: string) => void;
  isCondition: boolean;
  updateIsCondition: (value: boolean) => void;
}

export default function FRRowView({
  questionConfig,
  setQuestionConfig,
  deleteAnswer,
  updateAnswer,
  isCondition,
  updateIsCondition,
}: FRRowViewProps) {
  return (
    <>
      <InputWithImage
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
      {questionConfig.answers.map(({ answer }, idx) => (
        <div key={idx}>
          {isCondition ? (
            <ConditionComponent
              updateAnswer={(value) => {
                updateAnswer(idx, value);
              }}
            />
          ) : (
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                updateAnswer(idx, e.target.value as string);
              }}
              className="p-3 rounded-lg border-2 w-full"
              placeholder="Enter your correct answer"
            />
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
    </>
  );
}
