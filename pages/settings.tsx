import { useEffect } from "react";
import { useNavContext } from "../components/context-api/NavContext";

export default function SettingPage() {
  const { updateEndpoint } = useNavContext();

  useEffect(() => {
    updateEndpoint("/settings", "Settings");
  }, []);

  return <div>This is settings page</div>;
}
