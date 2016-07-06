var bcrypy = require('bcrypt');
var Promise = require('bluebird');

var tools = {};

tools.bhash = function (str) {
  //return Promise.promisify(bcrypt.hash)(str, 10);
};

module.exports = tools;
