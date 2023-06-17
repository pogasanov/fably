import { Message } from "./Message";
import { getSessionHistory } from "../../api/history";
// import { useSessionStore } from "../../model/store";

type Props = {
  session_id: string
}

export const Chat = async ({ session_id }: Props) => {
  // const { messages, fetch } = useSessionStore(state => ({ messages: state.messages, fetch: state.fetch }))
  const messages = await getSessionHistory(session_id)

  return (
    <div className="flex flex-col items-start gap-2 w-full h-full p-2">
      {messages.map(message => (
        <Message key={message.date.valueOf()} date={message.date} type={message.type}>
          {message.message}
        </Message>
      ))}
    </div>
  )
}
Chat.display = "Chat"