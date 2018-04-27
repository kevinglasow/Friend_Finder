var express = require('express');
var bodyParser = require('body-parser');
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('./app/public/assets'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes());
app.use(htmlRoutes());

app.listen(port, function () {
  console.log('Started on Port: ' + port);
});
