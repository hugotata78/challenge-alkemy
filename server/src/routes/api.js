const { Router } = require('express')
const router = Router()
const userRouter = require('./users/users.router')
const recordRouter = require('./records/record.routes')
const categoryRouter = require('./categories/category.routes')

router.use('/user',userRouter)
router.use('/record',recordRouter)
router.use('/categories',categoryRouter)

module.exports = router