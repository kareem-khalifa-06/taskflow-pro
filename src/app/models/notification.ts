export interface Notification {
  id: string;
  userId: string;
  type: 'mention' | 'assignment' | 'comment' | 'deadline';
  message: string;
  linkTo: string;
  read: boolean;
  createdAt: Date;
}