const { Router } = require('express')
const router = Router()
const { createUser, login, logout } = require('../../controller/user.controllers')

router.post('/create', createUser)
router.post('/login', login)
router.delete('/logout', logout)

module.exports = router