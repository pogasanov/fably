"use client"

import { Button } from "@/components/shared/ui";
import { FcGoogle } from "react-icons/fc";


const GoogleLoginButton = () => {
  return (
    <Button variant="tertiary" className="flex-1">
      <FcGoogle size={20} className="mr-3"/> Google Account
    </Button>
  )
}

export { GoogleLoginButton }