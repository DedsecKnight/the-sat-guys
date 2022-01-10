import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import InputWithImage from "./InputWithImage";

interface MCRowViewProps {
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  correctValue: string;
  setCorrectValue: (value: string) => void;
}

export default function MCRowView({
  questionConfig,
  setQuestionConfig,
  correctValue,
  setCorrectValue,
}: MCRowViewProps) {
  const { defaultOption, options } = mockCorrectAnswerSelect;

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
      {["a", "b", "c", "d"].map((letter, idx) => (
        <InputWithImage
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
        onChangeHandler={(e) => {
          setCorrectValue(e.target.value);
        }}
        options={options}
      ></CustomSelect>
    </>
  );
}
