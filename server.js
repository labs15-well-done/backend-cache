const express = require('express');
const cors = require('cors');
const sensorRouter = require('./sensor_endpoints/sensor-router.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/p-api', sensorRouter);


module.exports = server;