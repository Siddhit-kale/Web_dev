const express = require('express');
const app = express();
const port = 3000;
const item = require('./router/item'); 
const bird = require('./router/birds')


// app.get('/', (req, res) => {
//     res.sendFile('./index.html', { root: __dirname });
// })

// app.post('/item', (req, res) => {
//     res.json({ x: 1, y: 2, z: 3 });
// })

// app.put('/item/:id', (req, res) => {
//     res.send("Hello World this is put");
// })

// app.delete('/item/:id', (req, res) => {
//     res.send("Hello World this is delete");
// })

app.use('/api', item);
app.use('/filler', bird);

app.listen(port, () => {
    console.log(`The server is running on the ${port}`);
});
