import Image from 'next/image'
import AbstractImage from './abstract3.png'
import { EmailSignupForm } from "@/components/features/auth/signup/ui";
import { LinkToLogin } from "@/components/features/auth/login";

export const SignupPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="grow-[5] shrink-0 basis-0 flex flex-col justify-between">
        <div className="m-12 text-bl font-semibold text-nobleblack-400 flex justify-end">
          <LinkToLogin/>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[676px] px-2">
            <div className="mb-16">
              <h1 className="text-hxl font-normal mb-6 text-white">
                Connect with your team and bring your creative ideas to life.
              </h1>
            </div>

            <div>
              <EmailSignupForm/>
            </div>
          </div>
        </div>

        <div className="m-12 text-bl font-semibold text-nobleblack-400 flex justify-between">
          <h6>Artificium.app © 2023</h6>
          <h6>Privacy Policy</h6>
        </div>
      </div>
      <div className="grow-[3] shrink-0 basis-0 relative hidden xl:block">
        <Image alt="Abstract image" src={AbstractImage} fill className="rounded-3xl"/>
      </div>
    </div>
  )
}