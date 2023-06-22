import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/shared/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-stemgreen-500 hover:bg-stemgreen-400 active:bg-stemgreen-300 text-dayblue-900",
        secondary: "bg-nobleblack-500 border-[3px] border-stemgreen-500 hover:border-stemgreen-400 active:border-stemgreen-300 text-stemgreen-500 hover:text-stemgreen-400 active:text-stemgreen-300",
        tertiary: "bg-nobleblack-600 hover:bg-nobleblack-500 active:bg-nobleblack-400 text-nobleblack-300 hover:text-nobleblack-200 active:text-nobleblack-100",
        ghost: "text-nobleblack-400 hover:text-nobleblack-300 active:text-nobleblack-200",
        glass: "bg-glass shadow-glass text-nobleblack-300 hover:text-nobleblack-200 active:text-nobleblack-100",
      },
      size: {
        large: "py-3 px-6 text-bl rounded-xl",
        medium: "py-2.5 px-4 text-bm rounded-[0.625rem]",
        small: "py-[0.4375rem] px-3 text-bs rounded-lg"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
