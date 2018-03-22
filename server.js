'use strict';

var express = require('express');
var app = express()
var bodyparser = require('body-parser');
var path = require('path');
var db = require('./backend/models');


app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, './frontend/public')));



// app.use('/api', require('./backend/routes'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});


db.sequelize.sync().then(function () {
  app.listen(8080, () => console.log('Server running on Port 8080'));
});

module.exports = app;