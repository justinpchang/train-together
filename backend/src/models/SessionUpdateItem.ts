export interface SessionUpdateItem {
  title: string;
  userId: string;
  eventDate: String;
  description: string;
  link: string;
  tags: Array<string>;
  attachmentUrl?: string;
}
