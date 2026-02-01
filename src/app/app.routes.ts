import { Routes } from '@angular/router';
import { NotFoundComponent } from '../app/shared/components/not-found/not-found.component';
export const routes: Routes = [
    {
        path:'',redirectTo:'/login'
    }
    ,
    
  {
    path: '**',
    loadComponent: () =>
      import('../app/shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
    title: 'not Found',
  },
];
