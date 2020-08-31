export interface SessionItem {
  sessionId: string;
  title: string;
  userId: string;
  createdAt: string;
  eventDate: Date;
  description: string;
  link: string;
  attendees: Array<string>;
  tags: Array<string>;
}
