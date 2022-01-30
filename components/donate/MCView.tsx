import { QuestionConfig } from "../../interfaces/QuestionConfig";
import PreviewEntry from "./PreviewEntry";

interface MCViewProps {
  questionConfig: QuestionConfig;
}

export default function MCView({ questionConfig }: MCViewProps) {
  return (
    <div className="border-2 rounded-xl py-3 px-7 my-8 xl:w-4/5 mx-auto">
      <div className="w-full">
        <PreviewEntry
          text={questionConfig.question.question}
          image={questionConfig.question.image}
        />
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex flex-row justify-around my-1 gap-x-4">
          <PreviewEntry
            text={`A. ${questionConfig.answers[0].answer}`}
            image={questionConfig.answers[0].image}
          />
          <PreviewEntry
            text={`B. ${questionConfig.answers[1].answer}`}
            image={questionConfig.answers[1].image}
          />
        </div>
        <div className="flex flex-row justify-around my-1 gap-x-4">
          <PreviewEntry
            text={`C. ${questionConfig.answers[2].answer}`}
            image={questionConfig.answers[2].image}
          />
          <PreviewEntry
            text={`D. ${questionConfig.answers[3].answer}`}
            image={questionConfig.answers[3].image}
          />
        </div>
      </div>
    </div>
  );
}
