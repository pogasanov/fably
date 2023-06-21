"use client"

import { Button } from "@/components/shared/ui";
import { FcGoogle } from "react-icons/fc";
import { googleLogin } from "../api";


const GoogleLoginButton = () => {
  const onClick = async () => {
    const { data, error } = await googleLogin()
    console.log(data, error)
  }
  return (
    <Button variant="tertiary" className="flex-1" onClick={onClick}>
      <FcGoogle size={20} className="mr-3"/> Google Account
    </Button>
  )
}

export { GoogleLoginButton }