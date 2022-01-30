import { useEffect, useState } from "react";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import StepOne from "./StepOne";
import StepTwoMC from "./StepTwoMC";
import StepTwoFR from "./StepTwoFR";
import StepThree from "./StepThree";
import ThankYou from "./ThankYou";

interface DonateViewProps {
  topicList: Array<{
    subtopic: string;
    section: string;
  }>;
}

export default function DonateView({ topicList }: DonateViewProps) {
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
  const [filteredTopicList, setFilteredTopicList] = useState<typeof topicList>(
    []
  );

  useEffect(() => {
    setFilteredTopicList(
      topicList.filter(({ section }) => section === questionConfig.section)
    );
  }, [questionConfig.section]);

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

  if (pageNumber === 0) {
    return (
      <StepOne
        topics={filteredTopicList}
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
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
      />
    );
  }

  if (pageNumber === 3) {
    return <ThankYou onDonateAnother={onDonateAnotherHandler} />;
  }

  return <div></div>;
}
