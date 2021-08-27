const mongooe = require('mongoose')
const db = mongooe.connect('mongodb://localhost/todos')

const connecttion = mongooe.connection
db.on('error', () => {
    console.log('mongodb error')
})

db.on('open', () => {
    console.log('mongodb connected')
})

module.exports = {
    mongooe: db
}