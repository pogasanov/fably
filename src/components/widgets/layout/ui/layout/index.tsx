import { ReactNode } from "react";
import { Sidebar } from "../";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="p-3 bg-nobleblack-700 h-screen w-screen">
      <Sidebar/>

      <main className="sm:ml-64 sm:pl-3 h-full">
        <div className="h-full w-full flex flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}