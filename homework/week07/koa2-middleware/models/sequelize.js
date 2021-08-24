const { Sequelize } = require('sequelize')


const user = function (seq) {
    const UserModal = seq.define('user', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
        },
        name: Sequelize.STRING,
        age: Sequelize.BIGINT,
        sex: Sequelize.ENUM('male', 'female'),
    }, {
        timestamps: false,
        freezeTableName: true,
    })
    return UserModal
}

module.exports = user
