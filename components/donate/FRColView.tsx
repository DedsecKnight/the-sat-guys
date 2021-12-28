import TextAreaWithImage from "./TextAreaWithImage";

interface FRColViewProps {
  correctAnswers: string[];
  deleteAnswer: (idx: number) => void;
}

export default function FRColView({
  correctAnswers,
  deleteAnswer,
}: FRColViewProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-full px-4">
        <TextAreaWithImage placeholder="Enter your question statement" />
      </div>
      <div className="w-full px-4 flex flex-col gap-y-6">
        <textarea
          rows={5}
          className="p-3 rounded-lg border-2 w-full"
          placeholder="Enter your answer statement"
        ></textarea>
        {correctAnswers.map((answer, idx) => (
          <div key={idx}>
            <textarea
              rows={5}
              value={answer}
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
