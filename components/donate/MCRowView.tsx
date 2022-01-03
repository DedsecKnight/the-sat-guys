import { ExamConfig } from "../../interfaces/ExamConfig";
import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import InputWithImage from "./InputWithImage";

interface MCRowViewProps {
  examConfig: ExamConfig;
  setExamConfig: (value: ExamConfig) => void;
  correctValue: string;
  setCorrectValue: (value: string) => void;
}

export default function MCRowView({
  examConfig,
  setExamConfig,
  correctValue,
  setCorrectValue,
}: MCRowViewProps) {
  const { defaultOption, options } = mockCorrectAnswerSelect;

  return (
    <>
      <InputWithImage
        placeholder="Enter your question statement"
        textValue={examConfig.question.question}
        imageValue={examConfig.question.image}
        onChangeText={(value) => {
          setExamConfig({
            ...examConfig,
            question: {
              ...examConfig.question,
              question: value,
            },
          });
        }}
        onChangeImage={(value) => {
          setExamConfig({
            ...examConfig,
            question: {
              ...examConfig.question,
              image: value,
            },
          });
        }}
      />
      {["a", "b", "c", "d"].map((letter, idx) => (
        <InputWithImage
          key={letter}
          placeholder={`Enter your question's option ${letter.toUpperCase()}`}
          textValue={examConfig.answers[idx].answer}
          imageValue={examConfig.answers[idx].image}
          onChangeImage={(value) => {
            const newAnswers = [...examConfig.answers];
            newAnswers[idx].image = value;
            setExamConfig({
              ...examConfig,
              answers: newAnswers,
            });
          }}
          onChangeText={(value) => {
            const newAnswers = [...examConfig.answers];
            newAnswers[idx].answer = value;
            setExamConfig({
              ...examConfig,
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
