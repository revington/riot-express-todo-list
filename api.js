'use strict';
const express = require('express');
var app = module.exports = express(),
    db = [];
app.get('/:id', function (req, res) {
    const id = req.params.id;
    res.json(db[id]);
});
app.get('/', function (req, res) {
    res.json(db);
});
app.post('/', function (req, res) {
    db.push({
        title: req.body.title,
        done: false
    });
    let todoID = db.length - 1;
    res.location(app.mountpath + todoID);
    res.status(201).end();
});
app.put('/', function (req, res) {
    db[req.body.id] = req.body;
    res.location('/' + req.body.id);
    res.status(204).end();
});
