import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.scss'],
})
export class ManageSubscriptionComponent implements OnInit {
  priceId = 'price_1Hgks6CkgYmpdTAdh1xxKCjG';
  product = {
    name: 'Monthly Subscription',
    description: 'Monthly Subscription Test',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
    image:
      'https://www.ktechnosoft.biz/wp-content/uploads/2018/04/KTS-Monthly-Subscription.png',
    price: 999,
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);

  constructor() {}

  ngOnInit(): void {}

  async checkout(): Promise<void> {
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: this.priceId, quantity: this.quantity }],
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/failure`,
    });
    if (error) {
      console.log(error);
    }
  }
}
