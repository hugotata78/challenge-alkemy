const { Router } = require('express')
const router = Router()
const { createUser, login } = require('../../controller/user.controllers')

router.post('/create',createUser)
router.post('/login',login)

module.exports = router