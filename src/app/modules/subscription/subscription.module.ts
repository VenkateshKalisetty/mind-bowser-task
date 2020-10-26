import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';



@NgModule({
  declarations: [ManageSubscriptionComponent],
  imports: [CommonModule, SubscriptionRoutingModule],
})
export class SubscriptionModule {}
