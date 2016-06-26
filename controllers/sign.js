//'use strict';
//var app = require('express');
//var _ = require('lodash');
//var userProxy = require('../proxy/user');
//var co = require('co');
//var Promise = require('bluebird');

var sign = {};

sign.showSignup = function(req, res) {
  res.render('signup');
};

// sign.signup = function(req, res, next) {
//   var userName = _.trim(req.body.userName.toLowerCase());
//   var email = _.trim(req.body.email.toLowerCase());
//   var password = _.trim(req.body.password);
//   var rePassword = _.trim(req.body.rePassword);

//   co(function *(){
//     var users = yield userProxy.getUsersByQuery({
//     '$or': [
//       { 'userName': userName },
//       { 'email': email }
//     ]
//   }, {});
//     if (users) {
//       console.log("1111");
//     } else {
//       console.log("2222");
//     }
//   });
// };

module.exports = sign;
