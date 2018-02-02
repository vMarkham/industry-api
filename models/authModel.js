db = require('../db/knex')

class authModel {

  static checkEmpId(id){
    return db('users').where({Employee_id:id}).first()
  }

  static clockIn(empID){
    return db('clockData').insert({Employee_id:empID}).returning('*').then(result => result[0])
  }

  static checkClock(empID){
    return db('clockData').where({Employee_id:empID, Clock_out:null})
    .then(result=>{
      console.log(result, 'clock model')
      if(result.length<1){
        return false
      }
      else{return true}
    })
  }

  static clockOut(empID){
    return db('clockData').where({Employee_id:empID, Clock_out:null}).update({Clock_out:new Date()}).returning('*').then(result=>console.log(result))
  }

}


module.exports = authModel
