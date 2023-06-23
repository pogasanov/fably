"use client"

import { Message } from "./Message";
import { useChat } from "ai/react";
import { useMemo } from "react";

type Props = {
  session_id: string
}

export const Chat = ({ session_id }: Props) => {
  const { messages } = useChat({
    id: session_id,
  })
  const messagesSorted = useMemo(() => messages.sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }
    return b.id.localeCompare(a.id)
  }), [messages])
  return (
    <div className="flex grow flex-col-reverse items-start gap-6 w-full overflow-y-auto">
      {messagesSorted.map(message => (
        <Message key={message.id} date={message.createdAt} type={message.role}>
          {message.content}
        </Message>
      ))}
    </div>
  )
}
Chat.display = "Chat"