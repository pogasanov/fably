import {MessageType} from "@/types";

export type Props = {
  children: string,
  type: MessageType,
  date: Date,
}

export default function ChatMessage({children, type, date}: Props) {
  return (
    <div className={`flex w-5/12 ${type === MessageType.User ? 'self-end justify-end' : ''}`}>
      {children}
    </div>
  )
}