process.env.NODE_ENV = 'test';

let Task = require('../models/task');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Tasks', () => {
    beforeEach((done) => { //Before each test we empty the database
        Task.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET tasks', () => {
      it('it should GET all the tasks', (done) => {
        chai.request('http://localhost:3000')
            .get('/tasks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/POST task', () => {
    it('it should POST an task', (done) => {
      let task = new Task({
          title: "Create an API REST",
          description: "Create an API REST with NodeJS and Express",
      });
      chai.request('http://localhost:3000')
          .post('/tasks')
          .send(task)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
            done();
          });
    });

    });

    describe('/GET/:id task', () => {
        it('it should GET a task by the given id', (done) => {
          let task = new Task({
            title: "Create an API REST",
            description: "Create an API REST with NodeJS and Express"
          });
          task.save((err, task) => {
              chai.request('http://localhost:3000')
              .get('/tasks/' + task._id)
              .send(task)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                done();
              });
          });
  
        });
    });
    
    describe('/PUT/:id task', () => {
        it('it should UPDATE an task given the id', (done) => {
            let task = new Task({
                title: "Create an API REST",
                description: "Create an API REST with NodeJS and Express"
              });
          task.save((err, task) => {
                  chai.request('http://localhost:3000')
                  .put('/tasks/' + task._id)
                  .send({
                    title: "Create a frontend web",
                    description: "Create an web frontend with Angular"
                  })
                  .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                    done();
                  });
            });
        });
    });

    describe('/DELETE/:id task', () => {
        it('it should DELETE an task given the id', (done) => {
            let task = new Task({
                title: "Create an API REST",
                description: "Create an API REST with NodeJS and Express"
              });
          task.save((err, task) => {
                 chai.request('http://localhost:3000')
                  .delete('/tasks/' + task.id)
                  .end((err, res) => {
                      res.should.have.status(204);
                    done();
                  });
            });
        });
    });
});