var express = require( 'express' );
var app = express(); // creates an instance of an express application
var port = 3000;

app.listen(port, function(){
	console.log("server listening on port " + port);
});

/*
app.all('/special', function(request, response, next){
	response.send('You have reached a special area');
	next();
});
*/

app.get('/', function(request, response, next){
	response.send('Welcome');
	next();
});

app.get('/is-anybody-in-there', function(request, response){
	response.status(200);
});

app.post('/modernism', function(request, response){
	response.send("This is modern");
});





