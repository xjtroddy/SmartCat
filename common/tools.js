var bcrypy = require('bcrypt');

var tools = {};

tools.bhash = function (str, callback) {
  bcrypt.hash(str, 10, callback);
};

module.exports = tools;
