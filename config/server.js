const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.telemetryPath = '/telemetry';

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.telemetryPath, require('../src/routes/telemetry.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in ', this.port);
        })
    }
}

module.exports = Server;