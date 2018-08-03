process.env.NODE_ENV = 'test';

let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request('http://localhost:3000')
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/POST user', () => {
    it('it should POST an user', (done) => {
      let user = new User({
          username: "fulanito",
          first_name: "Fulano",
          last_name: "de Tal"
      });
      chai.request('http://localhost:3000')
          .post('/users')
          .send(user)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
            done();
          });
    });

    });

    describe('/GET/:id user', () => {
        it('it should GET a user by the given id', (done) => {
          let user = new User({
            username: "fulanito",
            first_name: "Fulano",
            last_name: "de Tal"
          });
          user.save((err, user) => {
              chai.request('http://localhost:3000')
              .get('/users/' + user._id)
              .send(user)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                done();
              });
          });
  
        });
    });
    
    describe('/PUT/:id user', () => {
        it('it should UPDATE an user given the id', (done) => {
            let user = new User({
                username: "fulanito",
                first_name: "Fulano",
                last_name: "de Tal"
              });
          user.save((err, user) => {
                  chai.request('http://localhost:3000')
                  .put('/users/' + user._id)
                  .send({
                    username: "perengano",
                    first_name: "Perengano",
                    last_name: "de Tal"
                  })
                  .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                    done();
                  });
            });
        });
    });

    describe('/DELETE/:id user', () => {
        it('it should DELETE an user given the id', (done) => {
            let user = new User({
                username: "fulanito",
                first_name: "Fulano",
                last_name: "de Tal"
              });
          user.save((err, user) => {
                 chai.request('http://localhost:3000')
                  .delete('/users/' + user.id)
                  .end((err, res) => {
                      res.should.have.status(204);
                    done();
                  });
            });
        });
    });
});