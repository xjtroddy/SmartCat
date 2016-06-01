var mongoose = require("mongoose");
var mongoConfig = require("./../config/mongoConfig.json");
var db = mongoose.createConnection(mongoConfig.host,mongoConfig.dbName);