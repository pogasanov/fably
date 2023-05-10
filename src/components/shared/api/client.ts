type Method = "GET" | "POST"

const parseResponse = (response: Response) => {
  if (!response.ok) {
    throw Error("Request failed")
  }
  return response.json()
}

const makeRequest = (url: RequestInfo | URL, method: Method, body?: Record<string, any>) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  }).then(parseResponse)
}

export const getRequest = (url: RequestInfo | URL) => {
  return makeRequest(url, "GET")
}

export const postRequest = (url: RequestInfo | URL, body: Record<string, any>) => {
  return makeRequest(url, "POST", body)
}