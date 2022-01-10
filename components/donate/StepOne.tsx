import { useEffect, useState } from "react";
import { QuestionConfig } from "../../interfaces/QuestionConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";
import CustomSelect, { CustomOptionItemProps } from "./CustomSelect";

interface StepOneProps {
  topics: Array<{
    subtopic: string;
    section: string;
  }>;
  questionConfig: QuestionConfig;
  setQuestionConfig: (value: QuestionConfig) => void;
  onNextHandler: () => void;
}

export default function StepOne({
  questionConfig,
  setQuestionConfig,
  onNextHandler,
  topics,
}: StepOneProps) {
  const { updateNotificationlist, emptyNotificationList } =
    useNotificationContext();
  const [topicList, setTopicList] = useState<CustomOptionItemProps[]>([]);
  const [diffList, setDiffList] = useState<CustomOptionItemProps[]>([]);
  const [sectionList, setSectionList] = useState<CustomOptionItemProps[]>([]);
  const [qTypeList, setQTypeList] = useState<CustomOptionItemProps[]>([]);

  const stepCompleted = (): StepCompleted => {
    const errors: string[] = [];
    if (questionConfig.qtype !== "mc" && questionConfig.qtype !== "fr") {
      errors.push("Invalid question type found");
    }
    if (
      topicList.filter(({ value }) => value === questionConfig.topic).length ===
      0
    ) {
      errors.push("Invalid topic found");
    }
    if (
      sectionList.filter(({ value }) => value === questionConfig.section)
        .length === 0
    ) {
      errors.push("Invalid section found");
    }
    if (
      diffList.filter(({ value }) => value === questionConfig.difficulty)
        .length === 0
    ) {
      errors.push("Invalid difficulty found");
    }
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  useEffect(() => {
    emptyNotificationList();
  }, []);

  useEffect(() => {
    setTopicList(
      topics
        .filter(({ section }) => section === questionConfig.section)
        .map(({ subtopic }) => ({
          value: subtopic,
          option: subtopic,
        }))
    );
  }, [topics]);

  useEffect(() => {
    setDiffList([
      {
        value: "easy",
        option: "Easy",
      },
      {
        value: "medium",
        option: "Medium",
      },
      {
        value: "hard",
        option: "Hard",
      },
    ]);
    setSectionList([
      {
        value: "reading",
        option: "Reading",
      },
      {
        value: "writing",
        option: "Writing",
      },
      {
        value: "cal",
        option: "Math (Calculator)",
      },
      {
        value: "no_cal",
        option: "Math (No Calculator)",
      },
    ]);
    setQTypeList([
      {
        value: "mc",
        option: "Multiple Choice",
      },
      {
        value: "fr",
        option: "Free Response",
      },
    ]);
  }, []);

  return (
    <>
      <h1 className="text-xl">
        Step 1: Let's get started with some basic information
      </h1>
      <div className="flex flex-col gap-y-4">
        <CustomSelect
          name="section"
          defaultOption="Select your question's section"
          options={sectionList}
          value={questionConfig.section}
          onChangeHandler={(e) => {
            setQuestionConfig({
              ...questionConfig,
              section: e.target.value,
              topic: "",
            });
          }}
        />
        <CustomSelect
          name="topic"
          defaultOption="Select your question's topic"
          options={topicList}
          value={questionConfig.topic}
          onChangeHandler={(e) => {
            setQuestionConfig({
              ...questionConfig,
              topic: e.target.value,
            });
          }}
        />
        <CustomSelect
          name="difficulty"
          defaultOption="Select your question's difficulty"
          options={diffList}
          value={questionConfig.difficulty}
          onChangeHandler={(e) => {
            setQuestionConfig({
              ...questionConfig,
              difficulty: e.target.value,
            });
          }}
        />

        <CustomSelect
          name="qtype"
          defaultOption="Select your question's question type"
          options={qTypeList}
          value={questionConfig.qtype}
          onChangeHandler={(e) => {
            setQuestionConfig({
              ...questionConfig,
              qtype: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-row justify-end">
        <button
          type="button"
          className="rounded-lg bg-green-400 p-3 text-white"
          onClick={() => {
            const completed = stepCompleted();
            if (completed.status) {
              onNextHandler();
              return;
            }
            updateNotificationlist(
              completed.msg.map((message) => ({
                type: "error",
                msg: message,
              }))
            );
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
