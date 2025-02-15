const router = require('koa-router')()
const { client } = require('../models/redis/index')
router.prefix('/redis')

router.get('/set', async (ctx, next) => {
    const key = ctx.query.title
    const value = ctx.query.age
    client.set(key, value, client.print)
    ctx.body = 'redis-set'
})
router.get('/get', async (ctx, next) => {
    console.log('redis-get:', ctx.query)
    const key = ctx.query.name
    // const value = ctx.query.age
    client.get(key, function (err, value1) {
        console.log(err, value1, '---------------------')
        if (err) {
            throw err
        }
        // client.quit();
        ctx.body = value1
    })
    // ctx.body = ctx.query.age
})
module.exports = router