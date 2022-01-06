import { useState } from "react";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import StepOne from "./StepOne";
import StepTwoMC from "./StepTwoMC";
import StepTwoFR from "./StepTwoFR";
import StepThree from "./StepThree";
import ThankYou from "./ThankYou";
import { RequestHelper } from "../../lib/request-helper";
import { API_URL } from "../../lib/constants";
import { useNotificationContext } from "../context-api/NotificationContext";

export default function DonateView() {
  const { updateNotificationlist } = useNotificationContext();
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

  const onDonateAnotherHandler = () => {
    setQuestionConfig({
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
    setPageNumber(0);
  };

  const submitQuestion = async () => {
    return RequestHelper.post<
      {
        action: string;
        questionConfig: QuestionConfig;
      },
      string
    >(
      `${API_URL}/donate`,
      { "Content-Type": "application/json" },
      {
        action: "donate",
        questionConfig,
      }
    );
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
                {
                  answer: "",
                  isCorrect: true,
                  image: null,
                  isCondition: value,
                },
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
          const { status, data } = await submitQuestion();
          if (status) {
            updateNotificationlist([{ type: "success", msg: data }]);
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
    return <ThankYou onDonateAnother={onDonateAnotherHandler} />;
  }

  return <div></div>;
}
