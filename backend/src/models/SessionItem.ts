export interface SessionItem {
  sessionId: string;
  title: string;
  userId: string;
  createdAt: string;
  eventDate: String;
  description?: string;
  link: string;
  slots: number;
  attachmentUrl?: string;
  tags?: Array<string>;
}
