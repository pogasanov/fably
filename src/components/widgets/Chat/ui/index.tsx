import ChatList from "@/components/ChatList";
import { SubmitMessageForm } from "@/components/features/SubmitMessageForm";
import { Message, MessageType } from "@/types";
import { useCallback, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [externalResolve, setExternalResolve] = useState<(() => void) | null>(null)

  const socketUrl = 'ws://localhost:5000/ws';

  const {
    sendJsonMessage,
    readyState,
  } = useWebSocket(socketUrl, {
    onOpen: () => {
      setMessages([])
    },
    shouldReconnect: (closeEvent) => false,
    onMessage: (e: MessageEvent<string>) => {
      const data = JSON.parse(e.data) as Message
      const newMessage = {
        date: new Date(data.date),
        type: data.type,
        message: data.message
      }
      setMessages(messages => [...messages, newMessage])
      if (data.type === MessageType.Narrator) {
        externalResolve && externalResolve()
        setExternalResolve(null)
      }
    }
  });

  const onSendMessage = useCallback((message: string) => {
    return new Promise<void>((resolve) => {
      setExternalResolve(resolve)
      sendJsonMessage({ message })
    })
  }, [sendJsonMessage])

  return (
    <div>
      <ChatList messages={messages}/>

      <SubmitMessageForm
        disabled={readyState !== ReadyState.OPEN}
        sendMessage={onSendMessage}
      />
    </div>
  )
}