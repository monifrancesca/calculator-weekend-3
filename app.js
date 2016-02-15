var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./server/routes/data');
var addition = require('./server/routes/addition');
var subtraction = require('./server/routes/subtraction');
var multiplication = require('./server/routes/multiplication');
var division = require('./server/routes/division');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/data', data);
app.use('/addition', addition);
app.use('/subtraction', subtraction);
app.use('/multiplication', multiplication);
app.use('/division', division);

app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './server/public/', file));
});


app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});