import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.scss'],
})
export class ManageSubscriptionComponent implements OnInit {
  product = {
    name: 'Monthly Subscription',
    description: 'Monthly Subscription Test',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
    image:
      'https://www.ktechnosoft.biz/wp-content/uploads/2018/04/KTS-Monthly-Subscription.png',
    price: 1999,
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripeKey);

  constructor() {}

  ngOnInit(): void {}

  async checkout(): Promise<void> {
    const stripe = await this.stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [{ price: environment.samplePriceId, quantity: this.quantity }],
      successUrl: `${window.location.href}/succes`,
      cancelUrl: `${window.location.href}/failure`,
    });
  }
}
