const express = require('express');
const sensorRouter = require('./sensor_endpoints/sensor-router.js');

const server = express();

server.use(express.json());

server.use('/p-api', sensorRouter);


module.exports = server;