import { ReactNode } from "react";
import { Sidebar } from "../";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="p-3 bg-nobleblack-700">
      <Sidebar/>

      <main className="sm:pl-64 h-screen w-screen">
        <div className="h-full w-full flex flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}