import { QuestionConfig } from "../../interfaces/QuestionConfig";
import InputWithImage from "./InputWithImage";

interface FRRowViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  deleteAnswer: (idx: number) => void;
  updateAnswer: (idx: number, value: string) => void;
}

export default function FRRowView({
  questionConfig,
  setQuestionConfig,
  deleteAnswer,
  updateAnswer,
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
      {questionConfig.answers.map(({ answer }, idx) => (
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
