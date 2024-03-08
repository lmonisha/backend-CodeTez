'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryDetail.init({
    empId: DataTypes.INTEGER,
    empName: DataTypes.STRING,
    dayAmount: DataTypes.STRING,
    monthAmount: DataTypes.STRING,
    yearAmount: DataTypes.STRING,
    workingDays:DataTypes.STRING,
    monthFromUser: DataTypes.STRING,
    yearFromUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SalaryDetail',
  });
  return SalaryDetail;
};