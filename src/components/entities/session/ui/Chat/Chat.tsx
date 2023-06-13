import { Message } from "./Message";
import { getSessionHistory } from "@/components/entities/session";

type Props = {
  session_id: string
}

export const Chat = async ({ session_id }: Props) => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  const messages = await getSessionHistory(session_id)

  return (
    <div className="flex flex-col items-start gap-2 w-full grow bg-slate-300 p-2">
      {messages.map(message => (
        <Message key={message.date.valueOf()} date={message.date} type={message.type}>
          {message.message}
        </Message>
      ))}
    </div>
  )
}
Chat.display = "Chat"