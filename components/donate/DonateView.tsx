import { useState } from "react";
import { ExamConfig } from "../../interfaces/ExamConfig";
import StepOne from "./StepOne";
import StepTwoMC from "./StepTwoMC";
import StepTwoFR from "./StepTwoFR";
import StepThree from "./StepThree";
import ThankYou from "./ThankYou";

export default function DonateView() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [examConfig, setExamConfig] = useState<ExamConfig>({
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

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const updateExamConfig = (value: ExamConfig) => {
    setExamConfig(value);
  };

  if (pageNumber === 0) {
    return (
      <StepOne
        examConfig={examConfig}
        setExamConfig={updateExamConfig}
        onNextHandler={nextPage}
      />
    );
  }

  if (pageNumber === 1) {
    return examConfig.qtype === "mc" ? (
      <StepTwoMC
        examConfig={examConfig}
        setExamConfig={updateExamConfig}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
      />
    ) : (
      <StepTwoFR
        examConfig={examConfig}
        setExamConfig={updateExamConfig}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
      />
    );
  }

  if (pageNumber === 2) {
    return (
      <StepThree
        examConfig={examConfig}
        onNextHandler={() => {
          console.log(examConfig);
          // TODO: Attempt to donate this question to db
          nextPage();
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
