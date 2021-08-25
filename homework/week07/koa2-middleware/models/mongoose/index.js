const mongooe = require('mongoose')
const db = mongooe.connect('mongodb://localhost/todos')

db.once('error', () => {
    console.log('mongodb error')
})

db.once('open', () => {
    console.log('mongodb connected')
})

module.exports = {
    mongooe: db
}