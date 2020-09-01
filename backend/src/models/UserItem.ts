export interface UserItem {
  userId: string;
  createdAt: string;
  name: string;
  email: string;
  age: string;
  interests: Array<string>;
  followed?: number;
  following?: number;
  attachmentUrl?: string;
  sessionAttended?: number;
  sessionCreated?: number;
  history?: Array<string>;
}
