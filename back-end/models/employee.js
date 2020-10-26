const { DataTypes, Sequelize } = require("sequelize");
const { SEQUELIZE_OPTIONS } = require("../config");
const moment = require('moment');

const sequelize = new Sequelize(SEQUELIZE_OPTIONS);

const Employee = sequelize.define(
    "Employees",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'manager',
                key: 'id'
            }
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
        },
        address: {
            type: DataTypes.STRING(500),
        },
        city: {
            type: DataTypes.STRING(50),
        },
        mobile: {
            type: DataTypes.STRING(15),
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        tableName: "employee",
        modelName: "Employees",
        timestamps: false,
    }
);

module.exports = Employee;
