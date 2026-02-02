export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: 'admin' | 'manager' | 'member';
  createdAt: Date|string;
  updatedAt: Date|string;
}
