const { Sequelize } = require("sequelize");
const { SEQUELIZE_OPTIONS } = require("../config");
const Manager = require("../models/manager");
const Employee = require("../models/employee");

const init = async () => {
    const sequelize = new Sequelize(SEQUELIZE_OPTIONS);

    try {
        await sequelize.authenticate();
        await Manager.sync();
        await Employee.sync();
        console.log("DB Initialized!");
    } catch(ex) {
        console.log("Unable to connect to SQLite database: ", ex);
    }
}

init();