const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/adminCtrl')
const auth = require('../ctrls/authCtrl')




router.get('/getUsers', ctrl.allUsers)
router.get('/getUser/:id', ctrl.getUser)
router.post('/login', ctrl.checkPass, ctrl.makeToken )
router.post('/newUser', auth.checkToken, ctrl.checkNewUser, ctrl.newUser)
router.get('/clocked/in', auth.checkToken, ctrl.clockedIn)
router.get('/clock/records/:id', auth.checkToken, ctrl.getAllTimeById)
router.post('/clock/timeperiod/all', auth.checkToken, ctrl.getAllPayPeriod)
router.post('/clock/timeperiod/one/:id', auth.checkToken, ctrl.getPayPeriod)
router.post('/addProject', ctrl.checkNewProject, ctrl.newProject)



module.exports = router
