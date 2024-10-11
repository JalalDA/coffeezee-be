const { Sequelize } = require("sequelize");



const db = new Sequelize('coffeezee', 'jalal', '', {
    dialect : 'postgres',
    // host : "localhost",
    port : 5432
})

module.exports = db