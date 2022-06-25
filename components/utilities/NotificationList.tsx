import { useNotificationContext } from "../context-api/NotificationContext";
import NotificationBadge from "./NotificationBadge";

export default function NotificationList() {
  const { notifications, closeNotification } = useNotificationContext();
  return (
    <div className="flex flex-col gap-y-2 my-5 sticky top-0">
      {notifications.map(({ type, msg }, idx) => (
        <NotificationBadge
          key={idx}
          type={type}
          msg={msg}
          onClose={() => {
            closeNotification(idx);
          }}
        />
      ))}
    </div>
  );
}
