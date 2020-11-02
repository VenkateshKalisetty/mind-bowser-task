const path = require("path");

const JWT_SECRET_TOKEN = "qwertyuiopASDFGHJKLzxcvbnm12345678900987654321ASDFGhjkl";
const JWT_TOKEN_EXPIRE_TIME = 60 * 60; // In Seconds.
const PORT = 12345;
const STRIPE_SECRET_KEY = "";
const STRIPE_PUBLISHABLE_KEY = "";
const PRICE_ID = "";

const SEQUELIZE_OPTIONS = Object.freeze({
    dialect: "sqlite",
    storage: path.join(__dirname, "db/mb.db"),
    logging: false,
});

module.exports = {
    JWT_SECRET_TOKEN,
    JWT_TOKEN_EXPIRE_TIME,
    PORT,
    SEQUELIZE_OPTIONS,
    STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY,
    PRICE_ID,
};
