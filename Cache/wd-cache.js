const cache = require('persistent-cache');

const sensorData = cache();

sensorData.putSync('Cambodia', ['Well1', 'Well2', 'Well3']);


module.exports = cache;