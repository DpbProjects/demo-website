// src/components/chat/chat-message.tsx
interface ChatMessageProps {
  message: {
    body: string;
    date_created: string;
    direction: string;
    status?: string;
  };
  isOutgoing: boolean;
}

const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString('en-US', { 
    hour: 'numeric', minute: '2-digit', hour12: true 
  });
};

const ChatMessage = ({ message, isOutgoing }: ChatMessageProps) => {
  return (
    <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
          isOutgoing
            ? "bg-emerald-500 text-white rounded-br-md"
            : "bg-white text-gray-800 rounded-bl-md border border-gray-100"
        }`}
      >
        <p className="text-sm leading-relaxed font-medium">{message.body}</p>
        <div className={`flex items-center justify-end mt-2 space-x-1 ${
          isOutgoing ? "text-emerald-100" : "text-gray-400"
        }`}>
          <span className="text-xs font-medium">{formatTime(message.date_created)}</span>
          {isOutgoing && (
            <span className="text-xs">
              {message.status === "delivered" ? "✓✓" : message.status === "sent" ? "✓" : "⏳"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;