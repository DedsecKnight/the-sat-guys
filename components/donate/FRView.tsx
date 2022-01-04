import { QuestionConfig } from "../../interfaces/QuestionConfig";
import Image from "next/image";
import PreviewEntry from "./PreviewEntry";

interface FRViewProps {
  questionConfig: QuestionConfig;
}

export default function FRView({ questionConfig }: FRViewProps) {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <PreviewEntry
        text={questionConfig.question.question}
        image={questionConfig.question.image}
      />
      <div className="p-6">
        <h1 className="text-lg">Type your answer here: ______________</h1>
      </div>
    </div>
  );
}
