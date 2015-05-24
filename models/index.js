var fs = require("fs");

var DataTypes = require('sequelize');
var sequelize = new DataTypes('seq_' + process.env.NODE_ENV, 'postgres', '', { dialect: 'postgres' });

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return(file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](__dirname + '/' + file);
    db[model.name] = model;
  });

db.DataTypes = DataTypes;
db.sequelize = sequelize;

module.exports = db;
