const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('<h1>This is my first webserver using node</h1>');
})

app.listen(5000, console.log('Web server is running'))