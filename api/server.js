const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('./routes/userRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', userRouter)

module.exports = server;