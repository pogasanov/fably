"use client"

import { Input } from "@/components/shared/ui/Input";
import { FiLock, FiMail } from "react-icons/fi";
import { Checkbox } from "@/components/shared/ui/Checkbox";
import Link from "next/link";
import { Button } from "@/components/shared/ui";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/shared/ui/Form";
import { emailLogin } from "../api";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  rememberme: z.boolean(),
})

const EmailLoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailLogin(values.email, values.password).finally(console.log)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input Icon={FiMail} placeholder="Email" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input Icon={FiLock} placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4 justify-between my-6">
          <div>
            <FormField
              control={form.control}
              name="rememberme"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                    />
                  </FormControl>
                  <div className="text-bl font-medium text-nobleblack-200">
                    <FormLabel>
                      Remember me
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Link
            className="text-bl font-semibold bg-gradient-to-tr from-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text"
            href="/">Forgot Password?</Link>
        </div>
        <Button>Log in</Button>
      </form>
    </Form>
  )
}

export { EmailLoginForm }