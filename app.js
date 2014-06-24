
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , mbti = require('./routes/mbti')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/mbtis', mbti.findAll);
app.get('/mbtis/:id', mbti.findById);

//app.get('/mbtis/:id/parts/', mbti.findParts);
app.get('/mbtis/:id/parts/', function(req, res) {
  res.send('You should see all the parts of the MBTIs form here.');
});
// app.get('/mbtis/:id/parts/:id', mbti.findPartById);
app.get('/mbtis/:id/parts/:id', function(req, res) {
  res.send('You should see the selected part of the MBTIs form here.');
});
// app.get('/mbtis/:id/parts/:id/questions/', mbti.findQuestions);
app.get('/mbtis/:id/parts/:id/questions/', function(req, res) {
  res.send('You should see the part\'s questions of the MBTIs form here.');
});
// app.get('/mbtis/:id/parts/:id/questions/:id', mbti.findQuestionById);
app.get('/mbtis/:id/parts/:id/questions/:id', function(req, res) {
  res.send('You should see the selected question from the MBTIs form here.');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
