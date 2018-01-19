const workerModel = require('../models/workerModel')




class workerCtrl {

  static getAllProjects(req, res, next) {
    workerModel.getAllProjects().then(result=>{
      return res.status(200).send(result)
    })
  }

  static getProjectData(req, res, next){
    const id = req.params.id
    console.log("int",id);
    workerModel.getProjectData(id).then(result=>{
      return res.status(200).send(result)
    })
  }

  static getProjectsByCustomer(req, res, next){
    const customer = req.params.name
    console.log("name", customer);
    workerModel.getProjectsByCustomer(customer).then(result=>{
      res.status(200).send(result)
    })
  }

}


module.exports = workerCtrl
