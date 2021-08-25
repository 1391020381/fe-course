const mongooe = require('mongoose')
const userSchema = mongooe.Schema({
    username: {
        type: String,
        require: true
    },
    age: {
        type: Number
    }
})

const User = mongooe.model('User', userSchema)

module.exports = User