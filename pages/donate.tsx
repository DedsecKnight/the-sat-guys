import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import StepOne from "../components/donate/StepOne";
import StepTwoMC from "../components/donate/StepTwoMC";
import StepTwoFR from "../components/donate/StepTwoFR";
import StepThree from "../components/donate/StepThree";
import ThankYou from "../components/donate/ThankYou";

export default function DonatePage() {
  const { updateEndpoint } = useNavContext();

  useEffect(() => {
    updateEndpoint("/donate", "Donate Question");
  }, []);

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">Let's donate a question</h1>
      <StepOne />
    </div>
  );
}
