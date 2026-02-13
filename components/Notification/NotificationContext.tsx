"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface NotificationType {
  id: number;
  message: string;
  duration?: number;
  persistent?: boolean;
}

interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (
    message: string,
    options?: {
      duration?: number;
      persistent?: boolean;
    }
  ) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error("useNotification must be used inside NotificationProvider");
  return ctx;
};

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = (
    message: string,
    options?: {
      duration?: number;
      persistent?: boolean;
    }
  ) => {
    const id = Date.now();

    const newNotif: NotificationType = {
      id,
      message,
      duration: options?.duration ?? 6000,
      persistent: options?.persistent ?? false,
    };

    setNotifications((prev) => [...prev, newNotif]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
