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
      if(!result){
        console.log(result);
        res.status(404).json({message:"No project with that ID"})
      }else{
        console.log(result);
        return res.status(200).json(result)
      }

    })
  }

  static getProjectsByCustomer(req, res, next){
    const customer = req.params.name
    workerModel.getProjectsByCustomer(customer).then(result=>{
      if(!result){
        res.status(404).json({message:"That customer has not placed an order yet"})
      }else{
        res.status(200).json(result)
      }
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

  static logInProject(req, res, next){
    const id = req.params.id
    const user_id = req.body.user_id
    console.log(user_id);
    workerModel.logProject(id, user_id).then(result=>{
      res.status(200).json(result)
    })
  }

  static getActiveProjects(req, res, next){
    const empID = req.params.empID
    workerModel.activeProjects(empID).then(result=>{
      res.status(200).json(result)
    })
  }



}


module.exports = workerCtrl
