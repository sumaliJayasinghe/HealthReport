'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userID: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    weight: DataTypes.STRING,
    height: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};