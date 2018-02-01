db = require('../db/knex')
moment = require('moment')


class workerModel {

  static getAllProjects(){
    return db.select().table('projects')
  }

  static getProjectData(id){
    return db('projects').where({id}).then(result=>result[0])
  }

  static getProjectsByCustomer(customer){
    return db('projects').where({customer})
  }

  static getCount(projectID){
    return db('projects').where({id:projectID}).select('Parts_made', 'scrap_parts').then(result=>result[0])
  }

  static updateCount(count, scrap, projectID){
    return db('projects')
    .where({'id':projectID}).returning("*")
    .update({Parts_made:count, scrap_parts:scrap})
  }

  static updateProjectLabor(body){
    return db('labor_hours')
    .select({startTime:'labor_hours.created_at', project_id:'project_id', timeSoFar:'labor_hours'})
    .innerJoin('projects', 'projects.id', 'labor_hours.project_id')
    .where({
      user_id:body.user_id,
      project_id:body.project_id,
      hours_worked:null
    }).first()
    .then(result=>{
      return db('projects')
      .where({id: result.project_id})
      .returning('*')
      .update({
        labor_hours:moment(new Date()).diff(moment(result.startTime))+result.timeSoFar
      })
    })

  }

  static logProject(id, user_id){
    return db('labor_hours').insert({
      'user_id': user_id,
      'project_id': id
    }).returning("*")
  }

  static logOutProject(body){
    console.log(body)
    return db('labor_hours').select("created_at").where({
      user_id:body.user_id,
      project_id:body.project_id,
      hours_worked:null
    }).first()
    .then(result=>{
      return db('labor_hours')
      .where({
        user_id:body.user_id,
        project_id:body.project_id,
        hours_worked:null
      }).returning("*")
      .update({
        hours_worked:moment(new Date()).diff(moment(result.created_at)),
        Parts_made:body.count,
        Non_Conforming_Parts:body.scrap
      }).then(result=>result[0])
    })


  }

  static activeProjects(empID){
    return db('labor_hours').innerJoin('projects', 'labor_hours.project_id', '=', 'projects.id').where({
      'user_id':empID,
      "hours_worked":null
    })
  }

}



module.exports = workerModel
