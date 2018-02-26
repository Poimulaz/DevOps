const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
    name:String,
    surname:String,
    birthday:String,
    statusRole: {type:Integer,default:0},
    email:String,
    password:String
});

let User = mongoose.model('User',UserSchema,"users");
module.exports = User
