const router = require('koa-router')()
const { create, } = require('../controllers/sequelize')
router.prefix('/mongoose')

router.get('/create', create)

module.exports = router