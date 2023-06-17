export async function* sendMessageToSession(message: string): AsyncGenerator<string, void, void> {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/send', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ message })
  });

  if (!response.body) {
    throw Error("Cannot read response body")
  }

  const reader = response.body.pipeThrough(new TextDecoderStream())
    .getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) return;
    yield value
  }
}