const murmurhash = require('murmurhash');

const consumeMessage = (url) => {
  const hash = murmurhash.v3(url).toString(36);
  console.log('received', url);
  console.log('hash generated', hash);
};

module.exports = {
  consumeMessage
};
