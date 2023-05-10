export enum MessageType {
  User = "user",
  Narrator = "narrator",
  System = "system",
}

export type Message = {
  message: string,
  date: Date,
  type: MessageType,
}

export type NewMessage = {
  message: string,
}