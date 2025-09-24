// src/components/chat/chat-messages-list.tsx
import { useEffect, useRef } from "react";
import ChatMessage from "./chat-message";

interface Message {
  body: string;
  date_created: string;
  direction: string;
  status?: string;
}

interface ChatMessagesListProps {
  messages: Message[] | undefined;
}

const ChatMessagesList = ({ messages }: ChatMessagesListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-96 overflow-y-auto bg-muted/50 p-4 space-y-3">
      {messages?.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3">
            <span className="text-2xl">💭</span>
          </div>
          <p className="text-sm font-medium">No messages yet</p>
          <p className="text-xs">Start the conversation!</p>
        </div>
      ) : (
        messages?.map((msg, index) => {
          const isOutgoing = msg.direction === "outbound-api";
          return (
            <ChatMessage key={index} message={msg} isOutgoing={isOutgoing} />
          );
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessagesList;