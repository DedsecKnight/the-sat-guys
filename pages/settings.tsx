import { useEffect } from "react";
import { useNavContext } from "../components/NavContext";

export default function SettingPage() {
  const { updateEndpoint } = useNavContext();

  useEffect(() => {
    updateEndpoint("/settings", "Settings");
  }, []);

  return <div>This is settings page</div>;
}
