import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages, session_id } = await req.json()
  const supabase = createRouteHandlerClient({ cookies })

  if (!session_id) {

  }

  const createPromise = supabase.from('history').insert(messages.map((m: any) => ({
    session_id,
    content: m.content,
    role: m.role
  })))

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  })
  const stream = OpenAIStream(response, {
    onCompletion: (completion) => {
      return new Promise((resolve, reject) => {
        supabase.from('history').insert({ session_id, content: completion, role: "assistant" }).then(() => resolve())
      })
    }
  })
  await createPromise
  return new StreamingTextResponse(stream)
}