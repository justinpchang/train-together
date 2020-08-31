export interface UserItem {
  userId: string;
  createdAt: string;
  name: string;
  email: string;
  dob: Date;
  interests: Array<string>;
  attachmentUrl?: string;
  sessionAttended?: number;
  sessionAttendedList?: Array<string>;
  sessionCreated?: number;
  sessionCreatedList?: Array<string>;
}
