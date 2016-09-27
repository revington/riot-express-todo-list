'use strict';
const express = require('express'),
    api = require('./api'),
    app = express(),
    bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json());
app.locals.pretty = true;
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/tags/:name.tag', function (req, res) {
    var name = 'tag-' + req.params.name;
    //res.type('text/plain');
    res.render('../client/' + name);
});
app.listen(3000, function (err) {
    if (err) {
        console.error('Cannot listen at port 3000', err);
    }
    console.log('Todo app listening at port 3000');
});
app.use('/api/todos/', api);
