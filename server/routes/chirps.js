const express = require('express');
const chirpStore = require('../chirpstore');

const router = express.Router();

router.get('/:id?', (req,  res) => {
    res.send("is this working?")
    let id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
})

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.delete()

module.exports = router;