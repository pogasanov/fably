import * as React from "react"

import { cn } from "@/components/shared/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg border border-nobleblack-500 bg-nobleblack-600 px-4 py-3 text-sm text-nobleblack-200 font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-nobleblack-300 hover:outline-none hover:shadow-outline-nobleblack focus:shadow-outline-heisenbergblue disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
Input.displayName = "Input"

export { Input }
