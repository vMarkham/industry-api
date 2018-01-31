const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/workerCtrl')


router.get('/projects', ctrl.getAllProjects)
router.get('/projects/:id', ctrl.getProjectData)
router.get('/project/:name', ctrl.getProjectsByCustomer)
router.get('/active/projects/:empID', ctrl.getActiveProjects)
router.get('/count/project/:id', ctrl.getCount)
router.put('/count/update/:id', ctrl.updateCount)
router.put('/logout/project/:id', ctrl.logOutProject)
router.post('/login/project/:id', ctrl.logInProject)


module.exports = router
