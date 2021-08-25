
const { Sequelize, Model } = require('sequelize');
const datbase = 'todos'
const username = 'dataUser'
const password = '123qwe'
const sequelize = new Sequelize(datbase, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // 该池将在抛出错误之前尝试获取连接的最长时间（以毫秒为单位）
        idle: 10000 // 连接释放之前可以空闲的最长时间（以毫秒为单位）
    }
})

sequelize.sync({
    force: true
})
module.exports = {
    sequelize
}