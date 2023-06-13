import * as React from "react"
import Link from "next/link";
import { getSessions } from "@/components/entities/session";
import { Suspense } from "react";
import { Skeleton } from "@/components/shared/ui";

const SessionsList = async () => {
  const sessions = await getSessions()
  return (
    <ul className="space-y-2 font-medium">
      {sessions.map(s => (
        <li key={s}>
          <Link href={`/chat/${s}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true"
                 className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span className="ml-3">{s}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const SessionsListLoading = () => {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Skeleton className="h-8 w-[120px]"/>
      </li>
      <li>
        <Skeleton className="h-8 w-[80px]"/>
      </li>
      <li>
        <Skeleton className="h-8 w-[100px]"/>
      </li>
    </ul>
  )
}

const Sidebar = () => {
  return (
    <aside id="logo-sidebar"
           className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
           aria-label="Sidebar">
      <div className="h-14 flex">
        <Link href="/" className="p-4">
          Fably
        </Link>
      </div>
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <Suspense fallback={<SessionsListLoading/>}>
          <SessionsList/>
        </Suspense>
      </div>
    </aside>
  )
}
Sidebar.displayName = "Sidebar"

export { Sidebar }
