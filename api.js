'use strict';
const express = require('express');
var app = module.exports = express();

// simple in memory DB
var db = [];

// handle ToDo creation
app.post('/', function (req, res) {
    db.push({
        title: req.body.title,
        done: false
    });
    let todoID = db.length - 1;
    // mountpath = /api/todos/
    res.location(app.mountpath + todoID);
    res.status(201).end();
});

// handle ToDo updates
app.put('/', function (req, res) {
    db[req.body.id] = req.body;
    res.location('/' + req.body.id);
    res.status(204).end();
});
