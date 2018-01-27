const db = require('../db/knex')

class adminModel {

  static allUsers(){
    return db.select().table('users')
  }

  static getUser(id){
    return db('users').where({id}).then(result=>result[0])
  }

  static newUser(data){
    return db('users').insert(data, data)
  }

  static clockedIn(){
    return db('clockData').where({Clock_out:null})
  }

}



module.exports = adminModel
