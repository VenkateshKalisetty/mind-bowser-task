const router = require('express').Router();
const { authenticateRequest } = require('../controllers/auth');
const employeeController = require('../controllers/employee');

router.get('/', authenticateRequest, employeeController.getEmployees);
router.post('/', authenticateRequest, employeeController.addOrUpdateEmployee);
router.delete('/:empId', authenticateRequest, employeeController.deleteEmployee);

module.exports = router;