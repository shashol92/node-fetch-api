const express = require("express");
const fetch = require("node-fetch");
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send("Hello World");
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(json => {
    //     res.json(json);
    // })
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});