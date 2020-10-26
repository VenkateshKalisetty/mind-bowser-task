const Employee = require('../models/employee');
const { Response } = require("../utils");
const { Op } = require('sequelize');


const addEmployee = async (req, res) => {
    const empBody = req.body;
    const emp = {
        email: empBody.email,
        first_name: empBody.firstName,
        last_name: empBody.lastName,
        password: empBody.password,
        dob: empBody.dob,
        address: empBody.address,
    };
    try {
        if (await isEmployeeExists(emp.email, null)) {
            const newEmp = await Employee.create(emp);
            return Response.created(res, newEmp.dataValues);
        }
        return Response.badRequest(res, {
            msg: "Employee email already existsted!"
        });
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to add the Employee!"
        });
    }
}

const getEmployees = async (req, res) => {
    const managerId = req.user.id;
    try {
        if (await isEmployeeExists(null, managerId)) {
            const employees = (await Employee.findAll({ where: { manager_id: managerId } }))
                .map(emp => ({
                    id: emp.id,
                    email: emp.email,
                    name: emp.name,
                    firstName: emp.first_name,
                    lastName: emp.last_name,
                    dbo: emp.dbo,
                    address: emp.address,
                }));
            return Response.ok(res, employees);
        }
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to fetch employees!"
        })
    }
}

const deleteEmployee = async (req, res) => {
    const empId = req.params.empId;
    try {
        if (await isEmployeeExists(null, empId)) {
            await Employee.destroy({ where: { id: empId } });
            return Response.deleted(res);
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

const isEmployeeExists = async (email, empId) => {
    return (await Employee.findOne({
        where: {
            [Op.or]: [
                { email: email }, { id: empId }
            ]
        }
    })) != null;
}

module.exports = { addEmployee, deleteEmployee, getEmployees }
