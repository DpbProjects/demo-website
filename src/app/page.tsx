// src/app/page.tsx
"use client";

import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import ChatHeader from "@/components/chat/chat-header";
import ChatInput from "@/components/chat/chat-input";
import ChatMessagesList from "@/components/chat/chat-messages-list";

export default function SlickChat() {
  const [isLoading, setIsLoading] = useState(false);

  const messages = useQuery(api.messages.getChatMessages);
  const sendMessage = useAction(api.messages.triggerSms);

  const handleSendMessage = async (messageBody: string) => {
    setIsLoading(true);
    try {
      await sendMessage({ body: messageBody });
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <ChatHeader messageCount={messages?.length || 0} />

        <ChatMessagesList messages={messages} />

        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
