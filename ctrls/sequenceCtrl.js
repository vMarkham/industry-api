const seqModel = require('../models/sequenceModel')




class seqCtrl {

  static getProjectSequence(req, res, next) {
    const pjID = req.params.projectID

    seqModel.getSequence(pjID).then(result=>{
      return res.status(200).json(result)
    })
  }



module.exports = seqCtrl
