// server.js

var express 	= require('express'),
	logger 		= require('morgan'),
	bodyParser 	= require('body-parser');

var app = express();

app.use(logger('dev')); /*  'default', 'short', 'dev' */

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.get('/', function (req, res) {
	res.send('MBTI-API V0.0.1');
});


var port = Number(process.env.PORT || 5000);
app.listen(3000, function () {
    console.log("\033[96m  + \033[39m app listening on *:3000");
});