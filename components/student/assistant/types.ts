export type MessageRole = "student" | "ai";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}
