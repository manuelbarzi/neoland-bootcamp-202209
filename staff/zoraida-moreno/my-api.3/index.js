const express = require('express');
const { readFile } = require('fs');

const api = express();

api.get('/hello-world', (req, res) => res.send('hola mundo'));

api.get('/search', (req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-type', 'application/json');
            res.send(`{ "error": ${error.message} }`);

            return;
        }

        const data = JSON.parse(json);

        const { q, name, surname } = req.query;

        let filtered = data;

        if (q)
            filtered = filtered.filter(item => item.name.includes(q) || item.surname.includes(q) || item.email.includes(q) || item.phone.includes(q));
        
        if (name)
            filtered = filtered.filter(item => item.name.includes(name));

        if (surname)
            filtered = filtered.filter(item => item.surname.includes(surname));

        res.status(200)
        res.setHeader('Content-type', 'application/json');
        //res.send(JSON.stringify(filtered))
        res.json(filtered)
    });
});

api.listen(8080);
console.log("server listen on port 8080");

