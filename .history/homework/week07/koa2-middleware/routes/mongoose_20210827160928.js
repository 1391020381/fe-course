const router = require('koa-router')()
const { create, queryAll, deleteSome, updateSome } = require('../controllers/mongoose')
router.prefix('/mongoose')

router.get('/create', create)
router.get('/queryAll', queryAll)
router.get('/deleteSome', deleteSome)
router.get('/updateSome', updateSome)
module.exports = router