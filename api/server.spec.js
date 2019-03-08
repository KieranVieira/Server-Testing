const request = require('supertest');
const server = require('./server.js');

describe('Get /', () => {
    it('Should return status 200 on get request', async() => {
        const res = await request(server).get('/api/users')

        expect(res.status).toBe(200)
    });
});