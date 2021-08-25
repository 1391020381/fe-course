const router = require('koa-router')()
const { sequelize } = require('../models/sequelize')
// router.prefix('/sequelize')

router.get('/authenticate', async (ctx, next) => {
    try {
        await sequelize.authenticate();
        ctx.body = 'Connection has been established successfully.'
    } catch (error) {
        ctx.body = 'Unable to connect to the database'
    }
})


module.exports = router