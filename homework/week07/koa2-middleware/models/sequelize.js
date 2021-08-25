
const { Sequelize, Model } = require('sequelize');
const datbase = 'todos' // 'sequelizeExample'
const username = 'dataUser'
const password = '123qwe'
const sequelize = new Sequelize(datbase, username, password, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.sync({
    force: true
})
module.exports = {
    sequelize
}