var express =  require('express')
var app = express()
var router = express.Router()


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

module.exports = router;