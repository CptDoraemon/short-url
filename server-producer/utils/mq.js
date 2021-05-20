const amqp = require('amqplib/callback_api');

class MQ {
  channel;
  shortUrlQueue = 'shortUrl';

  connect() {
    return new Promise((resolve, reject) => {
      amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) {
          reject(error0)
        }
        connection.createChannel((error1, channel) => {
          if (error1) {
            reject(error1)
          }
          this.channel = channel;
          resolve();
        });
      });
    })
  }

  addURL(msg) {
    this.channel.assertQueue(this.shortUrlQueue, {
      durable: false
    });

    this.channel.sendToQueue(this.shortUrlQueue, Buffer.from(msg));
    console.log(`[x] MQ Sent ${msg}`);
  }
}

const mq = new MQ();

module.exports = {
  mq
};
