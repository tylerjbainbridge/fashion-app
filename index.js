require('babel/register')({});
require('dotenv').config();

const server = require('./server/');

// const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

server.listen(SERVER_PORT, () =>
  console.log('Server listening on', SERVER_PORT)
);
