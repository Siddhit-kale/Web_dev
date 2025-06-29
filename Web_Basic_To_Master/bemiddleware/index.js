const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// const loginmiddleware = function (req, res, next) {
//     console.log("This is a loginmiddleware");
//     next();
// }
// app.use(loginmiddleware);

// const authmiddleware = function (req, res, next) {
//     console.log("This is a authmiddleware");
//     next();
// }
// app.use(authmiddleware);

// const validationmiddleware = function (req, res, next) {
//     console.log("This is a validationmiddleware");
//     next();
// }
// app.use(validationmiddleware);

const route = require("./router/route")

app.use('/api', route);

app.get('/', (req, res) => {
    res.send("This is the backend app");
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`This app is running on ${port}`);
})

