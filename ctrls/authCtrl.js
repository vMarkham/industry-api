const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
const model = require('../models/authModel')




class authCtrl{

  static checkEmpId(req, res, next){
    // console.log(req.body, 'the body')
    model.checkEmpId(req.body.id).then(response=>{
      if(response.id == req.body.id){
        req.userid = response.id
        req.isAdmin=response.isAdmin
        model.clockIn(req.body.id).then(response=>{
          console.log('clock time',response)
        })
        next()
      }
      else{
        res.status(404).json({message:'There is no Employee with that ID'})
      }
    })
  }

  static makeToken(req, res, next){
    console.log(req.userid, 'Something');
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
