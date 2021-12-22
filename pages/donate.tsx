import { useEffect } from "react";
import { useNavContext } from "../components/NavContext";

export default function DonatePage() {
  const { updateEndpoint } = useNavContext();
  useEffect(() => {
    updateEndpoint("/donate", "Donate Question");
  }, []);

  return <div>This is donate page</div>;
}
