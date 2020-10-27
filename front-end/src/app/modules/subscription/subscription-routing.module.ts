import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  {
    path: '',
    component: ManageSubscriptionComponent,
  },
  {
    path: 'success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'failure',
    component: PaymentFailureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
