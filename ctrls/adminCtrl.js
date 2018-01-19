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

}



module.exports = adminCtrl
