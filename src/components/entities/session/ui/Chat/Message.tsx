import { MessageType } from "@/components/shared/api";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/shared/lib/utils"
import { useMemo } from "react";

const messageVariants = cva(
  "flex p-4 w-full border border-solid border-nobleblack-600 rounded-2xl",
  {
    variants: {
      type: {
        [MessageType.Narrator]: "bg-nobleblack-800",
        [MessageType.System]: "bg-nobleblack-800",
        [MessageType.User]: "bg-nobleblack-700",
      },
    },
    defaultVariants: {
      type: MessageType.Narrator,
    },
  }
)

type Props = VariantProps<typeof messageVariants> & {
  children: string,
  date: Date,
}

export const Message = ({ children, type, date }: Props) => {
  const name = useMemo(() => {
    if (type === MessageType.Narrator) {
      return "Narrator"
    }
    if (type === MessageType.User) {
      return "You"
    }
    if (type === MessageType.System) {
      return "System"
    }
  }, [type])

  return (
    <div className={cn(messageVariants({ type }))}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <h6 className="text-white text-bl font-semibold">{name}</h6>
          <span className="text-bs font-medium text-nobleblack-400">5 sec ago</span>
        </div>
        <div className="text-nobleblack-300 text-bl font-medium">
          {children}
        </div>
      </div>
    </div>
  )
}
Message.display = "Message"