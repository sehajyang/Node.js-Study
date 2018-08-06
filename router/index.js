var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var main =  require('./main/main');
var email = require('./email/email');


//url routing
router.get('/', function(req,res){
	console.log('indexjs / path loaded');
	 res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.use('/main',main) //main으로 들어오면 router 정보를 이걸 쓰라는 뜻 (상단의 require 하는 부분 가져옴)
router.use('/email',email)

module.exports = router;
