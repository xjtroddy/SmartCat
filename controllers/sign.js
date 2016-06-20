'use strict';
var app = require('express');

var sign = {};

sign.showSignup = function(req, res) {
  res.render('/sign/signup');
}

sign.signup = function(req, res, next) {
  var userName = req.body.userName.toLowerCase();
  var email = req.body.email.toLowerCase();
  var password = req.body.password;
  var rePassword = req.body.rePassword;
}

module.exports = sign;