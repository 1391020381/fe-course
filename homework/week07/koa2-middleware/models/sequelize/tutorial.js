const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const Tutorial = sequelize.define('tutorial', {
    title: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    }
})

module.exports = Tutorial