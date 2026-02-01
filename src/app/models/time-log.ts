export interface TimeLog {
  id: string;
  taskId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  description: string;
  createdAt: Date;
}