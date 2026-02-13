"use client";

import Notify from "../panel/Notify";
import { useNotification } from "./NotificationContext";

export default function NotifyStack() {
  const { notifications, removeNotification } = useNotification();

  return (
    <>
      {notifications.map((notif, index) => (
        <div
          key={notif.id}
          className="absolute left-0"
          style={{
            top: 290 + index * 40, // jarak antar notif
          }}
        >
          <Notify
            message={notif.message}
            duration={notif.duration}
            persistent={notif.persistent}
            onClose={() => removeNotification(notif.id)}
          />
        </div>
      ))}
    </>
  );
}
