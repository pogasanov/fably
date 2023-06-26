type Method = "GET" | "POST"

const parseResponse = (response: Response) => {
  if (!response.ok) {
    throw Error("Request failed")
  }
  return response.json()
}

const makeRequest = (url: RequestInfo | URL, method: Method, body?: Record<string, any>) => {
  if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
    throw Error("Please specify NEXT_PUBLIC_BACKEND_URL")
  }

  return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body: body ? JSON.stringify(body) : undefined
  }).then(parseResponse)
}

export const getRequest = (url: RequestInfo | URL) => {
  return makeRequest(url, "GET")
}

export const postRequest = (url: RequestInfo | URL, body: Record<string, any>) => {
  return makeRequest(url, "POST", body)
}