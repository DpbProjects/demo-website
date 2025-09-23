"use client";

import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState, useEffect, useRef } from "react";

export default function SlickChat() {
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const messages = useQuery(api.messages.getChatMessages);
  const sendMessage = useAction(api.messages.triggerSms);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setIsLoading(true);
    try {
      await sendMessage({ body: newMessage });
      setNewMessage("");
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', { 
      hour: 'numeric', minute: '2-digit', hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      {/* Sleek Chat Window */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Premium Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Live Chat</h1>
              <p className="text-emerald-100 text-sm font-medium">
                {messages?.length || 0} messages
              </p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto bg-gray-50/50 p-4 space-y-3">
          {messages?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">💭</span>
              </div>
              <p className="text-sm font-medium">No messages yet</p>
              <p className="text-xs">Start the conversation!</p>
            </div>
          ) : (
            messages?.map((msg, index) => {
              const isOutgoing = msg.direction === "outbound-api";
              return (
                <div key={index} className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                      isOutgoing
                        ? "bg-emerald-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md border border-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed font-medium">{msg.body}</p>
                    <div className={`flex items-center justify-end mt-2 space-x-1 ${
                      isOutgoing ? "text-emerald-100" : "text-gray-400"
                    }`}>
                      <span className="text-xs font-medium">{formatTime(msg.date_created)}</span>
                      {isOutgoing && (
                        <span className="text-xs">
                          {msg.status === "delivered" ? "✓✓" : msg.status === "sent" ? "✓" : "⏳"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Premium Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSend} className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-700 placeholder-gray-400 font-medium"
                disabled={isLoading}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !newMessage.trim()}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 transform ${
                newMessage.trim() 
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:scale-105" 
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}