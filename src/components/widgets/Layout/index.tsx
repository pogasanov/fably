import { Header } from "@/components/features/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}