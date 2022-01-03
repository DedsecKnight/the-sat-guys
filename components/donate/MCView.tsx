import { ExamConfig } from "../../interfaces/ExamConfig";

interface MCViewProps {
  examConfig: ExamConfig;
}

export default function MCView({ examConfig }: MCViewProps) {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <h1 className="text-xl">{examConfig.question.question}</h1>
      <div className="p-4 flex flex-col">
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">A. {examConfig.answers[0].answer}</h1>
          <h1 className="text-lg">B. {examConfig.answers[1].answer}</h1>
        </div>
        <div className="flex flex-row justify-around my-1">
          <h1 className="text-lg">C. {examConfig.answers[2].answer}</h1>
          <h1 className="text-lg">D. {examConfig.answers[3].answer}</h1>
        </div>
      </div>
    </div>
  );
}
