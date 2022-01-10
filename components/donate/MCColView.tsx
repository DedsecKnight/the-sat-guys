import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import TextAreaWithImage from "./TextAreaWithImage";

interface MCColViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  correctValue: string;
  setCorrectValue: (value: string) => void;
}

export default function MCColView({
  questionConfig,
  setQuestionConfig,
  correctValue,
  setCorrectValue,
}: MCColViewProps) {
  const { defaultOption, options } = mockCorrectAnswerSelect;
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
      <div className="w-full px-4 flex gap-y-6 flex-col">
        {["a", "b", "c", "d"].map((letter, idx) => (
          <TextAreaWithImage
            key={letter}
            placeholder={`Enter your question's option ${letter.toUpperCase()}`}
            textValue={questionConfig.answers[idx].answer}
            imageValue={questionConfig.answers[idx].image}
            onChangeImage={(value) => {
              const newAnswers = [...questionConfig.answers];
              newAnswers[idx].image = value;
              setQuestionConfig({
                ...questionConfig,
                answers: newAnswers,
              });
            }}
            onChangeText={(value) => {
              const newAnswers = [...questionConfig.answers];
              newAnswers[idx].answer = value;
              setQuestionConfig({
                ...questionConfig,
                answers: newAnswers,
              });
            }}
          />
        ))}

        <CustomSelect
          name="correctAnswer"
          defaultOption={defaultOption}
          value={correctValue}
          options={options}
          onChangeHandler={(e) => {
            setCorrectValue(e.target.value);
          }}
        ></CustomSelect>
      </div>
    </div>
  );
}
