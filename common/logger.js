var config = require('./../config/config');
var log4js = require('log4js');
var env = process.env.NODE_ENV || "development";

log4js.configure({
  appenders: [
    {type: 'console'},
    {
      type: 'file',
      filename: 'logs/cat.log',
      category: 'cat'
    }
  ]
});

var logger = log4js.getLogger('cat');
logger.setLevel(config.debug ? 'DEBUG' : 'ERROR');

module.exports = logger;
