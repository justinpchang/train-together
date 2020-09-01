export interface CreateSessionItem {
  title: string;
  userId: string;
  createdAt: string;
  eventDate: String;
  description?: string;
  link: string;
  attendees?: number;
  attachmentUrl?: string;
  tags?: Array<string>;
}
