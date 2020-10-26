import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: ManageSubscriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
