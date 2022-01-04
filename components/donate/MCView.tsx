import { QuestionConfig } from "../../interfaces/QuestionConfig";

interface MCViewProps {
  questionConfig: QuestionConfig;
}

export default function MCView({ questionConfig }: MCViewProps) {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <h1 className="text-xl">{questionConfig.question.question}</h1>
      <div className="p-4 flex flex-col">
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">A. {questionConfig.answers[0].answer}</h1>
          <h1 className="text-lg">B. {questionConfig.answers[1].answer}</h1>
        </div>
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">C. {questionConfig.answers[2].answer}</h1>
          <h1 className="text-lg">D. {questionConfig.answers[3].answer}</h1>
        </div>
      </div>
    </div>
  );
}
