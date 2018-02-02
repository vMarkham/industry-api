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
        // console.log(result);
        res.status(404).json({message:"No project with that ID"})
      }else{
        // console.log(result)
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
    const countToAdd = parseInt(req.body.count)
    const scrapToAdd = parseInt(req.body.scrap)
    const project_id = req.params.id
    workerModel.getCount(project_id).then(data=>{
      const oldCount = data.Parts_made
      const oldScrap = data.scrap_parts

      console.log(typeof scrapToAdd, typeof oldScrap)
      console.log(countToAdd+oldCount)

      const newTotal = countToAdd+oldCount
      const newScrapTotal = scrapToAdd+oldScrap

      workerModel.updateCount(newTotal, newScrapTotal, project_id).then(result=>{
        console.log(result)
        res.status(200).json(result)
      })
    })
  }


  static logInProject(req, res, next){
    const id = req.params.id
    const Employee_id = req.body.Employee_id

    workerModel.activeProjects(Employee_id).then(result=>{
      console.log(result)
      const check = result.filter(jobs=>jobs.project_id==id)
      check.length ? res.status(200).json({message:"already logged into that one"}) : workerModel.logProject(id, Employee_id).then(result=>{
        workerModel.activeProjects(Employee_id).then(data=>{
          res.status(200).json(data)
        })
      })
    })
  }

  static logOutProject(req, res, next){
    const project_id = req.params.id
    const body = req.body
    workerModel.updateProjectLabor(body).then(result=>{
      workerModel.logOutProject(body).then(result=>{
        res.status(200).json(result)
      })
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
