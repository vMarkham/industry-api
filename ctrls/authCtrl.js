const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
const model = require('../models/authModel')




class authCtrl{

  static clockIn(req, res, next){
    Promise.all([
      model.checkEmpId(req.body.Employee_id),
      model.checkClock(req.body.Employee_id)
    ])
    .then(result=>{
      console.log(result, "good")
      const emp = result[0]
      const logged = result[1]
      if(logged.clockIn){
        const token = jwt.sign({id: emp.Employee_id, isAdmin:emp.isAdmin, clockIn:logged.data.clockIn}, secret, { expiresIn: '20h' })
        res.status(200).json(token)
      }
      else{
        model.clockIn(emp.Employee_id).then(result=>{
          const token = jwt.sign({id: result.Employee_id, clockIn:result.Clock_in}, secret, { expiresIn: '20h' })
        })
      }

    })
    .catch(err=>{
      res.status(400).json({message:"someting went wrong"})
      console.log(err)
    })
  }



  static checkClockIn(req, res, next){
    model.checkClock(req.body.Employee_id).then(result=>{
      res.status(200).json(result.data)
    })
  }

  static clockOut(req, res, next){
    const empID = req.params.id
    model.clockOut(empID).then(result=>{
      console.log(result)
    })
  }

  static makeToken(req, res, next){
    console.log(req.clockIn);
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin, clockIn:req.clockIn}, secret, { expiresIn: '20h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.headers.token
    jwt.verify(token, secret, (err, decoded)=>{
      if(err)res.status(401).json({message:"Not Authorized"})
      console.log( typeof decoded)
      res.status(200).json(decoded)
    })

  }
}

module.exports = authCtrl
