/* ./routes/mbtis.js
*/

var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var BSON 		= mongoose.mongo.BSONPure;

mongoose.connect("mongodb://admin:daek1304!@kahana.mongohq.com:10002/app26696512");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	console.log("\033[96m  + \033[39m connected to 'app26696512' database");
	
	
});

