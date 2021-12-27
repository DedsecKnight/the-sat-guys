import InputWithImage from "./InputWithImage";

interface FRRowViewProps {
  correctAnswers: string[];
  deleteAnswer: (idx: number) => void;
}

export default function FRRowView({
  correctAnswers,
  deleteAnswer,
}: FRRowViewProps) {
  return (
    <>
      <InputWithImage placeholder="Enter your question statement"></InputWithImage>
      <input
        type="text"
        className="p-3 rounded-lg border-2 w-full"
        placeholder="Enter your answer statement"
      />
      {correctAnswers.map((answer, idx) => (
        <div key={idx}>
          <input
            type="text"
            value={answer}
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
