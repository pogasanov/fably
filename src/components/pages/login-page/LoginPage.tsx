import Image from 'next/image'
import AbstractImage from './abstract1.png'
import { AppleLoginButton, EmailLoginForm, GoogleLoginButton } from "@/components/features/auth/login";
import { LinkToSignup } from "@/components/features/auth/signup";

export const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-between">
        <div className="m-12 text-bl font-semibold text-nobleblack-400">
          &nbsp;
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[512px] px-2">
            <div className="mb-16">
              <h1 className="text-hxl mb-6 text-white">Let&apos;s get <em
                className="not-italic font-bold bg-gradient-to-t from-dayblue-500 via-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text">creative!</em>
              </h1>
              <h2 className="text-bxl font-medium text-nobleblack-300">Log in to Artificium to start creating
                magic.</h2>
            </div>

            <div>
              <EmailLoginForm/>
              <div className="my-12 flex items-center gap-4 text-nobleblack-400 text-bs font-medium relative">
                <div className="bg-nobleblack-500 h-px flex-1" aria-hidden="true"></div>
                <span>or continue with</span>
                <div className="bg-nobleblack-500 h-px flex-1" aria-hidden="true"></div>
              </div>
              <div className="flex flex-col md:flex-row justify-around gap-6">
                <GoogleLoginButton/>
                <AppleLoginButton/>
              </div>
            </div>
          </div>
        </div>

        <div className="m-12 text-bl font-semibold text-nobleblack-400">
          Don&apos;t have an account? <LinkToSignup/>
        </div>
      </div>
      <div className="flex-1 relative hidden xl:block">
        <Image alt="Abstract image" src={AbstractImage} fill className="rounded-3xl"/>
      </div>
    </div>
  )
}