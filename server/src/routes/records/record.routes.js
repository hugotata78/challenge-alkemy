const { Router } = require('express')
const router = Router()
const Auth = require('../../auth/auth')
const { createRecord, getRecords, updateRecord, deleteRecord } = require('../../controller/record.controllers')

router.get('/:userId',Auth,getRecords)
router.post('/create/:userId',Auth,createRecord)
router.put('/update/:id',Auth,updateRecord)
router.delete('/delete/:id',Auth,deleteRecord)

module.exports = router