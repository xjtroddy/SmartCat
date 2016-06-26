'use strict';

var models = require('../models');
var User = models.User;

var userProxy = {};

userProxy.getUsersByQuery = function (query, opt, callback) {
  User.find(query, '', opt, callback);
};

module.exports = userProxy;