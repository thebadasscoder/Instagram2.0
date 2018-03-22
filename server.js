var express = require('express');
var app = express()
var bodyparser = require('body-parser');
var path = require('path');
var db = require('./backend/models');


app.use(bodyparser.urlencoded({ extended: false, }));
app.use(bodyparser.json());
app.use(express.static(__dirname + './frontend/public'));



// app.use('/api', require('./backend/routes'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public/views/index.html'));
});


db.sequelize.sync().then(function () {
  app.listen(3000, () => console.log('Server running on Port 3000'));
});

module.exports = app;