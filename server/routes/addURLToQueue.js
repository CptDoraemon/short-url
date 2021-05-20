const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const mq = require('../utils/mq').mq;

router.post('/', bodyParser.json(), addURLToQueue);

const payload = Joi.object({
  url: Joi.string()
      .min(1)
      .max(200)
      .required()
});

async function addURLToQueue(req, res) {
  try {
    const validatedBody = await payload.validateAsync(req.body);
    mq.addURL(validatedBody.url);
    res.json({
      status: 'ok'
    })
  } catch (e) {
    let message = 'server error';
    if (Joi.isError(e)) {
      message = e.details[0].message;
    }

    res.json({
      status: 'error',
      message
    })
  }
}

module.exports = {
  router,
  addURLToQueue
};
