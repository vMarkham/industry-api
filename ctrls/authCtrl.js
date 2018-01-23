const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
const model = require('../models/authModel')




class authCtrl{

  static checkEmpId(req, res, next){
    console.log(req.body)
    model.checkEmpId(req.body.id).then(response=>{
      if(response.id == req.body.id){
        req.userid=response.id
        model.clockIn(time)
        next()
      }

      else{
        res.status(404).json({message:'Matt said you suck!!! and he doesnt give a shit if you like him'})
      }
    })
  }

  static makeToken(req, res, next){
    const token = jwt.sign({id: req.userid}, secret, { expiresIn: '20h' })
    return token
  }

  static verifyToken(token){
     return jwt.verify(token,secret)
  }
}

module.exports = authCtrl
