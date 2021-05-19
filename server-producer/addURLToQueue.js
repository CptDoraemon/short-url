const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.post('/', bodyParser.json(), addURLToQueue);

const addURLToQueue = (req, res) => {

};

module.exports = {
  router,
  addURLToQueue
};
