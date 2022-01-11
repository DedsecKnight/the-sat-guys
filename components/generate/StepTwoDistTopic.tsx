import DistributionView from "./DistributionView";

interface StepThreeDistProps {
  sectionName: string;
  topicList: string[];
  onNextHandler: () => void;
  onPrevHandler: () => void;
}

export default function StepThreeDistTopic({
  sectionName,
  topicList,
  onNextHandler,
  onPrevHandler,
}: StepThreeDistProps) {
  return (
    <>
      <h1 className="text-xl">
        Step 2: Specify distribution in topics for {sectionName}
      </h1>
      <DistributionView topicList={topicList} topicName={sectionName} />
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
