import { create } from 'zustand'
import { MessageType, ReceivedMessage } from "@/components/shared/api";
import { getSessionHistory } from "../api/history";
import { produce } from "immer";

interface SessionState {
  messages: ReceivedMessage[]
  fetch: (session_id: string) => Promise<void>
  addVisitorMessage: (message: string) => void
  addAIMessage: (message: string) => void
}

export const useSessionStore = create<SessionState>()(
  (set) => ({
    messages: [],
    fetch: (session_id) => getSessionHistory(session_id).then(h => set((state) => ({ messages: h }))),
    addVisitorMessage: (message) => set(
      produce((state) => {
        state.messages = state.messages.push({
          message,
          date: new Date(),
          type: MessageType.User
        })
      })
    ),
    addAIMessage: (message) => set(
      produce((state) => {
        if (state.messages.length === 0 || state.messages[state.messages.length - 1].type !== MessageType.Narrator) {
          state.messages = state.messages.push({
            message,
            date: new Date(),
            type: MessageType.Narrator
          })
        } else {
          state.messages[state.messages.length - 1].message += message
        }
      })
    ),
  })
)