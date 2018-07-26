var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config();

router.get('/', function (req, res, next) {
    debugger;
    var brewery = req.query.brewery;
    var url = process.env.BREWERYDB_URL + '/search?key=' + process.env.BREWERYDB_KEY;
    url += "&type=brewery&q=" + brewery;
    
    request(url, function(err, response, body) {
        res.json(body);
    });
});

module.exports = router; 