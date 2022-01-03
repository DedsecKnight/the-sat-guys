import { useEffect, useState } from "react";
import { useNavContext } from "../components/context-api/NavContext";
import DonateView from "../components/donate/DonateView";

export default function DonatePage() {
  const { updateEndpoint } = useNavContext();

  useEffect(() => {
    updateEndpoint("/donate", "Donate Question");
  }, []);

  return (
    <div className="my-10 flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">Let's donate a question</h1>
      <DonateView />
    </div>
  );
}
