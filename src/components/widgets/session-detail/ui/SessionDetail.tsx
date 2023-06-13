import { Chat, ChatLoading } from "@/components/entities/session";
import { SubmitMessageForm } from "@/components/features/session-send";
import { Suspense } from "react";

type Props = {
  session_id: string
}

export const SessionDetail = ({ session_id }: Props) => {
  return (
    <div className="flex flex-col h-full grow">
      <div className="grow">
        <Suspense fallback={<ChatLoading/>}>
          <Chat session_id={session_id}/>
        </Suspense>
      </div>

      <SubmitMessageForm
        disabled={false}
      />
    </div>
  )
}