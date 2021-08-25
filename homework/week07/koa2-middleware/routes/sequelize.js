const router = require('koa-router')()
const { sequelize } = require('../models/sequelize/index')
const { create, queryAll, deleteSome, updateSome } = require('../controllers/sequelize')
router.prefix('/sequelize')

router.get('/authenticate', async (ctx, next) => {
    try {
        await sequelize.authenticate();
        ctx.body = 'Connection has been established successfully.'
    } catch (error) {
        ctx.body = 'Unable to connect to the database'
    }
})

router.get('/create', create)
router.get('/queryAll', queryAll)
router.get('/deleteSome', deleteSome)
router.get('/updateSome', updateSome)
module.exports = router