import { QuestionConfig } from "../../interfaces/QuestionConfig";
import TextAreaWithImage from "./TextAreaWithImage";

interface FRColViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  deleteAnswer: (idx: number) => void;
  updateAnswer: (idx: number, value: string) => void;
}

export default function FRColView({
  questionConfig,
  setQuestionConfig,
  deleteAnswer,
  updateAnswer,
}: FRColViewProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-full px-4">
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
      </div>
      <div className="w-full px-4 flex flex-col gap-y-6">
        {questionConfig.answers.map(({ answer }, idx) => (
          <div key={idx}>
            <textarea
              rows={5}
              value={answer}
              onChange={(e) => {
                updateAnswer(idx, e.target.value as string);
              }}
              className="p-3 rounded-lg border-2 w-full"
              placeholder="Enter your correct answer"
            ></textarea>
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
