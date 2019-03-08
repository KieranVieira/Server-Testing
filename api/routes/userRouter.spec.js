const request = require('supertest');
const server = require('../server.js');

const db = require('../../database/dbConfig.js')

describe('User Router', () => {
    describe('Post /api/users', () => {
        afterEach(async () => {
            await db('users').truncate()
        })

        it('Should insert user to database', async() => {
            const res = await request(server).post('/api/users').send({
                username: 'kieran', 
                password: 'pass' 
            });

            expect(res.body).toEqual([1])
        });

        it('Should return JSON', async() => {
            const res = await request(server).post('/api/users').send({
                username: 'test', 
                password: 'pass' 
            });

            expect(res.type).toBe('application/json')
        });
    });
    describe('Delete /api/users/:id', () => {
        it('Should add user then remove user', async() => {
            await request(server).post('/api/users').send({
                username: 'kieran', 
                password: 'pass' 
            });

            const res = await request(server).del('/api/users/1')

            expect(res.status).toBe(204);
        });
    });
});