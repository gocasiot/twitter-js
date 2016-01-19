var express = require( 'express' );
var swig = require('swig');
var app = express(); // creates an instance of an express application
var port = 3000;
swig.setDefaults({cache: false});


app.listen(port, function(){
	console.log("server listening on port " + port);
});

app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');
app.set('views', './views');


var templateVars = {
	title: 'Coding Ninja',
	name: 'WebsiteName',
	people: [{name: 'Gustavo'}, {name: 'Rich'}],
	backLink: 'skofjdlskfj'
};

// get/post: middleware
app.get('/', function(request, response){
	response.render('index', templateVars);
});

app.get('/is-anybody-in-there', function(request, response){
	response.status(200);
});

app.post('/modernism', function(request, response){
	response.send("This is modern");
});


// swig render
swig.renderFile('./views/index.html', {}, function (err, output) {
	if (err) throw err;
	console.log(output);
});



