import * as React from "react"

import { cn } from "@/components/shared/lib/utils"
import { IconType } from "react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType<React.ComponentProps<IconType>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, Icon, type, ...props }, ref) => {
    return (
      <div className="flex items-center relative group">
        {Icon && <Icon className="absolute left-4 h-6 w-6 fill-nobleblack-400"/>}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-lg border border-nobleblack-500 bg-nobleblack-600 px-4 py-3 text-sm text-nobleblack-200 font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-nobleblack-300 group-hover:outline-none group-hover:shadow-outline-nobleblack focus:shadow-outline-heisenbergblue disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-[3.25rem]": Icon },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
