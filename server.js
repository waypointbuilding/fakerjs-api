'use strict';

const express = require('express');
const faker = require('faker');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/:namespace/:command/:count', (req, res) => {
    const namespace = req.params.namespace;
    const command = req.params.command;
    const count = req.params.count;
    const data = [];
    for(let i = 0 ; i < count ; i++) {
        data.push( faker[namespace][command]() );
    }
    res.send(data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
