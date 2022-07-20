const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const request = require('supertest');

const server = require('../app');
const { User } = require("../models");
const httpStatus = require('../helpers/httpStatus');
const {tokenSign} = require("../helpers/tokenManagement");

const expect = chai.expect;
const userTest = {
    name: 'test',
    email:'user1@test.com',
}
const token = Object.values(tokenSign(userTest));

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
                     .returns(Promise.resolve(userTest));
      User.findOne = sandbox.stub()
                     .returns(Promise.resolve({
                         roleId: 1
                     }));
      const response = await request(server)
                             .get('/users')
                             .set("authorization",  "Bearer " + token)
                             .expect(httpStatus.OK);
      const user = response.body;  
      expect(user).to.be.a('object');
      expect(response.status).to.be.equal(httpStatus.OK);      
    });
        
    });

  describe('PATCH /users/:id', function(){
    it("Update user in DB by ID", async function(){
      const sandbox = sinon.createSandbox();
      afterEach(() => {
        sinon.restore();
        sandbox.restore();
      });
        User.update = sandbox.stub()
                       .returns(Promise.resolve([true]));
        User.findOne = sandbox.stub()
                       .returns(Promise.resolve({
                           roleId: 1
                       }));
        const response = await request(server)
                               .patch('/users/1')
                               .set("authorization",  "Bearer " + token)
                               .expect(httpStatus.OK);
        const userCreated = response.body.message;
        expect(userCreated).to.be.equal('User updated');
        expect(response.status).to.be.equal(httpStatus.OK); 
    });
    it("Update user in DB by ID - Not Found Error", async function(){
        const sandbox = sinon.createSandbox();
        afterEach(() => {
          sinon.restore();
          sandbox.restore();
        });
          User.update = sandbox.stub()
                         .returns(Promise.resolve(false));
          User.findOne = sandbox.stub()
                         .returns(Promise.resolve({
                             roleId: 1
                         }));
          const response = await request(server)
                                 .patch('/users/12121')
                                 .set("authorization",  "Bearer " + token)
                                 .expect(httpStatus.NOT_FOUND);
          expect(response.status).to.be.equal(httpStatus.NOT_FOUND); 
      });
  });
  describe('DELETE /users/:id', function(){
    it("Delete user in DB by ID", async function(){
      const sandbox = sinon.createSandbox();
      afterEach(() => {
        sinon.restore();
        sandbox.restore();
      });
        User.destroy = sandbox.stub()
                       .returns(Promise.resolve(true));
        User.findOne = sandbox.stub()
                       .returns(Promise.resolve({
                           roleId: 1
                       }));
        const response = await request(server)
                               .delete('/users/1')
                               .set("authorization",  "Bearer " + token)
                               .expect(httpStatus.OK);
        const userCreated = response.body.message;
        expect(userCreated).to.be.equal('User deleted succesfully');
        expect(response.status).to.be.equal(httpStatus.OK); 
    });
    it("Delete user in DB by ID - Not Found Error", async function(){
        const sandbox = sinon.createSandbox();
        afterEach(() => {
          sinon.restore();
          sandbox.restore();
        });
          User.destroy = sandbox.stub()
                         .returns(Promise.resolve(false));
          User.findOne = sandbox.stub()
                         .returns(Promise.resolve({
                             roleId: 1
                         }));
          const response = await request(server)
                                 .delete('/users/1')
                                 .set("authorization",  "Bearer " + token)
                                 .expect(httpStatus.NOT_FOUND);
          expect(response.status).to.be.equal(httpStatus.NOT_FOUND); 
      });
  });
});

