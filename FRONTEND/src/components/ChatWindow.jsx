import { useEffect, useRef } from "react"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"

const ChatWindow = ({ messages, isTyping }) => {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <p className="text-white/60 text-lg font-light tracking-wide">How can I help you today?</p>
          <p className="text-white/30 text-sm">Type a message to start chatting</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <MessageBubble key={index} message={msg.text} sender={msg.sender} />
        ))
      )}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow