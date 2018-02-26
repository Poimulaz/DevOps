/**
 * Created by Pierre on 26/02/2018.
 */
'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const should = chai.should();
var mongoose = require('mongoose');
var User = mongoose.model('User');

chai.use(chaiHttp);

describe('GET /users ', function(_){
    it('should list all users on /users GET', function(done){
        chai.request(server)
            .get('/users')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('POST /users ', function(_){

    it('it should NOT POST a user',function(done){
        const user = {

        };

        chai.request(server)
            .post('/users')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                /*res.body.should.be.a('object');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('surname');
                res.body.user.should.have.property('birthday');
                res.body.user.should.have.property('statusRole');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');*/
                done();
            });
    });

    it('it should POST a user',function(done){
        const user = {
            name: "Bob",
            surname: "Bobby",
            birthday: "20/10/1995",
            statusRole: 1,
            email: "bhbkfidjzdfb",
            password: "vdjlfrdsdf"
        };

        chai.request(server)
            .post('/users')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('surname');
                res.body.user.should.have.property('birthday');
                res.body.user.should.have.property('statusRole');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');
                done();
            });
    });

    it('it should NOT POST a user',function(done){
        const user = {
            name: "Bob",
            surname: "Bobby",
            birthday: "20/10/1995",
            statusRole: 1,
            email: "bhbkfidjzdfb",
            password: "vdjlfrdsdf"
        };

        chai.request(server)
            .post('/users')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                /*res.body.should.be.a('object');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('surname');
                res.body.user.should.have.property('birthday');
                res.body.user.should.have.property('statusRole');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');*/
                done();
            });
    });
});

describe('UPDATE /users ', function(_){

    it('it should NOT UPDATE a user',function(done){
        const user = {};

        chai.request(server)
            .post('/users/:id/update')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                /*res.body.should.be.a('object');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('surname');
                res.body.user.should.have.property('birthday');
                res.body.user.should.have.property('statusRole');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');*/
                done();
            });
    });

    it('it should UPDATE a user',function(done){
        const user = {
            surname: "Bibby",
            email: "gfuiodja"
        };

        chai.request(server)
            .post('/users/:id/update')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('surname');
                res.body.user.should.have.property('birthday');
                res.body.user.should.have.property('statusRole');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');
                db.findOne({id: req.body.id}, function(err, res){});
                done();
            });
    });
});

describe('DELETE /users ', function(_){

    it('it should NOT DELETE a user',function(done){
        const user = {
            id_user: 1
        };

        chai.request(server)
            .post('/users/:id/update')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                /*res.body.user.should.have.property('id_user');
                !db.findOne({ id: id }).statusRole.should.equal(1);
                db.findOne({id: req.body.id_user}, function(err, res){});*/
                done();
            });
    });

    it('it should DELETE a user',function(done){
        const user = {
            id_user: 1
        };

        chai.request(server)
            .post('/users/:id/update')
            .send(user)
            .end(function(err, res){
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                res.body.user.should.have.property('id_user');
                db.findOne({ id: id }).statusRole.should.equal(1);
                !db.findOne({id: req.body.id_user}, function(err, res){});
                done();
            });
    });
});