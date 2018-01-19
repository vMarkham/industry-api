db = require('../db/knex')


class workerModel {

  static getAllProjects(){
    return db.select().table('projects')
  }

  static getProjectData(id){
    return db('projects').where({id})
  }

  static getProjectsByCustomer(customer){
    console.log(customer);
    return db('projects').where({customer})
  }
}



module.exports = workerModel
