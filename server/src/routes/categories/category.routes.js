const { Router } = require('express')
const router = Router()
const { createCategories, getCategories } = require('../../controller/category.controller')

router.get('/', getCategories)
router.post('/',createCategories)

module.exports = router