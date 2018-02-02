const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
const model = require('../models/authModel')




class authCtrl{

  static checkEmpId(req, res, next){
    model.checkEmpId(req.body.id).then(response=>{
      if (!response ) {
        res.status(404).json({message:'Invalid Employee ID'})
      }else{
        req.userid = response.Employee_id
        req.isAdmin= response.isAdmin
        model.checkClock(req.userid).then(result=>{
          if(result){ next() }
          else{
            model.clockIn(req.body.id).then(response=>{
              next()
            })
          }
        })
      }
    })
  }

  static clockOut(req, res, next){
    const empID = req.params.id
    model.clockOut(empID).then(result=>{
      console.log(result)
    })
  }

  static makeToken(req, res, next){
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin}, secret, { expiresIn: '20h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.headers.token
    const decoded = jwt.verify(token, secret, (err, decoded)=>{
      if(err)res.status(401).json({message:"Not Authorized"})
    })
    console.log( typeof decoded)
    res.status(200).json(decoded)
  }
}

module.exports = authCtrl
