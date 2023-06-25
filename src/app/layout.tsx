import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from "react";
import '@/components/shared/config/dayjs'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
    <body>{children}</body>
    </html>
  )
}
