const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/workerCtrl')


router.get('/projects', ctrl.getAllProjects)
router.get('/projects/:id', ctrl.getProjectData)
router.get('/project/:name', ctrl.getProjectsByCustomer)





module.exports = router
