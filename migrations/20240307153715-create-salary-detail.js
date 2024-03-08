'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalaryDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empId: {
        type: Sequelize.STRING
      },
      dayAmount: {
        type: Sequelize.STRING
      },
      monthAmount: {
        type: Sequelize.STRING
      },
      yearAmount: {
        type: Sequelize.STRING
      },
      monthFromUser: {
        type: Sequelize.STRING
      },
      yearFromUser: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalaryDetails');
  }
};