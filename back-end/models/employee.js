const { DataTypes, Sequelize } = require("sequelize");
const { SEQUELIZE_OPTIONS } = require("../config");

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
        dob: {
            type: DataTypes.DATE,
        },
        address: {
            type: DataTypes.STRING(500),
        },
    },
    {
        tableName: "employee",
        modelName: "Employees",
        timestamps: false,
    }
);

module.exports = Employee;
