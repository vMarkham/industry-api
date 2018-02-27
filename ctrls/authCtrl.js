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

      const emp = result[0]
      const logged = result[1]

      if(logged.clockIn){
        console.log(logged.data, "what shows when already clocked in")
        const token = jwt.sign({id: emp.Employee_id, clockIn:logged.data.Clock_in}, secret, { expiresIn: '20h' })

        console.log(emp, logged, "working Data")
        res.status(200).json(token)
      }
      else{
        console.log(result, "what shows up when not clocked in yet");
        model.clockIn(emp.Employee_id).then(result=>{
          const token = jwt.sign({id: emp.Employee_id, clockIn: new Date()}, secret, { expiresIn: '20h' })
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
    const empID = req.token.id
    console.log(empID, "made it")
    model.clockOut(empID).then(result=>{
      res.status(200).json(result)
    })
  }

  static makeToken(req, res, next){
    console.log(req.clockIn);
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin, clockIn:req.clockIn}, secret, { expiresIn: '20h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.body.headers.token
    jwt.verify(token, secret, (err, decoded)=>{
      if(err)res.status(401).json({message:"Not Authorized"})
      console.log(decoded, "this is token")
      res.status(200).json(decoded)
    })
  }

  static checkToken(req, res, next){

    // need to change to make all on req.headers.makeToken
    const token = req.headers.token||req.body.headers.token
    // console.log(token, req.body.headers)
    jwt.verify(token, secret, (err, decoded)=>{
      // console.log(decoded, "this is token")
      if(err)res.status(401).json({message:"Not Authorized"})
      else{
        req.token = decoded
        next()
      }
    })
  }


}

module.exports = authCtrl
