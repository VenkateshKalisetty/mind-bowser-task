import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionService } from './subscription.service';

@NgModule({
  declarations: [ManageSubscriptionComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    SubscriptionService
  ]
})
export class SubscriptionModule {}
