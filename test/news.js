const chai = require('chai');
const chaiHttp = require('chai-http');
const res = require('express/lib/response');
const server = require('../app');
const httpStatus = require("../helpers/httpStatus");

chai.should();

chai.use(chaiHttp);

describe('ONG server API', ()=>{

    //TEST GET BY ID

    describe('GET /news/:id', ()=>{
        const id = 1;

        it('Get an element of the DB of news', (done)=>{
            chai.request(server)
            .get('/news/' + id)
            .set("authorization", "Bearer token.")
            .end((err,res)=>{
                res.should.have.status(httpStatus.OK);
                res.body.should.be.a('object');
            done();
            })
        })

        it('Throw an error 401', (done)=>{
            chai.request(server)
            .get('/news/' + id)
            .end((err,res)=>{
                res.should.have.status(httpStatus.UNAUTHORIZED);
            done();
            })
        })

    })

    //TEST POST

    describe('POST /news', ()=>{

        it('Insert a new in the DB', (done)=>{
            const element =  {
                name: "Name from test",
                content: "Content from test",
                image: "Image URL from test",
                description: "Description from test",
                categoryId: 1
            }
            chai.request(server)
                .post('/news')
                .set("authorization", "Bearer token.")
                .send(element)
                .end((err,res)=>{
                    res.should.have.status(httpStatus.OK);
                    res.body.should.be.a('object');
                done();
                })
        })

        it('Throw an error 400', (done)=>{
            const element =  {
                random_property : "Lorem ipsum"
            }
            chai.request(server)
                .post('/news')
                .set("authorization", "Bearer token.")
                .send(element)
                .end((err,res)=>{
                    res.should.have.status(httpStatus.BAD_REQUEST);
                done();
                })
        })

        it('Throw an error 401', (done)=>{
            chai.request(server)
            .post('/news')
            .end((err,res)=>{
                res.should.have.status(httpStatus.UNAUTHORIZED);
            done();
            })
        })
    })

    //TEST PUT

    describe('PUT /news/:id', ()=>{
        const id = 1;

        it('Change an element from the DB', (done)=>{
            const element =  {
                name: "New name from test",
                content: "New Content from test",
                image: "New Image URL from test",
                categoryId: 1
            };
            chai.request(server)
            .put('/news/' + id)
            .set("authorization", "Bearer token.")
            .send(element)
            .end((err,res)=>{
                res.should.have.status(httpStatus.OK);
                res.body.should.be.a('object');
            done();
            })
        })

        it('Throw an error 404', (done)=>{
            
            const element =  {
                name: "New name from test",
                content: "New Content from test",
                image: "New Image URL from test",
                categoryId: 1
            }
            chai.request(server)
                .put('/news/' + 10000)
                .set("authorization", "Bearer token.")
                .send(element)
                .end((err,res)=>{
                    res.should.have.status(httpStatus.NOT_FOUND);
                done();
                })
        })

        it('Throw an error 400', (done)=>{

            const element =  {
                name: "Not completed body",
                categoryId: 1
            }
            chai.request(server)
                .put('/news/' + id)
                .set("authorization", "Bearer token.")
                .send(element)
                .end((err,res)=>{
                    res.should.have.status(httpStatus.BAD_REQUEST);
                done();
                })
        })

        it('Throw an error 401', (done)=>{
            chai.request(server)
            .put('/news/' + id)
            .end((err,res)=>{
                res.should.have.status(httpStatus.UNAUTHORIZED);
            done();
            })
        })
    })

    //TEST DELETE

    describe('DELETE /news/:id', ()=>{
        const id = 1;

        it('Delete a new from the DB', (done)=>{
            chai.request(server)
            .delete('/news/' + id)
            .set("authorization", "Bearer token.")
            .end((err,res)=>{
                res.should.have.status(httpStatus.OK);
            done();
            })
        })

        it('Throw an error 404', (done)=>{
            chai.request(server)
            .delete('/news/' + 10000)
            .end((err,res)=>{
                res.should.have.status(httpStatus.NOT_FOUND);
            done();
            })
        })

        it('Throw an error 401', (done)=>{
            chai.request(server)
            .delete('/news/' + id)
            .end((err,res)=>{
                res.should.have.status(httpStatus.UNAUTHORIZED);
            done();
            })
        })
    })

})