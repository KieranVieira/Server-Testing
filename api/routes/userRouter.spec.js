const request = require('supertest');
const server = require('../server.js');

const db = require('../../database/dbConfig.js')

describe('User Router', () => {
    afterEach(async () => {
        await db('hobbits').truncate()
    })
    describe('Post /api/users', () => {
        it('Should insert user to database', async() => {
            const res = await request(server).post('/').send({
                username: 'kieran', 
                password: 'pass' 
            });

            expect(res.body).toBe({ id: 1 })
        });
    });
    describe('Delete /api/users/:id', () => {
        
    });
});