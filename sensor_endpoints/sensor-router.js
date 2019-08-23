const router = require('express').Router();
const axios = require('axios');


router.get('/:id', async (req, res) => {
    try {
        axios.get(`https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=${req.params.id}`)
            .then(body => {
                res.status(200).json(body.data)
            })
            .catch(err => {
                res.status(500).json({message: err})
            })
    }
    catch (error) {
        res.status(500).json({message: "Unable to access ID", err})
    }
})

module.exports = router;