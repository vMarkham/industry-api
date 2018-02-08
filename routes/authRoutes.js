const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/authCtrl')


router.post('/clockIn', ctrl.clockIn)
router.put('/clockOut', ctrl.checkToken, ctrl.clockOut)
router.get('/clockIn/token', ctrl.verifyToken)







module.exports = router
