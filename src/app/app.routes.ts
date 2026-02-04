import { Routes, CanActivateFn } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/features/auth/login/login.component').then(
        (m) => m.LoginComponent,
      ),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../app/features/auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
    title: 'Register Account',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('../app/features/auth/forgotPassword/forgotPassword.component').then(
        (m) => m.ForgotPasswordComponent,
      ),
    title: 'Forgot Password',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/shared/components/layout/layout.component').then(
        (m) => m.LayoutComponent,
      ),
    title: 'Home Page',
    canActivate:[authGuard,roleGuard]
  },
 
  {
    path: '**',
    loadComponent: () =>
      import('../app/shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
    title: 'not Found',
  },
];

