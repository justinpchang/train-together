export interface SessionUpdateItem {
  title: string;
  userId: string;
  eventDate: String;
  description: string;
  link: string;
  slots: number;
  tags: Array<string>;
  attachmentUrl?: string;
}
