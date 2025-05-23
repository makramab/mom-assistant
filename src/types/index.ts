export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface Assessment {
  id: string;
  title: string;
  date: Date;
  lastMessage?: string;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
}

export interface ChatContextType {
  input: string;
  setInput: (input: string) => void;
  initialMessages: Message[];
  setInitialMessages: (messages: Message[]) => void;
} 