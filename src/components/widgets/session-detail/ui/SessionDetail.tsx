import { Chat } from "@/components/entities/session";
import { SubmitMessageForm } from "@/components/features/session-send";

type Props = {
  session_id: string
}

export const SessionDetail = ({ session_id }: Props) => {
  console.log('widget')
  return (
    <div className="flex flex-col h-full grow gap-6">
      <Chat session_id={session_id}/>

      <SubmitMessageForm
        session_id={session_id}
        disabled={false}
      />
    </div>
  )
}