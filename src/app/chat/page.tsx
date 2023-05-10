"use client"

import ChatList from "@/components/ChatList";
import {Message, MessageType} from "@/types";
import {FormEvent, useState} from "react";
import useWebSocket from "react-use-websocket";

export default function Home() {
  const [input, setInput] = useState("Describe what I see")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const socketUrl = 'ws://localhost:5000/ws';

  const {
    sendJsonMessage,
  } = useWebSocket(socketUrl, {
    onOpen: () => {
      setMessages([])
      setIsLoading(false)
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
        setIsLoading(false)
      }
    }
  });


  const makeRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    sendJsonMessage({
      message: input
    })
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <ChatList messages={messages}/>

      <form className="flex flex-col w-full" onSubmit={makeRequest}>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
          message</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Describe what I see"></textarea>

        <button
          disabled={isLoading}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
        </button>
      </form>
    </main>
  )
}
