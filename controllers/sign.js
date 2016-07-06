'use strict';
var _ = require('lodash');
var userProxy = require('../proxy/user');
var co = require('co');
//var models = require('../models');
var logger = require('../common/logger');
var config = require('../config/config');
var tools = require('../common/tools');


var sign = {};

sign.showSignup = function(req, res) {
  res.render('signup');
};

sign.signup = function(req, res, next) {
  var userName = _.trim(req.body.userName.toLowerCase());
  var password = _.trim(req.body.password);
  var rePassword = _.trim(req.body.rePassword);

  if (_.some([userName, password, rePassword], function(item) {
      return item === '';
    })) {
    res.status(422).render('signup', { err: '信息不完整', userName: userName });
    return;
  }

  if (userName.length < 5) {
    res.status(422).render('signup', { err: '用户名至少5个字符', userName: userName });
    return;
  }

  if (password !== rePassword) {
    res.status(422).render('signup', { err: '两次输入的密码不一致', userName: userName });
    return;
  }

  co(function*() {
    var users = yield userProxy.getUsersByQuery({
      "userName": userName
    }, {});

    if (users.length > 0) {
      res.status(422).render('signup', { err: '用户名已被使用', userName: userName });
      return;
    }

    //var passHash = yield tools.bhash(password);
    yield userProxy.newAndSave(userName, password);
    console.log("hehe");
    res.status(200).render('signup', { success: '欢迎加入${config.name}' });
    return;
  }).catch(function(err) {
    console.err(err);
  });
};

module.exports = sign;
