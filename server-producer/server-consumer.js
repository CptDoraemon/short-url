const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  return res.json({
    status: 'ok',
    message: 'hello, this is consumer server'
  })
});

const port = process.env.PORT || 5000;
app.listen(port);
