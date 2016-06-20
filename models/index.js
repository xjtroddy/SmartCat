var mongoose = require('mongoose');
var config = require('./../config/config');

mongoose.connect(config.mongodb, function(err){
  if(err) {
    logger.error('connect to ${config.mongodb} error: ${err.message}');
  }
});

//models
require('./User');

exports.User = mongoose.model('User');