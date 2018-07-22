const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  app.get('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
  });

  return app;
}

module.exports = paymentApi;
