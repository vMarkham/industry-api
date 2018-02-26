const model = require('../models/adminModel')
const bcrypt = require('bcryptjs')
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const moment = require('moment')

class adminCtrl {

  static checkPass(req, res, next){
    const id = req.body.headers.userid
    const pass = req.body.headers.pass
    model.getUser(id).then(result=>{
      req.isAdmin = result.isAdmin
      req.userid = result.id
      bcrypt.compare(pass, result.hashPass).then(result=>{
        result ? next() : res.status(401).json({message: "wrong password"})
      })
    })
  }

  static allUsers(req, res, next){
    model.allUsers().then(result=>{
      res.status(200).json(result)
    })
  }

  static getUser(req, res, next){
    const id = req.params.id
    model.getUser(id).then(result=>{
      res.status(200).json(result)
    })
  }

  static newUser(req, res, next){
    const user = req.body.user
    model.getUser(user.Employee_id).then(result=>{
      !result ? model.newUser(user).then(result=>{ res.status(200).json(result)}) : res.status(409).json({message:"Employee ID already taken"})
    })
  }

  static clockedIn(req, res, next){
    model.clockedIn().then(result=>{
      if(!result.length){
        res.status(201).json({message:"Everyone is Clocked out"})
      }
      else{
        result.forEach(data=>{
          data.Clock_in = moment(data.Clock_in).format('L LTS')
        })
        res.status(201).json({data:result})
      }
    })
  }

  static getAllTimeById(req, res, next){
    const id = req.params.id
    model.timeCardsById(id).then(result=>{
      result.length ? res.status(200).json({result}) : res.status(200).json({message:"No records found"})
    })
  }

  static getPayPeriod(req, res, next){
    const id= req.params.id
    const to = req.body.to
    const from = req.body.from

    model.timeCardDates(id, from, to).then(result=>{
      res.status(200).json({result})
    })
  }

  static getAllPayPeriod(req, res, next){
    const to = req.body.to
    const from = req.body.from
    model.allTimeCards(from, to).then(result=>{
      console.log(result, "made it back")
      res.status(200).json(result)
    })
  }

  static newProject(req, res, next){
    const project = req.body.project
    model.newProject(project).then(result=>{
      res.status(200).json(result)
    })
  }


  ////////////////// verify incoming data ////////////////

  static checkNewUser(req, res, next){
    const name = req.body.user.name
    const Employee_id = req.body.user.Employee_id
    const admin = req.body.user.isAdmin
    const pass = req.body.user.hassPass
    if(!name)res.status(400).send({message:'Missing a Name'})
    if(!Employee_id)res.status(400).json({message:'Missing Employee id, this will be used to log in'})
    if(admin && !pass)res.status(400).json({message:"An Admin must have a Password"})
    else{
      next()
    }
  }

  static checkNewProject(req, res, next){
    const project = req.body.project
    console.log(project);
    if (project.customer.length<1) res.status(400).json({message:"Must Enter a customer name"})

    else if (project.Part_No < 1) res.status(400).json({message:"What part number are we making"})

    else if (project.Part_count < 5) res.status(400).json({message:"Must have at least 5 parts to make an order"})

    else{next()}
  }

  static makeToken(req, res, next){
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin}, secret, { expiresIn: '10h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.headers.token
    const decoded = jwt.verify(token, secret)
    res.status(200).json(decoded)
  }
}



module.exports = adminCtrl
