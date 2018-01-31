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
    return db('projects').where({id:projectID}).select('Part_count')
  }

  static updateCount(count, scrap, projectID){
    return db('projects')
    .where({'id':projectID}).returning("*")
    .update({Parts_made:count, scrap_parts:scrap})
  }

  static logProject(id, user_id){
    return db('labor_hours').insert({
      'user_id': user_id,
      'project_id': id
    }).returning("*")
  }

  static logOutProject(id, body){
    console.log(body)
    return db('labor_hours').select("created_at").where({
      user_id:body.user_id,
      project_id:body.project_id,
      hours_worked:null
    }).first()
    .then(result=>{
      console.log(result, 'here');
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
