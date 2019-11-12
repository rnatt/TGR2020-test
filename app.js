const request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('./db');

var db = mongojs.connect;
var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("Sample Code for RESTful API");
})

app.post('/testRecv', function (req, res) {

  //timestamp
  var now = new Date();
  var date = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
  var time = JSON.stringify(date);
  console.log(time);

  //var payload = req.body.DevEUI_uplink.payload_hex;

  var json = {
    timestamp: time,
    pmValue: req.body.value,
    lat: req.body.lat,
    long: req.body.long
  };

  db.data.insert(json, function (err, docs) {
    console.log(docs);
    res.send("success");
  }, err => {
    console.log(err);
    res.send(err);
  });

})

var server = app.listen(8080, function () {
  //var port = server.address().port
  console.log("Start server at port 8080");
})