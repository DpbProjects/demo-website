// src/components/chat/push-notification-button.tsx
"use client";

import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { Bell } from "lucide-react";

const PushNotificationButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendAppointmentReminder = useAction(
    api.twilioNode.sendAppointmentReminder
  );

  const handleSendNotification = async () => {
    setIsLoading(true);
    try {
      const result = await sendAppointmentReminder({
        to: "+447982158312", // Your phone number
        date: "12/1",
        time: "3pm",
      });

      if (result.success) {
        alert("Push notification sent successfully!");
      }
    } catch (error) {
      alert("Failed to send notification");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSendNotification}
      disabled={isLoading}
      className="my-4 flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-red-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
    >
      <Bell size={16} />
      {isLoading ? "Sending..." : "Send Push Notification"}
    </button>
  );
};

export default PushNotificationButton;
