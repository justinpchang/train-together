export interface UserItem {
  userId: string;
  createdAt: string;
  name: string;
  email: string;
  dob: Date;
  interests: Array<string>;
  followed?: number;
  following?: number;
  attachmentUrl?: string;
  sessionAttended?: number;
  sessionCreated?: number;
}
