const express = require('express');
const app = express();
const mq = require('./utils/mq').mq;
const cors = require('cors');

function mountRoutes() {
  app.use(cors({
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

  app.get('/hello', (req, res) => {
    return res.json({
      status: 'ok',
      message: 'hello, this is producer server'
    })
  });

  app.use('/addUrl', require('./routes/addURLToQueue').router);

  const port = process.env.PORT || 5000;
  app.listen(port);
}

async function bootstrap() {
  try {
    await mq.connect();
    console.log('connected to MQ');
    mountRoutes();
  } catch (e) {
    console.log(e)
  }
}
bootstrap();

