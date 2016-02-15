/**
 * Created by monifrancesca on 2/12/16.
 */
var express = require('express');
var router = express.Router(); // bring in just the router portion
var path = require('path');

var add = function(num1, num2) {
    var sum = num1 + num2;
    sum = sum.toString();
    return sum;
};


router.get('/', function(req, res) {
    //app.get('/data', function(req, res) { // get request to /data comes before /* get request
    res.send({message: 'hello'}); // send back an object that has one property
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});


module.exports = router;