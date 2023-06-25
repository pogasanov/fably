import { AddNewSessionButton } from "./AddNewSession";
import * as React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

const AddNewSessionForm = () => {
  async function addItem() {
    'use server'
    const supabase = createServerComponentClient({ cookies })

    const {
      data: { session },
    } = await supabase.auth.getSession()
    console.log('session', session)

    const { data } = await supabase.from('sessions').insert({ user_id: session!.user.id }).select()
    if (data) {
      redirect(`/chat/${data[0].id}`)
    }
  }

  return (
    <form action={addItem}>
      <AddNewSessionButton/>
    </form>
  )
}

export { AddNewSessionForm }