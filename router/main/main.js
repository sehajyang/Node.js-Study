var express = require('express');
var app = express();
var router = express.Router(); //express 의 Router 메소드
var path = require('path');

router.get('/', function(req,res){
  console.log('main is loaded');
	 res.sendFile(path.join(__dirname, '../public/main.html'));
});

module.exports = router;
