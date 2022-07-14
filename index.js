const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get('/', (req, res)=> {
    res.send("Hello World");
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(json => {
    //     res.json(json);
    // })
});

app.listen(3000);