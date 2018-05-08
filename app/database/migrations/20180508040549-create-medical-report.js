'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reportType: {
        type: Sequelize.STRING
      },
      measurement: {
        type: Sequelize.STRING
      },
      reportGroupID: {
        type: Sequelize.INTEGER
      },
      maxValue: {
        type: Sequelize.INTEGER
      },
      minValue: {
        type: Sequelize.INTEGER
      },
      measurementUnit: {
        type: Sequelize.STRING
      },
      disease: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalReports');
  }
};