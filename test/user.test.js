const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const request = require('supertest');

const server = require('../app');
const { User } = require("../models");
const httpStatus = require('../helpers/httpStatus');
const expect = chai.expect;

const CheckRoleId = require('../middleware/checkRole');

chai.use(chaiHttp);

describe('Test routes about users', function(){
  describe('GET /users', function(){
    const sandbox = sinon.createSandbox();
      afterEach(() => {
        sinon.restore();
        sandbox.restore();
      });
    it("Get all users of DB", async function(){
      User.findAll = sandbox.stub()
                     .returns(Promise.resolve({
                        name: 'test'
                     }));
      CheckRoleId.isAdmin = sandbox.stub()
                            .returns(Promise.resolve(true));
      const response = await request(server)
                             .get('/users')
                             .set("authorization", "Bearer token.")
                             .expect(200);
      const user = response.body;
      console.log(user)      
      expect(user).to.be.a('object');
      expect(user.name).to.be.equal('test');
      expect(response.status).to.be.equal(httpStatus.UNAUTHORIZED);      
    });
        
    });

  describe('PATCH /users/:id', function(){
    it("Update user in DB", async function(){
      const sandbox = sinon.createSandbox();
      afterEach(() => {
        sinon.restore();
        sandbox.restore();
      });
        User.findOne = sandbox.stub()
                       .returns(Promise.resolve(true));
        User.update = sandbox.stub()
                       .returns(Promise.resolve(true));
        CheckRoleId.isAdmin = sandbox.stub()
                              .returns(Promise.resolve(true));
        const response = await request(server)
                               .patch('/users/1')
                               .expect(httpStatus.OK);
        const userCreated = response.body.message;
        console.log(userCreated)
        expect(userCreated).to.be.equal('User updated');
        expect(response.status).to.be.equal(httpStatus.OK); 
    });
    it("Update user in DB - Error", async function(){
        const sandbox = sinon.createSandbox();
        afterEach(() => {
          sinon.restore();
          sandbox.restore();
        });
          User.findOne = sandbox.stub()
                         .returns(Promise.resolve(false));
          User.update = sandbox.stub()
                         .returns(Promise.resolve(true));
          CheckRoleId.isAdmin = sandbox.stub()
                                .returns(Promise.resolve(true));
          const response = await request(server)
                                 .patch('/users/1')
                                 .expect(404);
          expect(response.status).to.be.equal(httpStatus.NOT_FOUND); 
      });
  });
  describe('DELETE /users/:id', function(){
    it("Delete user in DB", async function(){
      const sandbox = sinon.createSandbox();
      afterEach(() => {
        sinon.restore();
        sandbox.restore();
      });
        User.destroy = sandbox.stub()
                       .returns(Promise.resolve(true));
        CheckRoleId.isAdmin = sandbox.stub()
                              .returns(Promise.resolve(true));
        const response = await request(server)
                               .delete('/users/1')
                               .expect(200);
        const userCreated = response.body.message;
        expect(userCreated).to.be.equal('User deleted succesfully');
        expect(response.status).to.be.equal(httpStatus.OK); 
    });
    it("Delete user in DB - Error", async function(){
        const sandbox = sinon.createSandbox();
        afterEach(() => {
          sinon.restore();
          sandbox.restore();
        });
          User.destroy = sandbox.stub()
                         .returns(Promise.resolve(false));
          CheckRoleId.isAdmin = sandbox.stub()
                                .returns(Promise.resolve());
          const response = await request(server)
                                 .delete('/users/1')
                                 .expect(404);
          expect(response.status).to.be.equal(httpStatus.NOT_FOUND); 
      });
  });
});

