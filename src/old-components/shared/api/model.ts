export enum MessageType {
  User = "user",
  Narrator = "narrator",
  System = "system",
}

export type ReceivedMessage = {
  message: string,
  date: Date,
  type: MessageType,
}

export type NewMessage = {
  message: string,
}