interface DistributionViewProps {
  topicList: Record<string, number>;
  updateTopicItem: (key: string, value: number) => void;
}

export default function DistributionView({
  topicList,
  updateTopicItem,
}: DistributionViewProps) {
  return (
    <>
      {Object.entries(topicList).map(([topic, count], idx) => (
        <div key={idx} className="flex flex-row items-center gap-x-2">
          <input
            type="number"
            value={count}
            onChange={(e) => {
              updateTopicItem(topic, parseInt(e.target.value) || 0);
            }}
            className="rounded-xl p-3 border-2 w-20 h-8"
          />
          <h1>{topic}</h1>
        </div>
      ))}
    </>
  );
}
