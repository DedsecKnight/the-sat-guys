import { ExamConfig } from "../../interfaces/ExamConfig";

interface FRViewProps {
  examConfig: ExamConfig;
}

export default function FRView({ examConfig }: FRViewProps) {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <h1 className="text-xl">{examConfig.question.question}</h1>
      <div className="p-6">
        <h1 className="text-lg">Type your answer here: ______________</h1>
      </div>
    </div>
  );
}
