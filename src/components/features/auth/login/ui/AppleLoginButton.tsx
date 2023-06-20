"use client"

import { Button } from "@/components/shared/ui";
import { FaApple } from "react-icons/fa";


const AppleLoginButton = () => {
  return (
    <Button variant="tertiary" className="flex-1">
      <FaApple size={20} className="mr-3 fill-white"/> Apple Account
    </Button>
  )
}

export { AppleLoginButton }