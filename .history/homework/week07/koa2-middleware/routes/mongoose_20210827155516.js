const router = require('koa-router')()
const { create, queryAll } = require('../controllers/mongoose')
router.prefix('/mongoose')

router.get('/create', create)
router.get('/queryAll', queryAll)
module.exports = router