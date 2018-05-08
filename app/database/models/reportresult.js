'use strict';
module.exports = (sequelize, DataTypes) => {
  var ReportResult = sequelize.define('ReportResult', {
    result: DataTypes.STRING,
    date: DataTypes.DATE,
    userID: DataTypes.STRING,
    reportID: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  ReportResult.associate = function(models) {
    // associations can be defined here
  };
  return ReportResult;
};