const express = require('express');
const cache = require('persistent-cache');

const sensorData = cache();
const server = express();


server.use(express.json());


server.get('/', (req, res) => {
    sensorData.putSync('Cambodia', ['Well1', 'Well2', 'Well3']);
    console.log(sensorData.getSync('Cambodia'));
    res.send(`
        <h1> WellDone Intermediary Cache </h1>
        <h2> Fo so </h2>
    `)
})


module.exports = server;