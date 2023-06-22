"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/components/shared/lib/utils"
import { FaCheck } from "react-icons/fa";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 rounded-sm border border-nobleblack-500 bg-nobleblack-600 hover:border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:bg-gradient-to-tr data-[state=checked]:from-dayblue-500 data-[state=checked]:via-heisenbergblue-500 data-[state=checked]:to-stemgreen-500 data-[state=checked]:border-0",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <FaCheck size={12}/>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

type Props = React.ComponentPropsWithoutRef<typeof Checkbox> & {
  children: React.ReactNode
}

const CheckboxWithLabel = React.forwardRef<
  React.ElementRef<typeof Checkbox>,
  Props
>(({ className, children, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <Checkbox {...props} ref={ref}/>
    <label
      htmlFor={props.id}
      className="text-bl font-medium text-nobleblack-200 leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  </div>
))
CheckboxWithLabel.displayName = "CheckboxWithLabel"

export { Checkbox, CheckboxWithLabel }
