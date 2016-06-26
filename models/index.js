'use strict';
var mongoose = require('mongoose');
var config = require('../config/config');
var logger = require('../common/logger');

mongoose.connect(config.mongodb, function(err){
  if(err) {
    logger.error('connect to ${config.mongodb} error: ${err.message}');
  }
});

//models
require('./user');

exports.User = mongoose.model('User');
