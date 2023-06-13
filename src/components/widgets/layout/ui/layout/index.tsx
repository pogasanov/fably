import { ReactNode } from "react";
import { Header } from "@/components/shared/ui";
import { Sidebar } from "../";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <Sidebar/>

      <main className="sm:pl-64 h-screen w-screen">
        <div className="h-full w-full flex flex-col">
          <Header/>

          {children}
        </div>
      </main>
    </div>
  )
}