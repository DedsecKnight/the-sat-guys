interface DistributionViewProps {
  topicName: string;
  topicList: string[];
}

export default function DistributionView({
  topicName,
  topicList,
}: DistributionViewProps) {
  return (
    <>
      <input
        type="text"
        placeholder={`Enter total number of ${topicName} questions`}
        className="rounded-lg p-2 w-full border-2 my-5"
      />
      {topicList.map((topic, idx) => (
        <div key={idx} className="flex flex-row items-center gap-x-2">
          <input type="text" className="rounded-xl p-2 border-2 w-10 h-8" />
          <h1>{topic}</h1>
        </div>
      ))}
    </>
  );
}
