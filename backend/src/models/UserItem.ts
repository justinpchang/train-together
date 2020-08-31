export interface UserItem {
  userId: string;
  createdAt: string;
  name: string;
  email: string;
  dob: Date;
  interests: Array<string>;
  followed?: number;
  followedList?: Array<string>;
  following?: number;
  followingList?: Array<string>;
  attachmentUrl?: string;
  sessionAttended?: number;
  sessionAttendedList?: Array<string>;
  sessionCreated?: number;
  sessionCreatedList?: Array<string>;
}
