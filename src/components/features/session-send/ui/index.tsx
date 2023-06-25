"use client"

import { Button } from "@/components/shared/ui";
import { useChat } from "ai/react";
import { FiSend } from "react-icons/fi";

type Props = {
  disabled: boolean,
  session_id: string,
}

export const SubmitMessageForm = ({ disabled, session_id }: Props) => {
  const { input, handleInputChange, handleSubmit, isLoading } = useChat({
    id: session_id,
    initialInput: "Describe what I see",
    body: { session_id }
  })
  return (
    <form
      autoComplete="off"
      className="flex w-full p-6 bg-nobleblack-800 justify-between rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        autoComplete="false"
        placeholder="Describe what I see"
        className="flex w-full rounded-lg bg-nobleblack-800 px-4 py-3 text-sm text-nobleblack-200 font-medium ring-offset-background focus:outline-none"
        value={input}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Button variant="tertiary" Icon={FiSend} disabled={isLoading}/>
    </form>
  )
}