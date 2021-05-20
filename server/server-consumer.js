const express = require('express');
const app = express();
const mq = require('./utils/mq').mq;

function mountRoutes() {
  app.get('/hello', (req, res) => {
    return res.json({
      status: 'ok',
      message: 'hello, this is producer server'
    })
  });

  const port = process.env.PORT || 5001;
  app.listen(port);
}

async function bootstrap() {
  try {
    await mq.connect();
    console.log('connected to MQ');
    mountRoutes();

    const consumeMessage = require('./routes/generateShortUrl').consumeMessage;
    mq.consumeURL(consumeMessage);
  } catch (e) {
    console.log(e)
  }
}
bootstrap();

