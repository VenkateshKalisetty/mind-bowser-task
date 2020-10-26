const jwt = require("jsonwebtoken");
const Manager = require("../models/manager");
const CONSTANT = require("../config");
const { Response } = require("../utils");

const isUserExist = async (email, password) => {
    const user = await Manager.findOne({
        where: { email: email, password: password },
    });
    return user
        ? {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
        }
        : null;
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await isUserExist(email, password);
        if (user) {
            const jwtToken = generateToken(user);
            return Response.ok(res, { jwtToken, user });
        }
        return Response.badRequest(res, {
            msg: "Invalid Login details!"
        });
    } catch (ex) {
        return Response.badRequest(res, {
            msg: "Failed login the user!"
        });
    }
}

const generateToken = (user) => {
    return jwt.sign(user, CONSTANT.JWT_SECRET_TOKEN, {
        expiresIn: CONSTANT.JWT_TOKEN_EXPIRE_TIME,
    });
};

const authenticateRequest = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, CONSTANT.JWT_SECRET_TOKEN, (err, user) => {
            if (err) Response.unAuthorized(res);
            else {
                req.user = user;
                next();
            }
        });
    } else {
        Response.unAuthorized(res);
    }
};

module.exports = {
    authenticateRequest,
    loginUser,
};
