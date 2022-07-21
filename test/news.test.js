const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const request = require('supertest');

const server = require('../app');
const { User, News } = require("../models");
const httpStatus = require('../helpers/httpStatus');
const { tokenSign } = require("../helpers/tokenManagement");

const expect = chai.expect;
const userTest = {
    name: 'test',
    email: 'user1@test.com',
}
const token = Object.values(tokenSign(userTest));
const adminRole = 1;
const newsTest = {
    name: "lorem ipsum",
    image: "lorem ipsum",
    content: "lorem ipsum",
    description : "lorem ipsum",
    categoryId : 1
}

chai.use(chaiHttp);

describe('Test routes for News', function () {

    describe('GET /news/:id', function () {

        const sandbox = sinon.createSandbox();
        afterEach(() => {
            sinon.restore();
            sandbox.restore();
        });

        it("Get one New from DB", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .get('/news/1')
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.OK);
            
            const news = response.body;

            expect(news).to.be.a('object');

            expect(response.status).to.be.equal(httpStatus.OK);

            expect(news.name).to.be.equal(newsTest.name);

        });

        it("Throws error 401 - UNAUTHORIZED", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            
            const response = await request(server)
                .get('/news/1')
                .expect(httpStatus.UNAUTHORIZED);
            
        })

        it("Throws error 404 - NOT FOUND", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .get('/news')
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.NOT_FOUND);

        })

    });

    describe('PUT /news/:id', function () {
        const sandbox = sinon.createSandbox();
            afterEach(() => {
                sinon.restore();
                sandbox.restore();
            });
        
        it("Update a New in the DB by ID", async function () {

            News.update = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .put('/news/1')
                .send(newsTest)
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.OK);
            
            const news = response.body;

            expect(news).to.be.a('object');
            expect(response.status).to.be.equal(httpStatus.OK);
            
            
        });

        it("Throws error 401 - UNAUTHORIZED", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            const response = await request(server)
                .put('/news/1')
                .expect(httpStatus.UNAUTHORIZED);
            
        })

        it("Throws error 404 - NOT FOUND", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .put('/news')
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.NOT_FOUND);

        })
    });

    describe('DELETE /news/:id', function () {
        const sandbox = sinon.createSandbox();
            afterEach(() => {
                sinon.restore();
                sandbox.restore();
            });
        it("Delete a New in the DB by ID", async function () {
            
            News.destroy = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .delete('/news/1')
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.OK);
            
            const news = response.body;

            expect(response.status).to.be.equal(httpStatus.OK);
            expect(news.message).to.be.a('string');
            
            
            
        });
        it("Throws error 401 - UNAUTHORIZED", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            const response = await request(server)
                .delete('/news/1')
                .expect(httpStatus.UNAUTHORIZED);
            
        })

        it("Throws error 404 - NOT FOUND", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .delete('/news')
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.NOT_FOUND);

        })
    });

    describe('POST /news', function () {

        const sandbox = sinon.createSandbox();
            afterEach(() => {
                sinon.restore();
                sandbox.restore();
            });
        
        it("Create a New in the DB", async function () {
            
            News.create = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            User.findOne = sandbox.stub()
                .returns(Promise.resolve({
                    roleId: adminRole
                }));
            
            const response = await request(server)
                .post('/news')
                .send(newsTest)
                .set("authorization", "Bearer " + token)
                .expect(httpStatus.OK);
            
            const news = response.body;
            
            expect(news).to.be.a('object');
            expect(response.status).to.be.equal(httpStatus.OK);
            
        });
        it("Throws error 401 - UNAUTHORIZED", async function () {

            News.findOne = sandbox.stub()
                .returns(Promise.resolve(newsTest));
            
            const response = await request(server)
                .post('/news')
                .expect(httpStatus.UNAUTHORIZED);
            
        })
    });
});
