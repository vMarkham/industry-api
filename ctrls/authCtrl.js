const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
const model = require('../models/authModel')




class authCtrl{

  static checkEmpId(req, res, next){
    // console.log(req.body, 'the body')
    model.checkEmpId(req.body.id).then(response=>{
      if (!response ) {
        res.status(404).json({message:'Invalid Employee ID'})
      }else{
        console.log(response);
        req.userid = response.Employee_id
        req.isAdmin= response.isAdmin
        model.checkClock(req.userid).then(result=>{
          if(result){ next() }
          else{
            model.clockIn(req.body.id).then(response=>{
              console.log('clock time',response)
              next()
            })
          }
        })
      }
    })
  }

  static clockOut(req, res, next){
    const empID = req.params.id
    console.log('hit route', empID)
    model.clockOut(empID).then(result=>{
      console.log(result)
    })
  }

  static makeToken(req, res, next){
    // console.log(req.userid, 'Something');
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin}, secret, { expiresIn: '20h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.headers.token
    //console.log(token)
    const decoded = jwt.verify(token, secret)
    console.log("this token is", decoded);
    res.status(200).json(decoded)
  }
}

module.exports = authCtrl
