const router = require('koa-router')()
const { EsClient } = require('../models/elasticsearch/index')
router.prefix('/elasticsearch')

router.get('/create', async (ctx, next) => {
    const name = ctx.query.name
    const age = ctx.query.age
    try {
        const result = await EsClient.index({
            index: 'students',
            type: '_doc',
            id: '1',
            body: {
                name: name,
                age: age,
                hobby: 'basketball'
            }
        })
        ctx.body = result
    } catch (err) {
        ctx.body = err.message
    }
})
router.get('/queryAll', async (ctx, next) => {
    try {
        const result = await EsClient.search({
            index: 'students',
            type: '_doc',
            body: {
                query: {
                    match: {
                        age: ctx.query.age || ''
                    }
                }
            }
        })
        ctx.body = result
    } catch (err) {
        ctx.body = err.message
    }
})
router.get('/update', async (ctx, next) => {
    try {
        const result = await EsClient.update({
            index: "students",
            type: '_doc',
            id: '1',
            body: {
                doc: {
                    hobby: ctx.query.name
                }
            }
        })
        ctx.body = result
    } catch (err) {
        ctx.body = err.message
    }
})
router.get('/delete', async (ctx, next) => {
    try {
        const result = await EsClient.delete({
            index: 'students',
            type: '_doc',
            id: '1'
        })
        ctx.body = result
    } catch (err) {
        ctx.body = err.message
    }
})
module.exports = router