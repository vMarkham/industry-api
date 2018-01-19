const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/adminCtrl')

router.get('/allUsers', ctrl.allUsers)



module.exports = router
