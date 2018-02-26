var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Create user */

router.get('/create', function(req, res){
  res.render('/create');
})

router.post('/create', function(req, res) {

  var user = req.body;
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.birthday = req.body.birthday;
  user.email = req.body.email;
  user.password = req.body.email;

  User.create(user, function(err, item) {
      res.redirect("/");
  });
  
});


module.exports = router;
