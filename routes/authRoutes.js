const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/authCtrl')

router.post('/clockIn', ctrl.checkEmpId, ctrl.makeToken)
router.get('/clockIn/token', ctrl.verifyToken)


module.exports = router
