import { Chat, ChatLoading } from "@/components/entities/session";
import { SubmitMessageForm } from "@/components/features/session-send";
import { Suspense } from "react";

export const SessionDetail = () => {
  return (
    <div className="flex flex-col h-full grow">
      <Suspense fallback={<ChatLoading/>}>
        <Chat session_id=""/>
      </Suspense>

      <SubmitMessageForm
        disabled={false}
      />
    </div>
  )
}