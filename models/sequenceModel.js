db = require('../db/knex')
moment = require('moment')

class sequenceModel {

static getSequence(projectID) {
  return db('sequences')
  .where({project_id: projectID})
  
}

}

module.exports = sequenceModel
