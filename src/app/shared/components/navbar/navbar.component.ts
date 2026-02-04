import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidebarItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'folder',
      route: '/projects',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'kanban',
      label: 'Kanban Board',
      icon: 'view_kanban',
      route: '/kanban',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'tasks',
      label: 'My Tasks',
      icon: 'task_alt',
      route: '/tasks',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'team',
      label: 'Team',
      icon: 'groups',
      route: '/team',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'time-tracking',
      label: 'Time Tracking',
      icon: 'schedule',
      route: '/time-tracking',
      roles: ['admin', 'manager', 'member'],
    },
    {
      id: 'reports',
      label: 'Reports & Analytics',
      icon: 'assessment',
      route: '/reports',
      roles: ['admin', 'manager'],
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      route: '/settings',
      roles: ['admin'],
    },
  ];
}
