import { DistItem } from "../../interfaces/GenerateConfig";
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
            onNextHandler();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
