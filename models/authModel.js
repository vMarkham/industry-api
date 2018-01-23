db = require('../db/knex')

class authModel {

  static checkEmpId(id){
    return db('users').where({id})
  }

  static clockIn(empID){
    return db('clockData').insert({user_id:empID})
  }

}


module.exports = authModel
