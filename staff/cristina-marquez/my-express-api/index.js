//jshint exversion: 6

const express = require("express");

const app = express();

app.get('/', function (require, response) {
    response.send('<h1>Hello, world</h1>')
});


app.listen(8080, function () {
    console.log('server started on port 8080')
})

