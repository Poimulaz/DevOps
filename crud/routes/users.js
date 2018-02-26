var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Delete user */
router.get("/delete/:id", function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, item){
      if(err)
          return res.send("Error ! ");
      
      res.redirect('/');
  });
});

module.exports = router;
