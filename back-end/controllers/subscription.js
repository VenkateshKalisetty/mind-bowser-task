const { STRIPE_SECRET_KEY, PRICE_ID } = require('../config');

const stripe = require('stripe')(STRIPE_SECRET_KEY);

const createCustomerAndSubscription = async (req, res) => {
    const { email, paymentMethodId } = req.body;
    const priceId = PRICE_ID;
    // Create customer
    const customer = await stripe.customers.create({ email });

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ['latest_invoice.payment_intent'],
    });

    res.send({customer, subscription});
}

const createSubscription = async (req, res) => {
    const { customerId, paymentMethodId } = req.body;
    const priceId = PRICE_ID;
    try {
        await stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
        });
    } catch (error) {
        return res.status('402').send({ error: { message: error.message } });
    }

    const updateCustomerDefaultPaymentMethod = await stripe.customers.update(
        customerId,
        {
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        }
    );

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        expand: ['latest_invoice.payment_intent'],
    });

    res.send(subscription);
}

const cancelSubscription = async (req, res) => {
    // Delete the subscription
    const { subscriptionId } = req.body;
    const deletedSubscription = await stripe.subscriptions.del(subscriptionId);
    res.send(deletedSubscription);
}

const updateSubscription = async (req, res) => {
    const {subscriptionId, newPriceId } = req.body;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const updatedSubscription = await stripe.subscriptions.update(
        subscriptionId,
        {
            cancel_at_period_end: false,
            items: [
                {
                    id: subscription.items.data[0].id,
                    price: newPriceId,
                },
            ],
        }
    );

    res.send(updatedSubscription);
}

module.exports = { createCustomerAndSubscription, createSubscription, cancelSubscription, updateSubscription };
