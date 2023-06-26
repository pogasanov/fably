import * as React from "react"
import Link from "next/link";
import { Skeleton } from "@/components/shared/ui";
import { FiCreditCard, FiPlusCircle, FiSettings } from "react-icons/fi";
import NextLink from "next/link";
import { IconType } from "react-icons";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/components/shared/lib/utils";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { FallbackError } from "@/components/shared/ui/FallbackError";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const SessionsList = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase
    .from('sessions')
    .select()

  return (
    <>
      {data?.map(s => (
        <NavigationItem href={`/chat/${s.id}`} key={s.id}>{s.id}</NavigationItem>
      ))}
    </>
  )
}

const SessionsListLoading = () => {
  return (
    <>
      <NavigationItem href="/"><Skeleton className="h-5 w-[120px]"/></NavigationItem>
      <NavigationItem href="/"><Skeleton className="h-5 w-[120px]"/></NavigationItem>
    </>
  )
}

const SidebarElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 border-b-nobleblack-700">
      {children}
    </div>
  )
}

const SidebarBlock = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-6 py-6 px-2 border-b-nobleblack-700">
      <h5 className="px-4 text-nobleblack-400 font-semibold text-bs">{title}</h5>
      <ul className="gap-2 flex flex-col">
        {children}
      </ul>
    </div>
  )
}

type NavigationItemProps = {
  Icon?: React.ComponentType<React.ComponentProps<IconType>>,
  children: React.ReactNode,
  href: Url,
  dim?: boolean,
}

const NavigationItem = ({ Icon, children, href, dim }: NavigationItemProps) => {
  return (
    <li>
      <NextLink href={href} className="py-[.88rem] px-4 flex gap-4">
        {Icon && <Icon size={20} className={cn("text-nobleblack-400", { "text-nobleblack-400": dim })}/>}
        <span
          className={cn("text-bm font-semibold text-nobleblack-100 hover:text-nobleblack-200", { "text-nobleblack-300 hover:text-nobleblack-400": dim })}>{children}</span>
      </NextLink>
    </li>
  )
}

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="flex flex-col fixed top-3 left-3 bottom-3 z-40 w-64 bg-nobleblack-800 rounded-[20px] transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <SidebarElement>
        <Link href="/" className="p-4 text-nobleblack-200">
          Fably
        </Link>
      </SidebarElement>

      <SidebarBlock title="GENERAL">
        <NavigationItem href="/" Icon={FiCreditCard}>Billing</NavigationItem>
      </SidebarBlock>

      <SidebarBlock title="PROJECTS">
        <ErrorBoundary FallbackComponent={FallbackError}>
          <Suspense fallback={<SessionsListLoading/>}>
            <SessionsList/>
          </Suspense>
        </ErrorBoundary>
      </SidebarBlock>

      <div className="p-2 mt-auto">
        <div className="p-4 bg-glass shadow-glass rounded-2xl flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <h6 className="text-bl font-semibold text-white">Ryan Lee</h6>
              <span className="text-bs font-medium text-stemgreen-500">Premium</span>
            </div>
          </div>
          <form action="/api/auth/signout" method="post">
            <button type="submit">
              <FiSettings size={24} className="text-nobleblack-400 hover:text-nobleblack-300"/>
            </button>
          </form>
        </div>
      </div>
    </aside>
  )
}
Sidebar.displayName = "Sidebar"

export { Sidebar }
