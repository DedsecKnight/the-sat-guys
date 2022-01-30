import { DistItem } from "../../interfaces/GenerateConfig";

interface DistributionViewProps {
  topicList: DistItem[];
  updateTopicItem: (idx: number, value: number) => void;
}

export default function DistributionView({
  topicList,
  updateTopicItem,
}: DistributionViewProps) {
  return (
    <>
      {topicList.map(({ value: topic, count }, idx) => (
        <div key={idx} className="flex flex-row items-center gap-x-2">
          <input
            type="number"
            value={count}
            onChange={(e) => {
              updateTopicItem(idx, parseInt(e.target.value) || 0);
            }}
            className="rounded-xl p-3 border-2 w-20 h-8"
          />
          <h1>{topic}</h1>
        </div>
      ))}
    </>
  );
}
