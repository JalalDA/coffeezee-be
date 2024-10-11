const { config } = require("dotenv")
config()
const { Sequelize } = require("sequelize");
const pg = require("pg")

// const db = new Sequelize(`${process.env.POSTGRES_DATABASE}`, `${process.env.POSTGRES_USER}`, `${process.env.POSTGRES_PASSWORD}`, {
//     dialect: 'postgres',
//     // host : "localhost",
//     port: 5432,
//     dialectModule : pg
// })

const db = new Sequelize(`${process.env.DATABASE_URL}`, {
    dialect : 'postgres',
    dialectModule : pg
})

module.exports = db