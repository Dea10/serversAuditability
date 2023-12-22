const amqp = require('amqplib/callback_api');
const { addServerService } = require("../src/services/Server.services");

class RMQ {
    constructor() {
        this.host = 'amqp://localhost';
        this.queue = 'hello';
    }

    listen() {
        amqp.connect(this.host, function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }

                channel.assertQueue('hello', {
                    durable: false
                });

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", 'hello');

                channel.consume('hello', function (msg) {
                    console.log(" [x] Received %s", msg.content.toString());
                    addServerService(JSON.parse(msg.content));
                }, {
                    noAck: true
                });
            });
        });
    }
}

module.exports = RMQ;