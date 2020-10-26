const router = require('express').Router();
const { addManager } = require('../controllers/manager');
const { loginUser } = require("../controllers/auth");

router.post('/signin', loginUser)
router.post('/signup', addManager);

module.exports = router;