import { ExamConfig } from "../../interfaces/ExamConfig";
import InputWithImage from "./InputWithImage";

interface FRRowViewProps {
  examConfig: ExamConfig;
  setExamConfig: (value: ExamConfig) => void;
  deleteAnswer: (idx: number) => void;
  updateAnswer: (idx: number, value: string) => void;
}

export default function FRRowView({
  examConfig,
  setExamConfig,
  deleteAnswer,
  updateAnswer,
}: FRRowViewProps) {
  return (
    <>
      <InputWithImage
        placeholder="Enter your question statement"
        textValue={examConfig.question.question}
        imageValue={examConfig.question.image}
        onChangeText={(value) => {
          setExamConfig({
            ...examConfig,
            question: {
              ...examConfig.question,
              question: value,
            },
          });
        }}
        onChangeImage={(value) => {
          setExamConfig({
            ...examConfig,
            question: {
              ...examConfig.question,
              image: value,
            },
          });
        }}
      />
      {examConfig.answers.map(({ answer }, idx) => (
        <div key={idx}>
          <input
            type="text"
            value={answer}
            onChange={(e) => {
              updateAnswer(idx, e.target.value as string);
            }}
            className="p-3 rounded-lg border-2 w-full"
            placeholder="Enter your correct answer"
          />
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
