var mongoose = require('mongoose');
mongoose.promise = require('bluebird');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  userName:String,
  password:String,
  createTime:Date,
  lastLoginTime:Date,
});

mongoose.model('User', UserSchema);