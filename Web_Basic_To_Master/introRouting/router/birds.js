const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("This is Bird page");
})

router.get('/about', (req, res) => {
    res.send("This Bird About page");
})

module.exports = router;