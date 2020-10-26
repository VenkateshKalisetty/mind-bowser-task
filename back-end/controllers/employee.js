const Employee = require('../models/employee');
const { Response } = require("../utils");
const moment = require('moment');


const addOrUpdateEmployee = async (req, res) => {
    const empBody = req.body;
    const emp = {
        manager_id: req.user.id,
        first_name: empBody.firstName,
        last_name: empBody.lastName,
        address: empBody.address,
        dob: empBody.dob ? new Date(empBody.dob) : null,
        mobile: empBody.mobile,
        city: empBody.city,
    };
    try {
        if (empBody.employeeId === -1) {
            const { dataValues } = await Employee.create(emp);
            empBody.employeeId = dataValues.id;
        } else {
            emp.id = empBody.employeeId;
            await Employee.update(emp, { where: { id: emp.id } });
        }
        return Response.created(res, empBody);
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to add the Employee!"
        });
    }
}

const getEmployees = async (req, res) => {
    const managerId = req.user.id;
    try {
        const employees = (await Employee.findAll({ where: { manager_id: managerId, isDeleted: false } }))
            .map(emp => ({
                employeeId: emp.id,
                firstName: emp.first_name,
                lastName: emp.last_name,
                address: emp.address,
                dob: emp.dob ? moment(emp.dob).format('YYYY/MM/DD') : null,
                city: emp.city,
                mobile: emp.mobile,
            }));
        return Response.ok(res, employees);
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to fetch employees!"
        })
    }
}

const deleteEmployee = async (req, res) => {
    const empId = req.params.empId;
    try {
        if (await isEmployeeExists(empId)) {
            await Employee.update({isDeleted: true}, { where: { id: empId } });
            return Response.created(res);
        }
        return Response.badRequest(res, {
            msg: "Employee not found!"
        })
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to delete the employee!"
        })
    }
}

const isEmployeeExists = async (empId) => {
    return (await Employee.findOne({
        where: { id: empId }
    })) != null
}

module.exports = { addOrUpdateEmployee, deleteEmployee, getEmployees }
