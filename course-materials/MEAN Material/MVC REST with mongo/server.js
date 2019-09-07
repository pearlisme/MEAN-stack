// npm install express --save
// npm install mongoose --save
// npm install body-parser --save   

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://192.168.0.190/Tododb');
mongoose.connect('mongodb://127.0.0.1/Tododb')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
//----------------------------------------------------