const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/authCtrl')


router.post('/clockIn', ctrl.clockIn)
router.post('/clockOut/:id', ctrl.clockOut)
router.get('/clockIn/token', ctrl.verifyToken)







module.exports = router
