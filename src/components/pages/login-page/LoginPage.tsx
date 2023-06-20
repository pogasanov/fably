import Image from 'next/image'
import AbstractImage from './abstract1.png'
import { Input } from "@/components/shared/ui/Input";
import { Button } from "@/components/shared/ui";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CheckboxWithLabel } from "@/components/shared/ui/Checkbox";
import { FiLock, FiMail } from "react-icons/fi";

export const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mt-auto">
          <div className="w-full max-w-[512px] px-2">
            <div className="mb-16">
              <h1 className="text-hxl mb-6 text-white">Let&apos;s get <em
                className="not-italic font-bold bg-gradient-to-t from-dayblue-500 via-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text">creative!</em>
              </h1>
              <h2 className="text-bxl font-medium text-nobleblack-300">Log in to Artificium to start creating
                magic.</h2>
            </div>

            <div>
              <form className="flex flex-col gap-6">
                <Input Icon={FiMail} placeholder="Email"/>
                <Input Icon={FiLock} placeholder="Password"/>
                <div className="flex flex-col md:flex-row gap-4 justify-between my-6">
                  <div><CheckboxWithLabel id="rememberme">Remember me</CheckboxWithLabel></div>
                  <Link
                    className="text-bl font-semibold bg-gradient-to-tr from-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text"
                    href="/">Forgot Password?</Link>
                </div>
                <Button>Log in</Button>
              </form>
              <div className="my-12 flex items-center gap-4 text-nobleblack-400 text-bs font-medium relative">
                <div className="bg-nobleblack-500 h-px flex-1" aria-hidden="true"></div>
                <span>or continue with</span>
                <div className="bg-nobleblack-500 h-px flex-1" aria-hidden="true"></div>
              </div>
              <div className="flex flex-col md:flex-row justify-around gap-6">
                <Button variant="tertiary" className="flex-1"><FcGoogle size={20} className="mr-3"/> Google
                  Account</Button>
                <Button variant="tertiary" className="flex-1"><FaApple size={20} className="mr-3 fill-white"/> Apple
                  Account</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="m-12 text-bl font-semibold text-nobleblack-400 mt-auto">
          Don&apos;t have an account? <Link
          className="bg-gradient-to-tr from-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text" href="/">Sign
          Up</Link>
        </div>
      </div>
      <div className="flex-1 relative hidden xl:block">
        <Image alt="Abstract image" src={AbstractImage} fill className="rounded-3xl"/>
      </div>
    </div>
  )
}