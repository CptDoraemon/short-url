const express = require('express');
const app = express();

app.use('/addURL', require('./addURLToQueue').router);

app.get('/hello', (req, res) => {
  return res.json({
    status: 'ok',
    message: 'hello'
  })
});

const port = process.env.PORT || 5000;
app.listen(port);
