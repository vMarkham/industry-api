db = require('../db/knex')


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

  static updateCount(count, projectID){
    return db('projects')
    .where('id', projectID)
    .update({Part_count:count})
  }

  static logProject(id, user_id){
    return db('labor_hours').insert({
      'user_id': user_id,
      'project_id': id
    })
  }

}



module.exports = workerModel
