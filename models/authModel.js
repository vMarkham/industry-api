db = require('../db/knex')

class authModel {

  static checkEmpId(id){
    return db('users').where({id}).first()
  }

  static clockIn(empID){
    return db('clockData').insert({user_id:empID}).returning('*').then(result => result[0])
  }

  static checkClock(empID){
    db('clockData').where({user_id:empID, Clock_out:null}).then(result=>
    console.log(result))
  }

  static clockOut(empID){
    db('clockData').where({user_id:empID, Clock_out:null}).update({Clock_out:new Date()}, returning)
  }

}


module.exports = authModel
