export interface User {
  id: string;
  name: string;
  email: string;
  school: string;
  canton: string;
  avatar?: string;
}

export interface Material {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  author: User;
  tags: string[];
  createdAt: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface Message {
  id: string;
  sender: User;
  preview: string;
  timestamp: string;
  unreadCount: number;
  isGroup: boolean;
  groupName?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
