const workerModel = require('../models/workerModel')




class workerCtrl {

  static getAllProjects(req, res, next) {
    workerModel.getAllProjects().then(result=>{
      return res.status(200).json(result)
    })
  }

  static getProjectData(req, res, next){
    const id = req.params.id
    workerModel.getProjectData(id).then(result=>{
      return res.status(200).json(result)
    })
  }

  static getProjectsByCustomer(req, res, next){
    const customer = req.params.name
    workerModel.getProjectsByCustomer(customer).then(result=>{
      res.status(200).json(result)
    })
  }

  static getCount(req, res, next){
    const projectID = req.params.id
    workerModel.getCount(projectID).then(result=>{
      res.status(200).json(result)
    })
  }

  static updateCount(req, res, next){
    const count = req.body.count
    workerModel.updateCount(count, projectID).then(result=>{
      res.status(200).json(result)
    })
  }



}


module.exports = workerCtrl
