import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import StepFive from "../components/generate/StepFive";
import StepFour from "../components/generate/StepFour";
import StepOne from "../components/generate/StepOne";
import StepThreeDistTopic from "../components/generate/StepThreeDistTopic";
import StepThreeTotal from "../components/generate/StepThreeTotal";
import StepTwo from "../components/generate/StepTwo";
import { topicName, topicList, stepName } from "../lib/generate";

export default function GeneratePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/generate", "Generate Exam");
  });

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">Let's get you prepared for an exam</h1>
      <StepOne />
    </div>
  );
}
