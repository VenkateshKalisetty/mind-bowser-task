const router = require('express').Router();
const employeeController = require('../controllers/employee');

router.post('/', employeeController.addEmployee);
router.delete('/:empId', employeeController.addEmployee);

module.exports = router;