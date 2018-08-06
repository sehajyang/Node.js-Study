var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var main = require('./router/main/main');
var email = require('./router/email/email');
var router = require('./router/index')


app.listen(3000, function() {
	console.log("start!!! express server");
});

app.use(express.static('public'));
app.use(bodyParser.json()); //middleWare
app.use(bodyParser.urlencoded({extend:true}));
app.set('view engine', 'ejs')

app.use(router);
