import { useState } from "react";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import StepOne from "./StepOne";
import StepTwoMC from "./StepTwoMC";
import StepTwoFR from "./StepTwoFR";
import StepThree from "./StepThree";
import ThankYou from "./ThankYou";

export default function DonateView() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [questionConfig, setQuestionConfig] = useState<QuestionConfig>({
    topic: "",
    section: "",
    difficulty: "",
    qtype: "",
    question: {
      question: "",
      image: null,
    },
    answers: [],
  });
  const [isCondition, setIsCondition] = useState(false);

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const updateQuestionConfig = (value: QuestionConfig) => {
    setQuestionConfig(value);
  };

  if (pageNumber === 0) {
    return (
      <StepOne
        questionConfig={questionConfig}
        setQuestionConfig={updateQuestionConfig}
        onNextHandler={nextPage}
      />
    );
  }

  if (pageNumber === 1) {
    return questionConfig.qtype === "mc" ? (
      <StepTwoMC
        questionConfig={questionConfig}
        setQuestionConfig={updateQuestionConfig}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
      />
    ) : (
      <StepTwoFR
        questionConfig={questionConfig}
        setQuestionConfig={updateQuestionConfig}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        isCondition={isCondition}
        updateIsCondition={(value) => {
          if (value !== isCondition)
            setQuestionConfig({
              ...questionConfig,
              answers: [
                { answer: "", isCorrect: true, image: null, isCondition },
              ],
            });
          setIsCondition(value);
        }}
      />
    );
  }

  if (pageNumber === 2) {
    return (
      <StepThree
        questionConfig={questionConfig}
        onNextHandler={async () => {
          console.log(questionConfig);
          const tmp = await fetch('https://c586omev5e.execute-api.us-east-2.amazonaws.com/thesatguys/donate', {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              action: "donate",
              questionConfig: questionConfig
            }),
          });
          const {status, data} = await tmp.json();
          console.log({status, data});
          if (status) {
            nextPage();
          } else {
            console.log(data);
          }
        }}
        onPrevHandler={prevPage}
      />
    );
  }

  if (pageNumber === 3) {
    return <ThankYou />;
  }

  return <div></div>;
}
