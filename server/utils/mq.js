const amqp = require('amqplib/callback_api');

class MQ {
  channel;
  shortUrlEx = 'shortUrlEx';
  shortUrlBindingKey = 'shortUrl';

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

  setupExchange() {
    this.channel.assertExchange(this.shortUrlEx, 'direct', {
      durable: true
    });
  }

  async consumeURL(cb) {
    try {
      const q = await this.channel.assertQueue('', {
        exclusive: true
      });
      channel.bindQueue(q.queue, this.shortUrlEx, this.shortUrlBindingKey);
      await this.channel.consume(q.queue, (msg) => cb(msg.content.toString()), {
        noAck: true
      });
    } catch (e) {
      console.log(e)
    }
  }

  addURL(msg) {
    channel.publish(this.channel, this.shortUrlBindingKey, Buffer.from(msg));
    console.log(`[x] MQ Sent ${msg}`);
  }
}

const mq = new MQ();

module.exports = {
  mq
};
