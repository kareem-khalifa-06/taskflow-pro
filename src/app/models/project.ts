export interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  teamMembers: string[];
  status: 'active' | 'archived' | 'completed';
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
