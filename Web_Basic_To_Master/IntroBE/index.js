const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello world this is backend first code! now changes can be applied')
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port on ${port}`)
})