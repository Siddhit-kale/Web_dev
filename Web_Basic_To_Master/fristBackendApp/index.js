const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.get("This is the backend App");
})

app.listen(port, () => {
    console.log(`Application is starting on ${port}`);
});