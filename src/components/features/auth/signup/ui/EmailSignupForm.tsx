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
import { emailSignup } from "../api";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(6),
  password2: z.string().min(6),
  agree: z.boolean(),
}).refine((data) => data.password === data.password2, {
  message: "Passwords don't match",
  path: ["password"],
});

const EmailSignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      password2: "",
      agree: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailSignup(values.email, values.password, values.username).then()
    console.log()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex justify-between gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between gap-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Repeat password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Repeat password" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between my-6">
          <FormField
            control={form.control}
            name="agree"
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
                    I agree to <Link
                    className="text-bl font-semibold bg-gradient-to-tr from-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text"
                    href="/">Terms and conditions</Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button>Create free account</Button>
      </form>
    </Form>
  )
}

export { EmailSignupForm }