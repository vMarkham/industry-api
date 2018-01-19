const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/adminCtrl')

router.get('/getUsers', ctrl.allUsers)
router.get('/getUser', ctrl.getUser)
router.post('/newUser', ctrl.checkNewUser, ctrl.newUser)



module.exports = router
