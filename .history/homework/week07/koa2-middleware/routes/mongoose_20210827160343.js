const router = require('koa-router')()
const { create, queryAll, deleteSome } = require('../controllers/mongoose')
router.prefix('/mongoose')

router.get('/create', create)
router.get('/queryAll', queryAll)
router.get('/deleteSome', deleteSome)
module.exports = router