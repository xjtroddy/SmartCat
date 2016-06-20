var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  userId:Number,
  password:String,
  createTime:Date,
  lastLoginTime:Date,
});

mongoose.model('User', UserSchema);