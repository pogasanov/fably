import * as React from "react"
import NextLink from "next/link";

import { cn } from "@/components/shared/lib/utils"

export interface LinkProps
  extends React.ComponentProps<typeof NextLink> {
  children: React.ReactNode
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NextLink
        className={cn("bg-gradient-to-tr from-heisenbergblue-500 to-stemgreen-500 text-transparent bg-clip-text", className)}
        {...props}
        ref={ref}
      >{children}</NextLink>
    )
  }
)
Link.displayName = "Button"

export { Link }
