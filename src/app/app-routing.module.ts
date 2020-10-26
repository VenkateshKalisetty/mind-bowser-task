import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (v) => v.AuthenticationModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((v) => v.HomeModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (v) => v.EmployeeModule
      ),
  },
  {
    path: 'subscription',
    loadChildren: () =>
      import('./modules/subscription/subscription.module').then(
        (v) => v.SubscriptionModule
      ),
  },
  {
    path: '**',
    redirectTo: '/auth/signin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
