import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/shared/lib/utils"
import { IconType } from "react-icons";
import { useMemo } from "react";

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
      type: {
        icon: "",
      }
    },
    compoundVariants: [
      {
        size: "large",
        type: "icon",
        className: "px-3"
      },
      {
        size: "medium",
        type: "icon",
        className: "px-2.5"
      },
      {
        size: "small",
        type: "icon",
        className: "px-[0.4375rem]"
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "type"> {
  asChild?: boolean,
  Icon?: React.ComponentType<React.ComponentProps<IconType>>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, Icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const onlyIcon = useMemo(() => !React.isValidElement(children), [children])
    const iconSize = useMemo(() => {
      switch (size) {
        case "small": {
          return 16
        }
        case "medium": {
          return 20
        }
        default: {
          return 24
        }
      }
    }, [size])
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, type: onlyIcon ? "icon" : undefined }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon size={iconSize}/>}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
