import ChatMessage from "@/components/ChatMessage";
import {Message} from "@/types";

type Props = {
  messages: Message[]
}

export default function ChatList({messages}: Props) {
  return (
    <div className="flex flex-col w-full">
      {messages.map(message => (
        <ChatMessage key={message.date.valueOf()} date={message.date} type={message.type}>
          {message.message}
        </ChatMessage>
      ))}
    </div>
  )
}