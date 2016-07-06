'use strict';

var Promise = require('bluebird');
var models = require('../models');
var User = models.User;

var userProxy = {};

userProxy.getUsersByQuery = function (query, opt) {
  return User.find(query, {}, opt).exec();
};

userProxy.newAndSave = function (userName, password) {
  var user = new User();
  user.userName = userName;
  user.password = password;
  return user.save().exec();
};
module.exports = userProxy;