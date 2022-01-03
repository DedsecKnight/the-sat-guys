import { useState } from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import { mockCorrectAnswerSelect } from "../../lib/donations";
import CustomSelect from "./CustomSelect";
import TextAreaWithImage from "./TextAreaWithImage";

interface MCColViewProps {
  examConfig: ExamConfig;
  setExamConfig: (value: ExamConfig) => void;
  correctValue: string;
  setCorrectValue: (value: string) => void;
}

export default function MCColView({
  examConfig,
  setExamConfig,
  correctValue,
  setCorrectValue,
}: MCColViewProps) {
  const { defaultOption, options } = mockCorrectAnswerSelect;
  return (
    <div className="flex flex-row justify-between">
      <div className="w-full px-4">
        <TextAreaWithImage
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
      </div>
      <div className="w-full px-4 flex gap-y-6 flex-col">
        {["a", "b", "c", "d"].map((letter, idx) => (
          <TextAreaWithImage
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
          options={options}
          onChangeHandler={(e) => {
            setCorrectValue(e.target.value);
          }}
        ></CustomSelect>
      </div>
    </div>
  );
}
