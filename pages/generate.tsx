import { useEffect } from "react";
import { useNavContext } from "../components/NavContext";

export default function GeneratePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/generate", "Generate Exam");
  });

  return <div>This is generator page</div>;
}
