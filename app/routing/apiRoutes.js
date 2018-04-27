var express = require('express');
var friends = require('../data/friends.json');

// var friends = []

module.exports = function () {
  var router = express.Router();

  router.get('/api/friends', function (req, res) {
    return res.json(friends);
  });

  router.post('/api/friends', function (req, res) {
    friends.push(req.body);
    console.log(req.body)
  });

  return router;
};
