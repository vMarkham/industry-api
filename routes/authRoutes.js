const express = require('express')
const router = express.Router()
const ctrl = require('../ctrls/authCtrl')

router.post("/somepath", ctrl.checkEmpId, ctrl.makeToken)
