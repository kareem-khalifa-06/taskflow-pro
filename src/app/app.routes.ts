import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    }
    ,
    {
      path:'login',loadComponent: ()=>import('../app/features/auth/login/login.component').then((m)=>
        m.LoginComponent
      ),
      title:'Login'
    }
    ,
    {
      path:'register',loadComponent: ()=>import('../app/features/auth/register/register.component').then((m)=>
        m.RegisterComponent
      ),
      title:'Login'
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
