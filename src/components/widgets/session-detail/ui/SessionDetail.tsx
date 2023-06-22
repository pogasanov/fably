import { Chat, ChatLoading } from "@/components/entities/session";
import { SubmitMessageForm } from "@/components/features/session-send";
import { Suspense } from "react";

type Props = {
  session_id: string
}

export const SessionDetail = ({ session_id }: Props) => {
  return (
    <div className="flex flex-col h-full grow gap-6">
      <Suspense fallback={<ChatLoading/>}>
        <Chat session_id={session_id}/>
      </Suspense>

      <SubmitMessageForm
        disabled={false}
      />
    </div>
  )
}