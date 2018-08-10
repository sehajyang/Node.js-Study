var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

app.listen(3000, function() {
	console.log("start!!! express server");
});

app.use(express.static('public'));
app.use(bodyParser.json()); //middleWare
app.use(bodyParser.urlencoded({extend:true}));
app.set('view engine', 'ejs');

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUnitiniTialzed: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(router);
