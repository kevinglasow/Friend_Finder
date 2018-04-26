var path = require('path');
var express = require('express');

module.exports = function () {
    var router = express.Router();

    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    router.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    router.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.json"));
    });

    return router;
};