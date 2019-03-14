var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
router.get('/', function (req, res, next) {
  var qs = querystring.parse(req.url.split('?')[1]);
  res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

  var data = {
    name: 'cui'
  }

  data = JSON.stringify(data);
  var callback = qs.callback + '(' + data + ');';
  res.end(callback)

});
module.exports = router;