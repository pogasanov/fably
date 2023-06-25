"use client"

import { Message } from "./Message";
import { useChat } from "ai/react";
import { useEffect, useMemo } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { dayjs } from "@/components/shared/config/dayjs";

type Props = {
  session_id: string
}

export const Chat = ({ session_id }: Props) => {
  const supabase = createClientComponentClient()

  const { messages, setMessages } = useChat({
    id: session_id,
  })

  useEffect(() => {
    supabase.from('history')
      .select('id, content, role, created_at')
      .eq('session_id', session_id).then(({ data }) => {
      setMessages(data!.map(d => ({ ...d, id: d.toString(), createdAt: d.created_at })) as any)
    })
  }, [session_id, setMessages, supabase])

  const messagesSorted = useMemo(() => messages.map(m => {
    return { ...m, createdAt: dayjs(m.createdAt) }
  }).sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return b.createdAt.diff(a.createdAt)
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