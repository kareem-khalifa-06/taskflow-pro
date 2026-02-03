import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService)
  const router=inject(Router)
  if(auth.isLoggedIn()){
    //allow navigation
    return true;
  }
// don't allow navigation and stay on same page
  router.navigate(['/login'])
  return false;
};
