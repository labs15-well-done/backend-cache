const router = require('express').Router();
const axios = require('axios');
const cors = require('cors');
const db = require('../data/dbConfig.js');
const Sensors = require('./sensor-model.js');


router.get('/:id', cors(), async (req, res) => {
    try {
        const sensorData = await axios.get(`https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=${req.params.id}`, cors())
            //.then(body => {
                res.status(200).json(sensorData.data.status)
                
            //})
            //.catch(err => {
            //    res.status(500).json({message: err})
            //})
    }
    catch (error) {
        res.status(500).json({message: "Unable to access ID", err})
    }

    
})

router.get('/', async (req, res) => {
    try{
        const sensors = await Sensors.find();
        res.status(200).json(sensors);
    } catch (error) {
        res.status(500).json({message: "It's not working", error})
    }
});

module.exports = router;