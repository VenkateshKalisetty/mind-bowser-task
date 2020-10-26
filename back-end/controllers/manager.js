const Manager = require('../models/manager');
const { Response } = require("../utils");


const addManager = async (req, res) => {
    const empBody = req.body;
    const emp = {
        email: empBody.email,
        first_name: empBody.firstName,
        last_name: empBody.lastName,
        password: empBody.password,
        company: empBody.company,
        dob: empBody.dob,
        address: empBody.address,
    };
    try {
        if (await isNewManagerEmail(emp.email)) {
            await Manager.create(emp);
            return Response.created(res);
        }
        return Response.badRequest(res, {
            msg: "Manager email already existsted!"
        });
    } catch (ex) {
        Response.internalServerErr(res, {
            msg: "Failed to add the Manager!"
        });
    }
}

const isNewManagerEmail = async (email) => {
    return (await Manager.findOne({ where: { email: email } })) == null;
}

module.exports = { addManager }
