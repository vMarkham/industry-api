db = require('../db/knex')

class authModel {

  static checkEmpId(id){
    return db('users').where({id}).first()
  }

  static clockIn(empID){
    return db('clockData').insert({user_id:empID}).returning('*').then(result => result[0])
  }

}


module.exports = authModel
