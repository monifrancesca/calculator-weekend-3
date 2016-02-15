/**
 * Created by monifrancesca on 2/13/16.
 */
var express = require('express');
var router = express.Router(); // bring in just the router portion
var path = require('path');
var sum = function(x,y){
    var number = x + y;
    number = number.toString();
    return number;
};

var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number;
};

var multi = function(x,y){
    var number = x * y;
    number = number.toString();
    return number;
};


exports.sum = sum;
exports.diff = diff;