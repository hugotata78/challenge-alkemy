const { Router } = require('express')
const router = Router()
const userRouter = require('./users/users.router')
const recordRouter = require('./records/record.routes')

router.use('/user',userRouter)
router.use('/record',recordRouter)


module.exports = router