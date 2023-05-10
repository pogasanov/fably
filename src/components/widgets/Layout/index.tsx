import { Header } from "@/components/features/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      {children}
    </div>
  )
}