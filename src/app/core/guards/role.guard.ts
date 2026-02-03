import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth =inject(AuthService)
  const router =inject(Router)
  const role=auth.getCurrentUser().role;
  if(role==='admin')
    return true;
  if(role==='member')
    return true;
  if(role==='manager')
    return true;
  router.navigate(['/login']);
  return false;
};
