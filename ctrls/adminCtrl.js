const model = require('../models/adminModel')


class adminCtrl {

  static allUsers(req, res, next){
    model.allUsers().then(result=>{
      res.status(200).send(result)
    })
  }

  static getUser(req, res, next){
    model.getUser().then(result=>{
      res.status(200).send(result)
    })
  }

  static newUser(req, res, next){
    const user = req.body.user
    model.newUser(user).then(result=>{
      res.status(200).send(result)
    })
  }


  ////////////////// verify incoming data ////////////////

  static checkNewUser(req, res, next){
    if(!name)res.status(400).send({message:'Missing a Name'})
    if(!Employee_id)res.status(400).send({message:'Missing Employee id, this will be used to log in'})
    else{
      next()
    }
  }


}



module.exports = adminCtrl
