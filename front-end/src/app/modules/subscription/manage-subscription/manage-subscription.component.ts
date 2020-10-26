import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.scss'],
})
export class ManageSubscriptionComponent implements OnInit {
  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {}
}
