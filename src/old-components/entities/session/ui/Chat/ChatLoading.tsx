import { Skeleton } from "@/components/shared/ui";

export const ChatLoading = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-2">
      <Skeleton className="h-8 w-[250px]"/>
      <Skeleton className="h-8 w-[250px]"/>
      <Skeleton className="h-8 w-[250px]"/>
    </div>
  )
}
ChatLoading.display = "ChatLoading"