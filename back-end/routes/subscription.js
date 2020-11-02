const router = require('express').Router();
const subscriptionController = require('../controllers/subscription');
const { authenticateRequest } = require('../controllers/auth');

router.post('/customer', authenticateRequest, subscriptionController.createCustomerAndSubscription);
router.post('/create', authenticateRequest, subscriptionController.createSubscription);
router.post('/cancel', authenticateRequest, subscriptionController.cancelSubscription);
router.post('/update', authenticateRequest, subscriptionController.updateSubscription);

module.exports = router;