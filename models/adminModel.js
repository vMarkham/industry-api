const db = require('../db/knex')

class adminModel {

  static allUsers(){
    return db.select().table('users')
  }

  static getUser(id){
    return db('users').where({Employee_id:id}).then(result=>result[0])
  }

  static newUser(data){
    return db('users').returning('*').insert(data).then(result=>result[0])
  }

  static clockedIn(){
    return db('clockData').where({Clock_out:null})
  }

  static timeCardsById(id){
    return db('clockData').where({"Employee_id":id})
  }

  static timeCardDates(id, from, to){
    return db('clockData').where({"Employee_id":id}).whereBetween('created_at', [new Date(from), new Date(to)])
  }

  static allTimeCards(from, to){
    return db('clockData').whereBetween('created_at', [new Date(from), new Date(to)])
  }

  static newProject(data){
    return db('projects').insert(data).returning('*').then(result=>result[0])
  }

}



module.exports = adminModel
