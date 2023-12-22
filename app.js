require('dotenv').config();

const Server = require('./config/server');
const RMQ = require('./config/rmq');

const server = new Server();
const rmq = new RMQ();

server.listen();
rmq.listen();