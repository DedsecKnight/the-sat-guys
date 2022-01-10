import React, { createContext, useContext, useState } from "react";
import { AppNotification } from "../../interfaces/Notification";

interface NotificationContextState {
  updateNotificationlist: (notificationList: AppNotification[]) => void;
  notifications: AppNotification[];
  closeNotification: (idx: number) => void;
  emptyNotificationList: () => void;
}

const NotificationContext = createContext<NotificationContextState | undefined>(
  undefined
);

export function useNotificationContext(): NotificationContextState {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("Error with NotificationContext");
  }
  return context;
}

export function NotificationContextProvider({
  children,
}: React.PropsWithChildren<Record<string, any>>) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const updateNotificationlist = (notificationList: AppNotification[]) => {
    setNotifications(notificationList);
  };
  const closeNotification = (idx: number) => {
    const newNotifs = [...notifications];
    newNotifs.splice(idx, 1);
    setNotifications(newNotifs);
  };
  const emptyNotificationList = () => {
    setNotifications([]);
  };
  return (
    <NotificationContext.Provider
      value={{
        updateNotificationlist,
        notifications,
        closeNotification,
        emptyNotificationList,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
