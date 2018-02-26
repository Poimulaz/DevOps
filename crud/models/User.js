var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name:String,
    surname:String,
    birthday:String,
    statusRole: {type: Number,default:0},
    email:String,
    password:String
});

var User = mongoose.model('User', UserSchema);
module.exports = User
