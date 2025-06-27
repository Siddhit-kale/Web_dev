const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World");
    // res.sendFile('./index.html', {root: __dirname});
})

router.post('/item', (req, res) => {
    // res.send("Hello World this is post")
    res.json({x:1, y:2, z:3})
})

router.put('/item/:id', (req, res) => {
    res.send("Hello World this is put");
})

router.delete('/item/:id', (req, res) => {
    res.send("Hello World this is delete");
})

module.exports = router;