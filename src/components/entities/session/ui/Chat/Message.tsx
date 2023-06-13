import { MessageType } from "@/components/shared/api";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/shared/lib/utils"

const messageVariants = cva(
  "flex p-2 rounded",
  {
    variants: {
      type: {
        [MessageType.Narrator]: "bg-slate-200",
        [MessageType.System]: "",
        [MessageType.User]: "bg-slate-400",
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
  return (
    <div className={cn(messageVariants({ type }))}>
      {children}
    </div>
  )
}
Message.display = "Message"