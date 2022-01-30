import { DistItem } from "../../interfaces/GenerateConfig";
import { StepCompleted } from "../../interfaces/StepCompleted";
import { useNotificationContext } from "../context-api/NotificationContext";
import DistributionView from "./DistributionView";

interface StepTwoDistProps {
  sectionName: string;
  topicList: DistItem[];
  onNextHandler: () => void;
  onPrevHandler: () => void;
  updateTopicList: (value: DistItem[]) => void;
}

export default function StepTwoDistTopic({
  sectionName,
  topicList,
  onNextHandler,
  onPrevHandler,
  updateTopicList,
}: StepTwoDistProps) {
  const { updateNotificationlist } = useNotificationContext();
  const stepCompleted = (): StepCompleted => {
    const errors = [];
    let currTotalQuestions = 0;
    for (let topic of topicList) {
      currTotalQuestions += topic.count;
    }
    if (currTotalQuestions <= 0) {
      errors.push("At least 1 question is required");
    }
    return {
      status: errors.length === 0,
      msg: errors,
    };
  };

  return (
    <>
      <h1 className="text-xl">
        Step 2: Specify distribution in topics for {sectionName}
      </h1>
      <DistributionView
        topicList={topicList}
        updateTopicItem={(idx, value) => {
          const newTopicList = topicList.map((obj) => ({ ...obj }));
          newTopicList[idx].count = value;
          updateTopicList(newTopicList);
        }}
      />
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="bg-gray-200 p-3 rounded-lg"
          onClick={() => {
            onPrevHandler();
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
          onClick={() => {
            const { status, msg } = stepCompleted();
            if (status) onNextHandler();
            else
              updateNotificationlist(
                msg.map((err) => ({
                  type: "error",
                  msg: err,
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
