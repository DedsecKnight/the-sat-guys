import DistributionView from "./DistributionView";

interface StepThreeDistProps {
  topicName: string;
  topicList: string[];
  stepName: string;
}

export default function StepThreeDistTopic({
  topicName,
  topicList,
  stepName,
}: StepThreeDistProps) {
  return (
    <>
      <h1 className="text-xl">
        Step {stepName}: Specify distribution in topics for {topicName}
      </h1>
      <DistributionView topicList={topicList} topicName={topicName} />
      <div className="flex flex-row justify-between">
        <button type="button" className="bg-gray-200 p-3 rounded-lg">
          Previous
        </button>
        <button
          type="button"
          className="bg-green-400 p-3 rounded-lg text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}
