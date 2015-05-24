module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    title: DataTypes.STRING,
    menu: DataTypes.BOOLEAN
  });
};
