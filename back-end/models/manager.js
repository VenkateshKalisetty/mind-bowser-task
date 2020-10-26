const { DataTypes, Sequelize } = require("sequelize");
const { SEQUELIZE_OPTIONS } = require("../config");

const sequelize = new Sequelize(SEQUELIZE_OPTIONS);

const Manager = sequelize.define(
    "Managers",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(75),
            unique: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING(50),
        },
        dob: {
            type: DataTypes.DATE,
        },
        address: {
            type: DataTypes.STRING(500),
        },
    },
    {
        tableName: "manager",
        modelName: "Managers",
        timestamps: false,
    }
);

module.exports = Manager;
