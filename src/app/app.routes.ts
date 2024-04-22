import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path        : '',
    redirectTo  : 'signin',
    pathMatch   : 'full'
  },
  {
    path: 'signin',
    loadComponent: () => import('./@features/auth/signin/signin.component').then((x) => x.SigninPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./@features/dashboard/dashboard.component').then((x) => x.DashboardPage)
  }
];
