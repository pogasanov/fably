"use client"

import { Button, Textarea } from "@/components/shared/ui";
import { FormEvent, useMemo, useState } from "react";

type Props = {
  disabled: boolean,
}

export const SubmitMessageForm = ({ disabled }: Props) => {
  const [input, setInput] = useState("Describe what I see")
  const [isLoading, setIsLoading] = useState(false)

  const makeRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // sendMessage(input).finally(() => setIsLoading(false))
  }

  const isDisabled = useMemo(() => isLoading || disabled, [isLoading, disabled])

  return (
    <form className="flex flex-col w-full" onSubmit={makeRequest}>
      <Textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        name="message"
        rows={4}
        placeholder="Describe what I see"
        disabled={isDisabled}
      />
      <Button
        disabled={isDisabled}
        type="submit">
        Submit
      </Button>
    </form>
  )
}