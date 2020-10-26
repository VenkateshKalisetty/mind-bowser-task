import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  SignInGuard
} from './modules/shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [SignInGuard],
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (v) => v.AuthenticationModule
      ),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/home/home.module').then((v) => v.HomeModule),
  },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (v) => v.EmployeeModule
      ),
  },
  {
    path: 'subscription',
    canActivate: [AuthGuard],
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
