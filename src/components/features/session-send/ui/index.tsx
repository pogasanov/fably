"use client"

import { FormEvent, useMemo, useState } from "react";
import { sendMessageToSession } from "@/components/features/session-send/api";
import { useSessionStore } from "@/components/entities/session";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/shared/ui/Form";
import { Input } from "@/components/shared/ui/Input";
import { Button } from "@/components/shared/ui";
import { emailLogin } from "@/components/features/auth/login/api";
import { FiSend } from "react-icons/fi";

type Props = {
  disabled: boolean,
}

const formSchema = z.object({
  message: z.string(),
})

export const SubmitMessageForm = ({ disabled }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const store = useSessionStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  /*
  const makeRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    store.addVisitorMessage(input)
    for await (const val of sendMessageToSession(input)) {
      store.addAIMessage(val)
    }
    setIsLoading(false)
  }

   */

  const isDisabled = useMemo(() => isLoading || disabled, [isLoading, disabled])

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        className="flex w-full p-6 bg-nobleblack-800 justify-between rounded-2xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Describe what I see"
                  className="flex w-full rounded-lg bg-nobleblack-800 px-4 py-3 text-sm text-nobleblack-200 font-medium ring-offset-background focus:outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button variant="tertiary" Icon={FiSend}/>
      </form>
    </Form>
  )
}