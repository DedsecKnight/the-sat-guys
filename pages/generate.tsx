import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import GenerateView from "../components/generate/GenerateView";

export default function GeneratePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/generate", "Generate Exam");
  });

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">{`Let's get you prepared for an exam`}</h1>
      <GenerateView />
    </div>
  );
}
