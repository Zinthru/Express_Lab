const express = require('express');

const router = express.Router();

router.get('/', (req,res)=> {
    res.send('is this working?(users)')
})

module.exports = router;