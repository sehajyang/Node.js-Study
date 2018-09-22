var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '1234',
	database : 'jsman',
});
connection.connect();

router.get('/', function(req,res){
  var msg;
  var errMsg = req.flash('error');
  if(errMsg) msg = errMsg;
   res.render('login.ejs', {'message' : msg});
});

//passport.serialize
passport.serializeUser(function(user, done) {
  console.log('passport session save:', user.id);
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  console.log('passport session get id:', id)
  done(null, id);
  //세션값의 아이디를 뽑아서 몽고DB 조회해 값을 뽑고 페이지에 전달
  //이부분에선 DB 조회없이 id값을 뽑아서 페이지에 전달
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  var query = connection.query('select * from user where email=?', [email], function(err,rows) {
    if(err) return done(err);

    if(rows.length) {
      console.log('existed user')
      return done(null, {'email' : email, 'pwd' : pwd})
    } else {
        return done(null,false, {'message':'your email is not found'})
     }
     })
    }
));
//custom callback 사용
router.post('/', function(req, res, next){
    passport.authenticate('local-login', function(err, user,info){
        if(err) res.status(500).json(err);
        if(!user) return res.status(401).json(info.message);

        req.login(user, function(err) {
            if (err) {return next(err);}
            return res.json(user);
        });
    })(req, res, next);
})



module.exports = router;
