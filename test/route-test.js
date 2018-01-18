const request = require('supertest')
const expect = require('chai').expect
const app = require('../server.js')

///// refer to supertest docs and chai docs





function reSeed(){
  'will reseed 1 table in db'
}

describe ('admin CRUD routes for users', function( ) {
  // run beforeEach(reseed function)
  describe('GET /users', function( ) {
    it('Returns all users', function( ){
      return request(app)
        .get('/users')
        // use set to send headers one header per set
        // eg set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response=>{
          expect(response.body.users).to.be.an('array')
          expect(response.body.users.length).to.equal(5)
          expect(response.body.users[0]).to.haveOwnProperty('id')
          expect(response.body.users[0].id).to.equal(1)
          expect(response.body.users[0]).to.haveOwnProperty('name')
        })
    })
  })
  //check for 1 users
  describe('GET /users/:id', function () {
    it('returns a user by id', function () {
      return request(app)
      .get('/users/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response=>{
        expect(response.body.users).to.be.an('object')
        expect(response.body.users).to.haveOwnProperty('id')
        expect(response.body.users.id).to.equal(1)
      })
    })
  })

  //post a new users
  describe('POST /users', function(){
    it('adds a user to the database', function(){
      return request(app)
      .post('/users')
      .send({name:'TEST Master Matt'})
      .expect('Content-Type', /json/)
      .expect(201)
      .then(response=>{
        expect(response.body.users).to.be.an('object')
        expect(response.body.users).to.haveOwnProperty('id')
        expect(response.body.users.id).to.equal(6)
        expect(response.body.users).to.haveOwnProperty('name')
        expect(response.body.users.name).to.equal('TEST Master Matt')
      })
    })
  } )


})
