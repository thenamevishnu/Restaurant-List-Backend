const { DataTypes } = require("sequelize")
const sequelize = require("../Database/Connection.cjs")
const dotenv = require("dotenv")

dotenv.config()

const RestaurantList = sequelize.define(process.env.SQL_DB_NAME, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RESTAURANT_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RESTAURANT_IMAGE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RESTAURANT_DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    RESTAURANT_ADDRESS: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RESTAURANT_NUMBER: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
})

module.exports = RestaurantList