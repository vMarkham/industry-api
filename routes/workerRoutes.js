const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/workerCtrl')
const auth = require('../ctrls/authCtrl')


router.post('/projects', auth.checkToken, ctrl.getAllProjects)
router.get('/projects/:id',auth.checkToken, ctrl.getProjectData)
router.get('/project/:name', auth.checkToken, ctrl.getProjectsByCustomer)
router.get('/active/projects/:empID',auth.checkToken, ctrl.getActiveProjects)
router.put('/count/update/:id', auth.checkToken, ctrl.updateCount)
router.put('/logout/project/:id', auth.checkToken, ctrl.logOutProject)
router.post('/login/project/:id',auth.checkToken, ctrl.logInProject)


router.get('/count/project/:id', ctrl.getCount)

module.exports = router
