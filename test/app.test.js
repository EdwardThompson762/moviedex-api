const {expect} = require('chai');
const supertest = require('supertest');
const app = require('./../app')

supertest(app)

describe('Get /movie' , () => {
    it('should return a movie ', () => {
        return supertest(app)
            .get('./movie')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
            })

    })
})