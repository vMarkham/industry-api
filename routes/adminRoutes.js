const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/adminCtrl')




router.get('/getUsers', ctrl.allUsers)
router.get('/getUser/:id', ctrl.getUser)
router.post('/login', ctrl.checkPass, ctrl.makeToken )
router.post('/newUser', ctrl.checkNewUser, ctrl.newUser)
router.get('/clocked/in', ctrl.clockedIn)
router.get('/clock/records/:id', ctrl.getAllTimeById)
router.post('/clock/timeperiod/all', ctrl.getAllPayPeriod)
router.post('/clock/timeperiod/:id', ctrl.getPayPeriod)

router.post('/addProject', ctrl.checkNewProject, ctrl.newProject)



module.exports = router
