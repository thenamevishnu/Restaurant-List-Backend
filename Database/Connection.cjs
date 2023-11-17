const { Sequelize } = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()

const sequelize = new Sequelize(process.env.SQL_DB_NAME, process.env.SQL_USERNAME, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: "mysql"
})

module.exports = sequelize