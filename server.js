// server.js

var express 	= require('express'),
	logger 		= require('morgan'),
	bodyParser 	= require('body-parser'),
	mbti 		= require('./routes/mbtis');		

var app = express();

app.use(logger('dev')); /*  'default', 'short', 'dev' */

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.get('/', function (req, res) {
	res.send("MBTI-API V0.0.1\nPlease select a collection, e.g., /mbtis/mbti/1/");
});

app.get('/mbtis/:mbti', function(req, res, next) {
  req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results)
  })
})

/*var mbtis = express.Router();
mbtis.get()*/

// HTTP
var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log("\033[96m  + \033[39m app listening on *:3000");