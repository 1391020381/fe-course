const mongooe = require('mongoose')
const db = mongooe.connect('mongodb://localhost/todos')

const connecttion = mongooe.connection
connecttion.on('error', () => {
    console.log('mongodb error')
})

connecttion.on('open', () => {
    console.log('mongodb connected')
})

module.exports = {
    mongooe: db
}