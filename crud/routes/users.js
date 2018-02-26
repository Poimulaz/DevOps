var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/:id/update',function(request,response){
    if(request.params.id === null || request.params.id === undefined || request.params.id === ""){
        res.send("Le champs ID est vide... Nous ne pouvons mettre le champs à jour");
    }
    if(request.params.id !== null || request.params.id !== undefined || request.params.id !== ""){
        res.send("Le champs ID est remplie");
        User.findById(request.params.id,function(err,user){
            if (err) throw err;
            console.log("J'ai trouvé un utilisateur");
            if(user == null){
                res.send("Utilisateur non existant");
            }
            if(user !== null){
                res.send("J'ai trouvé un utilisateur");
                //TODO:faire les modifs
                if(request.body.name != ""){
                    user.name = request.body.name;
                }
                if(request.body.surname != ""){
                    user.surname = request.body.surname;
                }
                if(request.body.birthday != ""){
                    user.birthday = request.body.birthday;
                }
                if(request.body.password != ""){
                    user.password = request.body.password;
                }
                user.save(function(err){
                    if (err) throw err;
                    res.send("Ok");
                });
            }
        });
    }
});

router.get("/:id/select/admins",function(request,response){
    User.findById(request.params.id,function(err,user){
        if(err) throw err;
        if(user === null){
            res.send("Utilisateur non existant");
        }
        if(user !== null){
            User.findAll(function(err,users){
                if (err) throw err;
                res.send(users);
            });
        }
    });
});

router.get("select/users",function(request,response){
    User.findById(request.params.id,function(err,user){
        if (err) throw err;
        if(user === null){
            res.send("Utilisateur non existant");
        }
        if(user !== null && user.statusRole === 1){
            User.find({statusRole:0},function(err,users){
                res.send(users);
            });
        }
    });
});

module.exports = router;
