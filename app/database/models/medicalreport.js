'use strict';
module.exports = (sequelize, DataTypes) => {
  var MedicalReport = sequelize.define('MedicalReport', {
    reportType: DataTypes.STRING,
    measurement: DataTypes.STRING,
    reportGroupID: DataTypes.INTEGER,
    maxValue: DataTypes.INTEGER,
    minValue: DataTypes.INTEGER,
    measurementUnit: DataTypes.STRING,
    disease: DataTypes.STRING
  }, {});
  MedicalReport.associate = function(models) {
    // associations can be defined here
  };
  return MedicalReport;
};