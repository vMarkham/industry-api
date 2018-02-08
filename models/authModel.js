db = require('../db/knex')

class authModel {

  static checkEmpId(id){
    return db('users').where({Employee_id:id}).first()
  }

  static clockIn(empID){
    return db('clock_data').insert({Employee_id:empID}).returning('*').then(result => result[0])
  }

  static checkClock(empID){
    return db('clock_data').where({Employee_id:empID, Clock_out:null})
    .then(result=>{
      if(result.length<1){
        const res = {
          clockIn:false,
          data:result
        }
        return res
      }
      else{
        const res = {
          clockIn:true,
          data:result[0]
        }
        return res
      }
    })
  }

  static clockOut(empID){
    return db('clock_data').where({Employee_id:empID, Clock_out:null}).update({Clock_out:new Date()}).returning('*').then(result=>console.log(result))
  }

}


module.exports = authModel
