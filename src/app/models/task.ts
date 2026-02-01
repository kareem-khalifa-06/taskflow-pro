export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigneeId: string;
  creatorId: string;
  dueDate: Date;
  estimatedHours: number;
  actualHours: number;
  tags: string[];
  attachments: { name: string; url: string; size: number }[];
  dependencies: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}