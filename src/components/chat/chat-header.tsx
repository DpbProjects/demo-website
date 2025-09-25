// src/components/chat/chat-header.tsx
interface ChatHeaderProps {
  messageCount: number;
}

const ChatHeader = ({ messageCount }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-600 px-6 py-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative flex items-center space-x-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
          <span className="text-2xl">💬</span>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl">Live Chat</h1>
          <p className="text-emerald-100 text-sm font-medium">
            {messageCount} messages
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
