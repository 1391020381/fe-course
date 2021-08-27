const router = require('koa-router')()
const { create, querySome } = require('../controllers/sequelize')
router.prefix('/mongoose')

router.get('/create', create)
router.get('/queryAll', queryAll)
module.exports = router