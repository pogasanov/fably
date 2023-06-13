import { cache } from 'react'
import { getRequest, ReceivedMessage } from "@/components/shared/api";

export const preloadHistory = (id: string) => {
  void getSessionHistory(id)
}

export const getSessions = cache(async (): Promise<string[]> => {
  return getRequest('')
})

export const getSessionHistory = cache(async (id: string): Promise<ReceivedMessage[]> => {
  return getRequest(`/${id}`)
})