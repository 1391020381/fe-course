const es = require('elasticsearch')
const client = es.Client({
    host: 'http://localhost:9200'
})
client.ping()
    .then(res => {
        console.log('elasticsearch connection success', res)
    })
    .catch(err => {
        console.error('elasticsearch wrong connection', err)
    })


module.exports = {
    EsClient: client
}